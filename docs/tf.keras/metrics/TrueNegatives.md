[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/metrics/TrueNegatives) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1004-L1050)  
---|---  
  
## Class `TrueNegatives`

Calculates the number of true negatives.

### Aliases:

  * Class [`tf.compat.v1.keras.metrics.TrueNegatives`](/api_docs/python/tf/keras/metrics/TrueNegatives)
  * Class [`tf.compat.v2.keras.metrics.TrueNegatives`](/api_docs/python/tf/keras/metrics/TrueNegatives)
  * Class [`tf.compat.v2.metrics.TrueNegatives`](/api_docs/python/tf/keras/metrics/TrueNegatives)
  * Class [`tf.metrics.TrueNegatives`](/api_docs/python/tf/keras/metrics/TrueNegatives)

### Used in the tutorials:

  * [Classification on imbalanced data](https://tensorflow.google.cn/tutorials/structured_data/imbalanced_data)

For example, if `y_true` is [0, 1, 0, 0] and `y_pred` is [1, 1, 0, 0] then the
true negatives value is 2. If the weights were specified as [0, 0, 1, 0] then
the true negatives value would be 1.

If `sample_weight` is given, calculates the sum of the weights of true
negatives. This metric creates one local variable, `accumulator` that is used
to keep track of the number of true negatives.

If `sample_weight` is `None`, weights default to 1. Use `sample_weight` of 0
to mask values.

#### Usage:

    
    
    m = tf.keras.metrics.TrueNegatives()
    m.update_state([0, 1, 0, 0], [1, 1, 0, 0])
    print('Final result: ', m.result().numpy())  # Final result: 2
    

Usage with tf.keras API:

    
    
    model = tf.keras.Model(inputs, outputs)
    model.compile('sgd', loss='mse', metrics=[tf.keras.metrics.TrueNegatives()])
    

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1034-L1050)

    
    
    __init__(
        thresholds=None,
        name=None,
        dtype=None
    )
    

Creates a `TrueNegatives` instance.

#### Args:

  * **`thresholds`** : (Optional) Defaults to 0.5. A float value or a python list/tuple of float threshold values in [0, 1]. A threshold is compared with prediction values to determine the truth value of predictions (i.e., above the threshold is `true`, below is `false`). One metric value is generated for each threshold value.
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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L892-L895)

    
    
    reset_states()
    

Resets all of the metric state variables.

This function is called between epochs/steps, when a metric is evaluated
during training.

### `result`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L885-L890)

    
    
    result()
    

Computes and returns the metric value tensor.

Result computation is an idempotent operation that simply calculates the
metric value using the state variables.

### `update_state`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L865-L883)

    
    
    update_state(
        y_true,
        y_pred,
        sample_weight=None
    )
    

Accumulates the given confusion matrix condition statistics.

#### Args:

  * **`y_true`** : The ground truth values.
  * **`y_pred`** : The predicted values.
  * **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can be a `Tensor` whose rank is either 0, or the same rank as `y_true`, and must be broadcastable to `y_true`.

#### Returns:

Update op.

