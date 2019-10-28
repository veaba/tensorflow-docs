2D convolution.
### Aliases:
- `tf.compat.v1.keras.backend.conv2d`
- `tf.compat.v2.keras.backend.conv2d`

```
 tf.keras.backend.conv2d(
    x,
    kernel,
    strides=(1, 1),
    padding='valid',
    data_format=None,
    dilation_rate=(1, 1)
)
```
#### Arguments:
- `x`: Tensor or variable.
- `kernel`: `kernel` tensor.
- `strides`: `strides` tuple.
- `padding`: string, `"same"` or `"valid"`.
- `data_format`: `"channels_last"` or `"channels_first"`.
- `dilation_rate`: tuple of 2 integers.
#### Returns:
A tensor, result of 2D convolution.
#### Raises:
- `ValueError`: if `data_format` is neither `channels_last` or `channels_first`.
