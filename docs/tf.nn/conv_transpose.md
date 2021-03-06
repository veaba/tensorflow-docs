The transpose of  `convolution` .

**别名** : [ `tf.compat.v1.nn.conv_transpose` ](/api_docs/python/tf/nn/conv_transpose), [ `tf.compat.v2.nn.conv_transpose` ](/api_docs/python/tf/nn/conv_transpose)

```
 tf.nn.conv_transpose(
    input,
    filters,
    output_shape,
    strides,
    padding='SAME',
    data_format=None,
    dilations=None,
    name=None
)
 
```

This operation is sometimes called "deconvolution" after [DeconvolutionalNetworks](http://www.matthewzeiler.com/pubs/cvpr2010/cvpr2010.pdf), but isactually the transpose (gradient) of  `convolution`  rather than an actualdeconvolution.

#### 参数：
- **`input`** : An N+2 dimensional  `Tensor`  of shape `[batch_size] + input_spatial_shape + [in_channels]`  if data_format doesnot start with "NC" (default), or `[batch_size, in_channels] + input_spatial_shape`  if data_format startswith "NC". It must be one of the following types: `half` ,  `bfloat16` ,  `float32` ,  `float64` .
- **`filters`** : An N+2 dimensional  `Tensor`  with the same type as  `input`  andshape  `spatial_filter_shape + [in_channels, out_channels]` .
- **`output_shape`** : A 1-D  `Tensor`  representing the output shape of thedeconvolution op.
- **`strides`** : An int or list of  `ints`  that has length  `1` ,  `N`  or  `N+2` .  Thestride of the sliding window for each dimension of  `input` . If a singlevalue is given it is replicated in the spatial dimensions. By defaultthe  `N`  and  `C`  dimensions are set to 0. The dimension order is determinedby the value of  `data_format` , see below for details.
- **`padding`** : A string, either  `'VALID'`  or  `'SAME'` . The padding algorithm. Seethe "returns" section of [ `tf.nn.convolution` ](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution) for details.
- **`data_format`** : A string or None.  Specifies whether the channel dimension ofthe  `input`  and output is the last dimension (default, or if  `data_format` does not start with "NC"), or the second dimension (if  `data_format` starts with "NC").  For N=1, the valid values are "NWC" (default) and"NCW".  For N=2, the valid values are "NHWC" (default) and "NCHW".For N=3, the valid values are "NDHWC" (default) and "NCDHW".
- **`dilations`** : An int or list of  `ints`  that has length  `1` ,  `N`  or  `N+2` ,defaults to 1. The dilation factor for each dimension of `input` . If asingle value is given it is replicated in the spatial dimensions. Bydefault the  `N`  and  `C`  dimensions are set to 1. If set to k > 1, therewill be k-1 skipped cells between each filter element on that dimension.The dimension order is determined by the value of  `data_format` , see abovefor details.
- **`name`** : A name for the operation (optional). If not specified "conv_transpose"is used.


#### 返回：
A  `Tensor`  with the same type as  `value` .

