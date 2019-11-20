[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/metrics/TopKCategoricalAccuracy)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L768-L797)  
  
  
## Class `TopKCategoricalAccuracy`

Computes how often targets are in the top `K` predictions.

### Aliases:

  * Class [`tf.compat.v1.keras.metrics.TopKCategoricalAccuracy`](/api_docs/python/tf/keras/metrics/TopKCategoricalAccuracy)
  * Class [`tf.compat.v2.keras.metrics.TopKCategoricalAccuracy`](/api_docs/python/tf/keras/metrics/TopKCategoricalAccuracy)
  * Class [`tf.compat.v2.metrics.TopKCategoricalAccuracy`](/api_docs/python/tf/keras/metrics/TopKCategoricalAccuracy)
  * Class [`tf.metrics.TopKCategoricalAccuracy`](/api_docs/python/tf/keras/metrics/TopKCategoricalAccuracy)

#### Usage:

    
    
    m = tf.keras.metrics.TopKCategoricalAccuracy()
    m.update_state([[0, 0, 1], [0, 1, 0]], [[0.1, 0.9, 0.8], [0.05, 0.95, 0]])
    print('Final result: ', m.result().numpy())  # Final result: 1.0
    

Usage with tf.keras API:

    
    
    model = tf.keras.Model(inputs, outputs)
    model.compile('sgd', metrics=[tf.keras.metrics.TopKCategoricalAccuracy()])
    

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L787-L797)

    
    
    __init__(
        k=5,
        name='top_k_categorical_accuracy',
        dtype=None
    )
    

Creates a `TopKCategoricalAccuracy` instance.

#### Args:

  * **`k`** : (Optional) Number of top elements to look at for computing accuracy. Defaults to 5.
  * **`name`** : (Optional) string name of the metric instance.
  * **`dtype`** : (Optional) data type of the metric result.

## `__new__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L144-L160)

    
    
    __new__(
        cls,
        *args,
        **kwargs
    )
    

Create and return a new object. See help(type) for accurate signature.

## Methods

### `reset_states`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L203-L209)

    
    
    reset_states()
    

Resets all of the metric state variables.

This function is called between epochs/steps, when a metric is evaluated
during training.

### `result`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L361-L371)

    
    
    result()
    

Computes and returns the metric value tensor.

Result computation is an idempotent operation that simply calculates the
metric value using the state variables.

### `update_state`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L558-L583)

    
    
    update_state(
        y_true,
        y_pred,
        sample_weight=None
    )
    

Accumulates metric statistics.

`y_true` and `y_pred` should have the same shape.

#### Args:

  * **`y_true`** : The ground truth values.
  * **`y_pred`** : The predicted values.
  * **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can be a `Tensor` whose rank is either 0, or the same rank as `y_true`, and must be broadcastable to `y_true`.

#### Returns:

Update op.

