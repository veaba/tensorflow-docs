

## Class  `TFDecorator` 
所有TensorFlow装饰程序的基类。

TFDecorator captures and exposes the wrapped target, and provides detailsabout the current decorator.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/tf_decorator.py#L236-L254)

```
 __init__(
    decorator_name,
    target,
    decorator_doc='',
    decorator_argspec=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 属性


###  `decorated_target` 


###  `decorator_argspec` 


###  `decorator_doc` 


###  `decorator_name` 


## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/tf_decorator.py#L259-L260)

```
 __call__(
    *args,
    **kwargs
)
 
```

作为函数调用self。

