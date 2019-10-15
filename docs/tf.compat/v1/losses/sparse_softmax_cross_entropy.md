[tf.nn.sparse_softmax_cross_entropy_with_logits](https://www.tensorflow.org/api_docs/python/tf/nn/sparse_softmax_cross_entropy_with_logits)Cross-entropy loss using .


```
 tf.compat.v1.losses.sparse_softmax_cross_entropy(
    labels,
    logits,
    weights=1.0,
    scope=None,
    loss_collection=tf.GraphKeys.LOSSES,
    reduction=Reduction.SUM_BY_NONZERO_WEIGHTS
)
```

weights acts as a coefficient for the loss. If a scalar is provided, then the loss is simply scaled by the given value. If weights is a tensor of shape [batch_size], then the loss weights apply to each corresponding sample.
#### Args:
#### Returns:

Weighted loss Tensor of the same type as logits. If reduction is NONE, this has the same shape as labels; otherwise, it is scalar.
#### Raises:
- `ValueError`: If the shapes of `logits`, `labels`, and `weights` are incompatible, or if any of them are None.
#### Eager Compatibility
[tf.keras.Model](https://www.tensorflow.org/api_docs/python/tf/keras/Model)The loss_collection argument is ignored when executing eagerly. Consider holding on to the return value or collecting losses via a .

