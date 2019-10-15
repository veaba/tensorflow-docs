
Assert the condition x <= 0 holds element-wise.
### Aliases:
- `tf.compat.v2.debugging.assert_non_positive`

```
 tf.debugging.assert_non_positive(
    x,
    message=None,
    summarize=None,
    name=None
)
```

This Op checks that x[i] <= 0 holds for every element of x. If x is empty, this is trivially satisfied.

If x is not <= 0 everywhere, message, as well as the first summarize entries of x are printed, and InvalidArgumentError is raised.
#### Args:
- `x`: Numeric `Tensor`.
- `message`: A string to prefi`x` to the default `message`.
- `summarize`: Print this many entries of each tensor.
- `name`: A `name` for this operation (optional). Defaults to "assert_non_positive".
#### Returns:
[tf.control_dependencies](https://www.tensorflow.org/api_docs/python/tf/control_dependencies)Op raising InvalidArgumentError unless x is all non-positive. This can be used with  inside of tf.functions to block followup computation until the check has executed.

#### Raises:
- `InvalidArgumentError`: if the check can be performed immediately and `x`[i] <= 0 is False. The check can be performed immediately during eager e`x`ecution or if `x` is statically known.
#### Eager Compatibility

returns None
