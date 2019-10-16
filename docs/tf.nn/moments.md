
Calculates the mean and variance of x.
### Aliases:
- `tf.compat.v2.nn.moments`

```
 tf.nn.moments(
    x,
    axes,
    shift=None,
    keepdims=False,
    name=None
)
```

The mean and variance are calculated by aggregating the contents of x across axes. If x is 1-D and axes = [0] this is just the mean and variance of a vector.
[tf.nn.batch_normalization](https://www.tensorflow.org/api_docs/python/tf/nn/batch_normalization)When using these moments for batch normalization (see ):

- for` `so-`c``a`ll`e``d`` `"`g`lo`b``a`l` `norm`a`l`i`z`a``t``i`on"`,`` `us`e``d`` ``w``i``t``h`` ``c`onvolu`t``i`on`a`l` `f`i`l`t``e`rs` ``w``i``t``h`` `s`h``a``p``e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``d``e``p``t``h`]`,`` ``p``a`ss` ``a`x`e`s=[0`,`` `1`,`` `2].
- for` `s`i`m`p`l`e`` ``b``a``t``c``h`` `norm`a`l`i`z`a``t``i`on` ``p``a`ss` ``a`x`e`s=[0]` `(`b``a``t``c``h`` `only).
#### Args:
- `x`: A `Tensor`.
- `axes`: Array of ints. A`x`es along which to compute mean and variance.
- `shift`: Not used in the current implementation.
- `keepdims`: produce moments with the same dimensionality as the input.
- `name`: Name used to scope the operations that compute the moments.
#### Returns:

Two Tensor objects: mean and variance.
