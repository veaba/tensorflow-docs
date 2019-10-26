Defined in generated file: python/ops/gen_math_ops.py
Computes hyperbolic cosine of x element-wise.
### Aliases:
- tf.compat.v1.cosh
- tf.compat.v1.math.cosh
- tf.compat.v2.cosh
- tf.compat.v2.math.cosh
- tf.cosh

```
 tf.math.cosh(
    x,
    name=None
)
```
Given an input tensor, this function computes hyperbolic cosine of every element in the tensor. Input range is [-inf, inf] and output range is [1, inf].
#### Args:
- x: A Tensor. Must be one of the following types: bfloat16, half, float32, float64, complex64, complex128.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as x.
