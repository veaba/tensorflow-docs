

## Class  `MultiFlag` 
A flag that can appear multiple time on the command-line.

Inherits From: [ `Flag` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/Flag)

The value of such a flag is a list that contains the individual valuesfrom all the appearances of that flag on the command-line.

See the **doc**  for Flag for most behavior of this class.  Onlydifferences in behavior are described here:

- The default value may be either a single value or an iterable of values.A single value is transformed into a single-item list of that value.


- The value of the flag is always a list, even if the option wasonly supplied once, and even if the default value is a singlevalue


##  `__init__` 


```
 __init__(
    *args,
    **kwargs
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

