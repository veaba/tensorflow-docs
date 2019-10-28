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
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
### Used in the tutorials:
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
- ``C``u``s``t``o``m``i``z``a``t``i``o``n`` ``b``a``s``i``c``s``:`` ``t``e``n``s``o``r``s`` ``a``n``d`` ``o``p``e``r``a``t``i``o``n``s``
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``D``e``e``p``D``r``e``a``m``
- ``P``i``x``2``P``i``x``
The generated values follow a uniform distribution in the range `[minval, maxval)`. The lower bound `minval` is included in the range, while the upper bound `maxval` is excluded.
For floats, the default range is `[0, 1)`. For ints, at least `maxval` must be specified explicitly.
