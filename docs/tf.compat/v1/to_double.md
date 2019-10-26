Casts a tensor to type float64. (deprecated)

```
 tf.compat.v1.to_double(
    x,
    name='ToDouble'
)
```
#### Args:
- x: A Tensor or SparseTensor or IndexedSlices.
- name: A name for the operation (optional).
#### Returns:
A Tensor or SparseTensor or IndexedSlices with same shape as x with type float64.
#### Raises:
- TypeError: If x cannot be cast to the float64.
