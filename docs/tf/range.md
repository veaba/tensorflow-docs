Creates a sequence of numbers.
### Aliases:
- `tf.compat.v1.range`
- `tf.compat.v2.range`

```
 tf.range(limit, delta=1, dtype=None, name='range')
tf.range(start, limit, delta=1, dtype=None, name='range')
```
### Used in the guide:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``D``e``e``p``D``r``e``a``m``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
Creates a sequence of numbers that begins at `start` and extends by increments of `delta` up to but not including `limit`.
The dtype of the resulting tensor is inferred from the inputs unless it is provided explicitly.
