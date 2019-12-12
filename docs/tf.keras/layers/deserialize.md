从配置字典实例化层。

**别名** : [ `tf.compat.v1.keras.layers.deserialize` ](/api_docs/python/tf/keras/layers/deserialize), [ `tf.compat.v2.keras.layers.deserialize` ](/api_docs/python/tf/keras/layers/deserialize)

```
 tf.keras.layers.deserialize(
    config,
    custom_objects=None
)
 
```

#### 参数：
- **`config`** : dict of the form {'class_name': str, 'config': dict}
- **`custom_objects`** : dict mapping class names (or function names)of custom (non-Keras) objects to class/functions


#### 返回：
Layer instance (may be Model, Sequential, Network, Layer...)

