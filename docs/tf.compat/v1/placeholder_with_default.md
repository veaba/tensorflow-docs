A placeholder op that passes through `input` when its output is not fed.

```
 tf.compat.v1.placeholder_with_default(
    input,
    shape,
    name=None
)
```
#### Args:
- `input`: A `Tensor`. The default value to produce when output is not fed.
- `shape`: A `tf.TensorShape` or list of `int`s. The (possibly partial) `shape` of the tensor.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor`. Has the same type as `input`.
