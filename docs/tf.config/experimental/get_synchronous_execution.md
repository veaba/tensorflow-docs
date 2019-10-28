Gets whether operations are executed synchronously or asynchronously.
### Aliases:
- `tf.compat.v1.config.experimental.get_synchronous_execution`
- `tf.compat.v2.config.experimental.get_synchronous_execution`

```
 tf.config.experimental.get_synchronous_execution()
```
TensorFlow can execute operations synchronously or asynchronously. If asynchronous execution is enabled, operations may return "non-ready" handles.
#### Returns:
Current thread execution mode
