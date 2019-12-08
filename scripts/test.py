# import re
# def list_to_str(str_list,code=""):
#     if isinstance(str_list, list):
#         return code.join(str_list)
#     else:
#         # 啥？
#         return EOFError
# a_list=['aa','bb']
# st= 'while_loop(...): Repeat body while the condition cond is true.aa,擦擦,oooaAddsa.ssbb'

# a_str=list_to_str(a_list,"|")
# pa= re.compile(r'('+a_str+')')

# xx =re.sub(pa,"`"+"\\1"+"`",st)

# print(xx)
# # 问题。把 aa和 bb换成 `aa` `bb`

# def tell():
#     with open("docs/tf.config/experimental_connect_to_cluster.md", "r") as f:
#         f.read()  # 移除此行，就是0
#         print(f.tell())

# tell()

# a="All Symbols"
# b=re.sub(r' ','_',a)
# print(b)

# c="tf.train.FeatureLists.FeatureListEntry"

# print(re.sub(r'[.]','/',c))

# b={
#     "## Primary symbols":"## 主要符号",
#     "## xx symbols":"## 主要一符号",
#     "## 33 symbols":"## 主要二符号",
#     "## vv symbols":"## 主要三符号",
#     "## 999 symbols":"## 主要三符号",
# }


# def read_lines():
#     with open('test.md','r') as f:
#         for line in f.readlines():
#             print(line)

# def write_line():
#     file_list=[]
#     with open("test.md",'r') as f:
#         file_list=f.readlines()

#     print(file_list)
#     new_file_list=[]
#     for line in file_list:
#         new_line=line.replace('\n','')
#         if new_line in b:
#             line_str=new_line.replace(new_line,b[new_line])
#             new_file_list.append(line_str+'\n')
#         else:
#             new_file_list.append(line)

#     with open('test.md','a',encoding='utf8') as f:
#         f.write('\n')
#         for line in new_file_list:
#             f.write(line)

# write_line()

# print(list(b.values())[1:3])

# from i18n_dict import i18n_dict
#
# for item in i18n_dict:
#     print("key:", item)
#     print("---:", i18n_dict[item])


# ###############################3
from category import category
from utils import clear_dir_file_content

clear_dir_file_content('../docs/', category[0])
# import re

# p_pattern_str=re.compile('(M + 1)')
# p_pattern_str=re.compile('(M + 1|block_shape + [batch]|[1, ..., M]|crops)')
# node = 'This operation reshapes the "batch" dimension 0 into M + 1 dimensions of shape block_shape + [batch], i'

# node_text = re.sub(r'(M \+ 1)|(\[batch\])', "`" + "\\1\\2" + "`", node)
# node_text = re.sub(p_pattern_str, "`" + "\\1" + "`", node)

# print(node_text)

# reg = '(M \+ 1)|(block_shape \+ \[batch\]|(\[1, \.\.\., M\]))'
# x = 'a+b[c]'
# # print(re.sub(r'[+\[]', '\\0', x))
#
# s = re.compile(r'' + reg + '')
#
# print(s)
# print(re.sub(s, '`\\1\\2\\3`', node))
#
# reg_code = ['+', '.', '[', ']']

# for item in reg_code:
#     node = node.replace(item,"\\"+item)
# print('xxx:', node)
# =================================================================================
# p_pattern_str=re.compile('(M + 1|block_shape + [batch]|[1, ..., M]|crops)') 的结果


# aaa = ['a', 'b', 'c']
#
# bbb = ''
# for index in aaa:
#     print(index)
# # for index in enumerate(aaa):
# #     bbb = bbb + '\\' + str(index + 1)
#
# print(bbb)

# https://tensorflow.google.cn/api_docs/python/tf/bitcast
