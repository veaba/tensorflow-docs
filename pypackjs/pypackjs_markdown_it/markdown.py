# markdown文件经过流水线的一连串转换，最后转为HTML格式

# hightlight
# componentPlugin 组件插件
# hightlightLinesPlugin 高亮行 https://github.com/egoist/markdown-it-highlight-lines
# preWrapperPlugin 预包装插件 处理<pre>....</pre>
# snipperPlugin 代码片段 插件
# covertRouterLinkPlugin 转换route link 插件
# hoistScriptStylePlugin 啥插件
# emojiPlugin emoji插件 见：markdown-it-emoji
# anchorPlugin 锚插件 见：markdown-it-anchor
# tocPlugin 表格处理插件 markdown-it-table-of-contents
# lineNumberOlugin lineNumber存在是否使用
class Markdown:
    def __init__(self,argv):
        print(self,argv)

    