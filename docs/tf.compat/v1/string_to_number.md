Converts each string in the input Tensor to the specified numeric type.
### Aliases:
- `tf.compat.v1.strings.to_number`

```
 tf.compat.v1.string_to_number(
    string_tensor=None,
    out_type=tf.dtypes.float32,
    name=None,
    input=None
)
```
(Note that int32 overflow results in an error while float overflow results in a rounded value.)
#### Args:
- `string_tensor`: A `Tensor` of type `string`.
- `out_type`: An optional `tf.DType` from: `tf.float32, tf.float64, tf.int32, tf.int64`. Defaults to `tf.float32`. The numeric type to interpret each string in `string_tensor` as.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor` of type `out_type`.
