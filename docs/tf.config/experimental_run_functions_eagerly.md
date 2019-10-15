[tf.function](https://www.tensorflow.org/api_docs/python/tf/function)Enables / disables eager execution of s.

- `tf.compat.v1.config.experimental_run_functions_eagerly`
- `tf.compat.v2.config.experimental_run_functions_eagerly`

```
 tf.config.experimental_run_functions_eagerly(run_eagerly)
```
### Used in the guide:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
[tf.config.experimental_run_functions_eagerly(True)](https://www.tensorflow.org/api_docs/python/tf/config/experimental_run_functions_eagerly)After calling  all invocations of tf.function will run eagerly instead of running through a graph function.


This can be useful for debugging or profiling.
[tf.config.experimental_run_functions_eagerly(False)](https://www.tensorflow.org/api_docs/python/tf/config/experimental_run_functions_eagerly)Similarly, calling  will revert the behavior of all functions to graph functions.

#### Args:
- `run_eagerly`: Boolean. Whether to run functions eagerly.
