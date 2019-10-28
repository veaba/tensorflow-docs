Write a histogram summary.
### Aliases:
- `tf.compat.v2.summary.histogram`

```
 tf.summary.histogram(
    name,
    data,
    step=None,
    buckets=None,
    description=None
)
```
#### Arguments:
- `name`: A `name` for this summary. The summary tag used for TensorBoard will be this `name` prefixed by any active `name` scopes.
- `data`: A `Tensor` of any shape. Must be castable to `float64`.
#### Returns:
True on success, or false if no summary was emitted because no default summary writer was available.
#### Raises:
