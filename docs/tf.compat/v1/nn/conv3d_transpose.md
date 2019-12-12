The transpose of  `conv3d` .

```
 tf.compat.v1.nn.conv3d_transpose(
    value,
    filter=None,
    output_shape=None,
    strides=None,
    padding='SAME',
    data_format='NDHWC',
    name=None,
    input=None,
    filters=None,
    dilations=None
)
 
```

This operation is sometimes called "deconvolution" after [DeconvolutionalNetworks](https://www.matthewzeiler.com/mattzeiler/deconvolutionalnetworks.pdf),but is really the transpose (gradient) of  `conv3d`  rather than an actualdeconvolution.

#### 参数：
- **`value`** : A 5-D  `Tensor`  of type  `float`  and shape `[batch, depth, height, width, in_channels]` .
- **`filter`** : A 5-D  `Tensor`  with the same type as  `value`  and shape `[depth, height, width, output_channels, in_channels]` .   `filter` 's `in_channels`  dimension must match that of  `value` .
- **`output_shape`** : A 1-D  `Tensor`  representing the output shape of thedeconvolution op.
- **`strides`** : A list of ints. The stride of the sliding window for eachdimension of the input tensor.
- **`padding`** : A string, either  `'VALID'`  or  `'SAME'` . The padding algorithm.See the "returns" section of [ `tf.nn.convolution` ](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution) for details.
- **`data_format`** : A string, either  `'NDHWC'`  or  `'NCDHW` ' specifying the layoutof the input and output tensors. Defaults to  `'NDHWC'` .
- **`name`** : Optional name for the returned tensor.
- **`input`** : Alias of value.
- **`filters`** : Alias of filter.
- **`dilations`** : An int or list of  `ints`  that has length  `1` ,  `3`  or  `5` ,defaults to 1. The dilation factor for each dimension of `input` . If asingle value is given it is replicated in the  `D` ,  `H`  and  `W`  dimension.By default the  `N`  and  `C`  dimensions are set to 1. If set to k > 1, therewill be k-1 skipped cells between each filter element on that dimension.The dimension order is determined by the value of  `data_format` , see abovefor details. Dilations in the batch and depth dimensions if a 5-d tensormust be 1.


#### 返回：
A  `Tensor`  with the same type as  `value` .

#### 加薪：
- **`ValueError`** : If input/output depth does not match  `filter` 's shape, or ifpadding is other than  `'VALID'`  or  `'SAME'` .
