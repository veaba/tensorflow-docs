解析json模型配置文件并返回模型实例。

**别名** : [ `tf.compat.v1.keras.models.model_from_json` ](/api_docs/python/tf/keras/models/model_from_json), [ `tf.compat.v2.keras.models.model_from_json` ](/api_docs/python/tf/keras/models/model_from_json)

```
 tf.keras.models.model_from_json(
    json_string,
    custom_objects=None
)
 
```

### 在指南中使用：
- [Save and serialize models with Keras](https://tensorflow.google.cn/guide/keras/save_and_serialize)
- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)


#### 参数：
- **`json_string`** : JSON string encoding a model configuration.
- **`custom_objects`** : Optional dictionary mapping names(strings) to custom classes or functions to beconsidered during deserialization.


#### 返回：
Keras模型实例（未编译）。

