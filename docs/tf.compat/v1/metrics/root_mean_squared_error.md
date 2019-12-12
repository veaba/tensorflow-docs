计算标签和预测之间的均方根误差。

```
 tf.compat.v1.metrics.root_mean_squared_error(    labels,    predictions,    weights=None,    metrics_collections=None,    updates_collections=None,    name=None) 
```

The  `root_mean_squared_error`  function creates two local variables, `total`  and  `count`  that are used to compute the root mean squared error.This average is weighted by  `weights` , and it is ultimately returned as `root_mean_squared_error` : an idempotent operation that takes the square rootof the division of  `total`  by  `count` .

For estimation of the metric over a stream of data, the function creates an `update_op`  operation that updates these variables and returns the `root_mean_squared_error` . Internally, a  `squared_error`  operation computesthe element-wise square of the difference between  `predictions`  and  `labels` .Then  `update_op`  increments  `total`  with the reduced sum of the product of `weights`  and  `squared_error` , and it increments  `count`  with the reduced sumof  `weights` .

If  `weights`  is  `None` , weights default to 1. Use weights of 0 to mask values.

#### 参数：
- **`labels`** : A  `Tensor`  of the same shape as  `predictions` .
- **`predictions`** : A  `Tensor`  of arbitrary shape.
- **`weights`** : Optional  `Tensor`  whose rank is either 0, or the same rank as `labels` , and must be broadcastable to  `labels`  (i.e., all dimensions mustbe either  `1` , or the same as the corresponding  `labels`  dimension).
- **`metrics_collections`** : An optional list of collections that `root_mean_squared_error`  should be added to.
- **`updates_collections`** : An optional list of collections that  `update_op`  shouldbe added to.
- **`name`** : An optional variable_scope name.


#### 返回：
- **`root_mean_squared_error`** : A  `Tensor`  representing the current mean, the valueof  `total`  divided by  `count` .
- **`update_op`** : An operation that increments the  `total`  and  `count`  variablesappropriately and whose value matches  `root_mean_squared_error` .


#### 加薪：
- **`ValueError`** : If  `predictions`  and  `labels`  have mismatched shapes, or if `weights`  is not  `None`  and its shape doesn't match  `predictions` , or ifeither  `metrics_collections`  or  `updates_collections`  are not a list ortuple.
- **`RuntimeError`** : If eager execution is enabled.
