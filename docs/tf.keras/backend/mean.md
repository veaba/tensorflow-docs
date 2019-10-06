
Mean of a tensor, alongside the specified axis.
### Aliases:
- `tf.compat.v1.keras.backend.mean`
- `tf.compat.v2.keras.backend.mean`

```
 tf.keras.backend.mean(
    x,
    axis=None,
    keepdims=False
)
```
#### Arguments:
- `x`: A tensor or variable.
- `axis`: A list of integer. A`x`es to compute the mean.
- `keepdims`: A boolean, whether to keep the dimensions or not. If `keepdims` is `False`, the rank of the tensor is reduced by 1 for each entry in `axis`. If `keepdims` is `True`, the reduced dimensions are retained with length 1.
#### Returns:

A tensor with the mean of elements of x.
