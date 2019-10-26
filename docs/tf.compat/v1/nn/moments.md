Calculate the mean and variance of x.

```
 tf.compat.v1.nn.moments(
    x,
    axes,
    shift=None,
    name=None,
    keep_dims=None,
    keepdims=None
)
```
The mean and variance are calculated by aggregating the contents of x across axes. If x is 1-D and axes = [0] this is just the mean and variance of a vector.
[tf.nn.batch_normalization](https://tensorflow.google.cn/api_docs/python/tf/nn/batch_normalization)When using these moments for batch normalization (see ):

- for so-called "global normalization", used with convolutional filters with shape [batch, height, width, depth], pass axes=[0, 1, 2].
- for simple batch normalization pass axes=[0] (batch only).
#### Args:
- x: A Tensor.
- axes: Array of ints. Axes along which to compute mean and variance.
- shift: Not used in the current implementation
- name: Name used to scope the operations that compute the moments.
- keep_dims: produce moments with the same dimensionality as the input.
- keepdims: Alias to keep_dims.
#### Returns:
Two Tensor objects: mean and variance.
