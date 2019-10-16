
Adds a hinge loss to the training procedure.

```
 tf.compat.v1.losses.hinge_loss(
    labels,
    logits,
    weights=1.0,
    scope=None,
    loss_collection=tf.GraphKeys.LOSSES,
    reduction=Reduction.SUM_BY_NONZERO_WEIGHTS
)
```
#### Args:
- `labels`: The ground truth output tensor. Its shape should match the shape of logits. The values of the tensor are expected to be 0.0 or 1.0. Internally the {0,1} `labels` are converted to {-1,1} when calculating the hinge loss.
- `logits`: The `logits`, a float tensor. Note that `logits` are assumed to be unbounded and 0-centered. A value > 0 (resp. < 0) is considered a positive (resp. negative) binary prediction.
- `weights`: Optional `Tensor` whose rank is either 0, or the same rank as `labels`, and must be broadcastable to `labels` (i.e., all dimensions must be either `1`, or the same as the corresponding `losses` dimension).
- `scope`: The `scope` for the operations performed in computing the loss.
- `loss_collection`: collection to which the loss will be added.
- `reduction`: Type of `reduction` to apply to loss.
#### Returns:

Weighted loss float Tensor. If reduction is NONE, this has the same shape as labels; otherwise, it is scalar.
#### Raises:
- `ValueError`: If the shapes of `logits` and `labels` don't match or if `labels` or `logits` is None.
#### Eager Compatibility
[tf.keras.Model](https://www.tensorflow.org/api_docs/python/tf/keras/Model)The loss_collection argument is ignored when executing eagerly. Consider holding on to the return value or collecting losses via a .

