[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/metrics/CategoricalAccuracy)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L675-L722)  
  
  
## Class `CategoricalAccuracy`

Calculates how often predictions matches labels.

### Aliases:

  * Class [`tf.compat.v1.keras.metrics.CategoricalAccuracy`](/api_docs/python/tf/keras/metrics/CategoricalAccuracy)
  * Class [`tf.compat.v2.keras.metrics.CategoricalAccuracy`](/api_docs/python/tf/keras/metrics/CategoricalAccuracy)
  * Class [`tf.compat.v2.metrics.CategoricalAccuracy`](/api_docs/python/tf/keras/metrics/CategoricalAccuracy)
  * Class [`tf.metrics.CategoricalAccuracy`](/api_docs/python/tf/keras/metrics/CategoricalAccuracy)

### Used in the guide:

  * [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)
  * [Keras overview](https://tensorflow.google.cn/guide/keras/overview)

For example, if `y_true` is [[0, 0, 1], [0, 1, 0]] and `y_pred` is [[0.1, 0.9,
0.8], [0.05, 0.95, 0]] then the categorical accuracy is 1/2 or .5. If the
weights were specified as [0.7, 0.3] then the categorical accuracy would be
.3. You can provide logits of classes as `y_pred`, since argmax of logits and
probabilities are same.

This metric creates two local variables, `total` and `count` that are used to
compute the frequency with which `y_pred` matches `y_true`. This frequency is
ultimately returned as `categorical accuracy`: an idempotent operation that
simply divides `total` by `count`.

`y_pred` and `y_true` should be passed in as vectors of probabilities, rather
than as labels. If necessary, use
[`tf.one_hot`](https://tensorflow.google.cn/api_docs/python/tf/one_hot) to
expand `y_true` as a vector.

If `sample_weight` is `None`, weights default to 1. Use `sample_weight` of 0
to mask values.

#### Usage:

    
    
    m = tf.keras.metrics.CategoricalAccuracy()
    m.update_state([[0, 0, 1], [0, 1, 0]], [[0.1, 0.9, 0.8], [0.05, 0.95, 0]])
    print('Final result: ', m.result().numpy())  # Final result: 0.5
    

Usage with tf.keras API:

    
    
    model = tf.keras.Model(inputs, outputs)
    model.compile(
      'sgd',
      loss='mse',
      metrics=[tf.keras.metrics.CategoricalAccuracy()])
    

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L714-L722)

    
    
    __init__(
        name='categorical_accuracy',
        dtype=None
    )
    

Creates a `CategoricalAccuracy` instance.

#### Args:

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

