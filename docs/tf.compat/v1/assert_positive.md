
Assert the condition x > 0 holds element-wise.
### Aliases:
- `tf.compat.v1.debugging.assert_positive`

```
 tf.compat.v1.assert_positive(
    x,
    data=None,
    summarize=None,
    message=None,
    name=None
)
```

Example of adding a dependency to an operation:

```
 with tf.control_dependencies([tf.compat.v1.assert_positive(x)]):
  output = tf.reduce_sum(x)
```

Positive means, for every element x[i] of x, we have x[i] > 0. If x is empty this is trivially satisfied.
#### Args:
- `x`: Numeric `Tensor`.
- `data`: The tensors to print out if the condition is False. Defaults to error message and first few entries of `x`.
- `summarize`: Print this many entries of each tensor.
- `message`: A string to prefi`x` to the default `message`.
- `name`: A `name` for this operation (optional). Defaults to "assert_positive".
#### Returns:

Op raising InvalidArgumentError unless x is all positive.
