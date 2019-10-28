Calculates how often `predictions` matches `labels`.

```
 tf.compat.v1.metrics.accuracy(
    labels,
    predictions,
    weights=None,
    metrics_collections=None,
    updates_collections=None,
    name=None
)
```
### Used in the guide:
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
The `accuracy` function creates two local variables, `total` and `count` that are used to compute the frequency with which `predictions` matches `labels`. This frequency is ultimately returned as `accuracy`: an idempotent operation that simply divides `total` by `count`.
For estimation of the metric over a stream of data, the function creates an `update_op` operation that updates these variables and returns the `accuracy`. Internally, an `is_correct` operation computes a `Tensor` with elements 1.0 where the corresponding elements of `predictions` and `labels` match and 0.0 otherwise. Then `update_op` increments `total` with the reduced sum of the product of `weights` and `is_correct`, and it increments `count` with the reduced sum of `weights`.
If `weights` is `None`, `weights` default to 1. Use `weights` of 0 to mask values.
#### Args:
- `labels`: The ground truth values, a `Tensor` whose shape matches `predictions`.
- `predictions`: The predicted values, a `Tensor` of any shape.
- `weights`: Optional `Tensor` whose rank is either 0, or the same rank as `labels`, and must be broadcastable to `labels` (i.e., all dimensions must be either `1`, or the same as the corresponding `labels` dimension).
- `metrics_collections`: An optional list of collections that `accuracy` should be added to.
- `updates_collections`: An optional list of collections that `update_op` should be added to.
- `name`: An optional variable_scope `name`.
#### Returns:
- `accuracy`: A `Tensor` representing the `accuracy`, the value of `total` divided by `count`.
- `update_op`: An operation that increments the `total` and `count` variables appropriately and whose value matches `accuracy`.
#### Raises:
- `ValueError`: If `predictions` and `labels` have mismatched shapes, or if `weights` is not `None` and its shape doesn't match `predictions`, or if either `metrics_collections` or `updates_collections` are not a list or tuple.
- `RuntimeError`: If eager execution is enabled.
