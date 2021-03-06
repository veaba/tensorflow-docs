Build a serving_input_receiver_fn expecting fed tf.Examples.

**别名** : [ `tf.compat.v1.estimator.export.build_parsing_serving_input_receiver_fn` ](/api_docs/python/tf/estimator/export/build_parsing_serving_input_receiver_fn), [ `tf.compat.v2.estimator.export.build_parsing_serving_input_receiver_fn` ](/api_docs/python/tf/estimator/export/build_parsing_serving_input_receiver_fn)

```
 tf.estimator.export.build_parsing_serving_input_receiver_fn(
    feature_spec,
    default_batch_size=None
)
 
```

### 在指南中使用：
- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)
Creates a serving_input_receiver_fn that expects a serialized tf.Example fedinto a string placeholder.  The function parses the tf.Example according tothe provided feature_spec, and returns all parsed Tensors as features.

#### 参数：
- **`feature_spec`** : a dict of string to  `VarLenFeature` / `FixedLenFeature` .
- **`default_batch_size`** : the number of query examples expected per batch.Leave unset for variable batch size (recommended).


#### 返回：
A serving_input_receiver_fn suitable for use in serving.

