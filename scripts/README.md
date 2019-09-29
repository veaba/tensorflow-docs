# Script 工具


## selenium_spider.py
chromedriver 镜像，需要和浏览器版本一直的驱动安装，并安装到path变量里面
https://npm.taobao.org/mirrors/chromedriver/


### selenium + webdriver 的方式是可以的
- 比较有限麻烦，
- 是通过API去控制浏览器的行为
自动化测试 selenium 模块 webdriver使用（一）：
https://www.cnblogs.com/hellosecretgarden/p/9206648.html 

在控制台里面
```python
from selenium import webdriver
driver=webdriver.Chrome()

driver.get("http://www.baidu.com")


```

### selenium_spider 负责将tensorflow api 文档爬取并调用百度API方式翻译写入

[selenium_spider](selenium_spider.py)
