Defined in generated file: `python/ops/gen_math_ops.py`
Computes arctangent of `y/x` element-wise, respecting signs of the arguments.
### Aliases:
- `tf.atan2`
- `tf.compat.v1.atan2`
- `tf.compat.v1.math.atan2`
- `tf.compat.v2.atan2`
- `tf.compat.v2.math.atan2`

```
 tf.math.atan2(
    y,
    x,
    name=None
)
```
This is the angle ( \theta \in [-\pi, \pi] ) such that [ x = r \cos(\theta) ] and [ y = r \sin(\theta) ] where (r = \sqrt(x^2 + y^2) ).
#### Args:
- `y`: A `Tensor`. Must be one of the following t`y`pes: `bfloat16`, `half`, `float32`, `float64`.
- `x`: A `Tensor`. Must have the same t`y`pe as `y`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor`. Has the same t`y`pe as `y`.
