Calculates the mean of the per-class accuracies.

```
 tf.compat.v1.metrics.mean_per_class_accuracy(
    labels,
    predictions,
    num_classes,
    weights=None,
    metrics_collections=None,
    updates_collections=None,
    name=None
)
 
```

Calculates the accuracy for each class, then takes the mean of that.

For estimation of the metric over a stream of data, the function creates an `update_op`  operation that updates the accuracy of each class and returnsthem.

If  `weights`  is  `None` , weights default to 1. Use weights of 0 to mask values.

#### 参数：
- **`labels`** : A  `Tensor`  of ground truth labels with shape [batch size] and oftype  `int32`  or  `int64` . The tensor will be flattened if its rank > 1.
- **`predictions`** : A  `Tensor`  of prediction results for semantic labels, whoseshape is [batch size] and type  `int32`  or  `int64` . The tensor will beflattened if its rank > 1.
- **`num_classes`** : The possible number of labels the prediction task canhave. This value must be provided, since two variables with shape =[num_classes] will be allocated.
- **`weights`** : Optional  `Tensor`  whose rank is either 0, or the same rank as `labels` , and must be broadcastable to  `labels`  (i.e., all dimensions mustbe either  `1` , or the same as the corresponding  `labels`  dimension).
- **`metrics_collections`** : An optional list of collections that`mean_per_class_accuracy'should be added to.
- **`updates_collections`** : An optional list of collections  `update_op`  should beadded to.
- **`name`** : An optional variable_scope name.


#### 返回：
- **`mean_accuracy`** : A  `Tensor`  representing the mean per class accuracy.
- **`update_op`** : An operation that updates the accuracy tensor.


#### 加薪：
- **`ValueError`** : If  `predictions`  and  `labels`  have mismatched shapes, or if `weights`  is not  `None`  and its shape doesn't match  `predictions` , or ifeither  `metrics_collections`  or  `updates_collections`  are not a list ortuple.
- **`RuntimeError`** : If eager execution is enabled.
