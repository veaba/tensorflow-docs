
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

For estimation of the metric over a stream of data, the function creates an update_op operation that updates the accuracy of each class and returns them.

If weights is None, weights default to 1. Use weights of 0 to mask values.
#### Args:
- `labels`: A `Tensor` of ground truth `labels` with shape [batch size] and of type `int32` or `int64`. The tensor will be flattened if its rank > 1.
- `predictions`: A `Tensor` of prediction results for semantic `labels`, whose shape is [batch size] and type `int32` or `int64`. The tensor will be flattened if its rank > 1.
- `num_classes`: The possible number of `labels` the prediction task can have. This value must be provided, since two variables with shape = [`num_classes`] will be allocated.
- `weights`: Optional `Tensor` whose rank is either 0, or the same rank as `labels`, and must be broadcastable to `labels` (i.e., all dimensions must be either `1`, or the same as the corresponding `labels` dimension).
- `metrics_collections`: An optional list of collections that `mean_per_class_accuracy' should be added to.
- `updates_collections`: An optional list of collections `update_op` should be added to.
- `name`: An optional variable_scope `name`.
#### Returns:
- `mean_accuracy`: A `Tensor` representing the mean per class accuracy.
- `update_op`: An operation that updates the accuracy tensor.
#### Raises:
- `ValueError`: If `predictions` and `labels` have mismatched shapes, or if `weights` is not `None` and its shape doesn't match `predictions`, or if either `metrics_collections` or `updates_collections` are not a list or tuple.
- `RuntimeError`: If eager execution is enabled.
