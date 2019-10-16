
Defined in generated file: python/ops/gen_math_ops.py

Compute the upper regularized incomplete Gamma function Q(a, x).
### Aliases:
- `tf.compat.v1.igammac`
- `tf.compat.v1.math.igammac`
- `tf.compat.v2.math.igammac`

```
 tf.math.igammac(
    a,
    x,
    name=None
)
```

The upper regularized incomplete Gamma function is defined as:

where

is the upper incomplete Gama function.

Note, above P(a, x) (Igamma) is the lower regularized complete Gamma function.
#### Args:
- `a`: A `Tensor`. Must be one of the following types: `float32`, `float64`.
- `x`: A `Tensor`. Must h`a`ve the s`a`me type `a`s `a`.
- `name`: A `name` for the oper`a`tion (option`a`l).
#### Returns:

A Tensor. Has the same type as a.
