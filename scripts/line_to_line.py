from config import appid
from config import key
import requests
import hashlib

url = "https://www.tensorflow.org/api_docs/python/"
appid = appid  # TODO
salt = "tensorflow"
key = key  # TODO


def md5(content):
    m = hashlib.md5()
    sign = appid + content + salt + key
    m.update(sign.encode("utf-8"))
    return m.hexdigest()


def baidu_api_translate(content):
    if len(content) > 0:
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
            # {'src': 'Public API for tf.audio namespace.', 'dst': 'tf.audio命名空间的公共api。'}
            # print("result:", result)
            # print("trans_result:", trans_result)
            # print("obj:", obj)
            return obj['dst']
    else:
        return ""


def read_line():
    with open("../docs/All_Symbols.md", "r") as f:
        for line in f.readlines():
            if len(line) > 1:
                print(line)


read_line()
