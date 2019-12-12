计算小于给定阈值的值的百分比。

```
 tf.compat.v1.metrics.percentage_below(
    values,
    threshold,
    weights=None,
    metrics_collections=None,
    updates_collections=None,
    name=None
)
 
```

The  `percentage_below`  function creates two local variables, `total`  and  `count`  that are used to compute the percentage of  `values`  thatfall below  `threshold` . This rate is weighted by  `weights` , and it isultimately returned as  `percentage`  which is an idempotent operation thatsimply divides  `total`  by  `count` .

For estimation of the metric over a stream of data, the function creates an `update_op`  operation that updates these variables and returns the `percentage` .

If  `weights`  is  `None` , weights default to 1. Use weights of 0 to mask values.

#### 参数：
- **`values`** : A numeric  `Tensor`  of arbitrary size.
- **`threshold`** : A scalar threshold.
- **`weights`** : Optional  `Tensor`  whose rank is either 0, or the same rank as `values` , and must be broadcastable to  `values`  (i.e., all dimensions mustbe either  `1` , or the same as the corresponding  `values`  dimension).
- **`metrics_collections`** : An optional list of collections that the metricvalue variable should be added to.
- **`updates_collections`** : An optional list of collections that the metric updateops should be added to.
- **`name`** : An optional variable_scope name.


#### 返回：
- **`percentage`** : A  `Tensor`  representing the current mean, the value of  `total` divided by  `count` .
- **`update_op`** : An operation that increments the  `total`  and  `count`  variablesappropriately.


#### 加薪：
- **`ValueError`** : If  `weights`  is not  `None`  and its shape doesn't match  `values` ,or if either  `metrics_collections`  or  `updates_collections`  are not a listor tuple.
- **`RuntimeError`** : If eager execution is enabled.
