Maximum value in a tensor.
### Aliases:
- `tf.compat.v1.keras.backend.max`
- `tf.compat.v2.keras.backend.max`

```
 tf.keras.backend.max(
    x,
    axis=None,
    keepdims=False
)
```
#### Arguments:
- `x`: A tensor or variable.
- `axis`: An integer, the `axis` to find maximum values.
- `keepdims`: A boolean, whether to keep the dimensions or not. If `keepdims` is `False`, the rank of the tensor is reduced by 1. If `keepdims` is `True`, the reduced dimension is retained with length 1.
#### Returns:
A tensor with ma`x`imum values of `x`.
