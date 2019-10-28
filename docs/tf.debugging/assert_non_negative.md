Assert the condition `x >= 0` holds element-wise.
### Aliases:
- `tf.compat.v2.debugging.assert_non_negative`

```
 tf.debugging.assert_non_negative(
    x,
    message=None,
    summarize=None,
    name=None
)
```
This Op checks that `x[i] >= 0` holds for every element of `x`. If `x` is empty, this is trivially satisfied.
If `x` is not >= 0 everywhere, `message`, as well as the first `summarize` entries of `x` are printed, and `InvalidArgumentError` is raised.
#### Args:
- `x`: Numeric `Tensor`.
- `message`: A string to prefix to the default `message`.
- `summarize`: Print this many entries of each tensor.
- `name`: A `name` for this operation (optional). Defaults to "assert_non_negative".
#### Returns:
Op raising `InvalidArgumentError` unless `x` is all non-negative. This can be used with `tf.control_dependencies` inside of `tf.function`s to block followup computation until the check has e`x`ecuted.
#### Raises:
- `InvalidArgumentError`: if the check can be performed immediately and `x[i] >= 0` is False. The check can be performed immediately during eager e`x`ecution or if `x` is statically known.
#### Eager Compatibility
returns None
