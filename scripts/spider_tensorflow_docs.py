# -- coding: utf-8 --
# 用于爬取tensorflow2.0文档
# 目前先用于爬取文件，后续再翻译写入
# 问题：如何处理python 的异步编程
import asyncio
from selenium import webdriver
from category import category
from utils import handle, handle_async
import time
import re

# url="https://www.tensorflow.org/api_docs/python/"
# tensorf_markdown="https://github.com/tensorflow/docs/tree/r1.14/site/en/api_docs/python/tf"


url = "https://tensorflow.google.cn/api_docs/python/tf/"


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
    code_text_str = list_to_str(list_str, '|')  # 转为字符 xxx|oo
    reg_list = []
    reg_list = ['+', '.', '[', ']']
    # 再次转换
    for reg in reg_list:
        code_text_str = code_text_str.replace(reg, "\\" + reg)

    # 编译为正则
    pattern_str = re.compile(r'' + code_text_str + '')

    # 根据list_str,转为\\1\\2

    flag_str = ''
    for index, key in enumerate(list_str):
        flag_str = flag_str + "\\" + str(index + 1)

    reg_text = re.sub(pattern_str, "`" + flag_str + "`", text)
    # print('code_text_str:', code_text_str)
    # print('list_str:', list_str)
    # print('flag_str:', flag_str)
    # print('text:', text)
    return reg_text


# 去解析node节点,返回markdown
def node_level(driver, contents=None, file_markdown_path=""):
    if not can_write(file_markdown_path):
        print("已存在文件，将忽略跳过")
        return
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
                        print("p标签异常：", err)
                        if len(node.text):
                            p_texts = []
                            # TODO p标签下没有加点
                            try:
                                codes_node = node.find_elements_by_css_selector("code")
                                for code in codes_node:
                                    p_texts.append('(' + code.text + ')')
                            except Exception as e2:
                                print("p code：", e2)
                            if len(p_texts) > 0:
                                # p_text_str = list_to_str(p_texts, "|")  # 转为字符 xxx|oo
                                # reg_p_list=['+', '.', '[', ']']
                                # # 转换字符 为 'M + 1'=> 'M \+ '
                                # for reg in reg_p_list:
                                #     p_text_str=p_text_str.replace(reg,"\\"+reg)

                                # p_pattern_str = re.compile(r'' + p_text_str + '')
                                # # 根据p_texts长度来转为标记位
                                # mask_tag_str=''
                                # for index,key in enumerate(p_texts):
                                #     mask_tag_str=mask_tag_str+'\\'+str(index+1)
                                # p_node_text = re.sub(p_pattern_str, "`" + mask_tag_str + "`", node.text)
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
                            # li_text_str = list_to_str(li_texts, "|")  # 转为字符 xxx|oo
                            # pattern_str = re.compile(r'(' + li_text_str + ')')
                            # node_text = re.sub(pattern_str, "`" + "\\1" + "`", li.text)
                            # contents.append('- ' + node_text + '\n')
                            contents.append('- ' + fn_parse_code(li_texts, li.text) + '\n')
                    # 编译后的正则
                    except Exception as e1:
                        print("li:", e1)

    except Exception as e:
        print("啥错误:", e)
    # print("contents：", contents)
    print('去解析node节点,返回markdown，写入文件')
    if can_write(file_markdown_path):
        # 写入文件
        for text in contents:
            with open(file_markdown_path, "a", errors="ignore", encoding='utf-8') as f:
                f.write(text)


def go_webdriver(url_path, file_path):
    start_time = time.time()
    # 静默运行
    option = webdriver.ChromeOptions()
    option.add_argument("headless")
    driver = webdriver.Chrome(options=option)
    driver.get(url_path)
    node_level(driver, file_markdown_path=file_path)
    print('正在 go_webdriver')
    end_time = time.time()
    print(url_path+':::爬虫所需时间：', end_time - start_time)


# https://www.tensorflow.org/api_docs/python/tf/AggregationMethod
# https://www.tensorflow.org/api_docs/python/tf
# https://www.tensorflow.org/api_docs/python/tf/argsort
# go_webdriver("https://www.tensorflow.org/api_docs/python/tf/argsort")


def parent_path(parent, key_name):
    asyncio.sleep(1)
    no_docs_path = re.sub(r'(../docs/)', '', parent)
    tf_path = re.sub(r"[.]", "/", no_docs_path)
    url_path = url + tf_path + re.sub(r"[.]", "/", key_name)
    page_url_re = re.sub(r"/Overview", "", url_path)
    page_url = re.sub(r"/All Symbols", "", page_url_re)
    file_path_re = parent + 'tf/' + key_name
    file_path = re.sub(r' ', '_', file_path_re)
    # print("url:", url)
    # print("tf_path:", tf_path)
    # print("key_name:", key_name)
    print("爬取的页面：", page_url)
    print("写入的文件路径：", file_path)
    go_webdriver(page_url, file_path + '.md')


# handle(category[0]['tf'], "../docs/", parent_path)

start_time = time.time()
handle_async(category[0]['tf'], "../docs/", parent_path)
end_time = time.time()
#75s 两个
print('\n====== 总任务时间======：', end_time - start_time)


# 29s 单个
# go_webdriver('https://tensorflow.google.cn/api_docs/python/tf/batch_to_space','../docs/tf/batch_to_space.md')
