Parses a JSON model configuration file and returns a model instance.
- tf.compat.v1.keras.models.model_from_json
- tf.compat.v2.keras.models.model_from_json

```
 tf.keras.models.model_from_json(
    json_string,
    custom_objects=None
)
```
- Save and serialize models with Keras
- Keras overview
#### Arguments:
- json_string: JSON string encoding a model configuration.
- custom_objects: Optional dictionary mapping names (strings) to custom classes or functions to be considered during deserialization.
#### Returns:
A Keras model instance (uncompiled).
