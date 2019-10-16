[tf.debugging.check_numerics](https://www.tensorflow.org/api_docs/python/tf/debugging/check_numerics)Connect a  to every floating point tensor.


```
 tf.compat.v1.add_check_numerics_ops()
```

check_numerics operations themselves are added for each half, float, or double tensor in the current default graph. For all ops in the graph, the check_numerics op for all of its (half, float, or double) inputs is guaranteed to run before the check_numerics op on any of its outputs.
#### Returns:

A group op depending on all check_numerics ops added.
#### Raises:
- `ValueError`: If the graph contains any numeric operations in a control flow structure.
- `RuntimeError`: If called with eager execution enabled.
#### Eager Compatibility

Not compatible with eager execution. To check for Infs and NaNs under eager execution, call tfe.seterr(inf_or_nan='raise') once before executing the checked operations.
