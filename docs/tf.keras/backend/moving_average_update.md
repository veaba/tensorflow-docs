
Compute the moving average of a variable.
### Aliases:
- `tf.compat.v1.keras.backend.moving_average_update`
- `tf.compat.v2.keras.backend.moving_average_update`

```
 tf.keras.backend.moving_average_update(
    x,
    value,
    momentum
)
```
#### Arguments:
- `x`: A Variable.
- `value`: A tensor with the same shape as `variable`.
- `momentum`: The moving average `momentum`.
#### Returns:

An Operation to update the variable.
