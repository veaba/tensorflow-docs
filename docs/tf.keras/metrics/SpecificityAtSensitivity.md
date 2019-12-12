

## Class  `SpecificityAtSensitivity` 
计算给定灵敏度下的特异性。

**别名** : [ `tf.compat.v1.keras.metrics.SpecificityAtSensitivity` ](/api_docs/python/tf/keras/metrics/SpecificityAtSensitivity), [ `tf.compat.v2.keras.metrics.SpecificityAtSensitivity` ](/api_docs/python/tf/keras/metrics/SpecificityAtSensitivity), [ `tf.compat.v2.metrics.SpecificityAtSensitivity` ](/api_docs/python/tf/keras/metrics/SpecificityAtSensitivity), [ `tf.metrics.SpecificityAtSensitivity` ](/api_docs/python/tf/keras/metrics/SpecificityAtSensitivity)

 `Sensitivity`  measures the proportion of actual positives that are correctlyidentified as such (tp / (tp + fn)). `Specificity`  measures the proportion of actual negatives that are correctlyidentified as such (tn / (tn + fp)).

This metric creates four local variables,  `true_positives` ,  `true_negatives` , `false_positives`  and  `false_negatives`  that are used to compute thespecificity at the given sensitivity. The threshold for the given sensitivityvalue is computed and used to evaluate the corresponding specificity.

If  `sample_weight`  is  `None` , weights default to 1.Use  `sample_weight`  of 0 to mask values.

For additional information about specificity and sensitivity, see thefollowing: https://en.wikipedia.org/wiki/Sensitivity_and_specificity

#### 用法：


```
 m = tf.keras.metrics.SpecificityAtSensitivity(0.8, num_thresholds=1)
m.update_state([0, 0, 1, 1], [0, 0.5, 0.3, 0.9])
print('Final result: ', m.result().numpy())  # Final result: 1.0
 
```

与tf.keras api一起使用：

```
 model = tf.keras.Model(inputs, outputs)
model.compile(
    'sgd',
    loss='mse',
    metrics=[tf.keras.metrics.SpecificityAtSensitivity()])
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1545-L1560)

```
 __init__(
    sensitivity,
    num_thresholds=200,
    name=None,
    dtype=None
)
 
```

Creates a  `SpecificityAtSensitivity`  instance.

#### 参数：
- **`sensitivity`** : A scalar value in range  `[0, 1]` .
- **`num_thresholds`** : (Optional) Defaults to 200. The number of thresholds touse for matching the given specificity.
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1419-L1422)

```
 reset_states()
 
```

重置所有度量状态变量。

This function is called between epochs/steps,when a metric is evaluated during training.

###  `result` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1562-L1576)

```
 result()
 
```

计算并返回度量值张量。

Result computation is an idempotent operation that simply calculates themetric value using the state variables.

###  `update_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1394-L1417)

```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
 
```

累积混淆矩阵统计。

#### 参数：
- **`y_true`** : The ground truth values.
- **`y_pred`** : The predicted values.
- **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can be a `Tensor`  whose rank is either 0, or the same rank as  `y_true` , and mustbe broadcastable to  `y_true` .


#### 返回：
更新操作。

