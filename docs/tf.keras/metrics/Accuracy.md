

## Class  `Accuracy` 
Calculates how often predictions matches labels.

**Aliases** : [ `tf.compat.v1.keras.metrics.Accuracy` ](/api_docs/python/tf/keras/metrics/Accuracy), [ `tf.compat.v2.keras.metrics.Accuracy` ](/api_docs/python/tf/keras/metrics/Accuracy), [ `tf.compat.v2.metrics.Accuracy` ](/api_docs/python/tf/keras/metrics/Accuracy), [ `tf.metrics.Accuracy` ](/api_docs/python/tf/keras/metrics/Accuracy)

### Used in the guide:
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)


### Used in the tutorials:
- [Custom training: walkthrough](https://tensorflow.google.cn/tutorials/customization/custom_training_walkthrough)
For example, if  `y_true`  is [1, 2, 3, 4] and  `y_pred`  is [0, 2, 3, 4]then the accuracy is 3/4 or .75.  If the weights were specified as[1, 1, 0, 0] then the accuracy would be 1/2 or .5.

This metric creates two local variables,  `total`  and  `count`  that are used tocompute the frequency with which  `y_pred`  matches  `y_true` . This frequency isultimately returned as  `binary accuracy` : an idempotent operation that simplydivides  `total`  by  `count` .

If  `sample_weight`  is  `None` , weights default to 1.Use  `sample_weight`  of 0 to mask values.

#### Usage:


```
 m = tf.keras.metrics.Accuracy()
m.update_state([1, 2, 3, 4], [0, 2, 3, 4])
print('Final result: ', m.result().numpy())  # Final result: 0.75
 
```

Usage with tf.keras API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss='mse', metrics=[tf.keras.metrics.Accuracy()])
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L625-L626)

```
 __init__(
    name='accuracy',
    dtype=None
)
 
```

Creates a  `MeanMetricWrapper`  instance.

#### Args:
- **`fn`** : The metric function to wrap, with signature `fn(y_true, y_pred, **kwargs)` .
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

This function is called between epochs/steps,when a metric is evaluated during training.

###  `result` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L361-L371)

```
 result()
 
```

Computes and returns the metric value tensor.

Result computation is an idempotent operation that simply calculates themetric value using the state variables.

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
- **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can bea  `Tensor`  whose rank is either 0, or the same rank as  `y_true` ,and must be broadcastable to  `y_true` .


#### Returns:
Update op.

