Build a serving_input_receiver_fn expecting feature Tensors.

**别名** : [ `tf.compat.v1.estimator.export.build_raw_serving_input_receiver_fn` ](/api_docs/python/tf/estimator/export/build_raw_serving_input_receiver_fn), [ `tf.compat.v2.estimator.export.build_raw_serving_input_receiver_fn` ](/api_docs/python/tf/estimator/export/build_raw_serving_input_receiver_fn)

```
 tf.estimator.export.build_raw_serving_input_receiver_fn(
    features,
    default_batch_size=None
)
 
```

Creates an serving_input_receiver_fn that expects all features to be feddirectly.

#### 参数：
- **`features`** : a dict of string to  `Tensor` .
- **`default_batch_size`** : the number of query examples expected per batch.Leave unset for variable batch size (recommended).


#### 返回：
A serving_input_receiver_fn.

