计算标签和预测之间的余弦距离。

```
 tf.compat.v1.metrics.mean_cosine_distance(
    labels,
    predictions,
    dim,
    weights=None,
    metrics_collections=None,
    updates_collections=None,
    name=None
)
 
```

The  `mean_cosine_distance`  function creates two local variables, `total`  and  `count`  that are used to compute the average cosine distancebetween  `predictions`  and  `labels` . This average is weighted by  `weights` ,and it is ultimately returned as  `mean_distance` , which is an idempotentoperation that simply divides  `total`  by  `count` .

For estimation of the metric over a stream of data, the function creates an `update_op`  operation that updates these variables and returns the `mean_distance` .

If  `weights`  is  `None` , weights default to 1. Use weights of 0 to mask values.

#### 参数：
- **`labels`** : A  `Tensor`  of arbitrary shape.
- **`predictions`** : A  `Tensor`  of the same shape as  `labels` .
- **`dim`** : The dimension along which the cosine distance is computed.
- **`weights`** : Optional  `Tensor`  whose rank is either 0, or the same rank as `labels` , and must be broadcastable to  `labels`  (i.e., all dimensions mustbe either  `1` , or the same as the corresponding  `labels`  dimension). Also,dimension  `dim`  must be  `1` .
- **`metrics_collections`** : An optional list of collections that the metricvalue variable should be added to.
- **`updates_collections`** : An optional list of collections that the metric updateops should be added to.
- **`name`** : An optional variable_scope name.


#### 返回：
- **`mean_distance`** : A  `Tensor`  representing the current mean, the value of `total`  divided by  `count` .
- **`update_op`** : An operation that increments the  `total`  and  `count`  variablesappropriately.


#### 加薪：
- **`ValueError`** : If  `predictions`  and  `labels`  have mismatched shapes, or if `weights`  is not  `None`  and its shape doesn't match  `predictions` , or ifeither  `metrics_collections`  or  `updates_collections`  are not a list ortuple.
- **`RuntimeError`** : If eager execution is enabled.
