import re
from category import category
import time
from i18n import i18n
from utils import handle, clear_file


# 匹配模式，匹配到则不翻译，返回true，false 翻译。判断是横杠：- 开头的，不翻译
def match_mode(line):
    if re.match('-', str.strip(line)):
        return True
    elif re.match('\\[', str.strip(line)):
        return True
    elif re.match('`', str.strip(line)):
        return True
    elif re.match(
            r'bool|float|int64|bytes|double|1|2|3|4|5|6|7|8|9|and|TypeError|case|\'|{'
            r'|}|method|for|assert|None|class|return|def|print|if|else|elif|where|tf|with|<|>|\.|try|finally|@|import'
            r'|int32',
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


# 创建空英文词典
def read_line(path):
    with open(path, "r", encoding="utf-8") as f:
        for line in f.readlines():
            if len(line) > 1:
                if not match_mode(line):
                    i18n[line] = ""
    clear_file('i18n.py')
    with open('i18n.py', 'a', encoding="utf-8") as f:
        f.write('i18n={\n', )
        for line in i18n.keys():
            new_line = line.replace('\n', '').replace("'", "\\'")
            f.write("'" + new_line + "':''," + '\n')
        f.write('}')


# 翻译写入到原文件
def re_write_line(path):
    # 存储读出来的
    temp_save_list = []
    wait_save_list = []
    with open(path, 'r', encoding='utf-8') as f:
        temp_save_list = f.readlines()

    # 替换之后的文件
    for line in temp_save_list:
        new_line = line.replace('\n', '')
        if new_line in i18n:
            if len(i18n[new_line]):
                line_str = line.replace(new_line, i18n[new_line])
                wait_save_list.append(line_str)
                # print("line:", line)
                # print("line_str:", line_str)
                # print("i18n[line]:", i18n[new_line])
        else:
            wait_save_list.append(line)
    # 清空文件
    with open(path, 'w', encoding='utf8') as f:
        f.write('')
    # 复写文件
    with open(path, 'a', encoding='utf8') as f:
        for line in wait_save_list:
            f.write(line)


def parent_path(parent, key_name, task):
    file_path_re = parent + key_name
    file_path = re.sub(r' ', '_', file_path_re)
    # read_line(file_path+'.md')
    if task:
        # 根据数组写入
        re_write_line(file_path + '.md')


def create_zh_docs():
    time_create = time.time()
    handle(category, "../docs/", parent_path, task=1)  # 根据i18 生成中文文档
    time_end = time.time()

    print("批量翻译文档所消耗时间：", time_end - time_create)


create_zh_docs()
