Defined in generated file: `python/ops/gen_math_ops.py`
Computes exp(x) - 1 element-wise.
### Aliases:
- `tf.compat.v1.expm1`
- `tf.compat.v1.math.expm1`
- `tf.compat.v2.math.expm1`

```
 tf.math.expm1(
    x,
    name=None
)
```
i.``. ````p(``) - 1 or ``^(``) - 1, wh``r`` `` is th`` input t``nsor. `` d``not``s Eul``r's numb``r and is appro``imat``ly ``qual to 2.718281.
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor`. Has the same type as `x`.
