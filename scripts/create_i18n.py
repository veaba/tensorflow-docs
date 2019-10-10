import requests
import hashlib
import re
import asyncio
from config import appid
from config import key
from category import *
import time


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
    print(time.time())
    if len(content) > 0:
        await asyncio.sleep(1/10)
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
    elif re.match(r'bool|float|int64|bytes|double|1|2|3|4|5|6|7|8|9|and|TypeError|case|\'|{|}|method|for|assert|None|class|return|def|print|if|else|elif|where|tf|with|<|>|\.|try|finally|@|import|int32',str.strip(line)):
        return True 
    elif re.match('# ',str.strip(line)):
        return True
    elif re.match('    ',str.strip(line)):
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

# 清空文件
def clear_file(path):
    with open(path,'w',encoding="utf-8") as f:
        f.write('')

def create_i18n_dict_file(path):
    with open(path, "r",encoding="utf-8") as f:
        for line in f.readlines():
            if len(line) > 1:
                if not match_mode(line):
                    all_lines_en[line]=""
    clear_file('i18n_dict.py')
    with open('i18n_dict.py','a',encoding="utf-8") as f:
        f.write('i18n={\n',)
        # loop=asyncio.get_event_loop()loop.run_until_complete(baidu_api_translate(line))
        for line in all_lines_en.keys():
            new_line=line.replace('\n','').replace("'","\\'")
            f.write("'"+new_line+"':'"+""+"',"+'\n')
        f.write('}')

def parent_path(parent, key_name,task):
    file_path_re = parent + key_name
    file_path=re.sub(r' ','_',file_path_re)
    if not task:
        create_i18n_dict_file(file_path+'.md')
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
    

def create_i18n_py():
    time_start= time.time()
    handle(category, "../docs/")
    time_end=time.time()
    print('创建 create_i18n_dict_file 所消耗时间：',time_end-time_start)

    

create_i18n_py()