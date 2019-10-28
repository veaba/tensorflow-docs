Connect a `tf.debugging.check_numerics` to every floating point tensor.

```
 tf.compat.v1.add_check_numerics_ops()
```
`check_numerics` operations themselves are added for each `half`, `float`, or `double` tensor in the current default graph. For all ops in the graph, the `check_numerics` op for all of its (`half`, `float`, or `double`) inputs is guaranteed to run before the `check_numerics` op on any of its outputs.
#### Returns:
A `group` op depending on all `check_numerics` ops added.
#### Raises:
- `ValueError`: If the graph contains any numeric operations in a control flow structure.
- `RuntimeError`: If called with eager execution enabled.
#### Eager Compatibility
