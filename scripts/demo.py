import http.client
import md5
import urllib.request, urllib.parse, urllib.error
import random

appid = '20190929000338221' #你的appid
secretKey = '3qeVk9ktAwQbArayGin9' #你的密钥

 
httpClient = None
myurl = '/api/trans/vip/translate'
q = 'apple'
fromLang = 'en'
toLang = 'zh'
salt = random.randint(32768, 65536)

sign = appid+q+str(salt)+secretKey
m1 = md5.new()
m1.update(sign.encode("utf8"))
sign = m1.hexdigest()
myurl = myurl+'?appid='+appid+'&q='+urllib.parse.quote(q)+'&from='+fromLang+'&to='+toLang+'&salt='+str(salt)+'&sign='+sign
 
try:
    httpClient = http.client.HTTPConnection('api.fanyi.baidu.com')
    httpClient.request('GET', myurl)
 
    #response是HTTPResponse对象
    response = httpClient.getresponse()
    print((response.read()))
except Exception as e:
    print(e)
finally:
    if httpClient:
        httpClient.close()
