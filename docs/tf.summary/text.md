Write a text summary.
### Aliases:
- `tf.compat.v2.summary.text`

```
 tf.summary.text(
    name,
    data,
    step=None,
    description=None
)
```
#### Arguments:
- `name`: A `name` for this summary. The summary tag used for TensorBoard will be this `name` prefixed by any active `name` scopes.
- `data`: A UTF-8 string tensor value.
#### Returns:
True on success, or false if no summary was emitted because no default summary writer was available.
#### Raises:
