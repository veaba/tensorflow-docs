
Flip an image horizontally (left to right).
### Aliases:
- `tf.compat.v1.image.flip_left_right`
- `tf.compat.v2.image.flip_left_right`

```
 tf.image.flip_left_right(image)
```
### Used in the tutorials:
- ``I``m``a``g``e`` ``s``e``g``m``e``n``t``a``t``i``o``n``
- ``P``i``x``2``P``i``x``

Outputs the contents of image flipped along the width dimension.

See also reverse().
#### Args:
- `image`:` `4-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`]` `or` `3-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
#### Returns:

A tensor of the same type and shape as image.
#### Raises:
- `ValueError`: if the shape of `image` not supported.
