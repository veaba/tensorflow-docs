
Defined in generated file: python/ops/gen_math_ops.py

Returns x + y element-wise.
### Aliases:
- `tf.RaggedTensor.__add__`
- `tf.add`
- `tf.compat.v1.RaggedTensor.__add__`
- `tf.compat.v1.add`
- `tf.compat.v1.math.add`
- `tf.compat.v2.RaggedTensor.__add__`
- `tf.compat.v2.add`
- `tf.compat.v2.math.add`

```
 tf.math.add(
    x,
    y,
    name=None
)
```
### Used in the guide:
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``R``a``g``g``e``d`` ``t``e``n``s``o``r``s``
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``C``u``s``t``o``m``i``z``a``t``i``o``n`` ``b``a``s``i``c``s``:`` ``t``e``n``s``o``r``s`` ``a``n``d`` ``o``p``e``r``a``t``i``o``n``s``
[math.add](https://www.tensorflow.org/api_docs/python/tf/math/add)NOTE:  supports broadcasting. AddN does not. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `int16`, `int32`, `int64`, `complex64`, `complex128`, `string`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
