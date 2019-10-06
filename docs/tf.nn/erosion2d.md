
Computes the grayscale erosion of 4-D value and 3-D filters tensors.
### Aliases:
- `tf.compat.v2.nn.erosion2d`

```
 tf.nn.erosion2d(
    value,
    filters,
    strides,
    padding,
    data_format,
    dilations,
    name=None
)
```

The value tensor has shape [batch, in_height, in_width, depth] and the filters tensor has shape [filters_height, filters_width, depth], i.e., each input channel is processed independently of the others with its own structuring function. The output tensor has shape [batch, out_height, out_width, depth]. The spatial dimensions of the output tensor depend on the padding algorithm. We currently only support the default "NHWC" data_format.

In detail, the grayscale morphological 2-D erosion is given by:

```
 output[b, y, x, c] =
   min_{dy, dx} value[b,
                      strides[1] * y - dilations[1] * dy,
                      strides[2] * x - dilations[2] * dx,
                      c] -
                filters[dy, dx, c]
```

Duality: The erosion of value by the filters is equal to the negation of the dilation of -value by the reflected filters.
#### Args:
- `value`:` `A` ``Tensor`.` `4-D` ``w``i``t``h`` `s`h``a``p``e`` `[`b``a``t``c``h``,`` ``i``n``_``h``e``i``g``h``t``,`` ``i``n``_``w``i``d``t``h``,`` ``d``e``p``t``h`].
- `filters`:` `A` ``Tensor`.` `Mu`s``t`` ``h``a`v`e`` ``t``h``e`` ``s``a`m`e`` ``t`y`p``e`` ``a``s`` ``value`.` `3-D` ``w``i``t``h`` ``s``h``a``p``e`` `[`filters``_``h``e``i``g``h``t``,`` ``filters``_``w``i``d``t``h``,`` ``d``e``p``t``h`].
- `s``t``r``i``d``e``s`:` `A` ``l``i``s``t`` `o`f`` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``>= 4`.` ``1`-D` `o`f`` ``l``e``n``g``t``h`` `4.` `T`h``e`` ``s``t``r``i``d``e`` `o`f`` ``t``h``e`` ``s``l``i``d``i``n``g`` ``w``i``n``d`o`w`` ``f`o`r`` ``e``a``c``h`` ``d``i`m`e``n``s``i`o`n`` `o`f`` ``t``h``e`` ``i``n``p`u`t`` ``t``e``n``s`o`r`.` `Mu`s``t`` ``b``e`:` `[`1``,`` ``s``t``r``i``d``e``_``h``e``i``g``h``t``,`` ``s``t``r``i``d``e``_``w``i``d``t``h``,`` ``1`].
- `p``a``d``d``i``n``g`:` `A` ``s``t``r``i``n``g`` ``f``r`om:` ``"SAME", "VALID"`.` `T`h``e`` ``t`y`p``e`` `o`f`` ``p``a``d``d``i``n``g`` ``a``l``g`o`r``i``t``h`m` ``t`o` `u`s``e`.
- `d``a``t``a``_``f`o`r`m`a``t`:` `A` ``s``t``r``i``n``g``,`` `o`n``l`y` ``"NHWC"`` ``i``s`` ``c`u`r``r``e``n``t``l`y` ``s`u`p``p`o`r``t``e``d`.
- `d``i``l``a``t``i`o`n``s`:` `A` ``l``i``s``t`` `o`f`` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``>= 4`.` ``1`-D` `o`f`` ``l``e``n``g``t``h`` `4.` `T`h``e`` ``i``n``p`u`t`` ``s``t``r``i``d``e`` ``f`o`r`` ``a``t``r`ou`s`` `mo`r``p``h`o`l`o`g``i``c``a``l`` ``d``i``l``a``t``i`o`n`.` `Mu`s``t`` ``b``e`:` `[`1``,`` ``r``a``t``e``_``h``e``i``g``h``t``,`` ``r``a``t``e``_``w``i``d``t``h``,`` ``1`].
- `n``a`m`e`:` `A` ``n``a`m`e`` ``f`o`r`` ``t``h``e`` `o`p``e``r``a``t``i`o`n`` `(o`p``t``i`o`n``a``l`).` `I`f`` ``n`o`t`` ``s``p``e``c``i``f``i``e``d`` `"`e``r`o`s``i`o`n`2`d`"` ``i``s`` `u`s``e``d`.
#### Returns:

A Tensor. Has the same type as value. 4-D with shape [batch, out_height, out_width, depth].
#### Raises:
- `ValueError`: If the `value` depth does not match `filters`' shape, or if padding is other than `'VALID'` or `'SAME'`.
