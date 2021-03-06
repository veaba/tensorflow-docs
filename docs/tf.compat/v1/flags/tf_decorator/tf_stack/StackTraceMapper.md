

## Class  `StackTraceMapper` 
允许将回溯信息重新映射到不同的源代码。

Inherits From: [ `StackTraceTransform` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/tf_stack/StackTraceTransform)

## 方法


###  `__enter__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/tf_stack.py#L59-L75)

```
 __enter__()
 
```

###  `__exit__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/tf_stack.py#L77-L79)

```
 __exit__(
    unused_type,
    unused_value,
    unused_traceback
)
 
```

###  `get_effective_source_map` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/tf_stack.py#L92-L94)

```
 get_effective_source_map()
 
```

Returns a map (filename, lineno) -> (filename, lineno, function_name).

###  `reset` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/tf_stack.py#L89-L90)

```
 reset()
 
```

