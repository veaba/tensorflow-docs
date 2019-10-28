Computes sparse softmax cross entropy between `logits` and `labels`.

```
 tf.compat.v1.nn.sparse_softmax_cross_entropy_with_logits(
    _sentinel=None,
    labels=None,
    logits=None,
    name=None
)
```
Measures the probability error in discrete classification tasks in which the classes are mutually exclusive (each entry is in exactly one class). For example, each CIFAR-10 image is labeled with one and only one label: an image can be a dog or a truck, but not both.
NOTE: For this operation, the probability of a given label is considered exclusive. That is, soft classes are not allowed, and the `labels` vector must provide a single specific index for the true class for each row of `logits` (each minibatch entry). For soft softmax classification with a probability distribution for each entry, see `softmax_cross_entropy_with_logits_v2`.
WARNING: This op expects unscaled `logits`, since it performs a `softmax` on `logits` internally for efficiency. Do not call this op with the output of `softmax`, as it will produce incorrect results.
A common use case is to have `logits` of shape `[batch_size, num_classes]` and have `labels` of shape `[batch_size]`, but higher `dim`ensions are supported, in which case the `dim`-th `dim`ension is assumed to be of size `num_classes`. `logits` must have the dtype of `float16`, `float32`, or `float64`, and `labels` must have the dtype of `int32` or `int64`.
Note that to avoid confusion, it is required to pass only named arguments to this function.
#### Args:
- `_sentinel`: Used to prevent positional parameters. Internal, do not use.
- `labels`: `Tensor` of shape `[d_0, d_1, ..., d_{r-1}]` (whe`r`e `r` is `r`ank of `labels` and `r`esult) and dtype `int32` o`r` `int64`. Each ent`r`y in `labels` must be an index in `[0, num_classes)`. Othe`r` values will `r`aise an exception when this op is `r`un on CPU, and `r`etu`r`n `NaN` fo`r` co`r``r`esponding loss and g`r`adient `r`ows on GPU.
- `logits`: Per-label activations (typically a linear output) of shape `[d_0, d_1, ..., d_{r-1}, num_classes]` and dtype `float16`, `float32`, or `float64`. These activation energies are interpreted as unnormalized log probabilities.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor` of the same shape as `labels` and of the same type as `logits` with the softmax cross entropy loss.
#### Raises:
- `ValueError`: If logits are scalars (need to have rank >= 1) or if the rank of the labels is not equal to the rank of the logits minus one.
