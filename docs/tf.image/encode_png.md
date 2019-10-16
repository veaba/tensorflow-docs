
Defined in generated file: python/ops/gen_image_ops.py

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

image is a 3-D uint8 or uint16 Tensor of shape [height, width, channels] where channels is:
- ``1``:`` ``f``o``r`` ``g``r``a``y``s``c``a``l``e``.``
- ``2``:`` ``f``o``r`` ``g``r``a``y``s``c``a``l``e`` ``+`` ``a``l``p``h``a``.``
- ``3``:`` ``f``o``r`` ``R``G``B``.``
- ``4``:`` ``f``o``r`` ``R``G``B``A``.``

The ZLIB compression level, compression, can be -1 for the PNG-encoder default or a value from 0 to 9. 9 is the highest compression level, generating the smallest output, but is slower.
#### Args:
- `image`:` `A` ``Tensor`.` `Mu`s``t`` `b`e`` `o`n``e`` `of` ``t``h``e`` `fo`l``l`o`w``i``n``g`` ``t`yp`e``s`:` ``uint8``,`` ``uint16`.` `3-D` ``w``i``t``h`` ``s``h``a`p`e`` `[`h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `c`ompr`e``s``s``i`o`n`:` `A`n`` `op`t``i`o`n``a``l`` ``i``n``t`.` `D`e`f`a`u`l``t``s`` ``t`o` ``-1`.` `Compr`e``s``s``i`o`n`` ``l``e`v`e``l`.
- `n``a`m`e`:` `A` ``n``a`m`e`` `for` ``t``h``e`` `op`e`r`a``t``i`o`n`` `(op`t``i`o`n``a``l`).
#### Returns:

A Tensor of type string.
