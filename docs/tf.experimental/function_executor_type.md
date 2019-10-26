Context manager for setting the executor of eager defined functions.
### Aliases:
- tf.compat.v1.experimental.function_executor_type
- tf.compat.v2.experimental.function_executor_type

```
 tf.experimental.function_executor_type(executor_type)
```
Eager defined functions are functions decorated by tf.contrib.eager.defun.
#### Args:
- executor_type: a string for the name of the executor to be used to execute functions defined by tf.contrib.eager.defun.
#### Yields:
Context manager for setting the executor of eager defined functions.
