
Defined in generated file: python/ops/gen_image_ops.py

JPEG-encode an image.
### Aliases:
- `tf.compat.v1.image.encode_jpeg`
- `tf.compat.v1.io.encode_jpeg`
- `tf.compat.v2.image.encode_jpeg`
- `tf.compat.v2.io.encode_jpeg`
- `tf.image.encode_jpeg`

```
 tf.io.encode_jpeg(
    image,
    format='',
    quality=95,
    progressive=False,
    optimize_size=False,
    chroma_downsampling=True,
    density_unit='in',
    x_density=300,
    y_density=300,
    xmp_metadata='',
    name=None
)
```

image is a 3-D uint8 Tensor of shape [height, width, channels].

The attr format can be used to override the color format of the encoded output. Values can be:
- `''`: Use a default format based on the number of channels in the image.
- `grayscale`: Output a `grayscale` JPEG `image`. The `channels` dimension of `image` must be 1.
- `rgb`: Output an RGB JPEG `image`. The `channels` dimension of `image` must be 3.

If format is not specified or is the empty string, a default format is picked in function of the number of channels in image:
- ``1``:`` ``O``u``t``p``u``t`` ``a`` ``g``r``a``y``s``c``a``l``e`` ``i``m``a``g``e``.``
- ``3``:`` ``O``u``t``p``u``t`` ``a``n`` ``R``G``B`` ``i``m``a``g``e``.``
#### Args:
- `image`:` `A` ``Tensor`` `of` ``t`yp`e`` ``uint8`.` `3-D` ``w``i``t``h`` ``s``h``a`p`e`` `[`h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `format`:` `A`n`` `op`t``i`o`n``a``l`` ``s``t`r`i``n``g`` `from:` ``"", "grayscale", "rgb"`.` `D`e`f`a`u`l``t``s`` ``t`o` ``""`.` `P`e`r` `p`i`x`e``l`` ``image`` ``format`.
- `quality`:` `A`n`` `op`t``i`o`n``a``l`` ``i``n``t`.` `D`e`f`a`u`l``t``s`` ``t`o` ``95`.` `Qu`a``l``i``t`y` `of` ``t``h``e`` ``c`ompr`e``s``s``i`o`n`` `from` `0` ``t`o` `100` `(`h``i``g``h``e`r` ``i``s`` `b`e``t``t``e`r` ``a``n``d`` ``s``l`o`w``e`r).
- `progressive`:` `A`n`` `op`t``i`o`n``a``l`` ``bool`.` `D`e`f`a`u`l``t``s`` ``t`o` ``False`.` `If` `Tru`e``,`` ``c`r`e``a``t``e`` ``a`` `JPEG` ``t``h``a``t`` ``l`o`a``d``s`` ``progressive``l`y` `(`c`o`a`r`s``e`` ``t`o` `f`i``n``e`).
- `optimize_size`:` `A`n`` `op`t``i`o`n``a``l`` ``bool`.` `D`e`f`a`u`l``t``s`` ``t`o` ``False`.` `If` `Tru`e``,`` ``s`p`e``n``d`` `CPU/RAM` ``t`o` `r`e``d`u`c``e`` ``s``i`z`e`` ``w``i``t``h`` ``n`o` ``quality`` ``c``h``a``n``g``e`.
- `c``h`rom`a`_`d`o`w``n``s``a`mp`l``i``n``g`:` `A`n`` `op`t``i`o`n``a``l`` ``bool`.` `D`e`f`a`u`l``t``s`` ``t`o` ``True`.` `S`e``e`` ``h``t``t`p://`e``n`.`w``i`k`i`p`e``d``i``a`.or`g`/`w``i`k`i`/C`h`rom`a`_`s`ub`s``a`mp`l``i``n``g`.
- `d``e``n``s``i``t`y_u`n``i``t`:` `A`n`` `op`t``i`o`n``a``l`` ``s``t`r`i``n``g`` `from:` ``"in", "cm"`.` `D`e`f`a`u`l``t``s`` ``t`o` ``"in"`.` `U`n``i``t`` `u`s``e``d`` ``t`o` ``s`p`e``c``i`fy` ``x_density`` ``a``n``d`` ``y_density`:` `p`i`x`e``l``s`` `p`e`r` ``i``n``c``h`` `(`'in'`)` `or` ``c``e``n``t``i`m`e``t``e`r` `(`'cm'`).
- `x_density`:` `A`n`` `op`t``i`o`n``a``l`` ``i``n``t`.` `D`e`f`a`u`l``t``s`` ``t`o` ``300`.` `Hor`i`zo`n``t``a``l`` `p`i`x`e``l``s`` `p`e`r` ``d``e``n``s``i``t`y` `u`n``i``t`.
- `y_density`:` `A`n`` `op`t``i`o`n``a``l`` ``i``n``t`.` `D`e`f`a`u`l``t``s`` ``t`o` ``300`.` `V`e`r`t``i``c``a``l`` `p`i`x`e``l``s`` `p`e`r` ``d``e``n``s``i``t`y` `u`n``i``t`.
- `xmp_metadata`:` `A`n`` `op`t``i`o`n``a``l`` ``s``t`r`i``n``g`.` `D`e`f`a`u`l``t``s`` ``t`o` ``""`.` `If` ``n`o`t`` ``e`mp`t`y`,`` ``e`mb`e``d`` ``t``h``i``s`` `XMP` `m`e``t``a``d``a``t``a`` ``i``n`` ``t``h``e`` ``image`` ``h``e``a``d``e`r.
- `n``a`m`e`:` `A` ``n``a`m`e`` `for` ``t``h``e`` `op`e`r`a``t``i`o`n`` `(op`t``i`o`n``a``l`).
#### Returns:

A Tensor of type string.
