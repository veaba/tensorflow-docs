
Computes the gradients of convolution with respect to the input.

```
 tf.compat.v1.nn.conv2d_backprop_input(
    input_sizes,
    filter=None,
    out_backprop=None,
    strides=None,
    padding=None,
    use_cudnn_on_gpu=True,
    data_format='NHWC',
    dilations=[1, 1, 1, 1],
    name=None,
    filters=None
)
```
#### Args:
- `input_sizes`:` `A` ``Tensor`` `of` ``t`yp`e`` ``int32`.` `A`n`` ``i``n``t``e``g``e`r` `v`e``c``t`or` `r`e`pr`e``s``e``n``t``i``n``g`` ``t``h``e`` ``s``h``a`p`e`` `of` ``input``,`` ``w``h``e`r`e`` ``input`` ``i``s`` ``a`` `4-D` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`]` ``t``e``n``s`or.
- `filter`:` `A` ``Tensor`.` `M`u``s``t`` ``b``e`` ``o``n``e`` ``o``f`` ``t``h``e`` ``f``o``l``l``o``w``i``n``g`` ``t`yp`e``s`:` ``h``a``l``f``,`` ``b``f``l``o``a``t`16`,`` ``float32``,`` ``float64`.` `4-D` ``w``i``t``h`` ``s``h``a`p`e`` `[`filter``_``h``e``i``g``h``t``,`` ``filter``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s``,`` ``o``u``t``_``c``h``a``n``n``e``l``s`].
- `o``u``t``_``b``a``c`kp`r``o`p:` `A` ``Tensor`.` `M`u``s``t`` ``h``a`v`e`` ``t``h``e`` ``s``a`m`e`` ``t`yp`e`` ``a``s`` ``filter`.` `4-D` ``w``i``t``h`` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``o``u``t``_``h``e``i``g``h``t``,`` ``o``u``t``_``w``i``d``t``h``,`` ``o``u``t``_``c``h``a``n``n``e``l``s`].` `G`r``a``d``i``e``n``t``s`` ``w`.`r`.`t`.` ``t``h``e`` ``o``u``t`p`u``t`` ``o``f`` ``t``h``e`` ``c``o``n`v`o``l``u``t``i``o``n`.
- `s``t``r``i``d``e``s`:` `A` ``l``i``s``t`` ``o``f`` ``i``n``t``s`.` `T`h``e`` ``s``t``r``i``d``e`` ``o``f`` ``t``h``e`` ``s``l``i``d``i``n``g`` ``w``i``n``d``o``w`` ``f``o``r`` ``e``a``c``h`` ``d``i`m`e``n``s``i``o``n`` ``o``f`` ``t``h``e`` ``input`` ``o``f`` ``t``h``e`` ``c``o``n`v`o``l``u``t``i``o``n`.` `M`u``s``t`` ``b``e`` ``i``n`` ``t``h``e`` ``s``a`m`e`` ``o``r``d``e``r`` ``a``s`` ``t``h``e`` ``d``i`m`e``n``s``i``o``n`` ``s`p`e``c``i``f``i``e``d`` ``w``i``t``h`` ``f``o``r`m`a``t`.
- `padding`:` `E`i``t``h``e``r`` ``t``h``e`` ``s``t``r``i``n``g`"SAME"`o``r`"VALID"`i``n``d``i``c``a``t``i``n``g`` ``t``h``e`` ``t`yp`e`` ``o``f`` ``padding`` ``a``l``g``o``r``i``t``h`m` ``t``o`` ``u``s``e``,`` ``o``r`` ``a`` ``l``i``s``t`` ``i``n``d``i``c``a``t``i``n``g`` ``t``h``e`` ``e`xp`l``i``c``i``t`` ``padding``s`` ``a``t`` ``t``h``e`` ``s``t``a``r``t`` ``a``n``d`` ``e``n``d`` ``o``f`` ``e``a``c``h`` ``d``i`m`e``n``s``i``o``n`.` `W`h``e``n`` ``e`xp`l``i``c``i``t`` ``padding`` ``i``s`` ``u``s``e``d`` ``a``n``d`` ``d``a``t``a``_``f``o``r`m`a``t`` ``i``s`"NHWC"`,`` ``t``h``i``s`` ``s``h``o``u``l``d`` ``b``e`` ``i``n`` ``t``h``e`` ``f``o``r`m[[0`,`` `0]`,`` `[p`a``d``_``t``o`p`,`` `p`a``d``_``b``o``t``t``o`m]`,`` `[p`a``d``_``l``e``f``t``,`` `p`a``d``_``r``i``g``h``t`]`,`` `[0`,`` `0]]`. When explicit padding used and data_format is`"NCHW"`,`` ``t``h``i``s`` ``s``h``o``u``l``d`` ``b``e`` ``i``n`` ``t``h``e`` ``f``o``r`m[[0`,`` `0]`,`` `[0`,`` `0]`,`` `[p`a``d``_``t``o`p`,`` `p`a``d``_``b``o``t``t``o`m]`,`` `[p`a``d``_``l``e``f``t``,`` `p`a``d``_``r``i``g``h``t`]]`.
- `u``s``e``_``c``u``d``n``n``_``o``n``_``g`p`u`:` `A`n`` ``o`p`t``i``o``n``a``l`` ``b``o``o``l`.` `D`e``f``a``u``l``t``s`` ``t``o`` ``True`.
- `d``a``t``a``_``f``o``r`m`a``t`:` `A`n`` ``o`p`t``i``o``n``a``l`` ``s``t``r``i``n``g`` ``f``r``o`m:` ``"NHWC", "NCHW"`.` `D`e``f``a``u``l``t``s`` ``t``o`` ``"NHWC"`.` `Sp`e``c``i``f`y` ``t``h``e`` ``d``a``t``a`` ``f``o``r`m`a``t`` ``o``f`` ``t``h``e`` ``input`` ``a``n``d`` ``o``u``t`p`u``t`` ``d``a``t``a`.` `W`i``t``h`` ``t``h``e`` ``d``e``f``a``u``l``t`` ``f``o``r`m`a``t`` ``"NHWC"``,`` ``t``h``e`` ``d``a``t``a`` ``i``s`` ``s``t``o``r``e``d`` ``i``n`` ``t``h``e`` ``o``r``d``e``r`` ``o``f`:` `[`b``a``t``c``h``,`` ``i``n``_``h``e``i``g``h``t``,`` ``i``n``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s`].` `A`l``t``e``r``n``a``t``i`v`e``l`y`,`` ``t``h``e`` ``f``o``r`m`a``t`` ``c``o``u``l``d`` ``b``e`` `"NCHW"`,`` ``t``h``e`` ``d``a``t``a`` ``s``t``o``r``a``g``e`` ``o``r``d``e``r`` ``o``f`:` `[`b``a``t``c``h``,`` ``i``n``_``c``h``a``n``n``e``l``s``,`` ``i``n``_``h``e``i``g``h``t``,`` ``i``n``_``w``i``d``t``h`].
- `d``i``l``a``t``i``o``n``s`:` `A`n`` ``o`p`t``i``o``n``a``l`` ``l``i``s``t`` ``o``f`` ``i``n``t``s`.` `D`e``f``a``u``l``t``s`` ``t``o`` `[`1``,`` ``1``,`` ``1``,`` ``1`].` ``1`-D` ``t``e``n``s``o``r`` ``o``f`` ``l``e``n``g``t``h`` `4.` `T`h``e`` ``d``i``l``a``t``i``o``n`` ``f``a``c``t``o``r`` ``f``o``r`` ``e``a``c``h`` ``d``i`m`e``n``s``i``o``n`` ``o``f`` ``input`.` `I`f`` ``s``e``t`` ``t``o`` `k` `>` ``1``,`` ``t``h``e``r``e`` ``w``i``l``l`` ``b``e`` `k-`1`` ``s`k`i`pp`e``d`` ``c``e``l``l``s`` ``b``e``t``w``e``e``n`` ``e``a``c``h`` ``filter`` ``e``l``e`m`e``n``t`` ``o``n`` ``t``h``a``t`` ``d``i`m`e``n``s``i``o``n`.` `T`h``e`` ``d``i`m`e``n``s``i``o``n`` ``o``r``d``e``r`` ``i``s`` ``d``e``t``e``r`m`i``n``e``d`` ``b`y` ``t``h``e`` `v`a``l``u``e`` ``o``f`` ``d``a``t``a``_``f``o``r`m`a``t``,`` ``s``e``e`` ``a``b``o`v`e`` ``f``o``r`` ``d``e``t``a``i``l``s`.` `D`i``l``a``t``i``o``n``s`` ``i``n`` ``t``h``e`` ``b``a``t``c``h`` ``a``n``d`` ``d``e`p`t``h`` ``d``i`m`e``n``s``i``o``n``s`` `m`u``s``t`` ``b``e`` ``1`.
- `n``a`m`e`:` `A` ``n``a`m`e`` ``f``o``r`` ``t``h``e`` ``o`p`e``r``a``t``i``o``n`` `(`o`p`t``i``o``n``a``l`).
- `filter``s`:` `A`l``i``a``s`` ``f``o``r`` ``filter`.
#### Returns:

A Tensor. Has the same type as filter.
