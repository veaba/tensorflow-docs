

## Class  `MeanTensor` 
Computes the element-wise (weighted) mean of the given tensors.

Inherits From: [ `Metric` ](https://tensorflow.google.cn/api_docs/python/tf/keras/metrics/Metric)

**别名** : [ `tf.compat.v1.keras.metrics.MeanTensor` ](/api_docs/python/tf/keras/metrics/MeanTensor), [ `tf.compat.v2.keras.metrics.MeanTensor` ](/api_docs/python/tf/keras/metrics/MeanTensor), [ `tf.compat.v2.metrics.MeanTensor` ](/api_docs/python/tf/keras/metrics/MeanTensor), [ `tf.metrics.MeanTensor` ](/api_docs/python/tf/keras/metrics/MeanTensor)

 `MeanTensor`  returns a tensor with the same shape of the input tensors. Themean value is updated by keeping local variables  `total`  and  `count` . The `total`  tracks the sum of the weighted values, and  `count`  stores the sum ofthe weighted counts.

#### 用法：


```
 m = tf.keras.metrics.MeanTensor()
m.update_state([0, 1, 2, 3])
m.update_state([4, 5, 6, 7])
print('Result: ', m.result().numpy())  # Result: [2, 3, 4, 5]
m.update_state([12, 10, 8, 6], sample_weights= [0, 0.2, 0.5, 1])
print('Result: ', m.result().numpy())  # Result: [2, 3.636, 4.8, 5.333]
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2402-L2413)

```
 __init__(
    name='mean_tensor',
    dtype=None
)
 
```

Creates a  `MeanTensor`  instance.

#### 参数：
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

## 属性


###  `count` 


###  `total` 


## 方法


###  `reset_states` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2486-L2489)

```
 reset_states()
 
```

重置所有度量状态变量。

This function is called between epochs/steps,when a metric is evaluated during training.

###  `result` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2478-L2484)

```
 result()
 
```

计算并返回度量值张量。

Result computation is an idempotent operation that simply calculates themetric value using the state variables.

###  `update_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2435-L2476)

```
 update_state(
    values,
    sample_weight=None
)
 
```

Accumulates statistics for computing the element-wise mean.

#### 参数：
- **`values`** : Per-example value.
- **`sample_weight`** : Optional weighting of each example. Defaults to 1.


#### 返回：
更新操作。

