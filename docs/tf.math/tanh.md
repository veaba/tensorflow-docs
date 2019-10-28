Defined in generated file: `python/ops/gen_math_ops.py`
Computes hyperbolic tangent of `x` element-wise.
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
- Neural machine translation with attention
Given an input tensor, this function computes hyperbolic tangent of every element in the tensor. Input range is `[-inf, inf]` and output range is `[-1,1]`.
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor`. Has the same type as `x`.
