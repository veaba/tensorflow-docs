Write a scalar summary.
### Aliases:
- `tf.compat.v2.summary.scalar`

```
 tf.summary.scalar(
    name,
    data,
    step=None,
    description=None
)
```
### Used in the guide:
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
#### Arguments:
- `name`: A `name` for this summary. The summary tag used for TensorBoard will be this `name` prefixed by any active `name` scopes.
- `data`: A real numeric scalar value, convertible to a `float32` Tensor.
#### Returns:
True on success, or false if no summary was written because no default summary writer was available.
#### Raises:
