

## Class  `name_scope` 
定义python操作时使用的上下文管理器。

This context manager validates that the given  `values`  are from thesame graph, makes that graph the default graph, and pushes aname scope in that graph (see[ `tf.Graph.name_scope` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#name_scope)for more details on that).

For example, to define a new Python op called  `my_op` :

```
 def)
 )
 )
    # Define some computation that uses `a`, `b`, and `c`.
    return foo_op(..., name=scope)
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6280-L6306)

```
 __init__(
    name,
    default_name=None,
    values=None
)
 
```

初始化上下文管理器。

#### 参数：
- **`name`** : The name argument that is passed to the op function.
- **`default_name`** : The default name to use if the  `name`  argument is  `None` .
- **`values`** : The list of  `Tensor`  arguments that are passed to the op function.


#### 加薪：
- **`TypeError`** : if  `default_name`  is passed in but not a string.


## 属性


###  `name` 


## 方法


###  `__enter__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6308-L6353)

```
 __enter__()
 
```

启动范围块。

#### 返回：
作用域名称。

#### 加薪：
- **`ValueError`** : if neither  `name`  nor  `default_name`  is providedbut  `values`  are.


###  `__exit__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6355-L6364)

```
 __exit__(
    type_arg,
    value_arg,
    traceback_arg
)
 
```

