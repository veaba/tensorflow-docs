
Defined in generated file: python/ops/gen_math_ops.py

Computes the Bessel i0e function of x element-wise.
### Aliases:
- `tf.compat.v1.math.bessel_i0e`
- `tf.compat.v2.math.bessel_i0e`

```
 tf.math.bessel_i0e(
    x,
    name=None
)
```

Exponentially scaled modified Bessel function of order 0 defined as bessel_i0e(x) = exp(-abs(x)) bessel_i0(x).

This function is faster and numerically stabler than bessel_i0(x).
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.

If x is a SparseTensor, returns SparseTensor(x.indices, tf.math.bessel_i0e(x.values, ...), x.dense_shape)
