

## Class  `EnumClassParser` 
枚举类成员的分析器。

Inherits From: [ `ArgumentParser` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/ArgumentParser)

##  `__init__` 


```
 __init__(enum_class)
 
```

初始化枚举分析器。

#### 参数：
- **`enum_class`** : class, the Enum class with all possible flag values.


#### 加薪：
- **`TypeError`** : When enum_class is not a subclass of Enum.
- **`ValueError`** : When enum_class is empty.


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
- **`argument`** : str or Enum class member, the supplied flag value.


#### 返回：
枚举类中第一个匹配的枚举类成员。

#### 加薪：
- **`ValueError`** : Raised when argument didn't match anything in enum.
