
Computes a 2-D convolution given 4-D input and filter tensors.

```
 tf.compat.v1.nn.conv2d(
    input,
    filter=None,
    strides=None,
    padding=None,
    use_cudnn_on_gpu=True,
    data_format='NHWC',
    dilations=[1, 1, 1, 1],
    name=None,
    filters=None
)
```

Given an input tensor of shape [batch, in_height, in_width, in_channels] and a filter / kernel tensor of shape [filter_height, filter_width, in_channels, out_channels], this op performs the following:

In detail, with the default NHWC format,

```
 output[b, i, j, k] =
    sum_{di, dj, q} input[b, strides[1] * i + di, strides[2] * j + dj, q]
                    * filter[di, dj, q, k]
```

Must have strides[0] = strides[3] = 1. For the most common case of the same horizontal and vertices strides, strides = [1, stride, stride, 1].
#### Args:
- `input`: A `Tensor`. Must be one of the following types: `half`, `bfloat16`, `float32`, `float64`. A 4-D tensor. The dimension order is interpreted according to the value of `data_format`, see below for details.
- `filter`:` `A` ``Tensor`.` `M`u``s``t`` ``h``a`v`e`` ``t``h``e`` ``s``a`m`e`` ``t`yp`e`` ``a``s`` ``input`.` `A` `4-D` ``t``e``n``s``o``r`` ``o``f`` ``s``h``a`p`e`` `[`filter``_``h``e``i``g``h``t``,`` ``filter``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s``,`` ``o``u``t``_``c``h``a``n``n``e``l``s`]
- `s``t``r``i``d``e``s`:` `A`n`` ``i``n``t`` ``o``r`` ``l``i``s``t`` ``o``f`` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``1``,`` ``2`` ``o``r`` ``4`.` `T`h``e`` ``s``t``r``i``d``e`` ``o``f`` ``t``h``e`` ``s``l``i``d``i``n``g`` ``w``i``n``d``o``w`` ``f``o``r`` ``e``a``c``h`` ``d``i`m`e``n``s``i``o``n`` ``o``f`` ``input`.` `I`f`` ``a`` ``s``i``n``g``l``e`` `v`a``l``u``e`` ``i``s`` ``g``i`v`e``n`` ``i``t`` ``i``s`` ``r``e`p`l``i``c``a``t``e``d`` ``i``n`` ``t``h``e`` ``H`` ``a``n``d`` ``W`` ``d``i`m`e``n``s``i``o``n`.` `By` ``d``e``f``a``u``l``t`` ``t``h``e`` ``N`` ``a``n``d`` ``C`` ``d``i`m`e``n``s``i``o``n``s`` ``a``r``e`` ``s``e``t`` ``t``o`` ``1`.` `T`h``e`` ``d``i`m`e``n``s``i``o``n`` ``o``r``d``e``r`` ``i``s`` ``d``e``t``e``r`m`i``n``e``d`` `by` ``t``h``e`` `v`a``l``u``e`` ``o``f`` ``data_format``,`` ``s``e``e`` `b`e``l``o``w`` ``f``o``r`` ``d``e``t``a``i``l``s`.
- `padding`:` `E`i``t``h``e``r`` ``t``h``e`` ``s``t``r``i``n``g`` ``"SAME"`` ``o``r`` ``"VALID"`` ``i``n``d``i``c``a``t``i``n``g`` ``t``h``e`` ``t`yp`e`` ``o``f`` ``padding`` ``a``l``g``o``r``i``t``h`m` ``t``o`` ``u``s``e``,`` ``o``r`` ``a`` ``l``i``s``t`` ``i``n``d``i``c``a``t``i``n``g`` ``t``h``e`` ``e`xp`l``i``c``i``t`` ``padding``s`` ``a``t`` ``t``h``e`` ``s``t``a``r``t`` ``a``n``d`` ``e``n``d`` ``o``f`` ``e``a``c``h`` ``d``i`m`e``n``s``i``o``n`.` ``W``h``e``n`` ``e`xp`l``i``c``i``t`` ``padding`` ``i``s`` ``u``s``e``d`` ``a``n``d`` ``data_format`` ``i``s`` ``"NHWC"``,`` ``t``h``i``s`` ``s``h``o``u``l``d`` `b`e`` ``i``n`` ``t``h``e`` ``f``o``r`m` `[[0`,`` `0]`,`` `[p`a``d``_``t``o`p`,`` `p`a``d``_`b`o``t``t``o`m]`,`` `[p`a``d``_``l``e``f``t``,`` `p`a``d``_``r``i``g``h``t`]`,`` `[0`,`` `0]].` ``W``h``e``n`` ``e`xp`l``i``c``i``t`` ``padding`` ``u``s``e``d`` ``a``n``d`` ``data_format`` ``i``s`` ``"NCHW"``,`` ``t``h``i``s`` ``s``h``o``u``l``d`` `b`e`` ``i``n`` ``t``h``e`` ``f``o``r`m` `[[0`,`` `0]`,`` `[0`,`` `0]`,`` `[p`a``d``_``t``o`p`,`` `p`a``d``_`b`o``t``t``o`m]`,`` `[p`a``d``_``l``e``f``t``,`` `p`a``d``_``r``i``g``h``t`]].
- `u``s``e``_``c``u``d``n``n``_``o``n``_``g`p`u`:` `A`n`` ``o`p`t``i``o``n``a``l`` ``bool`.` `D`e``f``a``u``l``t``s`` ``t``o`` ``True`.
- `data_format`:` `A`n`` ``o`p`t``i``o``n``a``l`` ``s``t``r``i``n``g`` ``f``r``o`m:` ``"NHWC"``,`` ``"NCHW"`.` `D`e``f``a``u``l``t``s`` ``t``o`` ``"NHWC"`.` `Sp`e``c``i``f`y` ``t``h``e`` ``d``a``t``a`` ``f``o``r`m`a``t`` ``o``f`` ``t``h``e`` ``input`` ``a``n``d`` ``o``u``t`p`u``t`` ``d``a``t``a`.` ``W``i``t``h`` ``t``h``e`` ``d``e``f``a``u``l``t`` ``f``o``r`m`a``t`` ``"NHWC"``,`` ``t``h``e`` ``d``a``t``a`` ``i``s`` ``s``t``o``r``e``d`` ``i``n`` ``t``h``e`` ``o``r``d``e``r`` ``o``f`:` `[b`a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].` `A`l``t``e``r``n``a``t``i`v`e``l`y`,`` ``t``h``e`` ``f``o``r`m`a``t`` ``c``o``u``l``d`` `b`e`` ``"NCHW"``,`` ``t``h``e`` ``d``a``t``a`` ``s``t``o``r``a``g``e`` ``o``r``d``e``r`` ``o``f`:` `[b`a``t``c``h``,`` ``c``h``a``n``n``e``l``s``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h`].
- `d``i``l``a``t``i``o``n``s`:` `A`n`` ``i``n``t`` ``o``r`` ``l``i``s``t`` ``o``f`` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``1``,`` ``2`` ``o``r`` ``4``,`` ``d``e``f``a``u``l``t``s`` ``t``o`` ``1`.` `T`h``e`` ``d``i``l``a``t``i``o``n`` ``f``a``c``t``o``r`` ``f``o``r`` ``e``a``c``h`` ``d``i`m`e``n``s``i``o``n`` ``o``f``input`.` `I`f`` ``a`` ``s``i``n``g``l``e`` `v`a``l``u``e`` ``i``s`` ``g``i`v`e``n`` ``i``t`` ``i``s`` ``r``e`p`l``i``c``a``t``e``d`` ``i``n`` ``t``h``e`` ``H`` ``a``n``d`` ``W`` ``d``i`m`e``n``s``i``o``n`.` `By` ``d``e``f``a``u``l``t`` ``t``h``e`` ``N`` ``a``n``d`` ``C`` ``d``i`m`e``n``s``i``o``n``s`` ``a``r``e`` ``s``e``t`` ``t``o`` ``1`.` `I`f`` ``s``e``t`` ``t``o`` `k` `>` ``1``,`` ``t``h``e``r``e`` ``w``i``l``l`` `b`e`` `k-`1`` ``s`k`i`pp`e``d`` ``c``e``l``l``s`` `b`e``t``w``e``e``n`` ``e``a``c``h`` ``filter`` ``e``l``e`m`e``n``t`` ``o``n`` ``t``h``a``t`` ``d``i`m`e``n``s``i``o``n`.` `T`h``e`` ``d``i`m`e``n``s``i``o``n`` ``o``r``d``e``r`` ``i``s`` ``d``e``t``e``r`m`i``n``e``d`` `by` ``t``h``e`` `v`a``l``u``e`` ``o``f`` ``data_format``,`` ``s``e``e`` ``a`b`o`v`e`` ``f``o``r`` ``d``e``t``a``i``l``s`.` `D`i``l``a``t``i``o``n``s`` ``i``n`` ``t``h``e`` `b`a``t``c``h`` ``a``n``d`` ``d``e`p`t``h`` ``d``i`m`e``n``s``i``o``n``s`` ``i``f`` ``a`` ``4`-`d`` ``t``e``n``s``o``r`` `m`u``s``t`` `b`e`` ``1`.
- `n``a`m`e`:` `A` ``n``a`m`e`` ``f``o``r`` ``t``h``e`` ``o`p`e``r``a``t``i``o``n`` `(`o`p`t``i``o``n``a``l`).
- `filter``s`:` `A`l``i``a``s`` ``f``o``r`` ``filter`.
#### Returns:

A Tensor. Has the same type as input.
