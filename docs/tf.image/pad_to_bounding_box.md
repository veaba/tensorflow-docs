
Pad image with zeros to the specified height and width.
### Aliases:
- `tf.compat.v1.image.pad_to_bounding_box`
- `tf.compat.v2.image.pad_to_bounding_box`

```
 tf.image.pad_to_bounding_box(
    image,
    offset_height,
    offset_width,
    target_height,
    target_width
)
```

Adds offset_height rows of zeros on top, offset_width columns of zeros on the left, and then pads the image on the bottom and right with zeros until it has dimensions target_height, target_width.

This op does nothing if offset_* is zero and the image already has size target_height by target_width.
#### Args:
- `image`:` `4-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`]` `or` `3-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `offset_height`:` `Num`b``e`r` `of` `ro`w``s`` `of` `z`e`ro`s`` ``t`o` ``a``d``d`` `o`n`` ``t`op.
- `offset_width`:` `Num`b``e`r` `of` ``c`o`l`um`n``s`` `of` `z`e`ro`s`` ``t`o` ``a``d``d`` `o`n`` ``t``h``e`` ``l``e`f`t`.
- `t``a`r`g``e``t`_`h``e``i``g``h``t`:` `H`e``i``g``h``t`` `of` `ou`t`pu`t`` ``image`.
- `t``a`r`g``e``t`_`w``i``d``t``h`:` `W`i``d``t``h`` `of` `ou`t`pu`t`` ``image`.
#### Returns:

If image was 4-D, a 4-D float Tensor of shape [batch, target_height, target_width, channels] If image was 3-D, a 3-D float Tensor of shape [target_height, target_width, channels]
#### Raises:
- `ValueError`: If the shape of `image` is incompatible with the `offset_`* or `target_`* arguments, or either `offset_`height or `offset_`width is negative.
