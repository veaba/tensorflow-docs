

## Class  `MultiEnumClassFlag` 
A multi_enum_class flag.

Inherits From: [ `MultiFlag` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/MultiFlag)

See the **doc**  for MultiFlag for most behaviors of this class.  In addition,this class knows how to handle enum.Enum instances as values for this flagtype.

##  `__init__` 


```
 __init__(
    name,
    default,
    help_string,
    enum_class,
    **args
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 属性


###  `value` 


## 方法


###  `__eq__` 


```
 __eq__(other)
 
```

Return self==value.

###  `__ge__` 


```
 __ge__(
    other,
    NotImplemented=NotImplemented
)
 
```

Return a >= b.  Computed by @total_ordering from (not a < b).

###  `__gt__` 


```
 __gt__(
    other,
    NotImplemented=NotImplemented
)
 
```

Return a > b.  Computed by @total_ordering from (not a < b) and (a != b).

###  `__le__` 


```
 __le__(
    other,
    NotImplemented=NotImplemented
)
 
```

Return a <= b.  Computed by @total_ordering from (a < b) or (a == b).

###  `__lt__` 


```
 __lt__(other)
 
```

返回self<value。

###  `flag_type` 


```
 flag_type()
 
```

见基类。

###  `parse` 


```
 parse(arguments)
 
```

使用安装的分析器分析一个或多个参数。

#### 参数：
- **`arguments`** : a single argument or a list of arguments (typically alist of default values); a single argument is convertedinternally into a list containing one item.


###  `serialize` 


```
 serialize()
 
```

序列化标志。

###  `unparse` 


```
 unparse()
 
```

