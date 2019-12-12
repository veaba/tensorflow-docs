解析一个yaml模型配置文件并返回一个模型实例。

**别名** : [ `tf.compat.v1.keras.models.model_from_yaml` ](/api_docs/python/tf/keras/models/model_from_yaml), [ `tf.compat.v2.keras.models.model_from_yaml` ](/api_docs/python/tf/keras/models/model_from_yaml)

```
 tf.keras.models.model_from_yaml(
    yaml_string,
    custom_objects=None
)
 
```

### 在指南中使用：
- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)


#### 参数：
- **`yaml_string`** : YAML string encoding a model configuration.
- **`custom_objects`** : Optional dictionary mapping names(strings) to custom classes or functions to beconsidered during deserialization.


#### 返回：
Keras模型实例（未编译）。

#### 加薪：
- **`ImportError`** : if yaml module is not found.
