
Depthwise 2-D convolution.
### Aliases:
- `tf.compat.v2.nn.depthwise_conv2d`

```
 tf.nn.depthwise_conv2d(
    input,
    filter,
    strides,
    padding,
    data_format=None,
    dilations=None,
    name=None
)
```

Given a 4D input tensor ('NHWC' or 'NCHW' data formats) and a filter tensor of shape [filter_height, filter_width, in_channels, channel_multiplier] containing in_channels convolutional filters of depth 1, depthwise_conv2d applies a different filter to each input channel (expanding from 1 channel to channel_multiplier channels for each), then concatenates the results together. The output has in_channels * channel_multiplier channels.

In detail, with the default NHWC format,

```
 output[b, i, j, k * channel_multiplier + q] = sum_{di, dj}
     filter[di, dj, k, q] * input[b, strides[1] * i + rate[0] * di,
                                     strides[2] * j + rate[1] * dj, k]
```

Must have strides[0] = strides[3] = 1. For the most common case of the same horizontal and vertical strides, strides = [1, stride, stride, 1]. If any value in rate is greater than 1, we perform atrous depthwise convolution, in which case all values in the strides tensor must be equal to 1.
#### Args:
- `input`: 4-D with shape according to `data_format`.
- `filter`:` `4-D` ``w``i``t``h`` ``s``h``a``p``e`` `[`filter``_``h``e``i``g``h``t``,`` ``filter``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s``,`` ``c``h``a``n``n``e``l``_``m``u``l``t``i``p``l``i``e``r`].
- `s``t``r``i``d``e``s`:` `1-D` `o`f`` ``s``i`z`e`` `4.` `T`h``e`` ``s``t``r``i``d``e`` `o`f`` ``t``h``e`` ``s``l``i``d``i``n``g`` ``w``i``n``d`o`w`` ``f`o`r`` ``e``a``c``h`` ``d``i``m``e``n``s``i`o`n`` `o`f`` ``input`.
- `p``a``d``d``i``n``g`:` `A` ``s``t``r``i``n``g``,`` ``e``i``t``h``e``r`` ``'VALID'`` `o`r`` ``'SAME'`.` `T`h``e`` ``p``a``d``d``i``n``g`` ``a``l``g`o`r``i``t``h``m`.` `S`e``e`` ``t``h``e`` `"`r``e``t``u``r``n``s`"` ``s``e``c``t``i`o`n`` `o`f`` ``t``f`.`n``n`.`c`o`n`vo`l``u``t``i`o`n`` ``f`o`r`` ``d``e``t``a``i``l``s`.
- `data_format`:` `T`h``e`` ``d``a``t``a`` ``f`o`r``m``a``t`` ``f`o`r`` ``input`.` `E`i``t``h``e``r`` `"NHWC"` `(`d``e``f``a``u``l``t`)` `o`r`` `"NCHW".
- `d``i``l``a``t``i`o`n``s`:` `1-D` `o`f`` ``s``i`z`e`` `2.` `T`h``e`` ``d``i``l``a``t``i`o`n`` ``r``a``t``e`` ``i``n`` ``w``h``i``c``h`` ``w``e`` ``s``a``m``p``l``e`` ``input`` `v`a``l``u``e``s`` ``a``c``r`o`s``s`` ``t``h``e`` ``h``e``i``g``h``t`` ``a``n``d`` ``w``i``d``t``h`` ``d``i``m``e``n``s``i`o`n``s`` ``i``n`` ``a``t``r`o`u``s`` ``c`o`n`vo`l``u``t``i`o`n`.` `I`f`` ``i``t`` ``i``s`` ``g``r``e``a``t``e``r`` ``t``h``a``n`` `1`,`` ``t``h``e``n`` ``a``l``l`` `v`a``l``u``e``s`` `o`f`` ``s``t``r``i``d``e``s`` ``m``u``s``t`` `b`e`` `1.
- `n``a``m``e`:` `A` ``n``a``m``e`` ``f`o`r`` ``t``h``i``s`` `o`p``e``r``a``t``i`o`n`` `(o`p``t``i`o`n``a``l`).
#### Returns:

A 4-D Tensor with shape according to data_format. E.g., for "NHWC" format, shape is [batch, out_height, out_width, in_channels * channel_multiplier].
