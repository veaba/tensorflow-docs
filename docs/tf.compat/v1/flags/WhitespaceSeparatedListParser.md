

## Class  `WhitespaceSeparatedListParser` 
Parser for a whitespace-separated list of strings.

Inherits From: [ `BaseListParser` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/BaseListParser)

##  `__init__` 


```
 __init__(comma_compat=False)
 
```

初始值设定项。

#### 参数：
- **`comma_compat`** : bool, whether to support comma as an additional separator.If False then only whitespace is supported.  This is intended only forbackwards compatibility with flags that used to be comma-separated.


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

Parses argument as whitespace-separated list of strings.

It also parses argument as comma-separated list of strings if requested.

#### 参数：
- **`argument`** : string argument passed in the commandline.


#### 返回：
[str], the parsed flag value.

