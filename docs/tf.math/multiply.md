
Returns x * y element-wise.
### Aliases:
- `tf.RaggedTensor.__mul__`
- `tf.compat.v1.RaggedTensor.__mul__`
- `tf.compat.v1.math.multiply`
- `tf.compat.v1.multiply`
- `tf.compat.v2.RaggedTensor.__mul__`
- `tf.compat.v2.math.multiply`
- `tf.compat.v2.multiply`
- `tf.multiply`

```
 tf.math.multiply(
    x,
    y,
    name=None
)
```
### Used in the guide:
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``A``u``t``o``m``a``t``i``c`` ``d``i``f``f``e``r``e``n``t``i``a``t``i``o``n`` ``a``n``d`` ``g``r``a``d``i``e``n``t`` ``t``a``p``e``
- ``C``u``s``t``o``m``i``z``a``t``i``o``n`` ``b``a``s``i``c``s``:`` ``t``e``n``s``o``r``s`` ``a``n``d`` ``o``p``e``r``a``t``i``o``n``s``
[tf.multiply](https://www.tensorflow.org/api_docs/python/tf/math/multiply)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `uint16`, `int16`, `int32`, `int64`, `complex64`, `complex128`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
