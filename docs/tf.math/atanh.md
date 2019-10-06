
Defined in generated file: python/ops/gen_math_ops.py

Computes inverse hyperbolic tangent of x element-wise.
### Aliases:
- `tf.atanh`
- `tf.compat.v1.atanh`
- `tf.compat.v1.math.atanh`
- `tf.compat.v2.atanh`
- `tf.compat.v2.math.atanh`

```
 tf.math.atanh(
    x,
    name=None
)
```

Given an input tensor, this function computes inverse hyperbolic tangent for every element in the tensor. Input range is [-1,1] and output range is [-inf, inf]. If input is -1, output will be -inf and if the input is 1, output will be inf. Values outside the range will have nan as output.
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
