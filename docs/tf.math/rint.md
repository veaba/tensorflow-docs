Defined in generated file: python/ops/gen_math_ops.py
Returns element-wise integer closest to x.
### Aliases:
- tf.compat.v1.math.rint
- tf.compat.v1.rint
- tf.compat.v2.math.rint

```
 tf.math.rint(
    x,
    name=None
)
```
If the result is midway between two representable values, the even representable is chosen. For example:

```
 rint(-1.5) ==> -2.0
rint(0.5000001) ==> 1.0
rint([-1.7, -1.5, -0.2, 0.2, 1.5, 1.7, 2.0]) ==> [-2., -2., -0., 0., 2., 2., 2.]
```
#### Args:
- x: A Tensor. Must be one of the following types: bfloat16, half, float32, float64.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as x.
