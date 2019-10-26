3D convolution.
### Aliases:
- tf.compat.v1.keras.backend.conv3d
- tf.compat.v2.keras.backend.conv3d

```
 tf.keras.backend.conv3d(
    x,
    kernel,
    strides=(1, 1, 1),
    padding='valid',
    data_format=None,
    dilation_rate=(1, 1, 1)
)
```
#### Arguments:
- x: Tensor or variable.
- kernel: kernel tensor.
- strides: strides tuple.
- padding: string, "same" or "valid".
- data_format: string, "channels_last" or "channels_first".
- dilation_rate: tuple of 3 integers.
#### Returns:
A tensor, result of 3D convolution.
#### Raises:
- ValueError: if data_format is neither channels_last or channels_first.
