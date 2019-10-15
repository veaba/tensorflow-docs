
Pads the 2nd and 3rd dimensions of a 4D tensor.
### Aliases:
- `tf.compat.v1.keras.backend.spatial_2d_padding`
- `tf.compat.v2.keras.backend.spatial_2d_padding`

```
 tf.keras.backend.spatial_2d_padding(
    x,
    padding=((1, 1), (1, 1)),
    data_format=None
)
```
#### Arguments:
- `x`: Tensor or variable.
- `padding`: Tuple of 2 tuples, `padding` pattern.
- `data_format`: One of `channels_last` or `channels_first`.
#### Returns:

A padded 4D tensor.
#### Raises:
- `ValueError`: if `data_format` is neither `channels_last` or `channels_first`.
