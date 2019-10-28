Sum the weights of false positives.

```
 tf.compat.v1.metrics.false_positives(
    labels,
    predictions,
    weights=None,
    metrics_collections=None,
    updates_collections=None,
    name=None
)
```
If `weights` is `None`, `weights` default to 1. Use `weights` of 0 to mask values.
#### Args:
- `labels`: The ground truth values, a `Tensor` whose dimensions must match `predictions`. Will be cast to `bool`.
- `predictions`: The predicted values, a `Tensor` of arbitrary dimensions. Will be cast to `bool`.
- `weights`: Optional `Tensor` whose rank is either 0, or the same rank as `labels`, and must be broadcastable to `labels` (i.e., all dimensions must be either `1`, or the same as the corresponding `labels` dimension).
- `metrics_collections`: An optional list of collections that the metric value variable should be added to.
- `updates_collections`: An optional list of collections that the metric update ops should be added to.
- `name`: An optional variable_scope `name`.
#### Returns:
- `value_tensor`: A `Tensor` representing the current value of the metric.
- `update_op`: An operation that accumulates the error from a batch of data.
#### Raises:
- `ValueError`: If `predictions` and `labels` have mismatched shapes, or if `weights` is not `None` and its shape doesn't match `predictions`, or if either `metrics_collections` or `updates_collections` are not a list or tuple.
- `RuntimeError`: If eager execution is enabled.
