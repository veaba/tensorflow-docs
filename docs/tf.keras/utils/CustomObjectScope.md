

## Class  `CustomObjectScope` 
Provides a scope that changes to  `_GLOBAL_CUSTOM_OBJECTS`  cannot escape.

**别名** : [ `tf.compat.v1.keras.utils.CustomObjectScope` ](/api_docs/python/tf/keras/utils/CustomObjectScope), [ `tf.compat.v2.keras.utils.CustomObjectScope` ](/api_docs/python/tf/keras/utils/CustomObjectScope)

Code within a  `with`  statement will be able to access custom objectsby name. Changes to global custom objects persistwithin the enclosing  `with`  statement. At end of the  `with`  statement,global custom objects are reverted to stateat beginning of the  `with`  statement.

#### 示例：
Consider a custom object  `MyObject`  (e.g. a class):

```
     with CustomObjectScope({'MyObject':MyObject}):
        layer = Dense(..., kernel_regularizer='MyObject')
        # save, load, etc. will recognize custom object by name
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/generic_utils.py#L61-L63)

```
 __init__(*args)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `__enter__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/generic_utils.py#L65-L69)

```
 __enter__()
 
```

###  `__exit__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/generic_utils.py#L71-L73)

```
 __exit__(
    *args,
    **kwargs
)
 
```

