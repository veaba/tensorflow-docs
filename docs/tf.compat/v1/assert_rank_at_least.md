Assert `x` has `rank` equal to `rank` or higher.
### Aliases:
- `tf.compat.v1.debugging.assert_rank_at_least`

```
 tf.compat.v1.assert_rank_at_least(
    x,
    rank,
    data=None,
    summarize=None,
    message=None,
    name=None
)
```
Example of adding a dependency to an operation:

```
 with tf.control_dependencies([tf.compat.v1.assert_rank_at_least(x, 2)]):
  output = tf.reduce_sum(x)
```
#### Args:
- `x`: Numeric `Tensor`.
- `rank`: Scalar `Tensor`.
- `data`: The tensors to print out if the condition is False. Defaults to error message and first few entries of `x`.
- `summarize`: Print this many entries of each tensor.
- `message`: A string to prefix to the default `message`.
- `name`: A `name` for this operation (optional). Defaults to "assert_rank_at_least".
#### Returns:
Op raising `InvalidArgumentError` unless `x` has specified rank or higher. If static checks determine `x` has correct rank, a `no_op` is returned.
#### Raises:
- `ValueError`: If static checks determine `x` has wrong rank.
