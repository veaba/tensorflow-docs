
Converts a dense tensor into a sparse tensor.
### Aliases:
- `tf.compat.v1.sparse.from_dense`
- `tf.compat.v2.sparse.from_dense`

```
 tf.sparse.from_dense(
    tensor,
    name=None
)
```

Only elements not equal to zero will be present in the result. The resulting SparseTensor has the same dtype and shape as the input.
#### Args:
- `tensor`: A dense `Tensor` to be converted to a `SparseTensor`.
- `name`: Optional `name` for the op.
#### Returns:

The SparseTensor.
