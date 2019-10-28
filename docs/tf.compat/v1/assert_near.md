Assert the condition `x` and `y` are close element-wise.
### Aliases:
- `tf.compat.v1.debugging.assert_near`

```
 tf.compat.v1.assert_near(
    x,
    y,
    rtol=None,
    atol=None,
    data=None,
    summarize=None,
    message=None,
    name=None
)
```
Example of adding a dependency to an operation:

```
 with tf.control_dependencies([tf.compat.v1.assert_near(x, y)]):
  output = tf.reduce_sum(x)
```
This condition holds if for every pair of (possibly broadcast) elements `x[i]`, `y[i]`, we have
