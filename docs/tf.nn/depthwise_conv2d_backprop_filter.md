
Defined in generated file: python/ops/gen_nn_ops.py

Computes the gradients of depthwise convolution with respect to the filter.
### Aliases:
- `tf.compat.v1.nn.depthwise_conv2d_backprop_filter`
- `tf.compat.v1.nn.depthwise_conv2d_native_backprop_filter`
- `tf.compat.v2.nn.depthwise_conv2d_backprop_filter`

```
 tf.nn.depthwise_conv2d_backprop_filter(
    input,
    filter_sizes,
    out_backprop,
    strides,
    padding,
    data_format='NHWC',
    dilations=[1, 1, 1, 1],
    name=None
)
```
#### Args:
- `input`:` `A` ``Tensor`.` `Mu`s``t`` ``b``e`` `o`n``e`` `of` ``t``h``e`` `fo`l``l`o`w``i``n``g`` ``t`yp`e``s`:` ``half``,`` ``bfloat16``,`` ``float32``,`` ``float64`.` `4-D` ``w``i``t``h`` ``s``h``a`p`e`` ``b``a``s``e``d`` `o`n`` ``data_format`.` `For` ``e`x`a`mp`l``e``,`` ``i`f` ``data_format`` ``i``s`` `'NHWC'` ``t``h``e``n`` ``input`` ``i``s`` ``a`` `4-D` `[`b``a``t``c``h``,`` ``i``n``_``h``e``i``g``h``t``,`` ``i``n``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s`]` ``t``e``n``s`or.
- `filter_sizes`:` `A` ``Tensor`` `o`f`` ``t`y`p``e`` ``i``n``t`32.` `A`n`` ``i``n``t``e``g``e``r`` `v`e``c``t`o`r`` ``r``e``p``r``e``s``e``n``t``i``n``g`` ``t``h``e`` ``t``e``n``s`o`r`` ``s``h``a``p``e`` `o`f`` ``filter``,`` ``w``h``e``r``e`` ``filter`` ``i``s`` ``a`` `4-D` `[`filter``_``h``e``i``g``h``t``,`` ``filter``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s``,`` ``d``e``p``t``h``w``i``s``e``_``m``u``l``t``i``p``l``i``e``r`]` ``t``e``n``s`o`r`.
- `out_backprop`:` `A` ``Tensor`.` `M`u``s``t`` ``h``a`v`e`` ``t``h``e`` ``s``a``m``e`` ``t`y`p``e`` ``a``s`` ``input`.` `4-D` ``w``i``t``h`` ``s``h``a``p``e`` ``b``a``s``e``d`` ``o``n`` ``data_format`.` `F`o``r`` ``e`x`a``m``p``l``e``,`` ``i``f`` ``data_format`` ``i``s`` `'NHWC'` ``t``h``e``n`` ``out_backprop`` ``s``h``a``p``e`` ``i``s`` `[`b``a``t``c``h``,`` ``o``u``t``_``h``e``i``g``h``t``,`` ``o``u``t``_``w``i``d``t``h``,`` ``o``u``t``_``c``h``a``n``n``e``l``s`].` `G`r``a``d``i``e``n``t``s`` ``w`.`r`.`t`.` ``t``h``e`` ``o``u``t``p``u``t`` ``o``f`` ``t``h``e`` ``c``o``n`v`o``l``u``t``i``o``n`.
- `s``t``r``i``d``e``s`:` `A` ``l``i``s``t`` ``o``f`` ``i``n``t``s`.` `T`h``e`` ``s``t``r``i``d``e`` ``o``f`` ``t``h``e`` ``s``l``i``d``i``n``g`` ``w``i``n``d``o``w`` ``f``o``r`` ``e``a``c``h`` ``d``i``m``e``n``s``i``o``n`` ``o``f`` ``t``h``e`` ``input`` ``o``f`` ``t``h``e`` ``c``o``n`v`o``l``u``t``i``o``n`.
- `p``a``d``d``i``n``g`:` `A` ``s``t``r``i``n``g`` ``f``r``o``m`:` ``"SAME", "VALID"`.` `T`h``e`` ``t`y`p``e`` ``o``f`` ``p``a``d``d``i``n``g`` ``a``l``g``o``r``i``t``h``m`` ``t``o`` ``u``s``e`.
- `data_format`:` `A`n`` ``o``p``t``i``o``n``a``l`` ``s``t``r``i``n``g`` ``f``r``o``m`:` ``"NHWC", "NCHW"`.` `D`e``f``a``u``l``t``s`` ``t``o`` ``"NHWC"`.` `S`p``e``c``i``f`y` ``t``h``e`` ``d``a``t``a`` ``f``o``r``m``a``t`` ``o``f`` ``t``h``e`` ``input`` ``a``n``d`` ``o``u``t``p``u``t`` ``d``a``t``a`.` `W`i``t``h`` ``t``h``e`` ``d``e``f``a``u``l``t`` ``f``o``r``m``a``t`` ``"NHWC"``,`` ``t``h``e`` ``d``a``t``a`` ``i``s`` ``s``t``o``r``e``d`` ``i``n`` ``t``h``e`` ``o``r``d``e``r`` ``o``f`:` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].` `A`l``t``e``r``n``a``t``i`v`e``l`y`,`` ``t``h``e`` ``f``o``r``m``a``t`` ``c``o``u``l``d`` ``b``e`` `"NCHW"`,`` ``t``h``e`` ``d``a``t``a`` ``s``t``o``r``a``g``e`` ``o``r``d``e``r`` ``o``f`:` `[`b``a``t``c``h``,`` ``c``h``a``n``n``e``l``s``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h`].
- `d``i``l``a``t``i``o``n``s`:` `A`n`` ``o``p``t``i``o``n``a``l`` ``l``i``s``t`` ``o``f`` ``i``n``t``s`.` `D`e``f``a``u``l``t``s`` ``t``o`` `[`1``,`` ``1``,`` ``1``,`` ``1`].` ``1`-D` ``t``e``n``s``o``r`` ``o``f`` ``l``e``n``g``t``h`` `4.` `T`h``e`` ``d``i``l``a``t``i``o``n`` ``f``a``c``t``o``r`` ``f``o``r`` ``e``a``c``h`` ``d``i``m``e``n``s``i``o``n`` ``o``f`` ``input`.` `I`f`` ``s``e``t`` ``t``o`` `k` `>` ``1``,`` ``t``h``e``r``e`` ``w``i``l``l`` ``b``e`` `k-`1`` ``s`k`i``p``p``e``d`` ``c``e``l``l``s`` ``b``e``t``w``e``e``n`` ``e``a``c``h`` ``filter`` ``e``l``e``m``e``n``t`` ``o``n`` ``t``h``a``t`` ``d``i``m``e``n``s``i``o``n`.` `T`h``e`` ``d``i``m``e``n``s``i``o``n`` ``o``r``d``e``r`` ``i``s`` ``d``e``t``e``r``m``i``n``e``d`` ``b`y` ``t``h``e`` `v`a``l``u``e`` ``o``f`` ``data_format``,`` ``s``e``e`` ``a``b``o`v`e`` ``f``o``r`` ``d``e``t``a``i``l``s`.` `D`i``l``a``t``i``o``n``s`` ``i``n`` ``t``h``e`` ``b``a``t``c``h`` ``a``n``d`` ``d``e``p``t``h`` ``d``i``m``e``n``s``i``o``n``s`` ``m``u``s``t`` ``b``e`` ``1`.
- `n``a``m``e`:` `A` ``n``a``m``e`` ``f``o``r`` ``t``h``e`` ``o``p``e``r``a``t``i``o``n`` `(`o``p``t``i``o``n``a``l`).
#### Returns:

A Tensor. Has the same type as input.
