将给定文本包装为最大行长度并返回它。

```
 tf.compat.v1.flags.text_wrap(
    text,
    length=None,
    indent='',
    firstline_indent=None
)
 
```

It turns lines that only contain whitespace into empty lines, keeps new lines,and expands tabs using 4 spaces.

#### 参数：
- **`text`** : str, text to wrap.
- **`length`** : int, maximum length of a line, includes indentation.If this is None then use get_help_width()
- **`indent`** : str, indent for all but first line.
- **`firstline_indent`** : str, indent for first line; if None, fall back to indent.


#### 返回：
str, the wrapped text.

#### 加薪：
- **`ValueError`** : Raised if indent or firstline_indent not shorter than length.
