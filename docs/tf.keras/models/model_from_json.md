
Parses a JSON model configuration file and returns a model instance.
### Aliases:
- `tf.compat.v1.keras.models.model_from_json`
- `tf.compat.v2.keras.models.model_from_json`

```
 tf.keras.models.model_from_json(
    json_string,
    custom_objects=None
)
```
### Used in the guide:
- ``K``e``r``a``s`` ``o``v``e``r``v``i``e``w``
- ``S``a``v``e`` ``a``n``d`` ``s``e``r``i``a``l``i``z``e`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
#### Arguments:
- `json_string`: JSON string encoding a model configuration.
- `custom_objects`: Optional dictionary mapping names (strings) to custom classes or functions to be considered during deserialization.
#### Returns:

A Keras model instance (uncompiled).
