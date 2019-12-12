

## Class  `BaseListParser` 
字符串列表分析器的基类。

Inherits From: [ `ArgumentParser` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/ArgumentParser)

To extend, inherit from this class; from the subclass **init** , call

```
 BaseListParser.__init__(self, token, name)
 
```

where token is a character used to tokenize, and name is a descriptionof the separator.

##  `__init__` 


```
 __init__(
    token=None,
    name=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `flag_type` 


```
 flag_type()
 
```

见基类。

###  `parse` 


```
 parse(argument)
 
```

见基类。

