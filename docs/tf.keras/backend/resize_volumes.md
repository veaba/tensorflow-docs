Resizes the volume contained in a 5D tensor.
### Aliases:
- `tf.compat.v1.keras.backend.resize_volumes`
- `tf.compat.v2.keras.backend.resize_volumes`

```
 tf.keras.backend.resize_volumes(
    x,
    depth_factor,
    height_factor,
    width_factor,
    data_format
)
```
#### Arguments:
- `x`: Tensor or variable to resize.
- `depth_factor`: Positive integer.
- `height_factor`: Positive integer.
- `width_factor`: Positive integer.
- `data_format`: One of `"channels_first"`, `"channels_last"`.
#### Returns:
A tensor.
#### Raises:
- `ValueError`: if `data_format` is neither `channels_last` or `channels_first`.
