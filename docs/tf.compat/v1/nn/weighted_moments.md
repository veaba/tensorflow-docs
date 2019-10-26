Returns the frequency-weighted mean and variance of x.

```
 tf.compat.v1.nn.weighted_moments(
    x,
    axes,
    frequency_weights,
    name=None,
    keep_dims=None,
    keepdims=None
)
```
#### Args:
- x: A tensor.
- axes: 1-d tensor of int32 values; these are the axes along which to compute mean and variance.
- frequency_weights: A tensor of positive weights which can be broadcast with x.
- name: Name used to scope the operation.
- keep_dims: Produce moments with the same dimensionality as the input.
- keepdims: Alias of keep_dims.
#### Returns:
Two tensors: weighted_mean and weighted_variance.
