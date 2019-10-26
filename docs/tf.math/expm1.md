Defined in generated file: python/ops/gen_math_ops.py
Computes exp(x) - 1 element-wise.
### Aliases:
- tf.compat.v1.expm1
- tf.compat.v1.math.expm1
- tf.compat.v2.math.expm1

```
 tf.math.expm1(
    x,
    name=None
)
```
i.e. exp`(x)` - 1 or e^`(x)` - 1, where x is the input tensor. e denotes Euler's number and is approximately equal to 2.718281.
#### Args:
- x: A Tensor. Must be one of the following types: bfloat16, half, float32, float64, complex64, complex128.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as x.
