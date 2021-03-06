

## Class  `MeanRelativeError` 
通过使用给定值进行规格化来计算平均相对误差。

Inherits From: [ `Mean` ](https://tensorflow.google.cn/api_docs/python/tf/keras/metrics/Mean)

**别名** : [ `tf.compat.v1.keras.metrics.MeanRelativeError` ](/api_docs/python/tf/keras/metrics/MeanRelativeError), [ `tf.compat.v2.keras.metrics.MeanRelativeError` ](/api_docs/python/tf/keras/metrics/MeanRelativeError), [ `tf.compat.v2.metrics.MeanRelativeError` ](/api_docs/python/tf/keras/metrics/MeanRelativeError), [ `tf.metrics.MeanRelativeError` ](/api_docs/python/tf/keras/metrics/MeanRelativeError)

This metric creates two local variables,  `total`  and  `count`  that are used tocompute the mean relative absolute error. This average is weighted by `sample_weight` , and it is ultimately returned as  `mean_relative_error` :an idempotent operation that simply divides  `total`  by  `count` .

If  `sample_weight`  is  `None` , weights default to 1.Use  `sample_weight`  of 0 to mask values.

#### 用法：


```
 m = tf.keras.metrics.MeanRelativeError(normalizer=[1, 3, 2, 3])
m.update_state([1, 3, 2, 3], [2, 4, 6, 8])

# metric = mean(|y_pred - y_true| / normalizer)
#        = mean([1, 1, 4, 5] / [1, 3, 2, 3]) = mean([1, 1/3, 2, 5/3])
#        = 5/4 = 1.25
print('Final result: ', m.result().numpy())  # Final result: 1.25
 
```

与tf.keras api一起使用：

```
 model = tf.keras.Model(inputs, outputs)
model.compile(
  'sgd',
  loss='mse',
  metrics=[tf.keras.metrics.MeanRelativeError(normalizer=[1, 3])])
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L492-L502)

```
 __init__(
    normalizer,
    name=None,
    dtype=None
)
 
```

Creates a  `MeanRelativeError`  instance.

#### 参数：
- **`normalizer`** : The normalizer values with same shape as predictions.
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

## 方法


###  `reset_states` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L203-L209)

```
 reset_states()
 
```

重置所有度量状态变量。

This function is called between epochs/steps,when a metric is evaluated during training.

###  `result` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L361-L371)

```
 result()
 
```

计算并返回度量值张量。

Result computation is an idempotent operation that simply calculates themetric value using the state variables.

###  `update_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L504-L532)

```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
 
```

累积度量统计。

#### 参数：
- **`y_true`** : The ground truth values.
- **`y_pred`** : The predicted values.
- **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can be a `Tensor`  whose rank is either 0, or the same rank as  `y_true` , and mustbe broadcastable to  `y_true` .


#### 返回：
更新操作。

