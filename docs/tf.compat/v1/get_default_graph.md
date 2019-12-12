Returns the default graph for the current thread.

```
 tf.compat.v1.get_default_graph()
 
```

The returned graph will be the innermost graph on which a[ `Graph.as_default()` ](/api_docs/python/tf/Graph#as_default) context has been entered, or a global defaultgraph if none has been explicitly created.

NOTE: The default graph is a property of the current thread. If youcreate a new thread, and wish to use the default graph in thatthread, you must explicitly add a  `with g.as_default():`  in thatthread's function.

#### Returns:
The default  `Graph`  being used in the current thread.

