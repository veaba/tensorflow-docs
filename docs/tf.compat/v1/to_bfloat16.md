Casts a tensor to type bfloat16. (deprecated)

```
 tf.compat.v1.to_bfloat16(
    x,
    name='ToBFloat16'
)
```
#### Args:
- x: A Tensor or SparseTensor or IndexedSlices.
- name: A name for the operation (optional).
#### Returns:
A Tensor or SparseTensor or IndexedSlices with same shape as x with type bfloat16.
#### Raises:
- TypeError: If x cannot be cast to the bfloat16.
