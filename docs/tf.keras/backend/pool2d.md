2D Pooling.
### Aliases:
- `tf.compat.v1.keras.backend.pool2d`
- `tf.compat.v2.keras.backend.pool2d`

```
 tf.keras.backend.pool2d(
    x,
    pool_size,
    strides=(1, 1),
    padding='valid',
    data_format=None,
    pool_mode='max'
)
```
#### Arguments:
- `x`: Tensor or variable.
- `pool_size`: tuple of 2 integers.
- `strides`: tuple of 2 integers.
- `padding`: string, `"same"` or `"valid"`.
- `data_format`: string, `"channels_last"` or `"channels_first"`.
- `pool_mode`: string, `"max"` or `"avg"`.
#### Returns:
A tensor, result of 2D pooling.
#### Raises:
- `ValueError`: if `data_format` is neither `"channels_last"` or `"channels_first"`.
- `ValueError`: if `pool_size` is not a tuple of 2 integers.
- `ValueError`: if `strides` is not a tuple of 2 integers.
- `ValueError`: if `pool_mode` is neither `"max"` or `"avg"`.
