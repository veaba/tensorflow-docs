

## Class  `name_scope` 
定义python操作时使用的上下文管理器。

Inherits From: [ `name_scope` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/backend/name_scope)

This context manager pushes a name scope, which will make the name of alloperations added within it have a prefix.

For example, to define a new Python op called  `my_op` :

```
 def)
 )
 )
    # Define some computation that uses `a`, `b`, and `c`.
    return foo_op(..., name=scope)
 
```

When executed, the Tensors  `a` ,  `b` ,  `c` , will have names  `MyOp/a` ,  `MyOp/b` ,and  `MyOp/c` .

If the scope name already exists, the name will be made unique by appending `_n` . For example, calling  `my_op`  the second time will generate  `MyOp_1/a` ,etc.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6412-L6424)

```
 __init__(name)
 
```

初始化上下文管理器。

#### 参数：
- **`name`** : The prefix to use on all names created within the name scope.


#### 加薪：
- **`ValueError`** : If name is None, or not a string.


## 属性


###  `name` 


## 方法


###  `__enter__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6430-L6449)

```
 __enter__()
 
```

启动范围块。

#### 返回：
作用域名称。

#### 加薪：
- **`ValueError`** : if neither  `name`  nor  `default_name`  is providedbut  `values`  are.


###  `__exit__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6451-L6454)

```
 __exit__(
    type_arg,
    value_arg,
    traceback_arg
)
 
```

