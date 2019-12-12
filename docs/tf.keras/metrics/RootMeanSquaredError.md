

## Class  `RootMeanSquaredError` 
Computes root mean squared error metric between  `y_true`  and  `y_pred` .

Inherits From: [ `Mean` ](https://tensorflow.google.cn/api_docs/python/tf/keras/metrics/Mean)

**别名** : [ `tf.compat.v1.keras.metrics.RootMeanSquaredError` ](/api_docs/python/tf/keras/metrics/RootMeanSquaredError), [ `tf.compat.v2.keras.metrics.RootMeanSquaredError` ](/api_docs/python/tf/keras/metrics/RootMeanSquaredError), [ `tf.compat.v2.metrics.RootMeanSquaredError` ](/api_docs/python/tf/keras/metrics/RootMeanSquaredError), [ `tf.metrics.RootMeanSquaredError` ](/api_docs/python/tf/keras/metrics/RootMeanSquaredError)

#### 用法：


```
 m = tf.keras.metrics.RootMeanSquaredError()
m.update_state([2., 4., 6.], [1., 3., 2.])
print('Final result: ', m.result().numpy())  # Final result: 2.449
 
```

与tf.keras api一起使用：

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', metrics=[tf.keras.metrics.RootMeanSquaredError()])
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2145-L2146)

```
 __init__(
    name='root_mean_squared_error',
    dtype=None
)
 
```

Creates a  `Mean`  instance.

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

## 方法


###  `reset_states` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L203-L209)

```
 reset_states()
 
```

重置所有度量状态变量。

This function is called between epochs/steps,when a metric is evaluated during training.

###  `result` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2169-L2170)

```
 result()
 
```

计算并返回度量值张量。

Result computation is an idempotent operation that simply calculates themetric value using the state variables.

###  `update_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2148-L2167)

```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
 
```

累积均方根误差统计。

#### 参数：
- **`y_true`** : The ground truth values.
- **`y_pred`** : The predicted values.
- **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can be a `Tensor`  whose rank is either 0, or the same rank as  `y_true` , and mustbe broadcastable to  `y_true` .


#### 返回：
更新操作。

