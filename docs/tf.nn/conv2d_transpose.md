The transpose of  `conv2d` .

```
 tf.nn.conv2d_transpose(
    input,
    filters,
    output_shape,
    strides,
    padding='SAME',
    data_format='NHWC',
    dilations=None,
    name=None
)
 
```

This operation is sometimes called "deconvolution" after [DeconvolutionalNetworks](http://www.matthewzeiler.com/pubs/cvpr2010/cvpr2010.pdf), but isactually the transpose (gradient) of  `conv2d`  rather than an actualdeconvolution.

#### 参数：
- **`input`** : A 4-D  `Tensor`  of type  `float`  and shape  `[batch, height, width,in_channels]`  for  `NHWC`  data format or  `[batch, in_channels, height,width]`  for  `NCHW`  data format.
- **`filters`** : A 4-D  `Tensor`  with the same type as  `input`  and shape  `[height,width, output_channels, in_channels]` .   `filter` 's  `in_channels`  dimensionmust match that of  `input` .
- **`output_shape`** : A 1-D  `Tensor`  representing the output shape of thedeconvolution op.
- **`strides`** : An int or list of  `ints`  that has length  `1` ,  `2`  or  `4` .  Thestride of the sliding window for each dimension of  `input` . If a singlevalue is given it is replicated in the  `H`  and  `W`  dimension. By defaultthe  `N`  and  `C`  dimensions are set to 0. The dimension order is determinedby the value of  `data_format` , see below for details.
- **`padding`** : A string, either  `'VALID'`  or  `'SAME'` . The padding algorithm. Seethe "returns" section of [ `tf.nn.convolution` ](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution) for details.
- **`data_format`** : A string. 'NHWC' and 'NCHW' are supported.
- **`dilations`** : An int or list of  `ints`  that has length  `1` ,  `2`  or  `4` ,defaults to 1. The dilation factor for each dimension of `input` . If asingle value is given it is replicated in the  `H`  and  `W`  dimension. Bydefault the  `N`  and  `C`  dimensions are set to 1. If set to k > 1, therewill be k-1 skipped cells between each filter element on that dimension.The dimension order is determined by the value of  `data_format` , see abovefor details. Dilations in the batch and depth dimensions if a 4-d tensormust be 1.
- **`name`** : Optional name for the returned tensor.


#### 返回：
A  `Tensor`  with the same type as  `input` .

#### 加薪：
- **`ValueError`** : If input/output depth does not match  `filter` 's shape, or ifpadding is other than  `'VALID'`  or  `'SAME'` .
