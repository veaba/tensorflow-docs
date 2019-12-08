

## Class  `UnrecognizedFlagError` 
Raised when a flag is unrecognized.

Inherits From: [ `Error` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/Error)



### Aliases:

- Class [ `tf.compat.v1.app.flags.UnrecognizedFlagError` ](/api_docs/python/tf/compat/v1/flags/UnrecognizedFlagError)



#### Attributes:

- **`flagname`** : str, the name of the unrecognized flag.

- **`flagvalue`** : The value of the flag, empty if the flag is not defined.



##  `__init__` 


```
 __init__(
    flagname,
    flagvalue='',
    suggestions=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

