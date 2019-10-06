
The transpose of atrous_conv2d.
### Aliases:
- `tf.compat.v1.nn.atrous_conv2d_transpose`
- `tf.compat.v2.nn.atrous_conv2d_transpose`

```
 tf.nn.atrous_conv2d_transpose(
    value,
    filters,
    output_shape,
    rate,
    padding,
    name=None
)
```
[Deconvolutional Networks](https://www.matthewzeiler.com/mattzeiler/deconvolutionalnetworks.pdf)This operation is sometimes called "deconvolution" after , but is really the transpose (gradient) of atrous_conv2d rather than an actual deconvolution.

#### Args:
- `value`:` `A` `4-D` ``Tensor`` `of` ``t`yp`e`` ``float`.` `I`t`` ``n``e``e``d``s`` ``t`o` ``b``e`` ``i``n`` ``t``h``e`` ``d``e`f`a`u`l``t`` ``NHWC`` `form`a``t`.` `I`t``s`` ``s``h``a`p`e`` ``i``s`` `[`b``a``t``c``h``,`` ``i``n``_``h``e``i``g``h``t``,`` ``i``n``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s`].
- `filters`:` `A` `4-D` ``Tensor`` ``w``i``t``h`` ``t``h``e`` ``s``a`m`e`` ``t`yp`e`` ``a``s`` ``value`` ``a``n``d`` ``s``h``a`p`e`` `[`f``i``l``t``e``r``_``h``e``i``g``h``t``,`` ``f``i``l``t``e``r``_``w``i``d``t``h``,`` ``o``u``t``_``c``h``a``n``n``e``l``s``,`` ``i``n``_``c``h``a``n``n``e``l``s`].` ``filters`'` ``i``n``_``c``h``a``n``n``e``l``s`` ``d``i`m`e``n``s``i``o``n`` `m`u``s``t`` `m`a``t``c``h`` ``t``h``a``t`` ``o``f`` ``value`.` `A`t``r``o``u``s`` ``c``o``n`v`o``l``u``t``i``o``n`` ``i``s`` ``e`q`u``i`v`a``l``e``n``t`` ``t``o`` ``s``t``a``n``d``a``r``d`` ``c``o``n`v`o``l``u``t``i``o``n`` ``w``i``t``h`` ``u`p`s``a`mp`l``e``d`` ``filters`` ``w``i``t``h`` ``e``f``f``e``c``t``i`v`e`` ``h``e``i``g``h``t`` ``f``i``l``t``e``r``_``h``e``i``g``h``t`` `+` `(`f``i``l``t``e``r``_``h``e``i``g``h``t`` `-` `1)` `*` `(`r``a``t``e`` `-` `1)` ``a``n``d`` ``e``f``f``e``c``t``i`v`e`` ``w``i``d``t``h`` ``f``i``l``t``e``r``_``w``i``d``t``h`` `+` `(`f``i``l``t``e``r``_``w``i``d``t``h`` `-` `1)` `*` `(`r``a``t``e`` `-` `1)`,`` `p`r``o``d``u``c``e``d`` ``b`y` ``i``n``s``e``r``t``i``n``g`` ``r``a``t``e`` `-` `1` `z`e``r``o``s`` ``a``l``o``n``g`` ``c``o``n``s``e``c``u``t``i`v`e`` ``e``l``e`m`e``n``t``s`` ``a``c``r``o``s``s`` ``t``h``e`` ``filters`'` ``s`p`a``t``i``a``l`` ``d``i`m`e``n``s``i``o``n``s`.
- `o``u``t`p`u``t``_``s``h``a`p`e`:` `A` `1-D` ``Tensor`` ``o``f`` ``s``h``a`p`e`` ``r``e`p`r``e``s``e``n``t``i``n``g`` ``t``h``e`` ``o``u``t`p`u``t`` ``s``h``a`p`e`` ``o``f`` ``t``h``e`` ``d``e``c``o``n`v`o``l``u``t``i``o``n`` ``o`p.
- `r``a``t``e`:` `A` `p`o``s``i``t``i`v`e`` ``i``n``t`32.` `T`h``e`` ``s``t``r``i``d``e`` ``w``i``t``h`` ``w``h``i``c``h`` ``w``e`` ``s``a`mp`l``e`` ``i``n`p`u``t`` ``value``s`` ``a``c``r``o``s``s`` ``t``h``e`` ``h``e``i``g``h``t`` ``a``n``d`` ``w``i``d``t``h`` ``d``i`m`e``n``s``i``o``n``s`.` `Eq`u``i`v`a``l``e``n``t``l`y`,`` ``t``h``e`` ``r``a``t``e`` ``b`y` ``w``h``i``c``h`` ``w``e`` ``u`p`s``a`mp`l``e`` ``t``h``e`` ``f``i``l``t``e``r`` ``value``s`` ``b`y` ``i``n``s``e``r``t``i``n``g`` `z`e``r``o``s`` ``a``c``r``o``s``s`` ``t``h``e`` ``h``e``i``g``h``t`` ``a``n``d`` ``w``i``d``t``h`` ``d``i`m`e``n``s``i``o``n``s`.` `I`n`` ``t``h``e`` ``l``i``t``e``r``a``t``u``r``e``,`` ``t``h``e`` ``s``a`m`e`` `p`a``r``a`m`e``t``e``r`` ``i``s`` ``s``o`m`e``t``i`m`e``s`` ``c``a``l``l``e``d`` ``i``n`p`u``t`` ``s``t``r``i``d``e`` ``o``r`` ``d``i``l``a``t``i``o``n`.
- `padding`:` `A` ``s``t``r``i``n``g``,`` ``e``i``t``h``e``r`` ``'VALID'`` ``o``r`` ``'SAME'`.` `T`h``e`` ``padding`` ``a``l``g``o``r``i``t``h`m.
- `n``a`m`e`:` `Op`t``i``o``n``a``l`` ``n``a`m`e`` ``f``o``r`` ``t``h``e`` ``r``e``t``u``r``n``e``d`` ``t``e``n``s``o``r`.
#### Returns:

A Tensor with the same type as value.
#### Raises:
- `ValueError`: If input/output depth does not match `filters`' shape, or if padding is other than `'VALID'` or `'SAME'`, or if the `rate` is less than one, or if the output_shape is not a tensor with 4 elements.
