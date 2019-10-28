Asserts that the given condition is true.
### Aliases:
- `tf.Assert`
- `tf.compat.v1.Assert`
- `tf.compat.v1.debugging.Assert`
- `tf.compat.v2.Assert`
- `tf.compat.v2.debugging.Assert`

```
 tf.debugging.Assert(
    condition,
    data,
    summarize=None,
    name=None
)
```
If `condition` evaluates to false, print the list of tensors in `data`. `summarize` determines how many entries of the tensors to print.
NOTE: In graph mode, to ensure that Assert executes, one usually attaches a dependency:

```
 # Ensure maximum element of x is smaller or equal to 1
assert_op = tf.Assert(tf.less_equal(tf.reduce_max(x), 1.), [x])
with tf.control_dependencies([assert_op]):
  ... code using x ...
```
#### Args:
- `condition`: The `condition` to evaluate.
- `data`: The tensors to print out when condition is false.
- `summarize`: Print this many entries of each tensor.
- `name`: A `name` for this operation (optional).
#### Returns:
- `assert_op`: An `Operation` that, when executed, raises a `tf.errors.InvalidArgumentError` if `condition` is not true.
#### Raises:
NOTE The output of this function should be used. If it is not, a warning will be logged. To mark the output as used, call its .mark_used() method.
#### Eager Compatibility
`tf.errors.InvalidArgumentError` if `condition` is not true
