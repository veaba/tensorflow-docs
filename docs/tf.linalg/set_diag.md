Returns a batched matrix tensor with new batched diagonal values.
### Aliases:
- `tf.compat.v1.linalg.set_diag`
- `tf.compat.v1.matrix_set_diag`
- `tf.compat.v2.linalg.set_diag`

```
 tf.linalg.set_diag(
    input,
    diagonal,
    name='set_diag',
    k=0
)
```
Given `input` and `diagonal`, this operation returns a tensor with the same shape and values as `input`, except for the specified `diagonal`s of the innermost matrices. These will be overwritten by the values in `diagonal`.
