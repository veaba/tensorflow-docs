
Calculate the sufficient statistics for the mean and variance of x.

```
 tf.compat.v1.nn.sufficient_statistics(
    x,
    axes,
    shift=None,
    keep_dims=None,
    name=None,
    keepdims=None
)
```

These sufficient statistics are computed using the one pass algorithm on an input that's optionally shifted. See: https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Computing_shifted_data
#### Args:
- `x`: A `Tensor`.
- `axes`: Array of ints. A`x`es along which to compute mean and variance.
- `shift`: A `Tensor` containing the value by which to `shift` the data for numerical stability, or `None` if no `shift` is to be performed. A `shift` close to the true mean provides the most numerically stable results.
- `keep_dims`: produce statistics with the same dimensionality as the input.
- `name`: Name used to scope the operations that compute the sufficient stats.
- `keepdims`: Alias for `keep_dims`.
#### Returns:

Four Tensor objects of the same type as x:
- ``t``h``e`` ``c``o``u``n``t`` ``(``n``u``m``b``e``r`` ``o``f`` ``e``l``e``m``e``n``t``s`` ``t``o`` ``a``v``e``r``a``g``e`` ``o``v``e``r``)``.``
- ``t``h``e`` ``(``p``o``s``s``i``b``l``y`` ``s``h``i``f``t``e``d``)`` ``s``u``m`` ``o``f`` ``t``h``e`` ``e``l``e``m``e``n``t``s`` ``i``n`` ``t``h``e`` ``a``r``r``a``y``.``
- ``t``h``e`` ``(``p``o``s``s``i``b``l``y`` ``s``h``i``f``t``e``d``)`` ``s``u``m`` ``o``f`` ``s``q``u``a``r``e``s`` ``o``f`` ``t``h``e`` ``e``l``e``m``e``n``t``s`` ``i``n`` ``t``h``e`` ``a``r``r``a``y``.``
- the `shift` by which the mean must be corrected or None if `shift` is None.
