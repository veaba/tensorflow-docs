
The transpose of conv2d.

```
 tf.compat.v1.nn.conv2d_transpose(
    value=None,
    filter=None,
    output_shape=None,
    strides=None,
    padding='SAME',
    data_format='NHWC',
    name=None,
    input=None,
    filters=None,
    dilations=None
)
```
[Deconvolutional Networks](https://www.matthewzeiler.com/mattzeiler/deconvolutionalnetworks.pdf)This operation is sometimes called "deconvolution" after , but is really the transpose (gradient) of conv2d rather than an actual deconvolution.

#### Args:
- `value`:` `A` `4-D` ``Tensor`` `of` ``t`yp`e`` ``float`` ``a``n``d`` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s`]` `for` ``NHWC`` ``d``a``t``a`` `form`a``t`` `or` `[`b``a``t``c``h``,`` ``i``n``_``c``h``a``n``n``e``l``s``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h`]` `for` ``NCHW`` ``d``a``t``a`` `form`a``t`.
- `filter`:` `A` `4-D` ``Tensor`` ``w``i``t``h`` ``t``h``e`` ``s``a`m`e`` ``t`y`p``e`` ``a``s`` ``value`` ``a``n``d`` ``s``h``a``p``e`` `[`h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``o``u``t``p``u``t``_``c``h``a``n``n``e``l``s``,`` ``i``n``_``c``h``a``n``n``e``l``s`].` ``filter`'`s`` ``i``n``_``c``h``a``n``n``e``l``s`` ``d``i`m`e``n``s``i``o``n`` `m`u``s``t`` `m`a``t``c``h`` ``t``h``a``t`` ``o`f` ``value`.
- `o``u``t``p``u``t``_``s``h``a``p``e`:` `A` `1-D` ``Tensor`` `r`e``p`r`e``s``e``n``t``i``n``g`` ``t``h``e`` ``o``u``t``p``u``t`` ``s``h``a``p``e`` ``o`f` ``t``h``e`` ``d``e``c``o``n`v`o``l``u``t``i``o``n`` ``o``p`.
- `s``t`r`i``d``e``s`:` `A`n`` ``i``n``t`` ``o`r` ``l``i``s``t`` ``o`f` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``1``,`` ``2`` ``o`r` ``4`.` `T`h``e`` ``s``t`r`i``d``e`` ``o`f` ``t``h``e`` ``s``l``i``d``i``n``g`` ``w``i``n``d``o``w`` `f`o`r` ``e``a``c``h`` ``d``i`m`e``n``s``i``o``n`` ``o`f` ``i``n``p``u``t`.` `If` ``a`` ``s``i``n``g``l``e`` ``value`` ``i``s`` ``g``i`v`e``n`` ``i``t`` ``i``s`` `r`e``p``l``i``c``a``t``e``d`` ``i``n`` ``t``h``e`` ``H`` ``a``n``d`` ``W`` ``d``i`m`e``n``s``i``o``n`.` `By` ``d``e`f`a``u``l``t`` ``t``h``e`` ``N`` ``a``n``d`` ``C`` ``d``i`m`e``n``s``i``o``n``s`` ``a`r`e`` ``s``e``t`` ``t``o`` `0.` `T`h``e`` ``d``i`m`e``n``s``i``o``n`` ``o`r`d``e`r` ``i``s`` ``d``e``t``e`rm`i``n``e``d`` ``b`y` ``t``h``e`` ``value`` ``o`f` ``d``a``t``a``_`f`o`rm`a``t``,`` ``s``e``e`` ``b``e``l``o``w`` `f`o`r` ``d``e``t``a``i``l``s`.
- `p``a``d``d``i``n``g`:` `A` ``s``t`r`i``n``g``,`` ``e``i``t``h``e`r` ``'VALID'`` ``o`r` ``'SAME'`.` `T`h``e`` ``p``a``d``d``i``n``g`` ``a``l``g``o`r`i``t``h`m.` `S`e``e`` ``t``h``e`` `"r`e``t``u`r`n``s`"` ``s``e``c``t``i``o``n`` ``o`f` ``t`f.`n``n`.`c``o``n`v`o``l``u``t``i``o``n`` `f`o`r` ``d``e``t``a``i``l``s`.
- `d``a``t``a``_`f`o`rm`a``t`:` `A` ``s``t`r`i``n``g`.` `'`NHWC`'` ``a``n``d`` `'`NCHW`'` ``a`r`e`` ``s``u``p``p``o`r`t``e``d`.
- `n``a`m`e`:` `O`p``t``i``o``n``a``l`` ``n``a`m`e`` `f`o`r` ``t``h``e`` `r`e``t``u`r`n``e``d`` ``t``e``n``s``o`r.
- `i``n``p``u``t`:` `A`l``i``a``s`` `f`o`r` ``value`.
- `filter``s`:` `A`l``i``a``s`` `f`o`r` ``filter`.
- `d``i``l``a``t``i``o``n``s`:` `A`n`` ``i``n``t`` ``o`r` ``l``i``s``t`` ``o`f` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``1``,`` ``2`` ``o`r` ``4``,`` ``d``e`f`a``u``l``t``s`` ``t``o`` ``1`.` `T`h``e`` ``d``i``l``a``t``i``o``n`` `f`a``c``t``o`r` `f`o`r` ``e``a``c``h`` ``d``i`m`e``n``s``i``o``n`` ``o`f`i``n``p``u``t`.` `If` ``a`` ``s``i``n``g``l``e`` ``value`` ``i``s`` ``g``i`v`e``n`` ``i``t`` ``i``s`` `r`e``p``l``i``c``a``t``e``d`` ``i``n`` ``t``h``e`` ``H`` ``a``n``d`` ``W`` ``d``i`m`e``n``s``i``o``n`.` `By` ``d``e`f`a``u``l``t`` ``t``h``e`` ``N`` ``a``n``d`` ``C`` ``d``i`m`e``n``s``i``o``n``s`` ``a`r`e`` ``s``e``t`` ``t``o`` ``1`.` `If` ``s``e``t`` ``t``o`` `k` `>` ``1``,`` ``t``h``e`r`e`` ``w``i``l``l`` ``b``e`` `k-`1`` ``s`k`i``p``p``e``d`` ``c``e``l``l``s`` ``b``e``t``w``e``e``n`` ``e``a``c``h`` ``filter`` ``e``l``e`m`e``n``t`` ``o``n`` ``t``h``a``t`` ``d``i`m`e``n``s``i``o``n`.` `T`h``e`` ``d``i`m`e``n``s``i``o``n`` ``o`r`d``e`r` ``i``s`` ``d``e``t``e`rm`i``n``e``d`` ``b`y` ``t``h``e`` ``value`` ``o`f` ``d``a``t``a``_`f`o`rm`a``t``,`` ``s``e``e`` ``a``b``o`v`e`` `f`o`r` ``d``e``t``a``i``l``s`.` `D`i``l``a``t``i``o``n``s`` ``i``n`` ``t``h``e`` ``b``a``t``c``h`` ``a``n``d`` ``d``e``p``t``h`` ``d``i`m`e``n``s``i``o``n``s`` ``i`f` ``a`` ``4`-`d`` ``t``e``n``s``o`r` `m`u``s``t`` ``b``e`` ``1`.
#### Returns:

A Tensor with the same type as value.
#### Raises:
- `ValueError`: If input/output depth does not match `filter`'s shape, or if padding is other than `'VALID'` or `'SAME'`.
