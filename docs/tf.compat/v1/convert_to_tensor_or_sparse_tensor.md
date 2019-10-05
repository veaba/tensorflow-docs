
Converts value to a SparseTensor or Tensor.

```
 tf.compat.v1.convert_to_tensor_or_sparse_tensor(
    value,
    dtype=None,
    name=None
)
```
#### Args:
- `value`: A `SparseTensor`, `SparseTensor`Value, or an object whose type has a registered `Tensor` conversion function.
- `dtype`: Optional element type for the returned tensor. If missing, the type is inferred from the type of `value`.
- `name`: Optional `name` to use if a new `Tensor` is created.
#### Returns:

A SparseTensor or Tensor based on value.
#### Raises:
- `RuntimeError`: If result type is incompatible with `dtype`.
