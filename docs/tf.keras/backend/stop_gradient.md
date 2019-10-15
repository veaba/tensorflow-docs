
Returns variables but with zero gradient w.r.t. every other variable.
### Aliases:
- `tf.compat.v1.keras.backend.stop_gradient`
- `tf.compat.v2.keras.backend.stop_gradient`

```
 tf.keras.backend.stop_gradient(variables)
```
#### Arguments:
- `variables`: Tensor or list of tensors to consider constant with respect to any other variable.
#### Returns:

A single tensor or a list of tensors (depending on the passed argument) that has no gradient with respect to any other variable.
