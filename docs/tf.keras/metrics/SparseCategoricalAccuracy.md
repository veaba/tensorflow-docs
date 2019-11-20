[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/metrics/SparseCategoricalAccuracy)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L726-L764)  
---|---  
  
## Class `SparseCategoricalAccuracy`

Calculates how often predictions matches integer labels.

### Aliases:

  * Class [`tf.compat.v1.keras.metrics.SparseCategoricalAccuracy`](/api_docs/python/tf/keras/metrics/SparseCategoricalAccuracy)
  * Class [`tf.compat.v2.keras.metrics.SparseCategoricalAccuracy`](/api_docs/python/tf/keras/metrics/SparseCategoricalAccuracy)
  * Class [`tf.compat.v2.metrics.SparseCategoricalAccuracy`](/api_docs/python/tf/keras/metrics/SparseCategoricalAccuracy)
  * Class [`tf.metrics.SparseCategoricalAccuracy`](/api_docs/python/tf/keras/metrics/SparseCategoricalAccuracy)

### Used in the guide:

  * [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)
  * [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)
  * [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)

### Used in the tutorials:

  * [Custom training: basics](https://tensorflow.google.cn/tutorials/customization/custom_training)
  * [Custom training with tf.distribute.Strategy](https://tensorflow.google.cn/tutorials/distribute/custom_training)
  * [TensorFlow 2 quickstart for experts](https://tensorflow.google.cn/tutorials/quickstart/advanced)
  * [Custom training: walkthrough](https://tensorflow.google.cn/tutorials/customization/custom_training_walkthrough)
  * [Load NumPy data](https://tensorflow.google.cn/tutorials/load_data/numpy)

For example, if `y_true` is [[2], [1]] and `y_pred` is [[0.1, 0.9, 0.8],
[0.05, 0.95, 0]] then the categorical accuracy is 1/2 or .5. If the weights
were specified as [0.7, 0.3] then the categorical accuracy would be .3. You
can provide logits of classes as `y_pred`, since argmax of logits and
probabilities are same.

This metric creates two local variables, `total` and `count` that are used to
compute the frequency with which `y_pred` matches `y_true`. This frequency is
ultimately returned as `sparse categorical accuracy`: an idempotent operation
that simply divides `total` by `count`.

If `sample_weight` is `None`, weights default to 1. Use `sample_weight` of 0
to mask values.

#### Usage:

    
    
    m = tf.keras.metrics.SparseCategoricalAccuracy()
    m.update_state([[2], [1]], [[0.1, 0.9, 0.8], [0.05, 0.95, 0]])
    print('Final result: ', m.result().numpy())  # Final result: 0.5
    

Usage with tf.keras API:

    
    
    model = tf.keras.Model(inputs, outputs)
    model.compile(
        'sgd',
        loss='mse',
        metrics=[tf.keras.metrics.SparseCategoricalAccuracy()])
    

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L762-L764)

    
    
    __init__(
        name='sparse_categorical_accuracy',
        dtype=None
    )
    

Creates a `MeanMetricWrapper` instance.

#### Args:

  * **`fn`** : The metric function to wrap, with signature `fn(y_true, y_pred, **kwargs)`.
  * **`name`** : (Optional) string name of the metric instance.
  * **`dtype`** : (Optional) data type of the metric result.
  * **`**kwargs`** : The keyword arguments that are passed on to `fn`.

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

