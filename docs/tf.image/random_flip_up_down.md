
Randomly flips an image vertically (upside down).
### Aliases:
- `tf.compat.v1.image.random_flip_up_down`
- `tf.compat.v2.image.random_flip_up_down`

```
 tf.image.random_flip_up_down(
    image,
    seed=None
)
```

With a 1 in 2 chance, outputs the contents of image flipped along the first dimension, which is height. Otherwise output the image as-is.
#### Args:
- `image`:` `4-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`]` `or` `3-D` `T`e``n``s`or` `of` ``s``h``a`p`e`` `[`h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `s``e``e``d`:` `A` `Py`t``h`o`n`` ``i``n``t``e``g``e`r.` `U`s``e``d`` ``t`o` ``c`r`e``a``t``e`` ``a`` `r`a``n``d`om` ``s``e``e``d`.` `S`e``e`` ``t`f.`c`omp`a``t`.v1.`s``e``t`_r`a``n``d`om_`s``e``e``d`` `for` ``b``e``h``a`v`i`or.
#### Returns:

A tensor of the same type and shape as image.
#### Raises:
- `ValueError`: if the shape of `image` not supported.
