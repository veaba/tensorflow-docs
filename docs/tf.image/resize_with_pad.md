
Resizes and pads an image to a target width and height.
### Aliases:
- `tf.compat.v2.image.resize_with_pad`

```
 tf.image.resize_with_pad(
    image,
    target_height,
    target_width,
    method=ResizeMethod.BILINEAR,
    antialias=False
)
```

Resizes an image to a target width and height by keeping the aspect ratio the same without distortion. If the target dimensions don't match the image dimensions, the image is resized and then padded with zeroes to match requested dimensions.
#### Args:
- `image`:` `4-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`]` `or` `3-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `t``a`r`g``e``t`_`h``e``i``g``h``t`:` `T`a`r`g``e``t`` ``h``e``i``g``h``t`.
- `t``a`r`g``e``t`_`w``i``d``t``h`:` `T`a`r`g``e``t`` ``w``i``d``t``h`.
- `method`:` `M`e``t``h`o`d`` ``t`o` `u`s``e`` `for` `r`e``s``i`z`i``n``g`` ``image`.` `S`e``e`` ``image`.r`e``s``i`z`e`()
- `a``n``t``i``a``l``i``a``s`:` `W`h``e``t``h``e`r` ``t`o` `u`s``e`` ``a``n``t``i`-`a``l``i``a``s``i``n``g`` ``w``h``e``n`` `r`e``s``i`z`i``n``g`.` `S`e``e`` `'`image`.r`e``s``i`z`e`()'.
#### Raises:
- `ValueError`: if `target_height` or `target_width` are zero or negative.
#### Returns:

Resized and padded image. If images was 4-D, a 4-D float Tensor of shape [batch, new_height, new_width, channels]. If images was 3-D, a 3-D float Tensor of shape [new_height, new_width, channels].
