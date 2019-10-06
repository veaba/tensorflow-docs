
Resize images to size using the specified method.
### Aliases:
- `tf.compat.v2.image.resize`

```
 tf.image.resize(
    images,
    size,
    method=ResizeMethod.BILINEAR,
    preserve_aspect_ratio=False,
    antialias=False,
    name=None
)
```
### Used in the guide:
- ``E``s``t``i``m``a``t``o``r``s``
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
### Used in the tutorials:
- ``A``d``v``e``r``s``a``r``i``a``l`` ``e``x``a``m``p``l``e`` ``u``s``i``n``g`` ``F``G``S``M``
- ``C``y``c``l``e``G``A``N``
- ``D``e``e``p``D``r``e``a``m``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``I``m``a``g``e`` ``s``e``g``m``e``n``t``a``t``i``o``n``
- ``L``o``a``d`` ``i``m``a``g``e``s``
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``
- ``P``i``x``2``P``i``x``
- ``T``r``a``n``s``f``e``r`` ``l``e``a``r``n``i``n``g`` ``w``i``t``h`` ``a`` ``p``r``e``t``r``a``i``n``e``d`` ``C``o``n``v``N``e``t``
[tf.image.resize_with_pad](https://www.tensorflow.org/api_docs/python/tf/image/resize_with_pad)Resized images will be distorted if their original aspect ratio is not the same as size. To avoid distortions see .

[anti-aliasing](https://en.wikipedia.org/wiki/Spatial_anti-aliasing)When 'antialias' is true, the sampling filter will anti-alias the input image as well as interpolate. When downsampling an image with  the sampling filter kernel is scaled in order to properly anti-alias the input image signal. 'antialias' has no effect when upsampling an image.

- `bilinear`: Bilinear interpolation. If 'antialias' is true, becomes a hat/tent filter function with radius 1 when downsampling.
- `lanczos3`: Lanczos kernel with radius 3. High-quality practical filter but may have some ringing especially on synthetic images.
- `lanczos5`: Lanczos kernel with radius 5. Very-high-quality filter but may have stronger ringing.
- `bicubic`: Cubic interpolant of Keys. Equivalent to Catmull-Rom kernel. Reasonably good quality and faster than Lanczos3Kernel, particularly when upsampling.
- `gaussian`: Gaussian kernel with radius 3, sigma = 1.5 / 3.0.
- `nearest`: Nearest neighbor interpolation. 'antialias' has no effect when used with `nearest` neighbor interpolation.
- `area`: Anti-aliased resampling with `area` interpolation. 'antialias' has no effect when used with `area` interpolation; it always anti-aliases.
- `mitchellcubic`: Mitchell-Netravali Cubic non-interpolating filter. For synthetic images (especially those lacking proper prefiltering), less ringing than Keys cubic kernel but less sharp.

Note that near image edges the filtering kernel may be partially outside the image boundaries. For these pixels, only input pixels inside the image will be included in the filter sum, and the output value will be appropriately normalized.
[ResizeMethod.NEAREST_NEIGHBOR](https://www.tensorflow.org/api_docs/python/tf/image/ResizeMethod#NEAREST_NEIGHBOR)The return value has the same type as images if method is . Otherwise, the return value has type float32.

#### Args:
- `images`:` `4-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`]` `or` `3-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `s``i`z`e`:` `A` `1-D` ``i``n``t`32` `T`e``n``s`or` `of` `2` ``e``l``e`m`e``n``t``s`:` ``n``e``w`_`h``e``i``g``h``t``,`` ``n``e``w`_`w``i``d``t``h`.` `T`h``e`` ``n``e``w`` ``s``i`z`e`` `for` ``t``h``e`` ``images`.
- `method`:` `R`e``s``i`z`e`M`e``t``h`o`d`.` `D`e`f`a`u`l``t``s`` ``t`o` ``b``i``l``i``n``e``a`r.
- `preserve_aspect_ratio`:` `W`h``e``t``h``e`r` ``t`o` `pr`e``s``e`rv`e`` ``t``h``e`` ``a``s`p`e``c``t`` `r`a``t``i`o.` `If` ``t``h``i``s`` ``i``s`` ``s``e``t``,`` ``t``h``e``n`` ``images`` ``w``i``l``l`` ``b``e`` `r`e``s``i`z`e``d`` ``t`o` ``a`` ``s``i`z`e`` ``t``h``a``t`` `f`i``t``s`` ``i``n`` ``s``i`z`e`` ``w``h``i``l``e`` `pr`e``s``e`rv`i``n``g`` ``t``h``e`` ``a``s`p`e``c``t`` `r`a``t``i`o` `of` ``t``h``e`` `or`i``g``i``n``a``l`` ``i`m`a``g``e`.` `S`c``a``l``e``s`` `up` ``t``h``e`` ``i`m`a``g``e`` ``i`f` ``s``i`z`e`` ``i``s`` ``b``i``g``g``e`r` ``t``h``a``n`` ``t``h``e`` ``c`urr`e``n``t`` ``s``i`z`e`` `of` ``t``h``e`` ``i`m`a``g``e`.` `D`e`f`a`u`l``t``s`` ``t`o` `F`a``l``s``e`.
- `a``n``t``i``a``l``i``a``s`:` `W`h``e``t``h``e`r` ``t`o` `u`s``e`` ``a``n`` ``a``n``t``i`-`a``l``i``a``s``i``n``g`` `f`i``l``t``e`r` ``w``h``e``n`` ``d`o`w``n``s``a`mp`l``i``n``g`` ``a``n`` ``i`m`a``g``e`.
- `n``a`m`e`:` `A` ``n``a`m`e`` `for` ``t``h``i``s`` `op`e`r`a``t``i`o`n`` `(op`t``i`o`n``a``l`).
#### Raises:
- `ValueError`: if the shape of `images` is incompatible with the shape arguments to this function
- `ValueError`: if `size` has invalid shape or type.
- `ValueError`: if an unsupported re`size` method is specified.
#### Returns:

If images was 4-D, a 4-D float Tensor of shape [batch, new_height, new_width, channels]. If images was 3-D, a 3-D float Tensor of shape [new_height, new_width, channels].
