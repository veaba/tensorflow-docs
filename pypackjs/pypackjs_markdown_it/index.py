# python 版本markdown-it pymarkdown-it
from common.utils import isString
from parser_inline import ParserInline
from parser_block import ParserBlock
from parser_core import ParserCore
from renderer import Renderer
# @staticmethod
# @classmethod
class MarkdownIt:
    def __init__(self,presetName,options):
        self.presetName=presetName
        self.options=options
        self.inline= ParserInline()
        self.block= ParserBlock()
        self.core= ParserCore()
        self.renderer= Renderer()
        # todo self.linkify= LinkifyIt()
        MarkdownIt.init(self)
    # 静态方法 
    @staticmethod    
    def init(self):
        if not isinstance(self,MarkdownIt):
            return MarkdownIt(self.presetName,self.options)
        if not self.options:
            if not isString(self.presetName):
                self.options=self.presetName or {}
                self.presetName='default'
    
    
markdown= MarkdownIt('aa',{"name":"ok"})