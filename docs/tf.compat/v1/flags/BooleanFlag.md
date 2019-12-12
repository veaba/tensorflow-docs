

## Class  `BooleanFlag` 
基本布尔标志。

Inherits From: [ `Flag` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/Flag)

Boolean flags do not take any arguments, and their value is eitherTrue (1) or False (0).  The false value is specified on the commandline by prepending the word 'no' to either the long or the short flagname.

For example, if a Boolean flag was created whose long name was'update' and whose short name was 'x', then this flag could beexplicitly unset through either --noupdate or --nox.

##  `__init__` 


```
 __init__(
    name,
    default,
    help,
    short_name=None,
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

返回描述标志类型的str。

注意：we use strings, and not the types.*Type constants becauseour flags can have more exotic types, e.g., 'comma separated listof strings', 'whitespace separated list of strings', etc.

###  `parse` 


```
 parse(argument)
 
```

分析字符串并设置标志值。

#### 参数：
- **`argument`** : str or the correct flag value type, argument to be parsed.


###  `serialize` 


```
 serialize()
 
```

序列化标志。

###  `unparse` 


```
 unparse()
 
```

