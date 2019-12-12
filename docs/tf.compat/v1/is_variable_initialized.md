Tests if a variable has been initialized.

```
 tf.compat.v1.is_variable_initialized(variable)
 
```

#### Args:
- **`variable`** : A  `Variable` .


#### Returns:
Returns a scalar boolean Tensor,  `True`  if the variable has beeninitialized,  `False`  otherwise.

**NOTE**  The output of this function should be used.  If it is not, a warning will be logged.  To mark the output as used, call its .mark_used() method.

