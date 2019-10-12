# 对外暴露公共的方法和函数
import asyncio
import hashlib
import requests
from config import appid
from config import key
from concurrent.futures import ThreadPoolExecutor
import time

salt = "tensorflow"


# 返回一个md加密加盐后的字符
def md5(content):
    m = hashlib.md5()
    sign = appid + content + salt + key
    m.update(sign.encode("utf-8"))
    return m.hexdigest()


# 清空文件
def clear_file(path):
    with open(path, 'w', encoding="utf-8") as f:
        f.write('')


# 递归遍历目录,同步的方式
# array 数组
# parent 重组的文档目录
# fn 回调函数
def handle(array, parent, fn, task=None):
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
                fn(parent + key_name + "/", file_name, task)
            else:
                handle(item_list, parent + key_name + "/", fn, task)
        elif type(obj) == str:
            fn(parent, obj)


# 递归遍历目录,异步的方式
# array 数组
# parent 重组的文档目录
# fn 回调函数
def handle_async(array, parent, fn, task=None):
    if type(array) != list:
        print("end")
        return
    # pool = ThreadPoolExecutor(30)
    loop=asyncio.get_event_loop()
    for obj in array:
        if type(obj) == dict:
            key_name = "".join(obj.keys())
            values = obj.values()
            [item_list] = values or [[]]
            if len(item_list) == 1:
                [file_name] = item_list
                # fn(parent + key_name + "/", file_name, task)
                # pool.submit(fn, parent + key_name + "/", file_name, task)
                loop.run_until_complete(fn(parent + key_name + "/", file_name, task))
            else:
                handle(item_list, parent + key_name + "/", fn, task)
        elif type(obj) == str:
            # fn(parent, obj)
            # pool.submit(fn, parent, obj)
            loop.run_until_complete(fn(parent,obj))


# 百度翻译，返回翻译的内容
async def baidu_api_translate(content):
    print(time.time(), content)
    if len(content) > 0:
        await asyncio.sleep(1 / 10)
        baidu_api_url = "https://fanyi-api.baidu.com/api/trans/vip/translate"
        res = requests.post(
            baidu_api_url,
            data={
                "q": content,
                "from": "en",
                "to": "zh",
                "appid": appid,
                "salt": salt,
                "sign": md5(content),
            },
        )
        result = res.json()
        if "error_code" in result:
            print(result)
            return ""
        else:
            trans_result = result['trans_result']
            [obj] = trans_result or [{'dst': ''}]
            return obj['dst']
    else:
        return ""


# 指定目录清空文件内容

def clear_dir_file_content(parent_path, obj):
    tf = "".join(obj.keys())
    for path in obj[tf]:
        the_dir_path = parent_path + tf + '/' + path
        print(the_dir_path)
        clear_file(the_dir_path + '.md')
