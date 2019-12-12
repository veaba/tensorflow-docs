Sets the manual variable initialization flag.

**Aliases** : [ `tf.compat.v1.keras.backend.manual_variable_initialization` ](/api_docs/python/tf/keras/backend/manual_variable_initialization), [ `tf.compat.v2.keras.backend.manual_variable_initialization` ](/api_docs/python/tf/keras/backend/manual_variable_initialization)

```
 tf.keras.backend.manual_variable_initialization(value) 
```

This boolean flag determines whethervariables should be initializedas they are instantiated (default), or ifthe user should handle the initialization(e.g. via [ `tf.compat.v1.initialize_all_variables()` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/initialize_all_variables)).

#### Arguments:
- **`value`** : Python boolean.
