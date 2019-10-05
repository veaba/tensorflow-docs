[Graph.control_dependencies()](https://www.tensorflow.org/api_docs/python/tf/Graph#control_dependencies)Wrapper for  using the default graph.

### Aliases:
- `tf.compat.v1.control_dependencies`
- `tf.compat.v2.control_dependencies`

```
 tf.control_dependencies(control_inputs)
```
[tf.Graph.control_dependencies](https://www.tensorflow.org/api_docs/python/tf/Graph#control_dependencies)See  for more details.


When eager execution is enabled, any callable object in the control_inputs list will be called.
#### Args:
- `control_inputs`: A list of `Operation` or `Tensor` objects which must be executed or computed before running the operations defined in the context. Can also be `None` to clear the control dependencies. If eager execution is enabled, any callable object in the `control_inputs` list will be called.
#### Returns:

A context manager that specifies control dependencies for all operations constructed within the context.
[Graph.control_dependencies()](https://www.tensorflow.org/api_docs/python/tf/Graph#control_dependencies)Wrapper for  using the default graph.

### Aliases:
- `tf.compat.v1.control_dependencies`
- `tf.compat.v2.control_dependencies`

```
 tf.control_dependencies(control_inputs)
```
[tf.Graph.control_dependencies](https://www.tensorflow.org/api_docs/python/tf/Graph#control_dependencies)See  for more details.


When eager execution is enabled, any callable object in the control_inputs list will be called.
#### Args:
- `control_inputs`: A list of `Operation` or `Tensor` objects which must be executed or computed before running the operations defined in the context. Can also be `None` to clear the control dependencies. If eager execution is enabled, any callable object in the `control_inputs` list will be called.
#### Returns:

A context manager that specifies control dependencies for all operations constructed within the context.
