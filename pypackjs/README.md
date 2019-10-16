# 基于Python 版本 Node平台前端项目打包器

> 这是一个概念性项目，目前作为tensorflow-docs项目的衍生性项目，诞生的原因是vuepress 打包2.5k的markdown文件需要花费3个小时，这一点无法忍受，而webpack是js平台的

- python是可以调用js平台的一些资源
- python将使用线程池来加快处理（虽然有些吃内存）
- 本项目的理论基础是：对于文件处理来说，万物皆正则(不就是替换的事情嘛))

|进度|pypackjs包名|描述|原理|
|----|----|----|----|
||pypackjs-vue|构建vue项目的依赖关系||
||pypackjs-comporess|压缩js文件和格式化文件|主要是正则格式化|
||pypackjs-vnode|html转js的vnode||
||pypackjs-css|css打包工具||
|进行中...|pypackjs-markdown|markdown转HTML文件||
||pypackjs-url|url路径解析工具||
||pypackjs-file|处理文件的依赖||
||pypackjs-ts|处理ts||
||pypackjs-scss|处理scss文件||
|||||