Calculate per-step mean Intersection-Over-Union (mIOU).

```
 tf.compat.v1.metrics.mean_iou(    labels,    predictions,    num_classes,    weights=None,    metrics_collections=None,    updates_collections=None,    name=None) 
```

Mean Intersection-Over-Union is a common evaluation metric forsemantic image segmentation, which first computes the IOU for eachsemantic class and then computes the average over classes.IOU is defined as follows:  IOU = true_positive / (true_positive + false_positive + false_negative).The predictions are accumulated in a confusion matrix, weighted by  `weights` ,and mIOU is then calculated from it.

For estimation of the metric over a stream of data, the function creates an `update_op`  operation that updates these variables and returns the  `mean_iou` .

If  `weights`  is  `None` , weights default to 1. Use weights of 0 to mask values.

#### 参数：
- **`labels`** : A  `Tensor`  of ground truth labels with shape [batch size] and oftype  `int32`  or  `int64` . The tensor will be flattened if its rank > 1.
- **`predictions`** : A  `Tensor`  of prediction results for semantic labels, whoseshape is [batch size] and type  `int32`  or  `int64` . The tensor will beflattened if its rank > 1.
- **`num_classes`** : The possible number of labels the prediction task canhave. This value must be provided, since a confusion matrix ofdimension = [num_classes, num_classes] will be allocated.
- **`weights`** : Optional  `Tensor`  whose rank is either 0, or the same rank as `labels` , and must be broadcastable to  `labels`  (i.e., all dimensions mustbe either  `1` , or the same as the corresponding  `labels`  dimension).
- **`metrics_collections`** : An optional list of collections that  `mean_iou` should be added to.
- **`updates_collections`** : An optional list of collections  `update_op`  should beadded to.
- **`name`** : An optional variable_scope name.


#### 返回：
- **`mean_iou`** : A  `Tensor`  representing the mean intersection-over-union.
- **`update_op`** : An operation that increments the confusion matrix.


#### 加薪：
- **`ValueError`** : If  `predictions`  and  `labels`  have mismatched shapes, or if `weights`  is not  `None`  and its shape doesn't match  `predictions` , or ifeither  `metrics_collections`  or  `updates_collections`  are not a list ortuple.
- **`RuntimeError`** : If eager execution is enabled.
