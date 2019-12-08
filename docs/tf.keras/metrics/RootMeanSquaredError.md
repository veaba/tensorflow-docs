

## Class  `RootMeanSquaredError` 
Computes root mean squared error metric between  `y_true`  and  `y_pred` .

Inherits From: [ `Mean` ](https://tensorflow.google.cn/api_docs/python/tf/keras/metrics/Mean)



### Aliases:

- Class [ `tf.compat.v1.keras.metrics.RootMeanSquaredError` ](/api_docs/python/tf/keras/metrics/RootMeanSquaredError)

- Class [ `tf.compat.v2.keras.metrics.RootMeanSquaredError` ](/api_docs/python/tf/keras/metrics/RootMeanSquaredError)

- Class [ `tf.compat.v2.metrics.RootMeanSquaredError` ](/api_docs/python/tf/keras/metrics/RootMeanSquaredError)

- Class [ `tf.metrics.RootMeanSquaredError` ](/api_docs/python/tf/keras/metrics/RootMeanSquaredError)



#### Usage:

<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">m = tf.keras.metrics.RootMeanSquaredError()
m.update_state([2., 4., 6.], [1., 3., 2.])
print('Final result: ', m.result().numpy())  # Final result: 2.449
</code></pre></devsite-code>
Usage with tf.keras API:



```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', metrics=[tf.keras.metrics.RootMeanSquaredError()])
 
```



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2145-L2146)



```
 __init__(
    name='root_mean_squared_error',
    dtype=None
)
 
```

Creates a  `Mean`  instance.



#### Args:

- **`name`** : (Optional) string name of the metric instance.

- **`dtype`** : (Optional) data type of the metric result.



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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2169-L2170)



```
 result()
 
```

Computes and returns the metric value tensor.

Result computation is an idempotent operation that simply calculates the
metric value using the state variables.



###  `update_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2148-L2167)



```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
 
```

Accumulates root mean squared error statistics.



#### Args:

- **`y_true`** : The ground truth values.

- **`y_pred`** : The predicted values.

- **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can be a
 `Tensor`  whose rank is either 0, or the same rank as  `y_true` , and must
be broadcastable to  `y_true` .



#### Returns:
Update op.

