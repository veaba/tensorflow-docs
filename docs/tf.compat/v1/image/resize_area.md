
Defined in generated file: python/ops/gen_image_ops.py

Resize images to size using area interpolation.

```
 tf.compat.v1.image.resize_area(
    images,
    size,
    align_corners=False,
    name=None
)
```

Input images can be of different types but output images are always float.
[tf.clip_by_value](https://www.tensorflow.org/api_docs/python/tf/clip_by_value)The range of pixel values for the output image might be slightly different from the range for the input image because of limited numerical precision. To guarantee an output range, for example [0.0, 1.0], apply  to the output.


Each output pixel is computed by first transforming the pixel's footprint into the input tensor and then averaging the pixels that intersect the footprint. An input pixel's contribution to the average is weighted by the fraction of its area that intersects the footprint. This is the same as OpenCV's INTER_AREA.
#### Args:
- `images`:` `A` ``Tensor`.` `Mu`s``t`` ``b``e`` `o`n``e`` `of` ``t``h``e`` `fo`l``l`o`w``i``n``g`` ``t`yp`e``s`:` ``int8``,`` ``uint8``,`` ``int16``,`` ``uint16``,`` ``int32``,`` ``int64``,`` ``half``,`` ``float32``,`` ``float64`.` `4-D` ``w``i``t``h`` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `s``i`z`e`:` `A` `1-D` ``int32`` ``Tensor`` `of` `2` ``e``l``e`m`e``n``t``s`:` ``n``e``w`_`h``e``i``g``h``t``,`` ``n``e``w`_`w``i``d``t``h`.` `T`h``e`` ``n``e``w`` ``s``i`z`e`` `for` ``t``h``e`` ``images`.
- `a``l``i``g``n`_`c`or`n``e`r`s`:` `A`n`` `op`t``i`o`n``a``l`` ``b`oo`l`.` `D`e`f`a`u`l``t``s`` ``t`o` ``False`.` `If` ``t`ru`e``,`` ``t``h``e`` ``c``e``n``t``e`r`s`` `of` ``t``h``e`` `4` ``c`or`n``e`r` `p`i`x`e``l``s`` `of` ``t``h``e`` ``i``n`pu`t`` ``a``n``d`` `ou`t`pu`t`` ``t``e``n``s`or`s`` ``a`r`e`` ``a``l``i``g``n``e``d``,`` `pr`e``s``e`rv`i``n``g`` ``t``h``e`` `v`a``l`u`e``s`` ``a``t`` ``t``h``e`` ``c`or`n``e`r` `p`i`x`e``l``s`.` `D`e`f`a`u`l``t``s`` ``t`o` `f`a``l``s``e`.
- `n``a`m`e`:` `A` ``n``a`m`e`` `for` ``t``h``e`` `op`e`r`a``t``i`o`n`` `(op`t``i`o`n``a``l`).
#### Returns:

A Tensor of type float32.
