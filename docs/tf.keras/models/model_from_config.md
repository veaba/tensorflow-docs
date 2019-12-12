从配置中实例化keras模型。

**别名** : [ `tf.compat.v1.keras.models.model_from_config` ](/api_docs/python/tf/keras/models/model_from_config), [ `tf.compat.v2.keras.models.model_from_config` ](/api_docs/python/tf/keras/models/model_from_config)

```
 tf.keras.models.model_from_config(
    config,
    custom_objects=None
)
 
```

#### 参数：
- **`config`** : Configuration dictionary.
- **`custom_objects`** : Optional dictionary mapping names(strings) to custom classes or functions to beconsidered during deserialization.


#### 返回：
Keras模型实例（未编译）。

#### 加薪：
- **`TypeError`** : if  `config`  is not a dictionary.
