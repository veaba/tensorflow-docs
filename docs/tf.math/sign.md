Defined in generated file: `python/ops/gen_math_ops.py`
Returns an element-wise indication of the sign of a number.
### Aliases:
- `tf.compat.v1.math.sign`
- `tf.compat.v1.sign`
- `tf.compat.v2.math.sign`
- `tf.compat.v2.sign`
- `tf.sign`

```
 tf.math.sign(
    x,
    name=None
)
```
### Used in the tutorials:
- ``A``d``v``e``r``s``a``r``i``a``l`` ``e``x``a``m``p``l``e`` ``u``s``i``n``g`` ``F``G``S``M``
y = sign(x) = -1 if `x < 0`; 0 if `x == 0`; 1 if ``.
``F``o``r`` ``c``o``m``p``l``e`x``` ``n``u``m``b``e``r``s``,`` ``y`` ``=`` ``s``i``g``n``(`x```)`` ``=`` `x``` ``/`` ``|`x```|`` ``i``f`` `x``` ``!``=`` ``0``,`` ``o``t``h``e``r``w``i``s``e`` ``````.``
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int32`, `int64`, `complex64`, `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor`. Has the same type as `x`.
