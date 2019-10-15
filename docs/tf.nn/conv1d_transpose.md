
The transpose of conv1d.
### Aliases:
- `tf.compat.v1.nn.conv1d_transpose`
- `tf.compat.v2.nn.conv1d_transpose`

```
 tf.nn.conv1d_transpose(
    input,
    filters,
    output_shape,
    strides,
    padding='SAME',
    data_format='NWC',
    dilations=None,
    name=None
)
```
[Deconvolutional Networks](https://www.matthewzeiler.com/mattzeiler/deconvolutionalnetworks.pdf)This operation is sometimes called "deconvolution" after , but is really the transpose (gradient) of conv1d rather than an actual deconvolution.

#### Args:
- `input`:` `A` `3-D` ``Tensor`` `of` ``t`yp`e`` ``float`` ``a``n``d`` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``i``n``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s`]` `for` ``NWC`` ``d``a``t``a`` `form`a``t`` `or` `[`b``a``t``c``h``,`` ``i``n``_``c``h``a``n``n``e``l``s``,`` ``i``n``_``w``i``d``t``h`]` `for` ``NCW`` ``d``a``t``a`` `form`a``t`.
- `filters`:` `A` `3-D` ``Tensor`` ``w``i``t``h`` ``t``h``e`` ``s``a`m`e`` ``t`y`p``e`` ``a``s`` ``value`` ``a``n``d`` ``s``h``a``p``e`` `[`f``i``l``t``e``r``_``w``i``d``t``h``,`` ``o``u``t``p``u``t``_``c``h``a``n``n``e``l``s``,`` ``i``n``_``c``h``a``n``n``e``l``s`].` ``f``i``l``t``e``r`'`s`` ``i``n``_``c``h``a``n``n``e``l``s`` ``d``i`m`e``n``s``i``o``n`` `m`u``s``t`` `m`a``t``c``h`` ``t``h``a``t`` ``o``f`` ``value`.
- `o``u``t``p``u``t``_``s``h``a``p``e`:` `A` `1-D` ``Tensor``,`` ``c``o``n``t``a``i``n``i``n`g` ``t``h``r``e``e`` ``e``l``e`m`e``n``t``s``,`` ``r``e``p``r``e``s``e``n``t``i``n`g` ``t``h``e`` ``o``u``t``p``u``t`` ``s``h``a``p``e`` ``o``f`` ``t``h``e`` ``d``e``c``o``n`v`o``l``u``t``i``o``n`` ``o``p`.
- `s``t``r``i``d``e``s`:` `A`n`` ``i``n``t`` ``o``r`` ``l``i``s``t`` ``o``f`` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n`g`t``h`` ``1`` ``o``r`` ``3`.` `T`h``e`` ``n``u`m`b``e``r`` ``o``f`` ``e``n``t``r``i``e``s`` ``b`y` ``w``h``i``c``h`` ``t``h``e`` ``f``i``l``t``e``r`` ``i``s`` `m`o`v`e``d`` ``r``i`g`h``t`` ``a``t`` ``e``a``c``h`` ``s``t``e``p`.
- `p``a``d``d``i``n`g:` `A` ``s``t``r``i``n`g`,`` ``e``i``t``h``e``r`` ``'VALID'`` ``o``r`` ``'SAME'`.` `T`h``e`` ``p``a``d``d``i``n`g` ``a``l`g`o``r``i``t``h`m.` `S`e``e`` ``t``h``e`` `"`r``e``t``u``r``n``s`"` ``s``e``c``t``i``o``n`` ``o``f`` ``t``f`.`n``n`.`c``o``n`v`o``l``u``t``i``o``n`` ``f``o``r`` ``d``e``t``a``i``l``s`.
- `d``a``t``a``_``f``o``r`m`a``t`:` `A` ``s``t``r``i``n`g.` ``'NWC'`` ``a``n``d`` ``'NCW'`` ``a``r``e`` ``s``u``p``p``o``r``t``e``d`.
- `d``i``l``a``t``i``o``n``s`:` `A`n`` ``i``n``t`` ``o``r`` ``l``i``s``t`` ``o``f`` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n`g`t``h`` ``1`` ``o``r`` ``3`` ``w``h``i``c``h`` ``d``e``f``a``u``l``t``s`` ``t``o`` ``1`.` `T`h``e`` ``d``i``l``a``t``i``o``n`` ``f``a``c``t``o``r`` ``f``o``r`` ``e``a``c``h`` ``d``i`m`e``n``s``i``o``n`` ``o``f`` ``input`.` `I`f`` ``s``e``t`` ``t``o`` `k` `>` ``1``,`` ``t``h``e``r``e`` ``w``i``l``l`` ``b``e`` `k-`1`` ``s`k`i``p``p``e``d`` ``c``e``l``l``s`` ``b``e``t``w``e``e``n`` ``e``a``c``h`` ``f``i``l``t``e``r`` ``e``l``e`m`e``n``t`` ``o``n`` ``t``h``a``t`` ``d``i`m`e``n``s``i``o``n`.` `D`i``l``a``t``i``o``n``s`` ``i``n`` ``t``h``e`` ``b``a``t``c``h`` ``a``n``d`` ``d``e``p``t``h`` ``d``i`m`e``n``s``i``o``n``s`` `m`u``s``t`` ``b``e`` ``1`.
- `n``a`m`e`:` `O`p``t``i``o``n``a``l`` ``n``a`m`e`` ``f``o``r`` ``t``h``e`` ``r``e``t``u``r``n``e``d`` ``t``e``n``s``o``r`.
#### Returns:

A Tensor with the same type as value.
#### Raises:
- `ValueError`: If input/output depth does not match `filter`'s shape, if `output_shape` is not at 3-element vector, if `padding` is other than `'VALID'` or `'SAME'`, or if `data_format` is invalid.
