
Flip an image vertically (upside down).
### Aliases:
- `tf.compat.v1.image.flip_up_down`
- `tf.compat.v2.image.flip_up_down`

```
 tf.image.flip_up_down(image)
```

Outputs the contents of image flipped along the height dimension.

See also reverse().
#### Args:
- `image`:` `4-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`]` `or` `3-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
#### Returns:

A Tensor of the same type and shape as image.
#### Raises:
- `ValueError`: if the shape of `image` not supported.
