

## Class  `SparseTopKCategoricalAccuracy` 
Computes how often integer targets are in the top  `K`  predictions.

**别名** : [ `tf.compat.v1.keras.metrics.SparseTopKCategoricalAccuracy` ](/api_docs/python/tf/keras/metrics/SparseTopKCategoricalAccuracy), [ `tf.compat.v2.keras.metrics.SparseTopKCategoricalAccuracy` ](/api_docs/python/tf/keras/metrics/SparseTopKCategoricalAccuracy), [ `tf.compat.v2.metrics.SparseTopKCategoricalAccuracy` ](/api_docs/python/tf/keras/metrics/SparseTopKCategoricalAccuracy), [ `tf.metrics.SparseTopKCategoricalAccuracy` ](/api_docs/python/tf/keras/metrics/SparseTopKCategoricalAccuracy)

#### 用法：


```
 m = tf.keras.metrics.SparseTopKCategoricalAccuracy()
m.update_state([2, 1], [[0.1, 0.9, 0.8], [0.05, 0.95, 0]])
print('Final result: ', m.result().numpy())  # Final result: 1.0
 
```

与tf.keras api一起使用：

```
 model = tf.keras.Model(inputs, outputs)
model.compile(
  'sgd',
  metrics=[tf.keras.metrics.SparseTopKCategoricalAccuracy()])
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L822-L832)

```
 __init__(
    k=5,
    name='sparse_top_k_categorical_accuracy',
    dtype=None
)
 
```

Creates a  `SparseTopKCategoricalAccuracy`  instance.

#### 参数：
- **`k`** : (Optional) Number of top elements to look at for computing accuracy.Defaults to 5.
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L558-L583)

```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
 
```

累积度量统计。

 `y_true`  and  `y_pred`  should have the same shape.

#### 参数：
- **`y_true`** : The ground truth values.
- **`y_pred`** : The predicted values.
- **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can bea  `Tensor`  whose rank is either 0, or the same rank as  `y_true` ,and must be broadcastable to  `y_true` .


#### 返回：
更新操作。

