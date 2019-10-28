Assert the condition `x == y` holds element-wise.
### Aliases:
- `tf.assert_equal`
- `tf.compat.v2.assert_equal`
- `tf.compat.v2.debugging.assert_equal`

```
 tf.debugging.assert_equal(
    x,
    y,
    message=None,
    summarize=None,
    name=None
)
```
### Used in the guide:
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
This Op checks that `x[i] == y[i]` holds for ever`y` pair of (possibl`y` broadcast) elements of `x` and `y`. If both `x` and `y` are empt`y`, this is triviall`y` satisfied.
If `x` and `y` are not equal, `message`, as well as the first `summarize` entries of `x` and `y` are printed, and `InvalidArgumentError` is raised.
#### Args:
- `x`: Numeric `Tensor`.
- `y`: Numeric `Tensor`, same dt`y`pe as and broadcastable to `x`.
- `message`: A string to prefix to the default `message`.
- `summarize`: Print this many entries of each tensor.
- `name`: A `name` for this operation (optional). Defaults to "assert_equal".
#### Returns:
Op that raises `InvalidArgumentError` if `x == y` is False. This can be used with `tf.control_dependencies` inside of `tf.function`s to block followup computation until the check has executed.
#### Raises:
- `InvalidArgumentError`: if the check can be performed immediatel`y` and `x == y` is False. The check can be performed immediatel`y` during eager e`x`ecution or if `x` and `y` are staticall`y` known.
#### Eager Compatibility
returns None
