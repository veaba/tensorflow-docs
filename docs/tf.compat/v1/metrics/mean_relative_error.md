
Computes the mean relative error by normalizing with the given values.

```
 tf.compat.v1.metrics.mean_relative_error(
    labels,
    predictions,
    normalizer,
    weights=None,
    metrics_collections=None,
    updates_collections=None,
    name=None
)
```

The mean_relative_error function creates two local variables, total and count that are used to compute the mean relative absolute error. This average is weighted by weights, and it is ultimately returned as mean_relative_error: an idempotent operation that simply divides total by count.

For estimation of the metric over a stream of data, the function creates an update_op operation that updates these variables and returns the mean_reative_error. Internally, a relative_errors operation divides the absolute value of the differences between predictions and labels by the normalizer. Then update_op increments total with the reduced sum of the product of weights and relative_errors, and it increments count with the reduced sum of weights.

If weights is None, weights default to 1. Use weights of 0 to mask values.
#### Args:
- `labels`: A `Tensor` of the same shape as `predictions`.
- `predictions`: A `Tensor` of arbitrary shape.
- `normalizer`: A `Tensor` of the same shape as `predictions`.
- `weights`: Optional `Tensor` whose rank is either 0, or the same rank as `labels`, and must be broadcastable to `labels` (i.e., all dimensions must be either `1`, or the same as the corresponding `labels` dimension).
- `metrics_collections`: An optional list of collections that `mean_relative_error` should be added to.
- `updates_collections`: An optional list of collections that `update_op` should be added to.
- `name`: An optional variable_scope `name`.
#### Returns:
- `mean_relative_error`: A `Tensor` representing the current mean, the value of `total` divided by `count`.
- `update_op`: An operation that increments the `total` and `count` variables appropriately and whose value matches `mean_relative_error`.
#### Raises:
- `ValueError`: If `predictions` and `labels` have mismatched shapes, or if `weights` is not `None` and its shape doesn't match `predictions`, or if either `metrics_collections` or `updates_collections` are not a list or tuple.
- `RuntimeError`: If eager execution is enabled.
