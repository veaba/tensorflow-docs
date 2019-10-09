
Instantiates a Keras function.
### Aliases:
- `tf.compat.v1.keras.backend.function`
- `tf.compat.v2.keras.backend.function`

```
 tf.keras.backend.function(
    inputs,
    outputs,
    updates=None,
    name=None,
    **kwargs
)
```
#### Arguments:
- `inputs`: List of placeholder tensors.
- `outputs`: List of output tensors.
- `updates`: List of update ops.
- `name`: String, `name` of function.
#### Returns:

Output values as Numpy arrays.
#### Raises:
- `ValueError`: if invalid kwargs are passed in or if in eager execution.