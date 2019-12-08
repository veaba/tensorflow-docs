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
from PIL import Image
from utils import handle, handle_async, handle_async_flat, remove_docs_path, can_write
from pyhtmd import Pyhtmd
import time
import re
import math
import base64
import io

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
def ignore_tag(node):
    temp_content = node.get_attribute('innerHTML')
    html_content = re.sub(r'\n', '', temp_content)
    # 丢弃style
    if node.tag_name == 'style':
        return True
    # 丢弃table，也不定
    elif re.match(r'^<table', html_content):
        return True
    # 丢失meta
    elif re.match(r'^<meta', html_content):
        return True
    else:
        return False


# 返回 正则的字段函数，因为会重复替换，所以这个replace 不能够完全解决问题
# list_str 数组
# 因为python 无法使用\\100，所以这里需要重新处理，另外replace也无法满足
def fn_parse_code(list_str=None, text=""):
    if list_str is None:
        list_str = []
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


# 入参base64，然后裁剪后，出来base64
# cartesian(左、上、右、下、）
# 返回的byte
def crop_base64_img(base64_str, cartesian):
    if not isinstance(cartesian, tuple):
        raise RuntimeError('cartesian参数错误：格式为(a,b,c,d)')
    base64_data = re.sub('^data:image/.+;base64,', '', base64_str)
    byte_data = base64.b64decode(base64_data)
    # BytesIO 对象
    image_data = io.BytesIO(byte_data)
    # 得到Image对象
    img = Image.open(image_data)
    # 裁剪图片（左、上、右、下、），笛卡尔
    new_img = img.crop(cartesian)
    # BytesIo 对象
    img_byte_array = io.BytesIO()
    new_img.save(img_byte_array, format='PNG')
    # 获得字节
    img_byte_array = img_byte_array.getvalue()
    base64_str = base64.b64encode(img_byte_array)
    return str(base64_str, 'utf-8')


# 解析 svg，有些情况下，比如这个页面：https://tensorflow.google.cn/api_docs/python/tf  exp(...): Computes exponential of x
def cover_svg_to_img(html, driver, file_markdown_path, svg_list=[], top=200, ):
    # top = 200  # 阈值
    for index, svg in enumerate(svg_list):
        print('svg:', svg.location)
        left = svg.location['x']
        scroll_height = svg.location['y']
        # 具体滚动
        driver.execute_script(window_scroll(scroll_height, top))
        # 重新定位截图区域
        right = left + math.floor(svg.size['width'])
        bottom = top + math.floor(svg.size['height'])
        time.sleep(1 / 2)
        # 获取大图的base
        # 1. 大图转base64
        all_base64_str = driver.get_screenshot_as_base64()
        # 2. base64 crop 裁剪
        target_base64_str = crop_base64_img(all_base64_str, (left, top, right, bottom))
        # print("target_base64_str:", target_base64_str)
        target_base64_byte = base64.b64decode(target_base64_str)
        # print("target_base64_byte:", target_base64_byte)
        image_path_re = file_markdown_path + '_' + str(index) + '.png'
        image_path_group = re.search(r'[^/]+$', image_path_re)
        if image_path_group:
            image_path = image_path_group.group()
            # 二进制格式写入
            with open(image_path_re, 'wb', ) as f:
                f.write(target_base64_byte)
            html = re.sub(r'<svg([>| ])(.*?)</svg>',
                          '<img src="./' + image_path + '">', html, count=1)
    return html


# 窗口滚动
# h 高度，threshold 阈值，一般为200
def window_scroll(h, threshold):
    return '' + 'window.scroll(0,' + str(h - threshold) + ')'


# 去解析node节点,返回markdown
def node_level(driver, file_markdown_path="", url_path=""):
    try:
        nodes = driver.find_elements_by_css_selector(".devsite-article-body>*")
        for node in nodes:
            if not ignore_tag(node):
                html = node.get_attribute('outerHTML') or ""  # 注意，如果是innerHTML 这里只能获取到它的子级，需要使用outerHTML
                # print("====> ",html)
                # html = node.get_attribute('innerHTML') or ""  # 注意：这里只能获取到它的子级
                # if node.tag_name == 'aside':  # 对引用打补丁
                #     html = '<blockquote>' + html + '</blockquote>'
                # # print("待转译html：", html)
                #
                # # 解析svg
                # svg_list = node.find_elements_by_css_selector('svg')
                # html = cover_svg_to_img(html, driver, file_markdown_path, svg_list=svg_list)
                # # print("添加svg后待转译html：", html)
                #
                # # 补全ul标签名称
                # if node.tag_name == 'ul':
                #     html = '<ul>' + html + '</ul>'
                # # 补全ul标签名称
                # if node.tag_name == 'ol':
                #     html = '<ol>' + html + '</ol>'
                mk = Pyhtmd(html).markdown()
                # print("****> :", mk)
                # 写入文件
                with open(file_markdown_path, "a", errors="ignore", encoding='utf-8') as f:
                    f.write(mk)
    except Exception as e:
        print("===> 啥错误:", e)
        print('===> 错误路径：', file_markdown_path)
        print('===> 错误页面：', url_path)
        with open('error.yml', "a", errors="ignore", encoding='utf-8') as f:
            f.write('"' + url_path + '":' + '"' + file_markdown_path + '"' + '\n')

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
# https://tensorflow.google.cn/api_docs/python/tf
# handle_async_flat({
#     # "https://tensorflow.google.cn/api_docs/python/tf/custom_gradient": "../docs/tf/custom_gradient.md",
#     # "https://tensorflow.google.cn/api_docs/python/tf/keras/layers/AdditiveAttention": "../docs/tf.keras/layers/AdditiveAttention.md",
#     "https://tensorflow.google.cn/api_docs/python/tf/broadcast_to": "../docs/tf/broadcast_to.md",
#     # "https://tensorflow.google.cn/api_docs/python/tf/custom_gradient": "../docs/tf/custom_gradient.md",
# }, go_webdriver)
# handle_async_flat({"https://tensorflow.google.cn/api_docs/python": "../docs/All_Symbols"}, go_webdriver)

# 29s 单个
# go_webdriver('https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ragged',
#              '../docs/tf.compat/v1/ragged/Overview.md')
end_time = time.time()
# 75s 两个
print('\n====== 总任务时间======：', end_time - start_time)
