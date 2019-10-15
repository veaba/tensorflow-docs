Checks whether `x` is a tensor or "tensor-like".
### Aliases:
- `tf.compat.v1.is_tensor`
- `tf.compat.v2.is_tensor`

```
 tf.is_tensor(x)
```
If is_tensor(`x`) returns `True`, it is safe to assume that `x` is a tensor or can be converted to a tensor using ops.convert_to_tensor(`x`).
#### Args:
- `x`: A python object to check.
#### Returns:
`True` if `x` is a tensor or "tensor-like", `False` if not.
