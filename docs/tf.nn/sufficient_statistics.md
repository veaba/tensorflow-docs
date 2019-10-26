Calculate the sufficient statistics for the mean and variance of x.
### Aliases:
- tf.compat.v2.nn.sufficient_statistics

```
 tf.nn.sufficient_statistics(
    x,
    axes,
    shift=None,
    keepdims=False,
    name=None
)
```
These sufficient statistics are computed using the one pass algorithm on an input that's optionally shifted. See: https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Computing_shifted_data
#### Args:
- x: A Tensor.
- axes: Array of ints. Axes along which to compute mean and variance.
- shift: A Tensor containing the value by which to shift the data for numerical stability, or None if no shift is to be performed. A shift close to the true mean provides the most numerically stable results.
- keepdims: produce statistics with the same dimensionality as the input.
- name: Name used to scope the operations that compute the sufficient stats.
#### Returns:
Four Tensor objects of the same type as x:
- the count (number of elements to average over).
- the (possibly shifted) sum of the elements in the array.
- the (possibly shifted) sum of squares of the elements in the array.
- the shift by which the mean must be corrected or None if shift is None.
