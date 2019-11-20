[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/estimator/export/build_parsing_serving_input_receiver_fn)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/export/export.py)  
  
  
Build a serving_input_receiver_fn expecting fed tf.Examples.

### Aliases:

  * [`tf.compat.v1.estimator.export.build_parsing_serving_input_receiver_fn`](/api_docs/python/tf/estimator/export/build_parsing_serving_input_receiver_fn)
  * [`tf.compat.v2.estimator.export.build_parsing_serving_input_receiver_fn`](/api_docs/python/tf/estimator/export/build_parsing_serving_input_receiver_fn)

    
    
    tf.estimator.export.build_parsing_serving_input_receiver_fn(
        feature_spec,
        default_batch_size=None
    )
    

### Used in the guide:

  * [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)

Creates a serving_input_receiver_fn that expects a serialized tf.Example fed
into a string placeholder. The function parses the tf.Example according to the
provided feature_spec, and returns all parsed Tensors as features.

#### Args:

  * **`feature_spec`** : a dict of string to `VarLenFeature`/`FixedLenFeature`.
  * **`default_batch_size`** : the number of query examples expected per batch. Leave unset for variable batch size (recommended).

#### Returns:

A serving_input_receiver_fn suitable for use in serving.

