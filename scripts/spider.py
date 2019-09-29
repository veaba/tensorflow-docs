# -- coding: utf-8 --
#  爬虫工具 >scrapy runspider spider.py
import scrapy
import requests
class Spider(scrapy.Spider):
    name="baidu"
    ROBOTSTXT_OBEY = False
    allowed_domains=["baidu.com"]
    # start_urls=['http://www.baidu.com']
    start_urls=['https://www.tensorflow.org/versions/r2.0/api_docs/python/tf']

    def parse(self,response):
        with open('baidu.html',"w",encoding="utf-8") as f:
            f.write(response.body.decode("utf-8"))

ua_header = {"User-Agent" : "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0;"}

a = requests.get('https://www.tensorflow.org/versions/r2.0/api_docs/python/tf',timeout=1000,headers=ua_header)
print(a)