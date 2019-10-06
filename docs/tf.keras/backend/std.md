
Standard deviation of a tensor, alongside the specified axis.
### Aliases:
- `tf.compat.v1.keras.backend.std`
- `tf.compat.v2.keras.backend.std`

```
 tf.keras.backend.std(
    x,
    axis=None,
    keepdims=False
)
```
### Used in the guide:
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
#### Arguments:
- `x`: A tensor or variable.
- `axis`: An integer, the `axis` to compute the standard deviation.
- `keepdims`: A boolean, whether to keep the dimensions or not. If `keepdims` is `False`, the rank of the tensor is reduced by 1. If `keepdims` is `True`, the reduced dimension is retained with length 1.
#### Returns:

A tensor with the standard deviation of elements of x.
