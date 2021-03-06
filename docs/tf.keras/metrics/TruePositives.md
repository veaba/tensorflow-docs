

## Class  `TruePositives` 
计算真正数。

**别名** : [ `tf.compat.v1.keras.metrics.TruePositives` ](/api_docs/python/tf/keras/metrics/TruePositives), [ `tf.compat.v2.keras.metrics.TruePositives` ](/api_docs/python/tf/keras/metrics/TruePositives), [ `tf.compat.v2.metrics.TruePositives` ](/api_docs/python/tf/keras/metrics/TruePositives), [ `tf.metrics.TruePositives` ](/api_docs/python/tf/keras/metrics/TruePositives)

### 在教程中使用：
- [Classification on imbalanced data](https://tensorflow.google.cn/tutorials/structured_data/imbalanced_data)
For example, if  `y_true`  is [0, 1, 1, 1] and  `y_pred`  is [1, 0, 1, 1]then the true positives value is 2.  If the weights were specified as[0, 0, 1, 0] then the true positives value would be 1.

If  `sample_weight`  is given, calculates the sum of the weights oftrue positives. This metric creates one local variable,  `true_positives` that is used to keep track of the number of true positives.

If  `sample_weight`  is  `None` , weights default to 1.Use  `sample_weight`  of 0 to mask values.

#### 用法：


```
 m = tf.keras.metrics.TruePositives()
m.update_state([0, 1, 1, 1], [1, 0, 1, 1])
print('Final result: ', m.result().numpy())  # Final result: 2
 
```

与tf.keras api一起使用：

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss='mse', metrics=[tf.keras.metrics.TruePositives()])
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1084-L1100)

```
 __init__(
    thresholds=None,
    name=None,
    dtype=None
)
 
```

Creates a  `TruePositives`  instance.

#### 参数：
- **`thresholds`** : (Optional) Defaults to 0.5. A float value or a pythonlist/tuple of float threshold values in [0, 1]. A threshold is comparedwith prediction values to determine the truth value of predictions(i.e., above the threshold is  `true` , below is  `false` ). One metricvalue is generated for each threshold value.
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L892-L895)

```
 reset_states()
 
```

重置所有度量状态变量。

This function is called between epochs/steps,when a metric is evaluated during training.

###  `result` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L885-L890)

```
 result()
 
```

计算并返回度量值张量。

Result computation is an idempotent operation that simply calculates themetric value using the state variables.

###  `update_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L865-L883)

```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
 
```

累积给定的混淆矩阵条件统计量。

#### 参数：
- **`y_true`** : The ground truth values.
- **`y_pred`** : The predicted values.
- **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can be a `Tensor`  whose rank is either 0, or the same rank as  `y_true` , and mustbe broadcastable to  `y_true` .


#### 返回：
更新操作。

