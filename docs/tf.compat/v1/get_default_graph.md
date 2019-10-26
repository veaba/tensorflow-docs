Returns the default graph for the current thread.

```
 tf.compat.v1.get_default_graph()
```
[Graph.as_default()](https://tensorflow.google.cn/api_docs/python/tf/Graph#as_default)The returned graph will be the innermost graph on which a  context has been entered, or a global default graph if none has been explicitly created.

NOTE: The default graph is a property of the current thread. If you create a new thread, and wish to use the default graph in that thread, you must explicitly add a with g.as_default(): in that thread's function.
#### Returns:
The default Graph being used in the current thread.
