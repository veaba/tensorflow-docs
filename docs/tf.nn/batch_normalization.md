Batch normalization.
### Aliases:
- `tf.compat.v1.nn.batch_normalization`
- `tf.compat.v2.nn.batch_normalization`

```
 tf.nn.batch_normalization(
    x,
    mean,
    variance,
    offset,
    scale,
    variance_epsilon,
    name=None
)
```
Normalizes a tensor by `mean` and `variance`, and applies (optionally) a `scale` γ to it, as well as an `offset` β:
`mean`, `variance`, `offset` and `scale` are all expected to be of one of two shapes:
See Source: Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift; S. Ioffe, C. Szegedy.
#### Args:
- `x`: Input `Tensor` of arbitrary dimensionality.
- `mean`: A `mean` `Tensor`.
- `variance`: A `variance` `Tensor`.
- `offset`: An `offset` `Tensor`, often denoted
in equations, or None. If present, will be added to the normalized tensor.
- `scale`: A `scale` `Tensor`, often denoted
in equations, or `None`. If present, the `scale` is applied to the normalized tensor.
- `variance_epsilon`: A small float number to avoid dividing by 0.
- `name`: A `name` for this operation (optional).
#### Returns:
the normalized, scaled, offset tensor.
