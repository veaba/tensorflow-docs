计算相对于标签的预测精度。

```
 tf.compat.v1.metrics.precision(
    labels,
    predictions,
    weights=None,
    metrics_collections=None,
    updates_collections=None,
    name=None
)
 
```

The  `precision`  function creates two local variables, `true_positives`  and  `false_positives` , that are used to compute theprecision. This value is ultimately returned as  `precision` , an idempotentoperation that simply divides  `true_positives`  by the sum of  `true_positives` and  `false_positives` .

For estimation of the metric over a stream of data, the function creates an `update_op`  operation that updates these variables and returns the `precision` .  `update_op`  weights each prediction by the corresponding value in `weights` .

If  `weights`  is  `None` , weights default to 1. Use weights of 0 to mask values.

#### 参数：
- **`labels`** : The ground truth values, a  `Tensor`  whose dimensions must match `predictions` . Will be cast to  `bool` .
- **`predictions`** : The predicted values, a  `Tensor`  of arbitrary dimensions. Willbe cast to  `bool` .
- **`weights`** : Optional  `Tensor`  whose rank is either 0, or the same rank as `labels` , and must be broadcastable to  `labels`  (i.e., all dimensions mustbe either  `1` , or the same as the corresponding  `labels`  dimension).
- **`metrics_collections`** : An optional list of collections that  `precision`  shouldbe added to.
- **`updates_collections`** : An optional list of collections that  `update_op`  shouldbe added to.
- **`name`** : An optional variable_scope name.


#### 返回：
- **`precision`** : Scalar float  `Tensor`  with the value of  `true_positives` divided by the sum of  `true_positives`  and  `false_positives` .
- **`update_op`** :  `Operation`  that increments  `true_positives`  and `false_positives`  variables appropriately and whose value matches `precision` .


#### 加薪：
- **`ValueError`** : If  `predictions`  and  `labels`  have mismatched shapes, or if `weights`  is not  `None`  and its shape doesn't match  `predictions` , or ifeither  `metrics_collections`  or  `updates_collections`  are not a list ortuple.
- **`RuntimeError`** : If eager execution is enabled.
