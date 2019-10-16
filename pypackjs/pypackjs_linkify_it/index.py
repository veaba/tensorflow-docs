# 如何import 上一个目录的文件
from pypackjs.pypackjs_ucMicro.index import Any,Cc,Cf,P,Z

def linkifyIndex(opts):
    reObj={
        'src_Any':Any,
        'src_Cc':Cc,
        'src_Cf':Cf,
        'src_P':P,
        'src_Z':Z,
    }


    # p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
    reObj['src_ZPCc']='|'.join([reObj['src_Any'],reObj['res_P'],reObj['src_Cc']])


    # \p{\Z\Cc} (white spaces + control)
    reObj['src_ZCc']='|'.join([reObj['src_Z'],reObj['src_Cc ']])

    # xperimental. List of chars, completely prohibited in links
    # because can separate it from other part of text

    text_separators ='[><\uff5c]'


    # All possible word characters (everything without punctuation, spaces & controls)
    # Defined via punctuation & spaces to save space
    # Should be something like \p{\L\N\S\M} (\w but without `_`)
    reObj['src_pseudo_letter']='(?:(?!' + text_separators + '|' + reObj['src_ZPCc'] + ')' + reObj['src_Any'] + ')'

    # The same as abothe but without [0-9]
    # var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

    reObj['src_ip4']='(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'


    # Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
    reObj['src_auth']= '(?:(?:(?!' + reObj['src_ZCc'] + '|[@/\\[\\]()]).)+@)?'
    reObj['src_port']='(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?'

    reObj['src_host_terminator']='(?=$|' + text_separators + '|' + reObj['src_ZPCc'] + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + reObj['src_ZPCc'] + '))'

    # allow `I'm_king` if no pair found
                # github has ... in commit range links,
                                # google has .... in links (issue #66)
                                # Restrict to
                                # - english
                                # - percent-encoded
                                # - parts of file path
                                # until more examples found.
    reObj['src_path']='(?:' +'[/?#]' +'(?:' +'(?!' + reObj['src_ZCc'] + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-]).|' +'\\[(?:(?!' + reObj['src_ZCc'] + '|\\]).)*\\]|' \
            '\\((?:(?!' + reObj['src_ZCc'] + '|[)]).)*\\)|'  \
            '\\{(?:(?!' + reObj['src_ZCc'] + '|[}]).)*\\}|'  \
            '\\"(?:(?!' + reObj['src_ZCc'] + '|["]).)+\\"|'  \
            "\\'(?:(?!" + reObj['src_ZCc'] + "|[']).)+\\'|"  \
            "\\'(?=" + reObj['src_pseudo_letter'] + '|[-]).|' \
            '\\.{2,4}[a-zA-Z0-9%/]|' \
            '\\.(?!' + reObj['src_ZCc'] + '|[.]).|'  \
            (opts and opts['---']) if '\\-(?!--(?:[^-]|$))(?:-*)|' else '\\-+|' \
            '\\,(?!' + reObj['src_ZCc'] + ').|' \
            '\\!(?!' + reObj['src_ZCc'] + '|[!]).|' \
            '\\?(?!' + reObj['src_ZCc'] + '|[?]).'  \
            ')+' \
        '|\\/' \
        ')?'

    print(reObj)

linkifyIndex({})
