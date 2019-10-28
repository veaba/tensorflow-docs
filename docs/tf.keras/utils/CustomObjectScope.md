## Class CustomObjectScope
Provides a scope that changes to `_GLOBAL_CUSTOM_OBJECTS` cannot escape.
### Aliases:
- Class `tf.compat.v1.keras.utils.CustomObjectScope`
- Class `tf.compat.v2.keras.utils.CustomObjectScope`
Code `with`in a `with` statement will be able to access custom objects by name. Changes to global custom objects persist `with`in the enclosing `with` statement. At end of the `with` statement, global custom objects are reverted to state at beginning of the `with` statement.
#### Example:
Consider a custom object `MyObject` (e.g. a class):

```
     with CustomObjectScope({'MyObject':MyObject}):
        layer = Dense(..., kernel_regularizer='MyObject')
        # save, load, etc. will recognize custom object by name
```
## __init__
View source

```
 __init__(*args)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### __enter__
View source

```
 __enter__()
```
### __exit__
View source

```
 __exit__(
    *args,
    **kwargs
)
```
