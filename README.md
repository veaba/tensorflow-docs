# tensorflow-docs
python 的 RC 2.0 版本 中文API文档

> 预计半年到一年的时间

RC 1.5 API https://www.tensorflow.org/versions/r1.15/api_docs/python/tf  1.5

基于 2.0：https://www.tensorflow.org/versions/r2.0/api_docs/python/tf 2.0

找不到官网的markdown文件在哪~~ 喵

3000+ 个文件要翻译，噗。。。

想要机器翻译来完成，实在是整个文档太过于庞大了。

步骤如下，方法一：
1、先找到官方md文件
2、通过百度API 把MD文件翻译为中文


方法二(优先)：
1、通过Python 爬虫拉取文档HTML
    - 解析code
    - 
2、HTML 转markdown
3、markdown 通过百度API翻译为中文mk

http://www.bejson.com/convert/html2markdown/ 可以通过html 转markdown

## 特点

- 有view source on Github 的按钮

## 使用

### 开发
- 安装node
- 开发
```text
npm install
cnpm run dev

```

### 生产(未验证)
```text
npm install
cnpm run build

```

## vuepress

```json
{
    "scripts": {
      "dev": "vuepress dev docs"
    },
    "dependencies": {
      "vuepress-plugin-container": "^2.0.2"
    },
    "devDependencies": {
      "node-sass": "^4.12.0",
      "sass-loader": "^7.1.0"
    }
  }
  

```

## scripts 是脚本目录
- 创建文件夹以及文件
## 基于vuepress 搭建

- 直接copy 自己用过的vuepress theme
- 内容尚未填充


