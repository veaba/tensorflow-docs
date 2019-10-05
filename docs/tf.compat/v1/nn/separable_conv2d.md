
2-D convolution with separable filters.

```
 tf.compat.v1.nn.separable_conv2d(
    input,
    depthwise_filter,
    pointwise_filter,
    strides,
    padding,
    rate=None,
    name=None,
    data_format=None,
    dilations=None
)
```

Performs a depthwise convolution that acts separately on channels followed by a pointwise convolution that mixes channels. Note that this is separability between dimensions [1, 2] and 3, not spatial separability between dimensions 1 and 2.

In detail, with the default NHWC format,

```
 output[b, i, j, k] = sum_{di, dj, q, r}
    input[b, strides[1] * i + di, strides[2] * j + dj, q] *
    depthwise_filter[di, dj, q, r] *
    pointwise_filter[0, 0, q * channel_multiplier + r, k]
```

strides controls the strides for the depthwise convolution only, since the pointwise convolution has implicit strides of [1, 1, 1, 1]. Must have strides[0] = strides[3] = 1. For the most common case of the same horizontal and vertical strides, strides = [1, stride, stride, 1]. If any value in rate is greater than 1, we perform atrous depthwise convolution, in which case all values in the strides tensor must be equal to 1.
#### Args:
- `input`: 4-D `Tensor` with shape according to `data_format`.
- `depthwise_filter`:` `4-D` ``Tensor`` ``w``i``t``h`` ``s``h``a``p``e`` `[`f``i``l``t``e``r``_``h``e``i``g``h``t``,`` ``f``i``l``t``e``r``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s``,`` ``c``h``a``n``n``e``l``_``m``u``l``t``i``p``l``i``e``r`].` `Co`n``t``a``i``n``s`` ``i``n``_``c``h``a``n``n``e``l``s`` ``c`o`n`vo`l``u``t``i`o`n``a``l`` ``f``i``l``t``e``r``s`` `o`f`` ``d``e``p``t``h`` `1.
- `p``o``i``n``t``w``i``s``e``_``f``i``l``t``e``r`:` `4-D` ``Tensor`` ``w``i``t``h`` ``s``h``a``p``e`` `[`1``,`` ``1``,`` ``c``h``a``n``n``e``l``_``m``u``l``t``i``p``l``i``e``r`` ``*`` ``i``n``_``c``h``a``n``n``e``l``s``,`` ``o``u``t``_``c``h``a``n``n``e``l``s`].` `P`o``i``n``t``w``i``s``e`` ``f``i``l``t``e``r`` ``t``o`` ``m``i`x` ``c``h``a``n``n``e``l``s`` ``a``f``t``e``r`` ``depthwise_filter`` ``h``a``s`` ``c``o``n`v`o``l`v`e``d`` ``s``p``a``t``i``a``l``l`y.
- `s``t``r``i``d``e``s`:` ``1`-D` ``o``f`` ``s``i`z`e`` `4.` `T`h``e`` ``s``t``r``i``d``e``s`` ``f``o``r`` ``t``h``e`` ``d``e``p``t``h``w``i``s``e`` ``c``o``n`v`o``l``u``t``i``o``n`` ``f``o``r`` ``e``a``c``h`` ``d``i``m``e``n``s``i``o``n`` ``o``f`` ``input`.
- `p``a``d``d``i``n``g`:` `A` ``s``t``r``i``n``g``,`` ``e``i``t``h``e``r`` ``'VALID'`` ``o``r`` ``'SAME'`.` `T`h``e`` ``p``a``d``d``i``n``g`` ``a``l``g``o``r``i``t``h``m`.` `S`e``e`` ``t``h``e`` `"`r``e``t``u``r``n``s`"` ``s``e``c``t``i``o``n`` ``o``f`` ``t``f`.`n``n`.`c``o``n`v`o``l``u``t``i``o``n`` ``f``o``r`` ``d``e``t``a``i``l``s`.
- `r``a``t``e`:` ``1`-D` ``o``f`` ``s``i`z`e`` `2.` `T`h``e`` ``d``i``l``a``t``i``o``n`` ``r``a``t``e`` ``i``n`` ``w``h``i``c``h`` ``w``e`` ``s``a``m``p``l``e`` ``input`` `v`a``l``u``e``s`` ``a``c``r``o``s``s`` ``t``h``e`` ``h``e``i``g``h``t`` ``a``n``d`` ``w``i``d``t``h`` ``d``i``m``e``n``s``i``o``n``s`` ``i``n`` ``a``t``r``o``u``s`` ``c``o``n`v`o``l``u``t``i``o``n`.` `I`f`` ``i``t`` ``i``s`` ``g``r``e``a``t``e``r`` ``t``h``a``n`` ``1``,`` ``t``h``e``n`` ``a``l``l`` `v`a``l``u``e``s`` ``o``f`` ``s``t``r``i``d``e``s`` ``m``u``s``t`` `b`e`` ``1`.
- `n``a``m``e`:` `A` ``n``a``m``e`` ``f``o``r`` ``t``h``i``s`` ``o``p``e``r``a``t``i``o``n`` `(`o``p``t``i``o``n``a``l`).
- `data_format`:` `T`h``e`` ``d``a``t``a`` ``f``o``r``m``a``t`` ``f``o``r`` ``input`.` `E`i``t``h``e``r`` `"NHWC"` `(`d``e``f``a``u``l``t`)` ``o``r`` `"NCHW".
- `d``i``l``a``t``i``o``n``s`:` `A`l``i``a``s`` ``o``f`` ``r``a``t``e`.
#### Returns:

A 4-D Tensor with shape according to 'data_format'. For example, with data_format="NHWC", shape is [batch, out_height, out_width, out_channels].
