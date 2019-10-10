import requests
import hashlib
import re
import asyncio
from config import appid
from config import key
from category import *



url = "https://www.tensorflow.org/api_docs/python/"
appid = appid  # TODO
salt = "tensorflow"
key = key  # TODO


def md5(content):
    m = hashlib.md5()
    sign = appid + content + salt + key
    m.update(sign.encode("utf-8"))
    return m.hexdigest()


async def baidu_api_translate(content):
    if len(content) > 0:
        await asyncio.sleep(1)
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

# 匹配模式，匹配到则不翻译，返回true，false 翻译。判断是横杠：- 开头的，不翻译
def match_mode(line):

    if re.match('-',str.strip(line)):
        return True
    elif re.match('\\[',str.strip(line)):
        return True  
    elif re.match('`',str.strip(line)):
        return True
    elif re.match(r'return|def|print|if|else|elif|where|tf|with|<|>|\.|try|finally|@|import|int32',str.strip(line)):
        return True 
    elif re.match('# ',str.strip(line)):
        return True
    elif re.search(', ',line):
        return True
    elif re.search(r'\((.*?)#',str.strip(line)):
        return True
    elif re.search(r'=|0',line):
        return True
    elif re.search('\\*',str.strip(line)):
        return True
    elif re.search('\\[\\(',str.strip(line)):
        return True   
    # 如果存在单个字符(|) 不翻译    
    elif str.strip(line)=='(' or str.strip(line) ==')' or str.strip(line)=='.':
        return True   
    # ,( 结尾    
    elif re.search(r'[(,]$',str.strip(line)):
        return True
    elif re.search(r'__$',str.strip(line)):
        return True
    elif re.search(r'\)$',str.strip(line)):
        return True
    elif re.search(r'\]\.$',str.strip(line)):
        return True
    elif re.search(r'[_-]',str.strip(line)):
        return True
    return False    

all_lines_en={

}
def read_line(path):
    with open(path, "r",encoding="utf-8") as f:
        for line in f.readlines():
            if len(line) > 1:
                if not match_mode(line):
                    all_lines_en[line]=""

# 翻译写入到原文件
def re_write_line(path):
    # 存储读出来的
    temp_save_list=[]
    wait_save_list=[]
    with open(path,'r',encoding='utf-8') as f:
        temp_save_list=f.readlines()

    # 替换之后的文件

    for line in temp_save_list:
        if line in all_lines_en:
            line_str=line.replace(line,all_lines_en[line])
            wait_save_list.append(line_str)
            #  这里发生了什么,此时的all_lines_en 竟然没有数据
            print("line:",line)
            print("line_str:",line_str)
            print("all_lines_en[line]:",line_str)
        else:
             wait_save_list.append(line)
    # 清空文件         
    with open(path,'w',encoding='utf8') as f:
        f.write('')
    # 复写文件
    with open(path,'a',encoding='utf8') as f:
        for line in wait_save_list:
            f.write(line)
    # values_10= list(all_lines_en.values())[:10]
    # keys_10= list(all_lines_en.keys())[:10]
    # print("keys_10:",keys_10)
    # print("values_10:",values_10)

# 总行数5459
# 总字数250053万字

TOTAL={
    "STRING_COUNT":0
}


def total_str():
    # mask=0
    loop=asyncio.get_event_loop()
    for item in all_lines_en:
        TOTAL['STRING_COUNT']+=len(item)
        # mask+=1
        all_lines_en[item]=loop.run_until_complete(baidu_api_translate(item))
        # if mask>10:
        #     break
    print(TOTAL)
    print("keys:",list(all_lines_en.keys())[:10])
    print("value：",list(all_lines_en.values())[:10])


def parent_path(parent, key_name,task):
    file_path_re = parent + key_name
    file_path=re.sub(r' ','_',file_path_re)
    if not task:
        read_line(file_path+'.md')
    else:
        # 根据数组写入
        re_write_line(file_path+'.md')
def handle(array, parent,task=None):

    if type(array) != list:
        return
    for obj in array:
        if type(obj) == dict:
            key_name = "".join(obj.keys())
            values = obj.values()
            [item_list] = values or [[]]
            if len(item_list) == 1:
                [file_name] = item_list
                parent_path(parent + key_name + "/", file_name,task)
            else:
                handle(item_list, parent + key_name + "/",task)
        elif type(obj) == str:
            parent_path(parent, obj,task)
    

def hello():
    handle(category, "../docs/")
    total_str()
    handle(category, "../docs/",task=1)


hello()