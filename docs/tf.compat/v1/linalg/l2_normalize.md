Normalizes along dimension `axis` using an L2 norm. (deprecated arguments)
### Aliases:
- `tf.compat.v1.math.l2_normalize`
- `tf.compat.v1.nn.l2_normalize`

```
 tf.compat.v1.linalg.l2_normalize(
    x,
    axis=None,
    epsilon=1e-12,
    name=None,
    dim=None
)
```
For a 1-D tensor with `axis = 0`, computes

```
 output = x / sqrt(max(sum(x**2), epsilon))
```
For `x` with more dimensions, independently normalizes each 1-D slice along dimension `axis`.
#### Args:
- `x`: A `Tensor`.
- `axis`: Dimension along which to normalize. A scalar or a vector of integers.
#### Returns:
A `Tensor` with the same shape as `x`.
