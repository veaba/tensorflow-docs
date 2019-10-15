
Returns the value of more than one tensor variable.
### Aliases:
- `tf.compat.v1.keras.backend.batch_get_value`
- `tf.compat.v2.keras.backend.batch_get_value`

```
 tf.keras.backend.batch_get_value(tensors)
```
#### Arguments:
- `tensors`: list of ops to run.
#### Returns:

A list of Numpy arrays.
#### Raises:
- `RuntimeError`: If this method is called inside defun.
