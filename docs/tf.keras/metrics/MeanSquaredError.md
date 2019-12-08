

## Class  `MeanSquaredError` 
Computes the mean squared error between  `y_true`  and  `y_pred` .



### Aliases:

- Class [ `tf.compat.v1.keras.metrics.MeanSquaredError` ](/api_docs/python/tf/keras/metrics/MeanSquaredError)

- Class [ `tf.compat.v2.keras.metrics.MeanSquaredError` ](/api_docs/python/tf/keras/metrics/MeanSquaredError)

- Class [ `tf.compat.v2.metrics.MeanSquaredError` ](/api_docs/python/tf/keras/metrics/MeanSquaredError)

- Class [ `tf.metrics.MeanSquaredError` ](/api_docs/python/tf/keras/metrics/MeanSquaredError)

For example, if  `y_true`  is [0., 0., 1., 1.], and  `y_pred`  is [1., 1., 1., 0.]
the mean squared error is 3/4 (0.75).



#### Usage:


```
 m = tf.keras.metrics.MeanSquaredError()
m.update_state([0., 0., 1., 1.], [1., 1., 1., 0.])
print('Final result: ', m.result().numpy())  # Final result: 0.75
 
```

Usage with tf.keras API:



```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', metrics=[tf.keras.metrics.MeanSquaredError()])
 
```



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1999-L2001)



```
 __init__(
    name='mean_squared_error',
    dtype=None
)
 
```

Creates a  `MeanMetricWrapper`  instance.



#### Args:

- **`fn`** : The metric function to wrap, with signature
 `fn(y_true, y_pred, **kwargs)` .

- **`name`** : (Optional) string name of the metric instance.

- **`dtype`** : (Optional) data type of the metric result.

- **`**kwargs`** : The keyword arguments that are passed on to  `fn` .



##  `__new__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L144-L160)



```
 __new__(
    cls,
    *args,
    **kwargs
)
 
```

Create and return a new object.  See help(type) for accurate signature.



## Methods


###  `reset_states` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L203-L209)



```
 reset_states()
 
```

Resets all of the metric state variables.

This function is called between epochs/steps,
when a metric is evaluated during training.



###  `result` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L361-L371)



```
 result()
 
```

Computes and returns the metric value tensor.

Result computation is an idempotent operation that simply calculates the
metric value using the state variables.



###  `update_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L558-L583)



```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
 
```

Accumulates metric statistics.

 `y_true`  and  `y_pred`  should have the same shape.



#### Args:

- **`y_true`** : The ground truth values.

- **`y_pred`** : The predicted values.

- **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can be
a  `Tensor`  whose rank is either 0, or the same rank as  `y_true` ,
and must be broadcastable to  `y_true` .



#### Returns:
Update op.

