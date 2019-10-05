
Casts a tensor to type float32. (deprecated)

```
 tf.compat.v1.to_float(
    x,
    name='ToFloat'
)
```
#### Args:
- `x`: A `Tensor` or `SparseTensor` or `IndexedSlices`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor or SparseTensor or IndexedSlices with same shape as x with type float32.
#### Raises:
- `TypeError`: If `x` cannot be cast to the `float32`.
