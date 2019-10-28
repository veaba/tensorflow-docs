Assert the condition `x != y` holds for all elements.
### Aliases:
- `tf.compat.v2.debugging.assert_none_equal`

```
 tf.debugging.assert_none_equal(
    x,
    y,
    summarize=None,
    message=None,
    name=None
)
```
This Op checks that `x[i] != y[i]` holds for ever`y` pair of (possibl`y` broadcast) elements of `x` and `y`. If both `x` and `y` are empt`y`, this is triviall`y` satisfied.
If an`y` elements of `x` and `y` are equal, `message`, as well as the first `summarize` entries of `x` and `y` are printed, and `InvalidArgumentError` is raised.
#### Args:
- `x`: Numeric `Tensor`.
- `y`: Numeric `Tensor`, same dt`y`pe as and broadcastable to `x`.
- `summarize`: Print this many entries of each tensor.
- `message`: A string to prefix to the default `message`.
- `name`: A `name` for this operation (optional). Defaults to "assert_none_equal".
#### Returns:
Op that raises `InvalidArgumentError` if `x != y` is ever False. This can be used with `tf.control_dependencies` inside of `tf.function`s to block followup computation until the check has executed.
#### Raises:
- `InvalidArgumentError`: if the check can be performed immediatel`y` and `x != y` is False for an`y` pair of elements in `x` and `y`. The check can be performed immediatel`y` during eager e`x`ecution or if `x` and `y` are staticall`y` known.
#### Eager Compatibility
returns None
