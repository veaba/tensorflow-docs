

## Class  `CategoricalCrossentropy` 
计算标签和预测之间的交叉熵度量。

**别名** : [ `tf.compat.v1.keras.metrics.CategoricalCrossentropy` ](/api_docs/python/tf/keras/metrics/CategoricalCrossentropy), [ `tf.compat.v2.keras.metrics.CategoricalCrossentropy` ](/api_docs/python/tf/keras/metrics/CategoricalCrossentropy), [ `tf.compat.v2.metrics.CategoricalCrossentropy` ](/api_docs/python/tf/keras/metrics/CategoricalCrossentropy), [ `tf.metrics.CategoricalCrossentropy` ](/api_docs/python/tf/keras/metrics/CategoricalCrossentropy)

This is the crossentropy metric class to be used when there are multiplelabel classes (2 or more). Here we assume that labels are given as a  `one_hot` representation. eg., When labels values are [2, 0, 1],  `y_true`  = [[0, 0, 1], [1, 0, 0], [0, 1, 0]].

#### 用法：


```
 m = tf.keras.metrics.CategoricalCrossentropy()
m.update_state([[0, 1, 0], [0, 0, 1]],
               [[0.05, 0.95, 0], [0.1, 0.8, 0.1]])

# EPSILON = 1e-7, y = y_true, y` = y_pred
# y` = clip_ops.clip_by_value(output, EPSILON, 1. - EPSILON)
# y` = [[0.05, 0.95, EPSILON], [0.1, 0.8, 0.1]]

# xent = -sum(y * log(y'), axis = -1)
#      = -((log 0.95), (log 0.1))
#      = [0.051, 2.302]
# Reduced xent = (0.051 + 2.302) / 2

print('Final result: ', m.result().numpy())  # Final result: 1.176
 
```

与tf.keras api一起使用：

```
 model = tf.keras.Model(inputs, outputs)
model.compile(
  'sgd',
  loss='mse',
  metrics=[tf.keras.metrics.CategoricalCrossentropy()])
 
```

#### 参数：
- **`name`** : (Optional) string name of the metric instance.
- **`dtype`** : (Optional) data type of the metric result.
- **`from_logits`** : (Optional ) Whether  `y_pred`  is expected to be a logits tensor.By default, we assume that  `y_pred`  encodes a probability distribution.
- **`label_smoothing`** : Float in [0, 1]. When > 0, label values are smoothed,meaning the confidence on label values are relaxed. e.g. `label_smoothing=0.2`  means that we will use a value of  `0.1`  for label `0`  and  `0.9`  for label  `1` "


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2604-L2615)

```
 __init__(
    name='categorical_crossentropy',
    dtype=None,
    from_logits=False,
    label_smoothing=0
)
 
```

Creates a  `MeanMetricWrapper`  instance.

#### 参数：
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

