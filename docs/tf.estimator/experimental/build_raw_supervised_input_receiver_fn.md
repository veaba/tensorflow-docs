Build a supervised_input_receiver_fn for raw features and labels.

**别名** : [ `tf.compat.v1.estimator.experimental.build_raw_supervised_input_receiver_fn` ](/api_docs/python/tf/estimator/experimental/build_raw_supervised_input_receiver_fn), [ `tf.compat.v2.estimator.experimental.build_raw_supervised_input_receiver_fn` ](/api_docs/python/tf/estimator/experimental/build_raw_supervised_input_receiver_fn)

```
 tf.estimator.experimental.build_raw_supervised_input_receiver_fn(
    features,
    labels,
    default_batch_size=None
)
 
```

This function wraps tensor placeholders in a supervised_receiver_fnwith the expectation that the features and labels appear precisely asthe model_fn expects them. Features and labels can therefore be dicts oftensors, or raw tensors.

#### 参数：
- **`features`** : a dict of string to  `Tensor`  or  `Tensor` .
- **`labels`** : a dict of string to  `Tensor`  or  `Tensor` .
- **`default_batch_size`** : the number of query examples expected per batch.Leave unset for variable batch size (recommended).


#### 返回：
A supervised_input_receiver_fn.

#### 加薪：
- **`ValueError`** : if features and labels have overlapping keys.
