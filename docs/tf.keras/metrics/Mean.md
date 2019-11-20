[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/metrics/Mean) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L416-L454)  
  
  
## Class `Mean`

Computes the (weighted) mean of the given values.

### Aliases:

  * Class [`tf.compat.v1.keras.metrics.Mean`](/api_docs/python/tf/keras/metrics/Mean)
  * Class [`tf.compat.v2.keras.metrics.Mean`](/api_docs/python/tf/keras/metrics/Mean)
  * Class [`tf.compat.v2.metrics.Mean`](/api_docs/python/tf/keras/metrics/Mean)
  * Class [`tf.metrics.Mean`](/api_docs/python/tf/keras/metrics/Mean)

### Used in the guide:

  * [Eager execution](https://tensorflow.google.cn/guide/eager)
  * [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)
  * [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)

### Used in the tutorials:

  * [TensorFlow 2 quickstart for experts](https://tensorflow.google.cn/tutorials/quickstart/advanced)
  * [Custom training: basics](https://tensorflow.google.cn/tutorials/customization/custom_training)
  * [Custom training: walkthrough](https://tensorflow.google.cn/tutorials/customization/custom_training_walkthrough)
  * [Custom training with tf.distribute.Strategy](https://tensorflow.google.cn/tutorials/distribute/custom_training)
  * [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)

For example, if values is [1, 3, 5, 7] then the mean is 4. If the weights were
specified as [1, 1, 0, 0] then the mean would be 2.

This metric creates two variables, `total` and `count` that are used to
compute the average of `values`. This average is ultimately returned as `mean`
which is an idempotent operation that simply divides `total` by `count`.

If `sample_weight` is `None`, weights default to 1. Use `sample_weight` of 0
to mask values.

#### Usage:

    
    
    m = tf.keras.metrics.Mean()
    m.update_state([1, 3, 5, 7])
    print('Final result: ', m.result().numpy())  # Final result: 4.0
    

Usage with tf.keras API:

    
    
    model = tf.keras.Model(inputs, outputs)
    model.add_metric(tf.keras.metrics.Mean(name='mean_1')(outputs))
    model.compile('sgd', loss='mse')
    

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L446-L454)

    
    
    __init__(
        name='mean',
        dtype=None
    )
    

Creates a `Mean` instance.

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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L299-L359)

    
    
    update_state(
        values,
        sample_weight=None
    )
    

Accumulates statistics for computing the reduction metric.

For example, if `values` is [1, 3, 5, 7] and reduction=SUM_OVER_BATCH_SIZE,
then the value of `result()` is 4. If the `sample_weight` is specified as [1,
1, 0, 0] then value of `result()` would be 2.

#### Args:

  * **`values`** : Per-example value.
  * **`sample_weight`** : Optional weighting of each example. Defaults to 1.

#### Returns:

Update op.

