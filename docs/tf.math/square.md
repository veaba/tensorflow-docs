
Defined in generated file: python/ops/gen_math_ops.py

Computes square of x element-wise.
### Aliases:
- `tf.compat.v1.math.square`
- `tf.compat.v1.square`
- `tf.compat.v2.math.square`
- `tf.compat.v2.square`
- `tf.square`

```
 tf.math.square(
    x,
    name=None
)
```
### Used in the guide:
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``t``f``.``d``i``s``t``r``i``b``u``t``e``.``S``t``r``a``t``e``g``y``
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``b``a``s``i``c``s``
- ``C``u``s``t``o``m``i``z``a``t``i``o``n`` ``b``a``s``i``c``s``:`` ``t``e``n``s``o``r``s`` ``a``n``d`` ``o``p``e``r``a``t``i``o``n``s``

I.e.,
.
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int32`, `int64`, `complex64`, `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.

If x is a SparseTensor, returns SparseTensor(x.indices, tf.math.square(x.values, ...), x.dense_shape)
