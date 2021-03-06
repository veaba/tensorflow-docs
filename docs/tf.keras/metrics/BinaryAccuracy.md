

## Class  `BinaryAccuracy` 
计算预测与标签匹配的频率。

**别名** : [ `tf.compat.v1.keras.metrics.BinaryAccuracy` ](/api_docs/python/tf/keras/metrics/BinaryAccuracy), [ `tf.compat.v2.keras.metrics.BinaryAccuracy` ](/api_docs/python/tf/keras/metrics/BinaryAccuracy), [ `tf.compat.v2.metrics.BinaryAccuracy` ](/api_docs/python/tf/keras/metrics/BinaryAccuracy), [ `tf.metrics.BinaryAccuracy` ](/api_docs/python/tf/keras/metrics/BinaryAccuracy)

### 在教程中使用：
- [Classification on imbalanced data](https://tensorflow.google.cn/tutorials/structured_data/imbalanced_data)
For example, if  `y_true`  is [1, 1, 0, 0] and  `y_pred`  is [0.98, 1, 0, 0.6]then the binary accuracy is 3/4 or .75.  If the weights were specified as[1, 0, 0, 1] then the binary accuracy would be 1/2 or .5.

This metric creates two local variables,  `total`  and  `count`  that are used tocompute the frequency with which  `y_pred`  matches  `y_true` . This frequency isultimately returned as  `binary accuracy` : an idempotent operation that simplydivides  `total`  by  `count` .

If  `sample_weight`  is  `None` , weights default to 1.Use  `sample_weight`  of 0 to mask values.

#### 用法：


```
 m = tf.keras.metrics.BinaryAccuracy()m.update_state([1, 1, 0, 0], [0.98, 1, 0, 0.6])print('Final result: ', m.result().numpy())  # Final result: 0.75 
```

与tf.keras api一起使用：

```
 model = tf.keras.Model(inputs, outputs)model.compile('sgd', loss='mse', metrics=[tf.keras.metrics.BinaryAccuracy()]) 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L661-L671)

```
 __init__(    name='binary_accuracy',    dtype=None,    threshold=0.5) 
```

Creates a  `BinaryAccuracy`  instance.

#### 参数：
- **`name`** : (Optional) string name of the metric instance.
- **`dtype`** : (Optional) data type of the metric result.
- **`threshold`** : (Optional) Float representing the threshold for decidingwhether prediction values are 1 or 0.


##  `__new__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L144-L160)

```
 __new__(    cls,    *args,    **kwargs) 
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L558-L583)

```
 update_state(    y_true,    y_pred,    sample_weight=None) 
```

累积度量统计。

 `y_true`  and  `y_pred`  should have the same shape.

#### 参数：
- **`y_true`** : The ground truth values.
- **`y_pred`** : The predicted values.
- **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can bea  `Tensor`  whose rank is either 0, or the same rank as  `y_true` ,and must be broadcastable to  `y_true` .


#### 返回：
更新操作。

