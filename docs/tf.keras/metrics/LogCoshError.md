

## Class  `LogCoshError` 
Computes the logarithm of the hyperbolic cosine of the prediction error.



### Aliases:

- Class [ `tf.compat.v1.keras.metrics.LogCoshError` ](/api_docs/python/tf/keras/metrics/LogCoshError)

- Class [ `tf.compat.v2.keras.metrics.LogCoshError` ](/api_docs/python/tf/keras/metrics/LogCoshError)

- Class [ `tf.compat.v2.metrics.LogCoshError` ](/api_docs/python/tf/keras/metrics/LogCoshError)

- Class [ `tf.metrics.LogCoshError` ](/api_docs/python/tf/keras/metrics/LogCoshError)

 `logcosh = log((exp(x) + exp(-x))/2)` , where x is the error (y_pred - y_true)



#### Usage:


```
 m = tf.keras.metrics.LogCoshError()
m.update_state([0., 1., 1.], [1., 0., 1.])
print('Final result: ', m.result().numpy())  # Final result: 0.289
 
```

Usage with tf.keras API:



```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', metrics=[tf.keras.metrics.LogCoshError()])
 
```



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2195-L2196)



```
 __init__(
    name='logcosh',
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

