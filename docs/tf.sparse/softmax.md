Applies softmax to a batched N-D `SparseTensor`.
### Aliases:
- `tf.compat.v1.sparse.softmax`
- `tf.compat.v1.sparse_softmax`
- `tf.compat.v2.sparse.softmax`

```
 tf.sparse.softmax(
    sp_input,
    name=None
)
```
The inputs represent an N-D SparseTensor with logical shape `[..., B, C]` (where `N >= 2`), and with indices sorted in the canonical lexicographic order.
