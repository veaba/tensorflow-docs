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
# all_Symbols 这个页面太大了，需要五分钟
import asyncio
from selenium import webdriver
from category import category
from category_array import category_array
from utils import handle, handle_async, handle_async_flat, remove_docs_path, can_write
from pyhtmd import Pyhtmd
import time
import re
import math

# import sys
# sys.setrecursionlimit(10000000)
url = "https://tensorflow.google.cn/api_docs/python/"

# 全局存储实例数组，Chrome driver的实例，TODO ，后续需要做重置掉
DRIVER_INSTANCE_LIST = []


# list 转字符
def list_to_str(str_list, code=""):
    if isinstance(str_list, list):
        return code.join(str_list)
    else:
        return ''


# 过滤忽略掉的标签,是无效标签则移除
def ignoreTag(node):
    tempContent = node.get_attribute('innerHTML')
    htmlContent = re.sub(r'\n', '', tempContent)
    if node.tag_name == 'style':
        return True
    elif re.match(r'^.*\<meta', htmlContent):
        return True
    else:
        return False


# 返回 正则的字段函数，因为会重复替换，所以这个replace 不能够完全解决问题
# list_str 数组
# todo 因为python 无法使用\\100，所以这里需要重新处理，另外replace也无法满足
def fn_parse_code(list_str=[], text=""):
    code_text_str = list_to_str(list_str, '|')  # 转为字符 xxx|oo
    reg_list = ['+', '.', '[', ']', '((', '))']
    # 再次转换
    for reg in reg_list:
        code_text_str = code_text_str.replace(reg, "\\" + reg)

    # 编译为正则
    pattern_str = re.compile(r'' + code_text_str + '')

    # 根据list_str,转为\\1\\2

    flag_str = ''

    # 判断向上取整,绕开python 的双斜杠替换符超过100的字符溢出
    up_int = math.ceil(len(list_str) / 99)
    if up_int > 1:
        for i in range(up_int):
            for item in enumerate(list_str[i * 99:(i + 1) * 99]):
                flag_str = flag_str + "\\" + str(item[0] + 1)
    # 如果不超过100的时候
    else:
        for item in enumerate(list_str):
            flag_str = flag_str + "\\" + str(item[0] + 1)

    # flag_str ==>\\1\\2\\3
    # 存在正则才走这一步
    if len(flag_str):
        reg_text = re.sub(pattern_str, "`" + flag_str + "`", text)
    else:
        reg_text = text
    return reg_text


# todo 去解析node节点,返回markdown
def node_level(driver, file_markdown_path="", url_path=""):
    htmls = driver.find_elements_by_css_selector(".devsite-article-body>*")
    try:
        for node in htmls:
            if not ignoreTag(node):
                html = node.get_attribute('innerHTML') or ""  # 注意：这里只能获取到它的子级
                if node.tag_name == 'aside':  # 对引用打补丁
                    html = '<blockquote>' + html + '</blockquote>'
                mk = Pyhtmd(html, language="python").markdown()
                # print("待转译html：",html)
                # print("转译的mk:",mk)
                # 写入文件
                with open(file_markdown_path, "a", errors="ignore", encoding='utf-8') as f:
                    f.write(mk)
    except Exception as e:
        print("===> 啥错误:", e)
        print('===> 错误路径：', file_markdown_path)
        print('===> 错误页面：', url_path)
        with open('error.yml', "a", errors="ignore", encoding='utf-8') as f:
            f.write('"' + url_path + '":' + '"' + file_markdown_path + '"' + ',\n')

    # 手动关闭
    driver.quit()


def go_webdriver(url_path, file_path=""):
    if file_path:
        if not can_write(file_path):
            print("===> 已存在文件，将忽略跳过：", file_path)
            return
    file_path = category_array[url_path] + '.md'
    start_time1 = time.time()
    option = webdriver.ChromeOptions()
    option.add_argument("headless")
    driver = webdriver.Chrome(options=option)
    driver.get(url_path)
    node_level(driver, file_markdown_path=file_path, url_path=url_path)
    end_time1 = time.time()
    print('===> 爬虫所需时间：', end_time1 - start_time1, file_path + '\n')


start_time = time.time()
# handle_async(category, "../docs/", parent_path)
# 重置实例

# handle_async(category[0]['tf'], "../docs/", parent_path)

# flat 扁平化处理


handle_async_flat(category_array, go_webdriver)
# handle_async_flat({
#     "https://tensorflow.google.cn/api_docs/python/tf/argsort": "../docs/tf/argsort.md",
# }, go_webdriver)
# handle_async_flat({"https://tensorflow.google.cn/api_docs/python": "../docs/All_Symbols"}, go_webdriver)

# 29s 单个
# go_webdriver('https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ragged',
#              '../docs/tf.compat/v1/ragged/Overview.md')
end_time = time.time()
# 75s 两个
print('\n====== 总任务时间======：', end_time - start_time)
