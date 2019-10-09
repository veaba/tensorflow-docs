## Class MeanAbsoluteError

Computes the mean absolute error between the labels and predictions.
### Aliases:
- Class `tf.compat.v1.keras.metrics.MeanAbsoluteError`
- Class `tf.compat.v2.keras.metrics.MeanAbsoluteError`
- Class `tf.compat.v2.metrics.MeanAbsoluteError`
- Class `tf.metrics.MeanAbsoluteError`
### Used in the guide:
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``

For example, if y_true is [0., 0., 1., 1.], and y_pred is [1., 1., 1., 0.] the mean absolute error is 3/4 (0.75).
#### Usage:

```
 m = tf.keras.metrics.MeanAbsoluteError()
m.update_state([0., 0., 1., 1.], [1., 1., 1., 0.])
print('Final result: ', m.result().numpy())  # Final result: 0.75
```

Usage with tf.keras API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', metrics=[tf.keras.metrics.MeanAbsoluteError()])
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1943-L1945)


```
 __init__(
    name='mean_absolute_error',
    dtype=None
)
```

Creates a MeanMetricWrapper instance.
#### Args:
## __new__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L144-L160)


```
 __new__(
    cls,
    *args,
    **kwargs
)
```

Create and return a new object. See help(type) for accurate signature.
## Methods
### reset_states
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L203-L209)


```
 reset_states()
```

Resets all of the metric state variables.

This function is called between epochs/steps, when a metric is evaluated during training.
### result
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L361-L371)


```
 result()
```

Computes and returns the metric value tensor.

Result computation is an idempotent operation that simply calculates the metric value using the state variables.
### update_state
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L558-L583)


```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
```

Accumulates metric statistics.

y_true and y_pred should have the same shape.
#### Args:
- `y_true`: The ground truth values.
- `y_pred`: The predicted values.
- `sample_weight`: Optional weighting of each example. Defaults to 1. Can be a `Tensor` whose rank is either 0, or the same rank as `y_true`, and must be broadcastable to `y_true`.
#### Returns:

Update op.