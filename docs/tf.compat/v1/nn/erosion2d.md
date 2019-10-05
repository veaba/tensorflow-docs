
Computes the grayscale erosion of 4-D value and 3-D kernel tensors.

```
 tf.compat.v1.nn.erosion2d(
    value,
    kernel,
    strides,
    rates,
    padding,
    name=None
)
```

The value tensor has shape [batch, in_height, in_width, depth] and the kernel tensor has shape [kernel_height, kernel_width, depth], i.e., each input channel is processed independently of the others with its own structuring function. The output tensor has shape [batch, out_height, out_width, depth]. The spatial dimensions of the output tensor depend on the padding algorithm. We currently only support the default "NHWC" data_format.

In detail, the grayscale morphological 2-D erosion is given by:

```
 output[b, y, x, c] =
   min_{dy, dx} value[b,
                      strides[1] * y - rates[1] * dy,
                      strides[2] * x - rates[2] * dx,
                      c] -
                kernel[dy, dx, c]
```

Duality: The erosion of value by the kernel is equal to the negation of the dilation of -value by the reflected kernel.
#### Args:
- `value`:` `A` ``Tensor`.` `4-D` ``w``i``t``h`` `s`h``a``p``e`` `[`b``a``t``c``h``,`` ``i``n``_``h``e``i``g``h``t``,`` ``i``n``_``w``i``d``t``h``,`` ``d``e``p``t``h`].
- `kernel`:` `A` ``Tensor`.` `Mus`t`` ``h``a`v`e`` ``t``h``e`` `s`a`m`e`` ``t`y`p``e`` ``a`s` ``value`.` `3-D` ``w``i``t``h`` `s`h``a``p``e`` `[`kernel``_``h``e``i``g``h``t``,`` ``kernel``_``w``i``d``t``h``,`` ``d``e``p``t``h`].
- `strides`:` `A` ``l``i``s``t`` `of` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``>= 4`.` ``1`-D` `of` ``l``e``n``g``t``h`` `4.` `T`h``e`` ``s``t``r``i``d``e`` `of` ``t``h``e`` ``s``l``i``d``i``n``g`` ``w``i``n``d`o`w`` `fo`r`` ``e``a``c``h`` ``d``i`m`e``n``s``i`o`n`` `of` ``t``h``e`` ``i``n``p`u`t`` ``t``e``n``s`o`r`.` `Mu`s``t`` ``b``e`:` `[`1``,`` ``s``t``r``i``d``e``_``h``e``i``g``h``t``,`` ``s``t``r``i``d``e``_``w``i``d``t``h``,`` ``1`].
- `r``a``t``e``s`:` `A` ``l``i``s``t`` `of` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``>= 4`.` ``1`-D` `of` ``l``e``n``g``t``h`` `4.` `T`h``e`` ``i``n``p`u`t`` ``s``t``r``i``d``e`` `fo`r`` ``a``t``r`ou`s`` `mo`r``p``h`o`l`o`g``i``c``a``l`` ``d``i``l``a``t``i`o`n`.` `Mu`s``t`` ``b``e`:` `[`1``,`` ``r``a``t``e``_``h``e``i``g``h``t``,`` ``r``a``t``e``_``w``i``d``t``h``,`` ``1`].
- `p``a``d``d``i``n``g`:` `A` ``s``t``r``i``n``g`` `f`r`om:` ``"SAME", "VALID"`.` `T`h``e`` ``t`y`p``e`` `of` ``p``a``d``d``i``n``g`` ``a``l``g`o`r``i``t``h`m` ``t`o` `u`s``e`.
- `n``a`m`e`:` `A` ``n``a`m`e`` `fo`r`` ``t``h``e`` `o`p``e``r``a``t``i`o`n`` `(o`p``t``i`o`n``a``l`).` `If` ``n`o`t`` ``s``p``e``c``i`f`i``e``d`` `"`e``r`o`s``i`o`n`2`d`"` ``i``s`` `u`s``e``d`.
#### Returns:

A Tensor. Has the same type as value. 4-D with shape [batch, out_height, out_width, depth].
#### Raises:
- `ValueError`: If the `value` depth does not match `kernel`' shape, or if padding is other than `'VALID'` or `'SAME'`.
