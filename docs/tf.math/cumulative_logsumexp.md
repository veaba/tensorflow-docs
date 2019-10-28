Compute the cumulative log-sum-e`x`p of the tensor `x` along `axis`.
### Aliases:
- `tf.compat.v1.math.cumulative_logsumexp`
- `tf.compat.v2.math.cumulative_logsumexp`

```
 tf.math.cumulative_logsumexp(
    x,
    axis=0,
    exclusive=False,
    reverse=False,
    name=None
)
```
By default, this op performs an inclusive cumulative log-sum-exp, which means that the first element of the input is identical to the first element of the output.
