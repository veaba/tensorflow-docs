"""
@desc 生成目录，是后续所有操作中的最基本元素

"""
from selenium import webdriver
from config import sidebar_content


# url = 'https://tensorflow.google.cn/versions/r2.1/api_docs/python/tf/audio'

# data-icon="experimental"
# data-title="实验！"
# 废弃：   data-icon="deprecated"
#         data-title="已弃用"
def go_category():
    # driver = webdriver.Chrome()
    # driver.get(url)
    # sidebar_list = driver.find_elements_by_css_selector('.devsite-mobile-nav-bottom>.devsite-nav-list')
    # outHTML = sidebar_list[0].get_attribute('outerHTML')
    # print(outHTML)
    print(sidebar_content)


go_category()
