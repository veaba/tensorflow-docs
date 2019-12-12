

## Class  `EnumParser` 
字符串枚举值（给定集合中的字符串值）的分析器。

Inherits From: [ `ArgumentParser` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/ArgumentParser)

##  `__init__` 


```
 __init__(
    enum_values,
    case_sensitive=True
)
 
```

初始化枚举分析器。

#### 参数：
- **`enum_values`** : [str], a non-empty list of string values in the enum.
- **`case_sensitive`** : bool, whether or not the enum is to be case-sensitive.


#### 加薪：
- **`ValueError`** : When enum_values is empty.


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

确定参数的有效性并返回枚举的正确元素。

#### 参数：
- **`argument`** : str, the supplied flag value.


#### 返回：
The first matching element from enum_values.

#### 加薪：
- **`ValueError`** : Raised when argument didn't match anything in enum.
