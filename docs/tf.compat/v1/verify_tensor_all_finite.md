
Assert that the tensor does not contain any NaN's or Inf's.
### Aliases:
- `tf.compat.v1.debugging.assert_all_finite`

```
 tf.compat.v1.verify_tensor_all_finite(
    t=None,
    msg=None,
    name=None,
    x=None,
    message=None
)
```
#### Args:
- `t`: Tensor `t`o check.
- `msg`: Message `t`o log on failure.
- `name`: A `name` for `t`his opera`t`ion (op`t`ional).
- `x`: Alias for `t`.
- `message`: Alias for `msg`.
#### Returns:

Same tensor as t.
