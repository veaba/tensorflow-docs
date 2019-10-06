
Retrieves a Keras Optimizer instance.
### Aliases:
- `tf.compat.v1.keras.optimizers.get`
- `tf.compat.v2.keras.optimizers.get`
- `tf.compat.v2.optimizers.get`
- `tf.optimizers.get`

```
 tf.keras.optimizers.get(identifier)
```
#### Arguments:
- `identifier`: Optimizer `identifier`, one of
String: name of an optimizer
Dictionary: configuration dictionary. - Keras Optimizer instance (it will be returned unchanged). - TensorFlow Optimizer instance (it will be wrapped as a Keras Optimizer).
- String: name of an optimizer
- Dictionary: configuration dictionary. - Keras Optimizer instance (it will be returned unchanged). - TensorFlow Optimizer instance (it will be wrapped as a Keras Optimizer).
#### Returns:

A Keras Optimizer instance.
#### Raises:
- `ValueError`: If `identifier` cannot be interpreted.
