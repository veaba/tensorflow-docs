[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/utils/CustomObjectScope) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/generic_utils.py#L41-L73)  
---|---  
  
## Class `CustomObjectScope`

Provides a scope that changes to `_GLOBAL_CUSTOM_OBJECTS` cannot escape.

### Aliases:

  * Class [`tf.compat.v1.keras.utils.CustomObjectScope`](/api_docs/python/tf/keras/utils/CustomObjectScope)
  * Class [`tf.compat.v2.keras.utils.CustomObjectScope`](/api_docs/python/tf/keras/utils/CustomObjectScope)

Code within a `with` statement will be able to access custom objects by name.
Changes to global custom objects persist within the enclosing `with`
statement. At end of the `with` statement, global custom objects are reverted
to state at beginning of the `with` statement.

#### Example:

Consider a custom object `MyObject` (e.g. a class):

    
    
        with CustomObjectScope({'MyObject':MyObject}):
            layer = Dense(..., kernel_regularizer='MyObject')
            # save, load, etc. will recognize custom object by name
    

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/generic_utils.py#L61-L63)

    
    
    __init__(*args)
    

Initialize self. See help(type(self)) for accurate signature.

## Methods

### `__enter__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/generic_utils.py#L65-L69)

    
    
    __enter__()
    

### `__exit__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/generic_utils.py#L71-L73)

    
    
    __exit__(
        *args,
        **kwargs
    )
    

