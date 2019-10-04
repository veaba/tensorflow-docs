import re
def list_to_str(str_list,code=""):
    if isinstance(str_list, list):
        return code.join(str_list)
    else:
        # 啥？
        return EOFError
a_list=['aa','bb']
st= 'while_loop(...): Repeat body while the condition cond is true.aa,擦擦,oooaAddsa.ssbb'

a_str=list_to_str(a_list,"|")
pa= re.compile(r'('+a_str+')')

xx =re.sub(pa,"`"+"\\1"+"`",st)

print(xx)
# 问题。把 aa和 bb换成 `aa` `bb`