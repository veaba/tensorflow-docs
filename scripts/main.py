# python 创建文件夹/文件
from scripts.category import *
import os
import re


def create_file(path_name, file_name):
    # a模式 是append ,w 是覆写
    with open(path_name + file_name + ".md", "w") as f:
        f.write("# " + file_name)


# 根据目录去生成文件路径和文件
def handle(array, n=0, parent_path="./docs/"):
    if type(array) != list:
        print("入参Array 非list，循环结束")
        return
    n += 1
    for obj in array:
        # print(str(n), obj, "\n")
        if type(obj) == dict:
            key_name = ''.join(obj.keys())
            if not os.path.exists(parent_path + key_name):
                os.mkdir(parent_path + key_name)
            else:
                values = obj.values()
                [item_list] = values or [[]]  # 解构第一层list
                # 写入文件
                if len(item_list) == 1:
                    [file_name] = item_list
                    create_file(parent_path + key_name + "/", file_name)
                else:
                    handle(item_list, n, parent_path + key_name + "/")
        if type(obj) == str:
            # 含有空格的str，转为"_"
            str_name = re.sub(r' ', '_', obj)
            create_file(parent_path, str_name)
    print(n, "个文件/路径")


handle(category, 0, "./docs/")
