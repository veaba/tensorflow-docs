Forces summary writer to send any buffered data to storage.
### Aliases:
- `tf.compat.v2.summary.flush`

```
 tf.summary.flush(
    writer=None,
    name=None
)
```
This operation blocks until that finishes.
#### Args:
- `writer`: The `tf.summary.SummaryWriter` resource to flush. The thread default will be used if this parameter is None. Otherwise a `tf.no_op` is returned.
- `name`: A `name` for the operation (optional).
#### Returns:
The created `tf.Operation`.
