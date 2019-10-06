
Defined in generated file: python/ops/gen_nn_ops.py

Computes softplus: log(exp(features) + 1).
### Aliases:
- `tf.compat.v1.math.softplus`
- `tf.compat.v1.nn.softplus`
- `tf.compat.v2.math.softplus`
- `tf.compat.v2.nn.softplus`
- `tf.nn.softplus`

```
 tf.math.softplus(
    features,
    name=None
)
```
#### Args:
- `features`: A `Tensor`. Must be one of the following types: `half`, `bfloat16`, `float32`, `float64`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as features.
