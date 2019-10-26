Defined in generated file: python/ops/gen_math_ops.py
Compute the regularized incomplete beta integral Ix(a,b).
### Aliases:
- tf.compat.v1.betainc
- tf.compat.v1.math.betainc
- tf.compat.v2.math.betainc

```
 tf.math.betainc(
    a,
    b,
    x,
    name=None
)
```
The regularized incomplete beta integral is defined as:
where
is the incomplete beta function and
is the complete beta function.
#### Args:
- a: A Tensor. Must be one of the following types: float32, float64.
- b: A Tensor. Must have the same type as a.
- x: A Tensor. Must have the same type as a.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as a.
