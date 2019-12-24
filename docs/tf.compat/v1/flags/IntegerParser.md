

## Class  `IntegerParser` 
整数值的分析器。

解析后的值可以限定为给定的上下限。

##  `__init__` 


```
 __init__(
    lower_bound=None,
    upper_bound=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `convert` 


```
 convert(argument)
 
```

返回参数的int值。

###  `flag_type` 


```
 flag_type()
 
```

见基类。

###  `is_outside_bounds` 


```
 is_outside_bounds(val)
 
```

返回值是否在边界之外。

###  `parse` 


```
 parse(argument)
 
```

见基类。

## Class 成员
-  `number_article = 'an'`  
-  `number_name = 'integer'`  
-  `syntactic_help = 'an integer'`  
