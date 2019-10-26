Statically asserts that the given Tensor is of the specified type.
### Aliases:
- tf.compat.v1.debugging.assert_type

```
 tf.compat.v1.assert_type(
    tensor,
    tf_type,
    message=None,
    name=None
)
```
#### Args:
- tensor: A Tensor.
- tf_type: A tensorflow type (dtypes.float32, tf.int64, dtypes.bool, etc).
- message: A string to prefix to the default message.
- name: A name to give this Op. Defaults to "assert_type"
#### Raises:
- TypeError: If the tensors data type doesn't match tf_type.
#### Returns:
A no_op that does nothing. Type can be determined statically.
