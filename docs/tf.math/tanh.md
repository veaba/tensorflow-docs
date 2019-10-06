
Defined in generated file: python/ops/gen_math_ops.py

Computes hyperbolic tangent of x element-wise.
### Aliases:
- `tf.compat.v1.math.tanh`
- `tf.compat.v1.nn.tanh`
- `tf.compat.v1.tanh`
- `tf.compat.v2.math.tanh`
- `tf.compat.v2.nn.tanh`
- `tf.compat.v2.tanh`
- `tf.nn.tanh`
- `tf.tanh`

```
 tf.math.tanh(
    x,
    name=None
)
```
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- Neural` `mach`i``n`e` `tra`n`slat`i`o`n`` `w`i`th` `atte`n`t`i`o`n`
G`i`ve`n`` `a`n`` ``i``n`put` `te`n`sor`,`` `th`i`s` ``f`u`n`ct`i`o`n`` `computes` `hyperbol`i`c` `ta`n`ge`n`t` `o`f`` `every` `eleme`n`t` ``i``n`` `the` `te`n`sor.` `I`n`put` `ra`n`ge` ``i`s` `[`-``i``n``f``,`` ``i``n``f`]` `a`n`d` `output` `ra`n`ge` ``i`s` `[`-``1``,``1`].
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.

If x is a SparseTensor, returns SparseTensor(x.indices, tf.math.tanh(x.values, ...), x.dense_shape)
