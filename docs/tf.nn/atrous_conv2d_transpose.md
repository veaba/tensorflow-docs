The transpose of  `atrous_conv2d` .

**别名** : [ `tf.compat.v1.nn.atrous_conv2d_transpose` ](/api_docs/python/tf/nn/atrous_conv2d_transpose), [ `tf.compat.v2.nn.atrous_conv2d_transpose` ](/api_docs/python/tf/nn/atrous_conv2d_transpose)

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

This operation is sometimes called "deconvolution" after [DeconvolutionalNetworks](https://www.matthewzeiler.com/mattzeiler/deconvolutionalnetworks.pdf),but is really the transpose (gradient) of  `atrous_conv2d`  rather than anactual deconvolution.

#### 参数：
- **`value`** : A 4-D  `Tensor`  of type  `float` . It needs to be in the default  `NHWC` format. Its shape is  `[batch, in_height, in_width, in_channels]` .
- **`filters`** : A 4-D  `Tensor`  with the same type as  `value`  and shape `[filter_height, filter_width, out_channels, in_channels]` .  `filters` ' `in_channels`  dimension must match that of  `value` . Atrous convolution isequivalent to standard convolution with upsampled filters with effectiveheight  `filter_height + (filter_height - 1) * (rate - 1)`  and effectivewidth  `filter_width + (filter_width - 1) * (rate - 1)` , produced byinserting  `rate - 1`  zeros along consecutive elements across the `filters` ' spatial dimensions.
- **`output_shape`** : A 1-D  `Tensor`  of shape representing the output shape of thedeconvolution op.
- **`rate`** : A positive int32. The stride with which we sample input values acrossthe  `height`  and  `width`  dimensions. Equivalently, the rate by which weupsample the filter values by inserting zeros across the  `height`  and `width`  dimensions. In the literature, the same parameter is sometimescalled  `input stride`  or  `dilation` .
- **`padding`** : A string, either  `'VALID'`  or  `'SAME'` . The padding algorithm.
- **`name`** : Optional name for the returned tensor.


#### 返回：
A  `Tensor`  with the same type as  `value` .

#### 加薪：
- **`ValueError`** : If input/output depth does not match  `filters` ' shape, or ifpadding is other than  `'VALID'`  or  `'SAME'` , or if the  `rate`  is lessthan one, or if the output_shape is not a tensor with 4 elements.
