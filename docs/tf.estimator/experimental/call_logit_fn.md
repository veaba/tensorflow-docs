[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/estimator/experimental/call_logit_fn)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/model_fn.py)  
---|---  
  
Calls logit_fn (experimental).

### Aliases:

  * [`tf.compat.v1.estimator.experimental.call_logit_fn`](/api_docs/python/tf/estimator/experimental/call_logit_fn)
  * [`tf.compat.v2.estimator.experimental.call_logit_fn`](/api_docs/python/tf/estimator/experimental/call_logit_fn)

    
    
    tf.estimator.experimental.call_logit_fn(
        logit_fn,
        features,
        mode,
        params,
        config
    )
    

THIS FUNCTION IS EXPERIMENTAL. Keras layers/models are the recommended APIs
for logit and model composition.

A utility function that calls the provided logit_fn with the relevant subset
of provided arguments. Similar to tf.estimator._call_model_fn().

#### Args:

  * **`logit_fn`** : A logit_fn as defined above.
  * **`features`** : The features dict.
  * **`mode`** : TRAIN / EVAL / PREDICT ModeKeys.
  * **`params`** : The hyperparameter dict.
  * **`config`** : The configuration object.

#### Returns:

A logit Tensor, the output of logit_fn.

#### Raises:

  * **`ValueError`** : if logit_fn does not return a Tensor or a dictionary mapping strings to Tensors.

