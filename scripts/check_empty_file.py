# 检查是否为空的文件
from category import *
import re

paths=[]
def parent_path(parent, key_name):
    file_path_re = parent + key_name
    file_path=re.sub(r' ','_',file_path_re)
    # print("文件路径：",file_path+".md")
    with open(file_path+".md", "r") as f:
        f.read()
        if not f.tell():
            paths.append(file_path)

def handle(array, parent):
    if type(array) != list:
        print("end")
        return
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
    

handle(category, "../docs/")

print("为空的路径：",paths)