Adds a bias vector to a tensor.
### Aliases:
- tf.compat.v1.keras.backend.bias_add
- tf.compat.v2.keras.backend.bias_add

```
 tf.keras.backend.bias_add(
    x,
    bias,
    data_format=None
)
```
#### Arguments:
- x: Tensor or variable.
- bias: Bias tensor to add.
- data_format: string, "channels_last" or "channels_first".
#### Returns:
Output tensor.
#### Raises:
- ValueError: In one of the two cases below: 1. invalid data_format argument. 2. invalid bias shape. the bias should be either a vector or a tensor with ndim(x) - 1 dimension
