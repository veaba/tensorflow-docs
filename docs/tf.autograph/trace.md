
Traces argument information at compilation time.
### Aliases:
- `tf.compat.v1.autograph.trace`
- `tf.compat.v2.autograph.trace`

```
 tf.autograph.trace(*args)
```

trace is useful when debugging, and it always executes during the tracing phase, that is, when the TF graph is constructed.

Example usage

```
 import tensorflow as tf

for i in tf.range(10):
  tf.autograph.trace(i)
# Output: <Tensor ...>
```
#### Args:
