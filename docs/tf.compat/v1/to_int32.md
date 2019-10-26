Casts a tensor to type int32. (deprecated)

```
 tf.compat.v1.to_int32(
    x,
    name='ToInt32'
)
```
#### Args:
- x: A Tensor or SparseTensor or IndexedSlices.
- name: A name for the operation (optional).
#### Returns:
A Tensor or SparseTensor or IndexedSlices with same shape as x with type int32.
#### Raises:
- TypeError: If x cannot be cast to the int32.
