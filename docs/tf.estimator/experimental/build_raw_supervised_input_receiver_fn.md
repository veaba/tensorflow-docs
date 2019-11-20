[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/export/export.py)  
---  
  
Build a supervised_input_receiver_fn for raw features and labels.

### Aliases:

  * [`tf.compat.v1.estimator.experimental.build_raw_supervised_input_receiver_fn`](/api_docs/python/tf/estimator/experimental/build_raw_supervised_input_receiver_fn)
  * [`tf.compat.v2.estimator.experimental.build_raw_supervised_input_receiver_fn`](/api_docs/python/tf/estimator/experimental/build_raw_supervised_input_receiver_fn)

    
    
    tf.estimator.experimental.build_raw_supervised_input_receiver_fn(
        features,
        labels,
        default_batch_size=None
    )
    

This function wraps tensor placeholders in a supervised_receiver_fn with the
expectation that the features and labels appear precisely as the model_fn
expects them. Features and labels can therefore be dicts of tensors, or raw
tensors.

#### Args:

  * **`features`** : a dict of string to `Tensor` or `Tensor`.
  * **`labels`** : a dict of string to `Tensor` or `Tensor`.
  * **`default_batch_size`** : the number of query examples expected per batch. Leave unset for variable batch size (recommended).

#### Returns:

A supervised_input_receiver_fn.

#### Raises:

  * **`ValueError`** : if features and labels have overlapping keys.

