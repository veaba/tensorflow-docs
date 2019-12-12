Parses a yaml model configuration file and returns a model instance.

**Aliases** : [ `tf.compat.v1.keras.models.model_from_yaml` ](/api_docs/python/tf/keras/models/model_from_yaml), [ `tf.compat.v2.keras.models.model_from_yaml` ](/api_docs/python/tf/keras/models/model_from_yaml)

```
 tf.keras.models.model_from_yaml(
    yaml_string,
    custom_objects=None
)
 
```

### Used in the guide:
- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)


#### Arguments:
- **`yaml_string`** : YAML string encoding a model configuration.
- **`custom_objects`** : Optional dictionary mapping names(strings) to custom classes or functions to beconsidered during deserialization.


#### Returns:
A Keras model instance (uncompiled).

#### Raises:
- **`ImportError`** : if yaml module is not found.
