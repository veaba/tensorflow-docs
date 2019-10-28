Defined in generated file: `python/ops/gen_image_ops.py`
Decode a PNG-encoded image to a uint8 or uint16 tensor.
### Aliases:
- `tf.compat.v1.image.decode_png`
- `tf.compat.v1.io.decode_png`
- `tf.compat.v2.image.decode_png`
- `tf.compat.v2.io.decode_png`
- `tf.image.decode_png`

```
 tf.io.decode_png(
    contents,
    channels=0,
    dtype=tf.dtypes.uint8,
    name=None
)
```
### Used in the guide:
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
The attr `channels` indicates the desired number of color `channels` for the decoded image.
#### Accepted values are:
- ``0``:`` ``U``s``e`` ``t``h``e`` ``n``u``m``b``e``r`` ``o``f`` ``c``h``a``n``n``e``l``s`` ``i``n`` ``t``h``e`` ``P``N``G``-``e``n``c``o``d``e``d`` ``i``m``a``g``e``.``
- ``1``:`` ``o``u``t``p``u``t`` ``a`` ``g``r``a``y``s``c``a``l``e`` ``i``m``a``g``e``.``
- ``3``:`` ``o``u``t``p``u``t`` ``a``n`` ``R``G``B`` ``i``m``a``g``e``.``
- ``4``:`` ``o``u``t``p``u``t`` ``a``n`` ``R``G``B``A`` ``i``m``a``g``e``.``
If needed, the PNG-encoded image is transformed to match the requested number of color channels.
This op also supports decoding JPEGs and non-animated GIFs since the interface is the same, though it is cleaner to use `tf.image.decode_image`.
#### Args:
- `contents`: A `Tensor` of type `string`. 0-D. The PNG-encoded image.
- `channels`: An optional `int`. Defaults to `0`. Number of color `channels` for the decoded image.
- `dtype`: An optional `tf.DType` from: `tf.uint8, tf.uint16`. Defaults to `tf.uint8`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor` of type `dtype`.
