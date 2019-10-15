
Transpose image(s) by swapping the height and width dimension.
### Aliases:
- `tf.compat.v1.image.transpose`
- `tf.compat.v1.image.transpose`_image
- `tf.compat.v2.image.transpose`

```
 tf.image.transpose(
    image,
    name=None
)
```
#### Args:
- `image`:` `4-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`]` `or` `3-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `n``a`m`e`:` `A` ``n``a`m`e`` `for` ``t``h``i``s`` `op`e`r`a``t``i`o`n`` `(op`t``i`o`n``a``l`).
#### Returns:

If image was 4-D, a 4-D float Tensor of shape [batch, width, height, channels] If image was 3-D, a 3-D float Tensor of shape [width, height, channels]
#### Raises:
- `ValueError`: if the shape of `image` not supported.
