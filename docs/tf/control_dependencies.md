Wrapper for [ `Graph.control_dependencies()` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#control_dependencies) using the default graph.



### Aliases:

- [ `tf.compat.v1.control_dependencies` ](/api_docs/python/tf/control_dependencies)

- [ `tf.compat.v2.control_dependencies` ](/api_docs/python/tf/control_dependencies)



```
 tf.control_dependencies(control_inputs)
 
```

See [ `tf.Graph.control_dependencies` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#control_dependencies)
for more details.

When eager execution is enabled, any callable object in the  `control_inputs` 
list will be called.



#### Args:

- **`control_inputs`** : A list of  `Operation`  or  `Tensor`  objects which must be
executed or computed before running the operations defined in the context.
Can also be  `None`  to clear the control dependencies. If eager execution
is enabled, any callable object in the  `control_inputs`  list will be
called.



#### Returns:
A context manager that specifies control dependencies for all
operations constructed within the context.

