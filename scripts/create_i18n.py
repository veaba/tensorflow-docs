import asyncio
import re
from category import category
from i18n_dict import i18n_dict
from utils import handle, baidu_api_translate
import time


# 匹配模式，匹配到则不翻译，返回true，false 翻译。判断是横杠：- 开头的，不翻译
def match_mode(line):
    if re.match('-', str.strip(line)):
        return True
    elif re.match('\\[', str.strip(line)):
        return True
    elif re.match('`', str.strip(line)):
        return True
    elif re.match(
            r'bool|float|int64|bytes|double|1|2|3|4|5|6|7|8|9|and|TypeError|case|\'|{|}|method|for|assert|None|class|return|def|print|if|else|elif|where|tf|with|<|>|\.|try|finally|@|import|int32',
            str.strip(line)):
        return True
    elif re.match('# ', str.strip(line)):
        return True
    elif re.match('    ', str.strip(line)):
        return True
    elif re.search(', ', line):
        return True
    elif re.search(r'\((.*?)#', str.strip(line)):
        return True
    elif re.search(r'=|0', line):
        return True
    elif re.search('\\*', str.strip(line)):
        return True
    elif re.search('\\[\\(', str.strip(line)):
        return True
    # 如果存在单个字符(|) 不翻译
    elif str.strip(line) == '(' or str.strip(line) == ')' or str.strip(line) == '.':
        return True
    # ,( 结尾
    elif re.search(r'[(,]$', str.strip(line)):
        return True
    elif re.search(r'__$', str.strip(line)):
        return True
    elif re.search(r'\)$', str.strip(line)):
        return True
    elif re.search(r'\]\.$', str.strip(line)):
        return True
    elif re.search(r'[_-]', str.strip(line)):
        return True
    return False


all_lines_en = {

}


# 清空文件
def clear_file(path):
    with open(path, 'w', encoding="utf-8") as f:
        f.write('')


def create_i18n_dict_file(path):
    with open(path, "r", encoding="utf-8") as f:
        for line in f.readlines():
            if len(line) > 1:
                if not match_mode(line):
                    all_lines_en[line] = ""
    clear_file('i18n_dict.py')
    with open('i18n_dict.py', 'a', encoding="utf-8") as f:
        f.write('i18n_dict={\n', )
        for line in all_lines_en.keys():
            new_line = line.replace('\n', '').replace("'", "\\'")
            f.write("'" + new_line + "':'" + "" + "'," + '\n')
        f.write('}')


def parent_path(parent, key_name, task):
    file_path_re = parent + key_name
    file_path = re.sub(r' ', '_', file_path_re)
    if not task:
        create_i18n_dict_file(file_path + '.md')


# 将空的对象转为翻译对象
def i18n_translate(array):
    time_start = time.time()
    new_dict = {}
    loop = asyncio.get_event_loop()
    for item in array:
        try:
            new_dict[item] = loop.run_until_complete(baidu_api_translate(item))
        except Exception as e:
            print(e)
    clear_file('i18n.py')
    with open('i18n.py', 'a', encoding="utf-8") as f:
        f.write('i18n={\n', )
        for line in new_dict:
            new_line = line.replace('\n', '').replace("'", "\\'")
            f.write("'" + new_line + "':'" + new_dict[line] + "'," + '\n')
        f.write('}')
    time_end = time.time()
    print('翻译 create_i18n_file 所消耗时间：', time_end - time_start)


def create_i18n_py():
    time_start = time.time()
    handle(category, "../docs/", parent_path)
    time_end = time.time()
    print('创建 create_i18n_dict_file 所消耗时间：', time_end - time_start)


i18n_translate(i18n_dict)
# create_i18n_py()
