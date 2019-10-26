Defined in generated file: python/ops/gen_math_ops.py
Computes sine of x element-wise.
- tf.compat.v1.math.sin
- tf.compat.v1.sin
- tf.compat.v2.math.sin
- tf.compat.v2.sin
- tf.sin

```
 tf.math.sin(
    x,
    name=None
)
```
Given an input tensor, this function computes sine of every element in the tensor. Input range is (-inf, inf) and output range is [-1,1].
#### Args:
- x: A Tensor. Must be one of the following types: bfloat16, half, float32, float64, complex64, complex128.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as x.
