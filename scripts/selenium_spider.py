from selenium import webdriver
import requests
import hashlib



appid="APPID" #TODO 
salt="tensorflow"
key="秘钥" #TODO

def md5(content):
    m=hashlib.md5()
    sign=appid+content+salt+key
    m.update(sign.encode("utf-8"))
    return m.hexdigest()


def go_webdriver(url):
    driver= webdriver.Chrome()
    driver.get(url)
    # driver.get("https://www.tensorflow.org")
    label= driver.find_element_by_class_name("markdown-body")
    # todo 怎么去分割
    body= label.text
    # 分割为数组
    label_list = body.split("\n")
    for txt in label_list:
        print(txt)
        data =baidu_api_translate(txt)
        # 报错拦截
        if ('error_code' in data):
            print(data)
            break
        # 成功返回
        else:
            print("\n")
            print(data)

# 语音列表：http://fanyi-api.baidu.com/api/trans/product/apidoc#languageList
def baidu_api_translate(content):
    baidu_api_url="https://fanyi-api.baidu.com/api/trans/vip/translate"
    res= requests.post(baidu_api_url,data={
        "q":content,
        "from":"en",
        "to":"zh",
        "appid":appid,
        "salt":salt,
        "sign":md5(content)
        })

    return res.json()
    



go_webdriver("https://www.tensorflow.org")
