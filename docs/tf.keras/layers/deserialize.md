Instantiates a layer from a config dictionary.



### Aliases:

- [ `tf.compat.v1.keras.layers.deserialize` ](/api_docs/python/tf/keras/layers/deserialize)

- [ `tf.compat.v2.keras.layers.deserialize` ](/api_docs/python/tf/keras/layers/deserialize)



```
 tf.keras.layers.deserialize(
    config,
    custom_objects=None
)
 
```



#### Arguments:

- **`config`** : dict of the form {'class_name': str, 'config': dict}

- **`custom_objects`** : dict mapping class names (or function names)
of custom (non-Keras) objects to class/functions



#### Returns:
Layer instance (may be Model, Sequential, Network, Layer...)

