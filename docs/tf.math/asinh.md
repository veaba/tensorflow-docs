Defined in generated file: `python/ops/gen_math_ops.py`
Computes inverse hyperbolic sine of x element-wise.
### Aliases:
- `tf.asinh`
- `tf.compat.v1.asinh`
- `tf.compat.v1.math.asinh`
- `tf.compat.v2.asinh`
- `tf.compat.v2.math.asinh`

```
 tf.math.asinh(
    x,
    name=None
)
```
Given an input tensor, this function computes inverse hyperbolic sine for every element in the tensor. Both input and output has a range of `[-inf, inf]`.
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor`. Has the same type as `x`.
