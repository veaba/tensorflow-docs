Instantiates a Keras model from its config.
### Aliases:
- `tf.compat.v1.keras.models.model_from_config`
- `tf.compat.v2.keras.models.model_from_config`

```
 tf.keras.models.model_from_config(
    config,
    custom_objects=None
)
```
#### Arguments:
- `config`: Configuration dictionary.
- `custom_objects`: Optional dictionary mapping names (strings) to custom classes or functions to be considered during deserialization.
#### Returns:
A Keras model instance (uncompiled).
#### Raises:
- `TypeError`: if `config` is not a dictionary.
