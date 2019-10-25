# -- coding: utf-8 --
# 用于爬取tensorflow2.0文档
# 目前先用于爬取文件，后续再翻译写入
# 问题：如何处理python 的异步编程
# 问题：由于反斜杠替换符等于100导致字符串溢出
# 解决: 先去重li_texts，减少长度
# 第一次改造：超过24小时
# 第二次改造：3.2个小时，20个线程
# TODO第三次改造：200个线程，优化Python溢出问题，截断式组件多调用函数
# TODO第四次改造：500个线程，存储实例，再次调用实例，减少创建实例的时间，溢出无关打印，减少IO调用
import asyncio
from selenium import webdriver
from category import category
from utils import handle, handle_async
import time
import re

url = "https://tensorflow.google.cn/api_docs/python/"

# 全局存储实例数组，Chrome driver的实例，TODO ，后续需要做重置掉
DRIVER_INSTANCE_LIST=[]
# list 转字符
def list_to_str(str_list, code=""):
    if isinstance(str_list, list):
        return code.join(str_list)
    else:
        return ''


# 判断是否可以写入，存在内容不写入
def can_write(file_path):
    with open(file_path, "r") as f:
        f.read()
        if f.tell() > 0:
            return False
        else:
            return True


# 返回 正则的字段函数
# list_str 数组
def fn_parse_code(list_str, text):
    for code in list_str:
        text=text.replace(code,'`'+code+'`')
    return text


# 去解析node节点,返回markdown
def node_level(driver, contents=None, file_markdown_path=""):
    if contents is None:
        contents = []
    html = driver.find_elements_by_css_selector(".devsite-article-body>*")
    try:
        for node in html:
            if len(node.text) > 0:
                # ##################### h1-h6标签
                if node.get_attribute("level") == "h1":
                    contents.append("# " + node.text + "\n")
                elif node.get_attribute("level") == "h2":
                    contents.append("## " + node.text + "\n")
                elif node.get_attribute("level") == "h3":
                    contents.append("### " + node.text + "\n")
                elif node.get_attribute("level") == "h4":
                    contents.append("#### " + node.text + "\n")
                elif node.get_attribute("level") == "h5":
                    contents.append("##### " + node.text + "\n")
                elif node.get_attribute("level") == "h6":
                    contents.append("###### " + node.text + "\n")
                # ##################### code 节点
                elif node.tag_name and node.tag_name == "devsite-code":
                    contents.append("\n```\n " + node.text + "\n```\n")
                # ##################### href 节点
                elif node.tag_name == "p":
                    try:
                        a_node = node.find_element_by_tag_name("a")
                        a_node_href = a_node.get_attribute("href")
                        a_node_list = node.text.split(a_node.text)
                        contents.append(
                            "["
                            + a_node.text
                            + "]("
                            + a_node_href
                            + ")"
                            + list_to_str(a_node_list) + "\n\n"
                        )
                    except Exception as err:
                        # todo ###################### p todo
                        # print("p标签异常：", err)
                        if len(node.text):
                            p_texts = []
                            try:
                                codes_node = node.find_elements_by_css_selector("code")
                                for code in codes_node:
                                    p_texts.append('(' + code.text + ')')
                            except Exception as e2:
                                print("p code：", e2)
                            if len(p_texts) > 0:
                                contents.append(fn_parse_code(p_texts, node.text) + '\n')
                            else:
                                contents.append(node.text + '\n')
                # ##################### ul>无序.
                elif node.tag_name == "ul":
                    li_texts = []
                    try:
                        li_nodes = node.find_elements_by_css_selector("li")
                        for li in li_nodes:
                            # 如果是code ``
                            try:
                                codes_node = li.find_elements_by_css_selector("code")
                                for code in codes_node:
                                    li_texts.append('(' + code.text + ')')
                            except Exception as e2:
                                print("code：", e2)
                            # print("li_texts:", li_texts)
                            # print("li_text:", li.text)
                            contents.append('- ' + fn_parse_code(li_texts, li.text) + '\n')
                    # 编译后的正则
                    except Exception as e1:
                        print("li:", e1)

    except Exception as e:
        print("啥错误:", e)
    # print("contents：", contents)
    print('去解析node节点,返回markdown，写入文件')
    # 写入文件
    for text in contents:
        with open(file_markdown_path, "a", errors="ignore", encoding='utf-8') as f:
            f.write(text)
    # 手动关闭，todo，为了让驱动继续存活，可能不能手动关闭？？
    driver.quit()


def go_webdriver(url_path, file_path):
    if not can_write(file_path):
        print("已存在文件，将忽略跳过：", file_path)
        return
    start_time1 = time.time()
    # TODO 下面的判断是通过存储临时实例来减少重复创建实例的时间
    if len(DRIVER_INSTANCE_LIST):
        DRIVER_INSTANCE_LIST[0].get(url_path) # 提取第一个实例
        node_level(DRIVER_INSTANCE_LIST[0], file_markdown_path=file_path)
    else:
        # 静默运行,如果把下面这四行一直保持
        # todo 然后转走driver.get去更换url，速度应该可以继续提升
        option = webdriver.ChromeOptions()
        option.add_argument("headless")
        driver = webdriver.Chrome(options=option)
        # todo 把这个driver 存储到一个数组里面，保存这个状态，然后下一次再取出来
        DRIVER_INSTANCE_LIST.append(driver)
        driver.get(url_path)

        node_level(driver, file_markdown_path=file_path)
        # 在这里，将driver append 到driverQueueList里面去。只需要判断存在则继续调用，而不需要再次建立
    print('正在 go_webdriver')
    end_time1 = time.time()
    print(url_path + ':::爬虫所需时间：', end_time1 - start_time1)


def parent_path(parent, key_name, task=None):
    asyncio.sleep(1)
    no_docs_path = re.sub(r'(../docs/)', '', parent)
    tf_path = re.sub(r"[.]", "/", no_docs_path)
    url_path = url + tf_path + re.sub(r"[.]", "/", key_name)
    page_url_re = re.sub(r"/Overview", "", url_path)
    page_url = re.sub(r"/All Symbols", "", page_url_re)
    file_path_re = parent + key_name
    file_path = re.sub(r' ', '_', file_path_re)
    print("爬取的页面：", page_url)
    print("写入的文件路径：", file_path)
    go_webdriver(page_url, file_path + '.md')


# handle(category[0]['tf'], "../docs/", parent_path)

start_time = time.time()
handle_async(category, "../docs/", parent_path)
# 重置实例
print('查看打印的实例长度：',len(DRIVER_INSTANCE_LIST))
DRIVER_INSTANCE_LIST=[]
# handle_async(category[0]['tf'], "../docs/", parent_path)


# 29s 单个
# go_webdriver('https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ragged',
#              '../docs/tf.compat/v1/ragged/Overview.md')
end_time = time.time()
# 75s 两个
print('\n====== 总任务时间======：', end_time - start_time)
