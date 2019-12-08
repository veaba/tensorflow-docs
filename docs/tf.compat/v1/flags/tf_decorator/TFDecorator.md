

## Class  `TFDecorator` 
Base class for all TensorFlow decorators.



### Aliases:

- Class [ `tf.compat.v1.app.flags.tf_decorator.TFDecorator` ](/api_docs/python/tf/compat/v1/flags/tf_decorator/TFDecorator)

TFDecorator captures and exposes the wrapped target, and provides details
about the current decorator.



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



## Properties


###  `decorated_target` 


###  `decorator_argspec` 


###  `decorator_doc` 


###  `decorator_name` 


## Methods


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/tf_decorator.py#L259-L260)



```
 __call__(
    *args,
    **kwargs
)
 
```

Call self as a function.

