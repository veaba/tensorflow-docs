

## Class  `SparseCategoricalCrossentropy` 
计算标签和预测之间的交叉熵度量。

**别名** : [ `tf.compat.v1.keras.metrics.SparseCategoricalCrossentropy` ](/api_docs/python/tf/keras/metrics/SparseCategoricalCrossentropy), [ `tf.compat.v2.keras.metrics.SparseCategoricalCrossentropy` ](/api_docs/python/tf/keras/metrics/SparseCategoricalCrossentropy), [ `tf.compat.v2.metrics.SparseCategoricalCrossentropy` ](/api_docs/python/tf/keras/metrics/SparseCategoricalCrossentropy), [ `tf.metrics.SparseCategoricalCrossentropy` ](/api_docs/python/tf/keras/metrics/SparseCategoricalCrossentropy)

Use this crossentropy metric when there are two or more label classes.We expect labels to be provided as integers. If you want to provide labelsusing  `one-hot`  representation, please use  `CategoricalCrossentropy`  metric.There should be  `# classes`  floating point values per feature for  `y_pred` and a single floating point value per feature for  `y_true` .

In the snippet below, there is a single floating point value per example for `y_true`  and  `# classes`  floating pointing values per example for  `y_pred` .The shape of  `y_true`  is  `[batch_size]`  and the shape of  `y_pred`  is `[batch_size, num_classes]` .

#### 用法：


```
 m = tf.keras.metrics.SparseCategoricalCrossentropy()
m.update_state(
  [1, 2],
  [[0.05, 0.95, 0], [0.1, 0.8, 0.1]])

# y_true = one_hot(y_true) = [[0, 1, 0], [0, 0, 1]]
# logits = log(y_pred)
# softmax = exp(logits) / sum(exp(logits), axis=-1)
# softmax = [[0.05, 0.95, EPSILON], [0.1, 0.8, 0.1]]

# xent = -sum(y * log(softmax), 1)
# log(softmax) = [[-2.9957, -0.0513, -16.1181], [-2.3026, -0.2231, -2.3026]]
# y_true * log(softmax) = [[0, -0.0513, 0], [0, 0, -2.3026]]

# xent = [0.0513, 2.3026]
# Reduced xent = (0.0513 + 2.3026) / 2

print('Final result: ', m.result().numpy())  # Final result: 1.176
 
```

与tf.keras api一起使用：

```
 model = tf.keras.Model(inputs, outputs)
model.compile(
  'sgd',
  loss='mse',
  metrics=[tf.keras.metrics.SparseCategoricalCrossentropy()])
 
```

#### 参数：
- **`name`** : (Optional) string name of the metric instance.
- **`dtype`** : (Optional) data type of the metric result.
- **`from_logits`** : (Optional ) Whether  `y_pred`  is expected to be a logits tensor.By default, we assume that  `y_pred`  encodes a probability distribution.
- **`axis`** : (Optional) Defaults to -1. The dimension along which the metric iscomputed.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2675-L2686)

```
 __init__(
    name='sparse_categorical_crossentropy',
    dtype=None,
    from_logits=False,
    axis=-1
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

