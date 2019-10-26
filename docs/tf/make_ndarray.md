Create a numpy ndarray from a tensor.
### Aliases:
- tf.compat.v1.make_ndarray
- tf.compat.v2.make_ndarray

```
 tf.make_ndarray(tensor)
```
Create a numpy ndarray with the same shape and data as the tensor.
#### Args:
- tensor: A TensorProto.
#### Returns:
A numpy array with the tensor contents.
#### Raises:
- TypeError: if tensor has unsupported type.
