[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/metrics/SpecificityAtSensitivity)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1507-L1584)  
  
  
## Class `SpecificityAtSensitivity`

Computes the specificity at a given sensitivity.

### Aliases:

  * Class [`tf.compat.v1.keras.metrics.SpecificityAtSensitivity`](/api_docs/python/tf/keras/metrics/SpecificityAtSensitivity)
  * Class [`tf.compat.v2.keras.metrics.SpecificityAtSensitivity`](/api_docs/python/tf/keras/metrics/SpecificityAtSensitivity)
  * Class [`tf.compat.v2.metrics.SpecificityAtSensitivity`](/api_docs/python/tf/keras/metrics/SpecificityAtSensitivity)
  * Class [`tf.metrics.SpecificityAtSensitivity`](/api_docs/python/tf/keras/metrics/SpecificityAtSensitivity)

`Sensitivity` measures the proportion of actual positives that are correctly
identified as such (tp / (tp + fn)). `Specificity` measures the proportion of
actual negatives that are correctly identified as such (tn / (tn + fp)).

This metric creates four local variables, `true_positives`, `true_negatives`,
`false_positives` and `false_negatives` that are used to compute the
specificity at the given sensitivity. The threshold for the given sensitivity
value is computed and used to evaluate the corresponding specificity.

If `sample_weight` is `None`, weights default to 1. Use `sample_weight` of 0
to mask values.

For additional information about specificity and sensitivity, see the
following: https://en.wikipedia.org/wiki/Sensitivity_and_specificity

#### Usage:

    
    
    m = tf.keras.metrics.SpecificityAtSensitivity(0.8, num_thresholds=1)
    m.update_state([0, 0, 1, 1], [0, 0.5, 0.3, 0.9])
    print('Final result: ', m.result().numpy())  # Final result: 1.0
    

Usage with tf.keras API:

    
    
    model = tf.keras.Model(inputs, outputs)
    model.compile(
        'sgd',
        loss='mse',
        metrics=[tf.keras.metrics.SpecificityAtSensitivity()])
    

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1545-L1560)

    
    
    __init__(
        sensitivity,
        num_thresholds=200,
        name=None,
        dtype=None
    )
    

Creates a `SpecificityAtSensitivity` instance.

#### Args:

  * **`sensitivity`** : A scalar value in range `[0, 1]`.
  * **`num_thresholds`** : (Optional) Defaults to 200. The number of thresholds to use for matching the given specificity.
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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1419-L1422)

    
    
    reset_states()
    

Resets all of the metric state variables.

This function is called between epochs/steps, when a metric is evaluated
during training.

### `result`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1562-L1576)

    
    
    result()
    

Computes and returns the metric value tensor.

Result computation is an idempotent operation that simply calculates the
metric value using the state variables.

### `update_state`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1394-L1417)

    
    
    update_state(
        y_true,
        y_pred,
        sample_weight=None
    )
    

Accumulates confusion matrix statistics.

#### Args:

  * **`y_true`** : The ground truth values.
  * **`y_pred`** : The predicted values.
  * **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can be a `Tensor` whose rank is either 0, or the same rank as `y_true`, and must be broadcastable to `y_true`.

#### Returns:

Update op.

