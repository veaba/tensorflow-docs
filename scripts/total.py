# 计算翻译的字符总量以及行数
import re
from category import category
from i18n import i18n

def read_line(str_count=0, line_count=0):
    with open("../docs/All_Symbols.md", "r") as f:
        for line in f.readlines():
            print(line_count, len(line))
            if len(line) > 1:
                str_count += len(line)
                line_count += 1
        print("行数：", line_count)
        print("总字符数：", str_count)


# read_line()

COUNTS = {
    "FILES": 0,  # 文件个数
    "LINES": 0,  # 行数
    "STRINGS": 0,  # 总字符数
    "I18N":0,# 需要翻译的字符
}


def parent_path(parent, key_name):
    file_path_re = parent + key_name
    file_path = re.sub(r' ', '_', file_path_re)
    print("写入的文件路径：", file_path + ".md")
    COUNTS["FILES"] += 1

    # 计算行数与计算字符数
    with open(file_path + ".md", "r", encoding="utf-8") as f:
        for line in f.readlines():
            if len(line) > 1:
                # 行数据
                print("行：", line)
                COUNTS["LINES"] += 1
                COUNTS["STRINGS"] += len(line)


def handle(array, parent):
    if type(array) != list:
        print("end")
        return ''
    for obj in array:
        if type(obj) == dict:
            key_name = "".join(obj.keys())
            values = obj.values()
            [item_list] = values or [[]]
            if len(item_list) == 1:
                [file_name] = item_list
                parent_path(parent + key_name + "/", file_name)
            else:
                handle(item_list, parent + key_name + "/")
        elif type(obj) == str:
            parent_path(parent, obj)


# handle(category, "../docs/")

# 计算需要翻译的字符长度
def total_i18n():
    for key in i18n:
        COUNTS['I18N']+=len(key)

total_i18n()
print("文件个数：", COUNTS["FILES"])
print("总行数", COUNTS["LINES"])
print("总字符数：", COUNTS["STRINGS"])
print("需要翻译的字段：", COUNTS["I18N"])
