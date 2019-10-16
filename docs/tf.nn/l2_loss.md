
Defined in generated file: python/ops/gen_nn_ops.py

L2 Loss.
### Aliases:
- `tf.compat.v1.nn.l2_loss`
- `tf.compat.v2.nn.l2_loss`

```
 tf.nn.l2_loss(
    t,
    name=None
)
```

Computes half the L2 norm of a tensor without the sqrt:

```
 output = sum(t ** 2) / 2
```
#### Args:
- `t`: A `Tensor`. Mus`t` be one of `t`he following `t`ypes: `half`, `bfloat16`, `float32`, `float64`. Typically 2-D, bu`t` may have any dimensions.
- `name`: A `name` for `t`he opera`t`ion (op`t`ional).
#### Returns:

A Tensor. Has the same type as t.
