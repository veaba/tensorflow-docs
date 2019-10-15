
Casts a tensor to type complex64. (deprecated)

```
 tf.compat.v1.to_complex64(
    x,
    name='ToComplex64'
)
```
#### Args:
- `x`: A `Tensor` or `SparseTensor` or `IndexedSlices`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor or SparseTensor or IndexedSlices with same shape as x with type complex64.
#### Raises:
- `TypeError`: If `x` cannot be cast to the `complex64`.
