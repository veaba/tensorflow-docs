
Defined in generated file: python/ops/gen_nn_ops.py

Computes rectified linear: max(features, 0).
### Aliases:
- `tf.compat.v1.nn.relu`
- `tf.compat.v2.nn.relu`

```
 tf.nn.relu(
    features,
    name=None
)
```
### Used in the guide:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``C``u``s``t``o``m`` ``l``a``y``e``r``s``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
#### Args:
- `features`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`, `qint8`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as features.
