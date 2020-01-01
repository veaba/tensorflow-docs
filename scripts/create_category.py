"""
@desc 生成目录，是后续所有操作中的最基本元素

"""
from selenium import webdriver
from config import sidebar_content
from pyhtmd import Pyhtmd
import re

url = 'https://tensorflow.google.cn/versions/r2.1/api_docs/python/tf/audio'

python_json = {}  # todo


# data-icon="experimental"
# data-title="实验！"
# 废弃：   data-icon="deprecated"
#         data-title="已弃用"
def go_category(spider=None):
    html = sidebar_content
    if spider:
        driver = webdriver.Chrome()
        driver.get(url)
        sidebar_list = driver.find_elements_by_css_selector('.devsite-mobile-nav-bottom>.devsite-nav-list')
        html = sidebar_list[0].get_attribute('outerHTML')

    mk = Pyhtmd(html).markdown()

    # 生成ul.md 文件
    with open('ul.md', "w", errors="ignore", encoding='utf-8') as f:
        f.write(mk)

    # todo 标志实验 icon，次要

    # todo 标记废弃icon，次要

    # todo 逐行格式化ul.md文件

    # capitalize 首字母大写函数
    with open('ul.md', 'r', errors="ignore", encoding='utf-8') as f:
        for line in f:
            if len(line) > 1:
                # todo 一级，生成Python的字典
                if the_level(line) == 1 and '[' in line:
                    # 有children
                    if '[]' in line:
                        text = re.sub(r'^.*\)', '', line)
                        text = text.replace('\n', '')
                        level_key = 'tf' + text[3:].capitalize() + 'Links'
                        python_json[level_key] = []
                    else:
                        line_str = line.replace('\n', '')
                        # 外链
                        text = re.sub(r'^.*\[(.*?)\].*$', '\\1', line_str)
                        text_str = text + ' Links'
                        text_str = text_str.replace(' ', '')
                        text_str = text_str[0].lower() + text_str[1:]
                        python_json[text_str] = {
                            'title': text.replace('\n', ''),
                            'type': 'group',
                            'link': '/' + text.replace(' ', '_')
                        }
                elif the_level(line) == 2:
                    pass
                    # print('level-2', line)
                elif the_level(line) == 3:
                    pass
                    # print('level-3', line)
                elif the_level(line) == 4:
                    pass
                    # print('level-4', line)
                elif the_level(line) == 5:
                    pass
                    # print('level-5', line)
                elif the_level(line) == 6:
                    pass
                    # print('level-6', line)
                else:
                    # todo
                    print('level-other', line)

            # todo 二级

    # todo 转为links.js文件

    # todo 转为category_array文件

    # todo 检查文件目录，但不存在在links里面的，则打印出log，并手动删除


def the_level(string):
    str_empty = re.sub(r'- .*$', '', string)
    length = (len(str_empty) - 1) / 2
    return int(length)


# 获取url
def get_url(line):
    return re.sub(r'^.*\((.*?)\).*$', '\\1', line).replace('\n', '')


go_category()

print('大对象：', python_json)
