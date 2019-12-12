Computes the element-wise (weighted) mean of the given tensors.

```
 tf.compat.v1.metrics.mean_tensor(
    values,
    weights=None,
    metrics_collections=None,
    updates_collections=None,
    name=None
)
 
```

In contrast to the  `mean`  function which returns a scalar with themean,  this function returns an average tensor with the same shape as theinput tensors.

The  `mean_tensor`  function creates two local variables, `total_tensor`  and  `count_tensor`  that are used to compute the average of `values` . This average is ultimately returned as  `mean`  which is an idempotentoperation that simply divides  `total`  by  `count` .

For estimation of the metric over a stream of data, the function creates an `update_op`  operation that updates these variables and returns the  `mean` . `update_op`  increments  `total`  with the reduced sum of the product of  `values` and  `weights` , and it increments  `count`  with the reduced sum of  `weights` .

If  `weights`  is  `None` , weights default to 1. Use weights of 0 to mask values.

#### Args:
- **`values`** : A  `Tensor`  of arbitrary dimensions.
- **`weights`** : Optional  `Tensor`  whose rank is either 0, or the same rank as `values` , and must be broadcastable to  `values`  (i.e., all dimensions mustbe either  `1` , or the same as the corresponding  `values`  dimension).
- **`metrics_collections`** : An optional list of collections that  `mean` should be added to.
- **`updates_collections`** : An optional list of collections that  `update_op` should be added to.
- **`name`** : An optional variable_scope name.


#### Returns:
- **`mean`** : A float  `Tensor`  representing the current mean, the value of  `total` divided by  `count` .
- **`update_op`** : An operation that increments the  `total`  and  `count`  variablesappropriately and whose value matches  `mean_value` .


#### Raises:
- **`ValueError`** : If  `weights`  is not  `None`  and its shape doesn't match  `values` ,or if either  `metrics_collections`  or  `updates_collections`  are not a listor tuple.
- **`RuntimeError`** : If eager execution is enabled.
