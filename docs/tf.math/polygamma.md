Defined in generated file: python/ops/gen_math_ops.py
Compute the polygamma function ψ(n)(x).
### Aliases:
- tf.compat.v1.math.polygamma
- tf.compat.v1.polygamma
- tf.compat.v2.math.polygamma

```
 tf.math.polygamma(
    a,
    x,
    name=None
)
```
The polygamma function is defined as:
where
is the digamma function. The polygamma function is defined only for non-negative integer orders \a\.
#### Args:
- a: A Tensor. Must be one of the following types: float32, float64.
- x: A Tensor. Must have the same type as a.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as a.
