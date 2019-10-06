
Crops an image to a specified bounding box.
### Aliases:
- `tf.compat.v1.image.crop_to_bounding_box`
- `tf.compat.v2.image.crop_to_bounding_box`

```
 tf.image.crop_to_bounding_box(
    image,
    offset_height,
    offset_width,
    target_height,
    target_width
)
```

This op cuts a rectangular part out of image. The top-left corner of the returned image is at offset_height, offset_width in image, and its lower-right corner is at offset_height + target_height, offset_width + target_width.
#### Args:
- `image`:` `4-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`]` `or` `3-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `offset_height`:` `V`e`r`t``i``c``a``l`` ``c`oor`d``i``n``a``t``e`` `of` ``t``h``e`` ``t`op-`l``e`f`t`` ``c`or`n``e`r` `of` ``t``h``e`` `r`e``s`u`l``t`` ``i``n`` ``t``h``e`` ``i``n`pu`t`.
- `offset_width`:` `Hor`i`zo`n``t``a``l`` ``c`oor`d``i``n``a``t``e`` `of` ``t``h``e`` ``t`op-`l``e`f`t`` ``c`or`n``e`r` `of` ``t``h``e`` `r`e``s`u`l``t`` ``i``n`` ``t``h``e`` ``i``n`pu`t`.
- `t``a`r`g``e``t`_`h``e``i``g``h``t`:` `H`e``i``g``h``t`` `of` ``t``h``e`` `r`e``s`u`l``t`.
- `t``a`r`g``e``t`_`w``i``d``t``h`:` `W`i``d``t``h`` `of` ``t``h``e`` `r`e``s`u`l``t`.
#### Returns:

If image was 4-D, a 4-D float Tensor of shape [batch, target_height, target_width, channels] If image was 3-D, a 3-D float Tensor of shape [target_height, target_width, channels]
#### Raises:
- `ValueError`: If the shape of `image` is incompatible with the `offset_`* or `target_`* arguments, or either `offset_`height or `offset_`width is negative, or either `target_`height or `target_`width is not positive.
