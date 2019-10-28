Inserts a dimension of 1 into a tensor's shape.
### Aliases:
- `tf.compat.v2.expand_dims`

```
 tf.expand_dims(
    input,
    axis,
    name=None
)
```
### Used in the guide:
- ``M``a``s``k``i``n``g`` ``a``n``d`` ``p``a``d``d``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
- ``R``e``c``u``r``r``e``n``t`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s`` ``(``R``N``N``)`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``N``e``u``r``a``l`` ``m``a``c``h``i``n``e`` ``t``r``a``n``s``l``a``t``i``o``n`` ``w``i``t``h`` ``a``t``t``e``n``t``i``o``n``
- ``T``e``x``t`` ``g``e``n``e``r``a``t``i``o``n`` ``w``i``t``h`` ``a``n`` ``R``N``N``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
- ``D``e``e``p``D``r``e``a``m``
Given a tensor `input`, this operation inserts a dimension of 1 at the dimension index `axis` of `input`'s shape. The dimension index `axis` starts at zero; if you specify a negative number for `axis` it is counted backward from the end.
