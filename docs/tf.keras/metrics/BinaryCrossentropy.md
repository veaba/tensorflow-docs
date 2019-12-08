

## Class  `BinaryCrossentropy` 
Computes the crossentropy metric between the labels and predictions.



### Aliases:

- Class [ `tf.compat.v1.keras.metrics.BinaryCrossentropy` ](/api_docs/python/tf/keras/metrics/BinaryCrossentropy)

- Class [ `tf.compat.v2.keras.metrics.BinaryCrossentropy` ](/api_docs/python/tf/keras/metrics/BinaryCrossentropy)

- Class [ `tf.compat.v2.metrics.BinaryCrossentropy` ](/api_docs/python/tf/keras/metrics/BinaryCrossentropy)

- Class [ `tf.metrics.BinaryCrossentropy` ](/api_docs/python/tf/keras/metrics/BinaryCrossentropy)

This is the crossentropy metric class to be used when there are only two
label classes (0 and 1).



#### Usage:


```
 m = tf.keras.metrics.BinaryCrossentropy()
m.update_state([1., 0., 1., 0.], [1., 1., 1., 0.])

# EPSILON = 1e-7, y = y_true, y` = y_pred, Y_MAX = 0.9999999
# y` = clip_ops.clip_by_value(output, EPSILON, 1. - EPSILON)
# y` = [Y_MAX, Y_MAX, Y_MAX, EPSILON]

# Metric = -(y log(y` + EPSILON) + (1 - y) log(1 - y` + EPSILON))
#        = [-log(Y_MAX + EPSILON), -log(1 - Y_MAX + EPSILON),
#           -log(Y_MAX + EPSILON), -log(1)]
#        = [(0 + 15.33) / 2, (0 + 0) / 2]
# Reduced metric = 7.665 / 2

print('Final result: ', m.result().numpy())  # Final result: 3.833
 
```

Usage with tf.keras API:



```
 model = tf.keras.Model(inputs, outputs)
model.compile(
    'sgd',
    loss='mse',
    metrics=[tf.keras.metrics.BinaryCrossentropy()])
 
```



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2529-L2552)



```
 __init__(
    name='binary_crossentropy',
    dtype=None,
    from_logits=False,
    label_smoothing=0
)
 
```

Creates a  `BinaryCrossentropy`  instance.



#### Args:

- **`name`** : (Optional) string name of the metric instance.

- **`dtype`** : (Optional) data type of the metric result.

- **`from_logits`** : (Optional )Whether output is expected to be a logits tensor.
By default, we consider that output encodes a probability distribution.

- **`label_smoothing`** : (Optional) Float in [0, 1]. When > 0, label values are
smoothed, meaning the confidence on label values are relaxed.
e.g.  `label_smoothing=0.2`  means that we will use a value of  `0.1`  for
label  `0`  and  `0.9`  for label  `1` "



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

