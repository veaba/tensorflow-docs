# 创建sidebar文件目录的python脚本
from category import category

def create_json():
    with open('a.js', "w") as f:
        print("写入成功")
    list1 = []
    for item in category:
        if type(item) == dict:
            key_name = ''.join(item.keys())
            list1.append({
                "title": key_name,
                "collapsabel": "false",
                "children": key_name
            })
        if type(item) == str:
            list1.append({
                "title": item,
                "collapsabel": "false",
                "children": item
            })
    print(list1)

    with open("a.js", "w") as f:
        f.write(str(list1))

create_json()
