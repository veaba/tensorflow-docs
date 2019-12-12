

## Class  `CosineSimilarity` 
计算标签和预测之间的余弦相似性。

**别名** : [ `tf.compat.v1.keras.metrics.CosineSimilarity` ](/api_docs/python/tf/keras/metrics/CosineSimilarity), [ `tf.compat.v2.keras.metrics.CosineSimilarity` ](/api_docs/python/tf/keras/metrics/CosineSimilarity), [ `tf.compat.v2.metrics.CosineSimilarity` ](/api_docs/python/tf/keras/metrics/CosineSimilarity), [ `tf.metrics.CosineSimilarity` ](/api_docs/python/tf/keras/metrics/CosineSimilarity)

cosine similarity = (a . b) / ||a|| ||b||[Cosine Similarity](https://en.wikipedia.org/wiki/Cosine_similarity)

For example, if  `y_true`  is [0, 1, 1], and  `y_pred`  is [1, 0, 1], the cosinesimilarity is 0.5.

This metric keeps the average cosine similarity between  `predictions`  and `labels`  over a stream of data.

#### 用法：


```
 m = tf.keras.metrics.CosineSimilarity(axis=1)
m.update_state([[0., 1.], [1., 1.]], [[1., 0.], [1., 1.]])
# l2_norm(y_true) = [[0., 1.], [1./1.414], 1./1.414]]]
# l2_norm(y_pred) = [[1., 0.], [1./1.414], 1./1.414]]]
# l2_norm(y_true) . l2_norm(y_pred) = [[0., 0.], [0.5, 0.5]]
# result = mean(sum(l2_norm(y_true) . l2_norm(y_pred), axis=1))
       = ((0. + 0.) +  (0.5 + 0.5)) / 2

print('Final result: ', m.result().numpy())  # Final result: 0.5
 
```

与tf.keras api一起使用：

```
 model = tf.keras.Model(inputs, outputs)
model.compile(
    'sgd',
    loss='mse',
    metrics=[tf.keras.metrics.CosineSimilarity(axis=1)])
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1908-L1918)

```
 __init__(
    name='cosine_similarity',
    dtype=None,
    axis=-1
)
 
```

Creates a  `CosineSimilarity`  instance.

#### 参数：
- **`name`** : (Optional) string name of the metric instance.
- **`dtype`** : (Optional) data type of the metric result.
- **`axis`** : (Optional) Defaults to -1. The dimension along which the cosinesimilarity is computed.


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

