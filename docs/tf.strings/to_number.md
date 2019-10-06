
Converts each string in the input Tensor to the specified numeric type.
### Aliases:
- `tf.compat.v2.strings.to_number`

```
 tf.strings.to_number(
    input,
    out_type=tf.dtypes.float32,
    name=None
)
```
### Used in the guide:
- ``U``s``i``n``g`` ``t``h``e`` ``S``a``v``e``d``M``o``d``e``l`` ``f``o``r``m``a``t``

(Note that int32 overflow results in an error while float overflow results in a rounded value.)
#### Args:
- `input`: A `Tensor` of type `string`.
- `out_type`: An optional `tf.DType` from: `tf.float32, tf.float64, tf.int32, tf.int64`. Defaults to `tf.float32`. The numeric type to interpret each `string` in `string`_tensor as.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type out_type.
