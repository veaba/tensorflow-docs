Defined in generated file: `python/ops/gen_math_ops.py`
Computes exponential of x element-wise.
.
### Aliases:
- `tf.compat.v1.exp`
- `tf.compat.v1.math.exp`
- `tf.compat.v2.exp`
- `tf.compat.v2.math.exp`
- `tf.exp`

```
 tf.math.exp(
    x,
    name=None
)
```
### Used in the guide:
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
### Used in the tutorials:
For complex numbers, the exponential value is calculated as follows:
Let's consider complex number 1+1j as an example. e^1 * (cos 1 + i sin 1) = 2.7182818284590 * (0.54030230586+0.8414709848j)
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor`. Has the same type as `x`.
