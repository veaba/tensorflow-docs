
Defined in generated file: python/ops/gen_math_ops.py

Computes tan of x element-wise.
### Aliases:
- `tf.compat.v1.math.tan`
- `tf.compat.v1.tan`
- `tf.compat.v2.math.tan`
- `tf.compat.v2.tan`
- `tf.tan`

```
 tf.math.tan(
    x,
    name=None
)
```

Given an input tensor, this function computes tangent of every element in the tensor. Input range is (-inf, inf) and output range is (-inf, inf). If input lies outside the boundary, nan is returned.
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int32`, `int64`, `complex64`, `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
