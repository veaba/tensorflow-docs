Defined in generated file: `python/ops/gen_image_ops.py`
PNG-encode an image.
### Aliases:
- `tf.compat.v1.image.encode_png`
- `tf.compat.v2.image.encode_png`

```
 tf.image.encode_png(
    image,
    compression=-1,
    name=None
)
```
`image` is a 3-D uint8 or uint16 Tensor of shape `[height, width, channels]` where `channels` is:
- ``1``:`` ``f``o``r`` ``g``r``a``y``s``c``a``l``e``.``
- ``2``:`` ``f``o``r`` ``g``r``a``y``s``c``a``l``e`` ``+`` ``a``l``p``h``a``.``
- ``3``:`` ``f``o``r`` ``R``G``B``.``
- ``4``:`` ``f``o``r`` ``R``G``B``A``.``
The ZLIB `compression` level, `compression`, can be -1 for the PNG-encoder default or a value from 0 to 9. 9 is the highest `compression` level, generating the smallest output, but is slower.
#### Args:
- `image`: A `Tensor`. Must be one of the following types: `uint8`, `uint16`. 3-D with shape `[height, width, channels]`.
- `compression`: An optional `int`. Defaults to `-1`. Compression level.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor` of type `string`.
