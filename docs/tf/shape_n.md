Returns shape of tensors.
### Aliases:
- `tf.compat.v1.shape_n`
- `tf.compat.v2.shape_n`

```
 tf.shape_n(
    input,
    out_type=tf.dtypes.int32,
    name=None
)
```
#### Args:
- `input`: A list of at least 1 `Tensor` object with the same type.
- `out_type`: The specified output type of the operation (`int32` or `int64`). Defaults to `tf.int32`(optional).
- `name`: A `name` for the operation (optional).
#### Returns:
A list with the same length as `input` of `Tensor` objects with type `out_type`.
