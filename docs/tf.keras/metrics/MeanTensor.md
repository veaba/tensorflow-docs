[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/metrics/MeanTensor) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2382-L2489)  
  
  
## Class `MeanTensor`

Computes the element-wise (weighted) mean of the given tensors.

Inherits From:
[`Metric`](https://tensorflow.google.cn/api_docs/python/tf/keras/metrics/Metric)

### Aliases:

  * Class [`tf.compat.v1.keras.metrics.MeanTensor`](/api_docs/python/tf/keras/metrics/MeanTensor)
  * Class [`tf.compat.v2.keras.metrics.MeanTensor`](/api_docs/python/tf/keras/metrics/MeanTensor)
  * Class [`tf.compat.v2.metrics.MeanTensor`](/api_docs/python/tf/keras/metrics/MeanTensor)
  * Class [`tf.metrics.MeanTensor`](/api_docs/python/tf/keras/metrics/MeanTensor)

`MeanTensor` returns a tensor with the same shape of the input tensors. The
mean value is updated by keeping local variables `total` and `count`. The
`total` tracks the sum of the weighted values, and `count` stores the sum of
the weighted counts.

#### Usage:

    
    
    m = tf.keras.metrics.MeanTensor()
    m.update_state([0, 1, 2, 3])
    m.update_state([4, 5, 6, 7])
    print('Result: ', m.result().numpy())  # Result: [2, 3, 4, 5]
    m.update_state([12, 10, 8, 6], sample_weights= [0, 0.2, 0.5, 1])
    print('Result: ', m.result().numpy())  # Result: [2, 3.636, 4.8, 5.333]
    

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2402-L2413)

    
    
    __init__(
        name='mean_tensor',
        dtype=None
    )
    

Creates a `MeanTensor` instance.

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

## Properties

### `count`

### `total`

## Methods

### `reset_states`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2486-L2489)

    
    
    reset_states()
    

Resets all of the metric state variables.

This function is called between epochs/steps, when a metric is evaluated
during training.

### `result`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2478-L2484)

    
    
    result()
    

Computes and returns the metric value tensor.

Result computation is an idempotent operation that simply calculates the
metric value using the state variables.

### `update_state`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2435-L2476)

    
    
    update_state(
        values,
        sample_weight=None
    )
    

Accumulates statistics for computing the element-wise mean.

#### Args:

  * **`values`** : Per-example value.
  * **`sample_weight`** : Optional weighting of each example. Defaults to 1.

#### Returns:

Update op.

