
Defined in generated file: python/ops/gen_image_ops.py

Decode a JPEG-encoded image to a uint8 tensor.
### Aliases:
- `tf.compat.v1.image.decode_jpeg`
- `tf.compat.v1.io.decode_jpeg`
- `tf.compat.v2.image.decode_jpeg`
- `tf.compat.v2.io.decode_jpeg`
- `tf.image.decode_jpeg`

```
 tf.io.decode_jpeg(
    contents,
    channels=0,
    ratio=1,
    fancy_upscaling=True,
    try_recover_truncated=False,
    acceptable_fraction=1,
    dct_method='',
    name=None
)
```
### Used in the guide:
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
### Used in the tutorials:
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``L``o``a``d`` ``i``m``a``g``e``s``
- ``P``i``x``2``P``i``x``
- ``T``F``R``e``c``o``r``d`` ``a``n``d`` ``t``f``.``E``x``a``m``p``l``e``

The attr channels indicates the desired number of color channels for the decoded image.
#### Accepted values are:
- ``0``:`` ``U``s``e`` ``t``h``e`` ``n``u``m``b``e``r`` ``o``f`` ``c``h``a``n``n``e``l``s`` ``i``n`` ``t``h``e`` ``J``P``E``G``-``e``n``c``o``d``e``d`` ``i``m``a``g``e``.``
- ``1``:`` ``o``u``t``p``u``t`` ``a`` ``g``r``a``y``s``c``a``l``e`` ``i``m``a``g``e``.``
- ``3``:`` ``o``u``t``p``u``t`` ``a``n`` ``R``G``B`` ``i``m``a``g``e``.``

If needed, the JPEG-encoded image is transformed to match the requested number of color channels.

The attr ratio allows downscaling the image by an integer factor during decoding. Allowed values are: 1, 2, 4, and 8. This is much faster than downscaling the image later.
[tf.image.decode_image](https://www.tensorflow.org/api_docs/python/tf/io/decode_image)This op also supports decoding PNGs and non-animated GIFs since the interface is the same, though it is cleaner to use .

#### Args:
- `contents`: A `Tensor` of type `string`. 0-D. The JPEG-encoded image.
- `channels`: An optional `int`. Defaults to `0`. Number of color `channels` for the decoded image.
- `ratio`: An optional `int`. Defaults to `1`. Downscaling `ratio`.
- `fancy_upscaling`: An optional `bool`. Defaults to `True`. If true use a slower but nicer upscaling of the chroma planes (yuv42`0`/422 only).
- `try_recover_truncated`: An optional `bool`. Defaults to `False`. If true try to recover an image from truncated input.
- `acceptable_fraction`: An optional `float`. Defaults to `1`. The minimum required fraction of lines before a truncated input is accepted.
- `dct_method`: An optional `string`. Defaults to `""`. `string` specifying a h`int` about the algorithm used for decompression. Defaults to `""` which maps to a system-specific default. Currently valid values are ["INTEGER_FAST", "INTEGER_ACCURATE"]. The h`int` may be ignored (e.g., the `int`ernal jpeg library changes to a version that does not have that specific option.)
- `name`: A `name` for the ope`ratio`n (optional).
#### Returns:

A Tensor of type uint8.
