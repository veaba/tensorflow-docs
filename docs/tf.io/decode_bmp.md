
Defined in generated file: python/ops/gen_image_ops.py

Decode the first frame of a BMP-encoded image to a uint8 tensor.
### Aliases:
- `tf.compat.v1.image.decode_bmp`
- `tf.compat.v1.io.decode_bmp`
- `tf.compat.v2.image.decode_bmp`
- `tf.compat.v2.io.decode_bmp`
- `tf.image.decode_bmp`

```
 tf.io.decode_bmp(
    contents,
    channels=0,
    name=None
)
```

The attr channels indicates the desired number of color channels for the decoded image.
#### Accepted values are:
- ``0``:`` ``U``s``e`` ``t``h``e`` ``n``u``m``b``e``r`` ``o``f`` ``c``h``a``n``n``e``l``s`` ``i``n`` ``t``h``e`` ``B``M``P``-``e``n``c``o``d``e``d`` ``i``m``a``g``e``.``
- ``3``:`` ``o``u``t``p``u``t`` ``a``n`` ``R``G``B`` ``i``m``a``g``e``.``
- ``4``:`` ``o``u``t``p``u``t`` ``a``n`` ``R``G``B``A`` ``i``m``a``g``e``.``
#### Args:
- `contents`: A `Tensor` of type `string`. 0-D. The BMP-encoded image.
- `channels`: An optional `int`. Defaults to `0`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type uint8.
