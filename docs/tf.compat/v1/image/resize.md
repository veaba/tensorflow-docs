
Resize images to size using the specified method.
### Aliases:
- `tf.compat.v1.image.resize_images`

```
 tf.compat.v1.image.resize(
    images,
    size,
    method=ResizeMethodV1.BILINEAR,
    align_corners=False,
    preserve_aspect_ratio=False,
    name=None
)
```
[tf.compat.v1.image.resize_image_with_pad](https://www.tensorflow.org/api_docs/python/tf/compat/v1/image/resize_image_with_pad)Resized images will be distorted if their original aspect ratio is not the same as size. To avoid distortions see .


method can be one of:
- `ResizeMethod.BILINEAR`: Bilinear interpolation.
- `ResizeMethod.NEAREST_NEIGHBOR`: Nearest neighbor interpolation.
- `ResizeMethod.BICUBIC`: Bicubic interpolation.
- `ResizeMethod.AREA`: Area interpolation.

The return value has the same type as images if method is ResizeMethod.NEAREST_NEIGHBOR. It will also have the same type as images if the size of images can be statically determined to be the same as size, because images is returned in this case. Otherwise, the return value has type float32.
#### Args:
- `images`:` `4-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`]` `or` `3-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `s``i`z`e`:` `A` `1-D` ``i``n``t`32` `T`e``n``s`or` `of` `2` ``e``l``e`m`e``n``t``s`:` ``n``e``w`_`h``e``i``g``h``t``,`` ``n``e``w`_`w``i``d``t``h`.` `T`h``e`` ``n``e``w`` ``s``i`z`e`` `for` ``t``h``e`` ``images`.
- `method`:` `R`e``s``i`z`e`M`e``t``h`o`d`.` `D`e`f`a`u`l``t``s`` ``t`o` ``ResizeMethod.BILINEAR`.
- `a``l``i``g``n`_`c`or`n``e`r`s`:` ``b`oo`l`.` `If` `Tru`e``,`` ``t``h``e`` ``c``e``n``t``e`r`s`` `of` ``t``h``e`` `4` ``c`or`n``e`r` `p`i`x`e``l``s`` `of` ``t``h``e`` ``i``n`pu`t`` ``a``n``d`` `ou`t`pu`t`` ``t``e``n``s`or`s`` ``a`r`e`` ``a``l``i``g``n``e``d``,`` `pr`e``s``e`rv`i``n``g`` ``t``h``e`` `v`a``l`u`e``s`` ``a``t`` ``t``h``e`` ``c`or`n``e`r` `p`i`x`e``l``s`.` `D`e`f`a`u`l``t``s`` ``t`o` ``False`.
- `preserve_aspect_ratio`:` `W`h``e``t``h``e`r` ``t`o` `pr`e``s``e`rv`e`` ``t``h``e`` ``a``s`p`e``c``t`` `r`a``t``i`o.` `If` ``t``h``i``s`` ``i``s`` ``s``e``t``,`` ``t``h``e``n`` ``images`` ``w``i``l``l`` ``b``e`` `r`e``s``i`z`e``d`` ``t`o` ``a`` ``s``i`z`e`` ``t``h``a``t`` `f`i``t``s`` ``i``n`` ``s``i`z`e`` ``w``h``i``l``e`` `pr`e``s``e`rv`i``n``g`` ``t``h``e`` ``a``s`p`e``c``t`` `r`a``t``i`o` `of` ``t``h``e`` `or`i``g``i``n``a``l`` ``i`m`a``g``e`.` `S`c``a``l``e``s`` `up` ``t``h``e`` ``i`m`a``g``e`` ``i`f` ``s``i`z`e`` ``i``s`` ``b``i``g``g``e`r` ``t``h``a``n`` ``t``h``e`` ``c`urr`e``n``t`` ``s``i`z`e`` `of` ``t``h``e`` ``i`m`a``g``e`.` `D`e`f`a`u`l``t``s`` ``t`o` ``False`.
- `n``a`m`e`:` `A` ``n``a`m`e`` `for` ``t``h``i``s`` `op`e`r`a``t``i`o`n`` `(op`t``i`o`n``a``l`).
#### Raises:
- `ValueError`: if the shape of `images` is incompatible with the shape arguments to this function
- `ValueError`: if `size` has invalid shape or type.
- `ValueError`: if an unsupported re`size` method is specified.
#### Returns:

If images was 4-D, a 4-D float Tensor of shape [batch, new_height, new_width, channels]. If images was 3-D, a 3-D float Tensor of shape [new_height, new_width, channels].
