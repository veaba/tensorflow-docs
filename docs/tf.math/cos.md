Defined in generated file: python/ops/gen_math_ops.py
Computes cos of x element-wise.
### Aliases:
- tf.compat.v1.cos
- tf.compat.v1.math.cos
- tf.compat.v2.cos
- tf.compat.v2.math.cos
- tf.cos

```
 tf.math.cos(
    x,
    name=None
)
```
Given an input tensor, this function computes cosine of every element in the tensor. Input range is (-inf, inf) and output range is [-1,1]. If input lies outside the boundary, nan is returned.
#### Args:
- x: A Tensor. Must be one of the following types: bfloat16, half, float32, float64, complex64, complex128.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as x.
