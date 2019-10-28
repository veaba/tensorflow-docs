Returns the batched diagonal part of a batched tensor.
### Aliases:
- `tf.compat.v1.linalg.diag_part`
- `tf.compat.v1.matrix_diag_part`
- `tf.compat.v2.linalg.diag_part`

```
 tf.linalg.diag_part(
    input,
    name='diag_part',
    k=0,
    padding_value=0
)
```
Returns a tensor with the `k[0]`-th to `k[1]`-th diagonals of the batched `input`.
