Clears the default graph stack and resets the global default graph.

```
 tf.compat.v1.reset_default_graph()
```
NOTE: The default graph is a property of the current thread. This function applies only to the current thread. Calling this function while a `tf.compat.v1.Session` or `tf.compat.v1.InteractiveSession` is active will result in undefined behavior. Using any previously created `tf.Operation` or `tf.Tensor` objects after calling this function will result in undefined behavior. Raises: AssertionError: If this function is called within a nested graph.
