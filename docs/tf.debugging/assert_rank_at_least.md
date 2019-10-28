Assert that `x` has `rank` of at least `rank`.
### Aliases:
- `tf.compat.v2.debugging.assert_rank_at_least`

```
 tf.debugging.assert_rank_at_least(
    x,
    rank,
    message=None,
    name=None
)
```
This Op checks that the `rank` of `x` is greater or equal to `rank`.
If `x` has a `rank` lower than `rank`, `message`, as well as the shape of `x` are printed, and `InvalidArgumentError` is raised.
#### Args:
- `x`: `Tensor`.
- `rank`: Scalar integer `Tensor`.
- `message`: A string to prefix to the default `message`.
- `name`: A `name` for this operation (optional). Defaults to "assert_rank_at_least".
#### Returns:
Op raising `InvalidArgumentError` unless `x` has specified rank or higher. If static checks determine `x` has correct rank, a `no_op` is returned. This can be used with `tf.control_dependencies` inside of `tf.function`s to block followup computation until the check has e`x`ecuted.
#### Raises:
- `InvalidArgumentError`: `x` does not have `rank` at least `rank`, but the `rank` cannot be statically determined.
- `ValueError`: If static checks determine `x` has mismatched rank.
#### Eager Compatibility
returns None
