Clears the default graph stack and resets the global default graph.

```
 tf.compat.v1.reset_default_graph()
```
[tf.compat.v1.Session](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session)NOTE: The default graph is a property of the current thread. This function applies only to the current thread. Calling this function while a  or tf.compat.v1.InteractiveSession is active will result in undefined behavior. Using any previously created tf.Operation or tf.Tensor objects after calling this function will result in undefined behavior. Raises: AssertionError: If this function is called within a nested graph.

