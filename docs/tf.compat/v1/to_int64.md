Casts a tensor to type int64. (deprecated)

```
 tf.compat.v1.to_int64(
    x,
    name='ToInt64'
)
```
#### Args:
- x: A Tensor or SparseTensor or IndexedSlices.
- name: A name for the operation (optional).
#### Returns:
A Tensor or SparseTensor or IndexedSlices with same shape as x with type int64.
#### Raises:
- TypeError: If x cannot be cast to the int64.
