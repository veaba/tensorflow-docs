# -- coding: utf-8 --
# 用于爬取tensorflow2.0文档
# 目前先用于爬取文件，后续再翻译写入
# 问题：如何处理python 的异步编程
from selenium import webdriver
from category import category
from utils import handle
# from scripts import utils
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
                        print("p标签异常：", err)
                        if len(node.text):
                            contents.append("\n" + node.text + "\n")
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
                                    li_texts.append(code.text)
                            except Exception as e2:
                                print("code：", e2)
                            li_text_str = list_to_str(li_texts, "|")  # 转为字符 xxx|oo
                            pattern_str = re.compile(r'(' + li_text_str + ')')
                            node_text = re.sub(pattern_str, "`" + "\\1" + "`", li.text)
                            contents.append('- ' + node_text + '\n')
                    # 编译后的正则
                    except Exception as e1:
                        print("li:", e1)

    except Exception as e:
        print("啥错误:", e)
    print("contents：", contents)

    if can_write(file_markdown_path):
        # 写入文件
        for text in contents:
            with open(file_markdown_path, "a", errors="ignore", encoding='utf-8') as f:
                f.write(text)
    else:
        print("已存在文件，忽略")


def go_webdriver(url_path, file_path):
    # 静默运行
    option = webdriver.ChromeOptions()
    option.add_argument("headless")
    driver = webdriver.Chrome(options=option)
    driver.get(url_path)
    node_level(driver, file_markdown_path=file_path)


# https://www.tensorflow.org/api_docs/python/tf/AggregationMethod
# https://www.tensorflow.org/api_docs/python/tf
# https://www.tensorflow.org/api_docs/python/tf/argsort
# go_webdriver("https://www.tensorflow.org/api_docs/python/tf/argsort")


def parent_path(parent, key_name):
    no_docs_path = re.sub(r'(../docs/)', '', parent)
    tf_path = re.sub(r"[.]", "/", no_docs_path)
    url_path = url + tf_path + re.sub(r"[.]", "/", key_name)
    page_url_re = re.sub(r"/Overview", "", url_path)
    page_url = re.sub(r"/All Symbols", "", page_url_re)
    file_path_re = parent+'tf/' + key_name
    file_path = re.sub(r' ', '_', file_path_re)
    # print("url:", url)
    # print("tf_path:", tf_path)
    # print("key_name:", key_name)
    print("爬取的页面：", page_url)
    print("写入的文件路径：", file_path)
    go_webdriver(page_url, file_path + '.md')


handle(category[0]['tf'], "../docs/", parent_path)
