# 检查是否为空的文件
from category import category
import re
from utils import handle

paths = []


def parent_path(parent, key_name,task=None):
    file_path_re = parent + key_name
    file_path = re.sub(r' ', '_', file_path_re)
    # print("文件路径：",file_path+".md")
    with open(file_path + ".md", "r") as f:
        f.read()
        if not f.tell():
            paths.append(file_path)


handle(category, "../docs/", parent_path)

print("为空的路径：", paths)
