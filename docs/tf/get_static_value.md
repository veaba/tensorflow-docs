Returns the constant value of the given tensor, if efficiently calculable.
### Aliases:
- `tf.compat.v1.get_static_value`
- `tf.compat.v2.get_static_value`

```
 tf.get_static_value(
    tensor,
    partial=False
)
```
This function attempts to partially evaluate the given tensor, and returns its value as a numpy ndarray if this succeeds.
