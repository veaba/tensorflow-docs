Computes recall@k of top-k predictions with respect to sparse labels.

```
 tf.compat.v1.metrics.recall_at_top_k(
    labels,
    predictions_idx,
    k=None,
    class_id=None,
    weights=None,
    metrics_collections=None,
    updates_collections=None,
    name=None
)
```
Differs from `recall_at_k` in that predictions must be in the form of top `k` class indices, whereas `recall_at_k` expects logits. Refer to `recall_at_k` for more details.
#### Args:
- `labels`: `int64` `Tensor` or `SparseTensor` with shape [D1, ... DN, num_`labels`] or [D1, ... DN], where the latter implies num_`labels`=1. N >= 1 and num_`labels` is the number of target classes for the associated prediction. Commonly, N=1 and `labels` has shape [batch_size, num_`labels`]. [D1, ... DN] must match `predictions`. Values should be in range [0, num_classes), where num_classes is the last dimension of `predictions`. Values outside this range always count towards `false_negative_at_<k>`.
- `predictions_idx`: Integer `Tensor` with shape [D1, ... DN, `k`] where N >= 1. Commonly, N=1 and predictions has shape [batch size, `k`]. The final dimension contains the top `k` predicted class indices. [D1, ... DN] must match `labels`.
- `k`: Integer, `k` for @`k` metric. Only used for the default op name.
- `class_id`: Integer class ID for which we want binary metrics. This should be in range [0, num_classes), where num_classes is the last dimension of `predictions`. If `class_id` is outside this range, the method returns NAN.
- `weights`: `Tensor` whose rank is either 0, or n-`1`, where n is the rank of `labels`. If the latter, it must be broadcastable to `labels` (i.e., all dimensions must be either `1`, or the same as the corresponding `labels` dimension).
- `metrics_collections`: An optional list of collections that values should be added to.
- `updates_collections`: An optional list of collections that updates should be added to.
- `name`: Name of new update operation, and `name`space for other dependent ops.
#### Returns:
- `recall`: Scalar `float64` `Tensor` with the value of `true_positives` divided by the sum of `true_positives` and `false_negatives`.
- `update_op`: `Operation` that increments `true_positives` and `false_negatives` variables appropriately, and whose value matches `recall`.
#### Raises:
- `ValueError`: If `weights` is not `None` and its shape doesn't match `predictions`, or if either `metrics_collections` or `updates_collections` are not a list or tuple.
