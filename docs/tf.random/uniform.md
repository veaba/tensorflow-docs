
Outputs random values from a uniform distribution.
### Aliases:
- `tf.compat.v1.random.uniform`
- `tf.compat.v1.random_uniform`
- `tf.compat.v2.random.uniform`

```
 tf.random.uniform(
    shape,
    minval=0,
    maxval=None,
    dtype=tf.dtypes.float32,
    seed=None,
    name=None
)
```
### Used in the guide:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``C``u``s``t``o``m``i``z``a``t``i``o``n`` ``b``a``s``i``c``s``:`` ``t``e``n``s``o``r``s`` ``a``n``d`` ``o``p``e``r``a``t``i``o``n``s``
- ``D``e``e``p``D``r``e``a``m``
- ``I``m``a``g``e`` ``s``e``g``m``e``n``t``a``t``i``o``n``
- ``N``e``u``r``a``l`` ``m``a``c``h``i``n``e`` ``t``r``a``n``s``l``a``t``i``o``n`` ``w``i``t``h`` ``a``t``t``e``n``t``i``o``n``
- ``P``i``x``2``P``i``x``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``

The generated values follow a uniform distribution in the range [minval, maxval). The lower bound minval is included in the range, while the upper bound maxval is excluded.

For floats, the default range is [0, 1). For ints, at least maxval must be specified explicitly.

In the integer case, the random integers are slightly biased unless maxval - minval is an exact power of two. The bias is small for values of maxval - minval significantly smaller than the range of the output (either 2**32 or 2**64).
#### Args:
- `shape`: A 1-D integer Tensor or Python array. The `shape` of the output tensor.
- `minval`: A 0-D Tensor or Python value of type `dtype`. The lower bound on the range of random values to generate. Defaults to 0.
- `maxval`: A 0-D Tensor or Python value of type `dtype`. The upper bound on the range of random values to generate. Defaults to 1 if `dtype` is floating point.
- `dtype`: The type of the output: `float16`, `float32`, `float64`, `int32`, or `int64`.
- `seed`: A Python integer. Used to create a random `seed` for the distribution. See `tf.compat.v1.set_random_seed` for behavior.
- `name`: A `name` for the operation (optional).
#### Returns:

A tensor of the specified shape filled with random uniform values.
#### Raises:
- `ValueError`: If `dtype` is integral and `maxval` is not specified.
