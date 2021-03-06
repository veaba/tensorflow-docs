计算与滤波器相关的卷积梯度。

```
 tf.compat.v1.nn.conv2d_backprop_filter(
    input,
    filter_sizes,
    out_backprop,
    strides,
    padding,
    use_cudnn_on_gpu=True,
    data_format='NHWC',
    dilations=[1, 1, 1, 1],
    name=None
)
 
```

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types: `half` ,  `bfloat16` ,  `float32` ,  `float64` .4-D with shape  `[batch, in_height, in_width, in_channels]` .
- **`filter_sizes`** : A  `Tensor`  of type  `int32` .An integer vector representing the tensor shape of  `filter` ,where  `filter`  is a 4-D `[filter_height, filter_width, in_channels, out_channels]`  tensor.
- **`out_backprop`** : A  `Tensor` . Must have the same type as  `input` .4-D with shape  `[batch, out_height, out_width, out_channels]` .Gradients w.r.t. the output of the convolution.
- **`strides`** : A list of  `ints` .The stride of the sliding window for each dimension of the inputof the convolution. Must be in the same order as the dimension specifiedwith format.
- **`padding`** : Either the  `string` "SAME" `or` "VALID" `indicating the type ofpadding algorithm to use, or a list indicating the explicit paddings atthe start and end of each dimension. When explicit padding is used anddata_format is` "NHWC" `, this should be in the form` [[0, 0], [pad_top,pad_bottom], [pad_left, pad_right], [0, 0]] `. When explicit padding usedand data_format is` "NCHW" `, this should be in the form` [[0, 0], [0, 0],[pad_top, pad_bottom], [pad_left, pad_right]]`.
- **`use_cudnn_on_gpu`** : An optional  `bool` . Defaults to  `True` .
- **`data_format`** : An optional  `string`  from:  `"NHWC", "NCHW"` .Defaults to  `"NHWC"` .Specify the data format of the input and output data. With thedefault format "NHWC", the data is stored in the order of:  [batch, in_height, in_width, in_channels].Alternatively, the format could be "NCHW", the data storage order of:  [batch, in_channels, in_height, in_width].
- **`dilations`** : An optional list of  `ints` . Defaults to  `[1, 1, 1, 1]` .1-D tensor of length 4.  The dilation factor for each dimension of `input` . If set to k > 1, there will be k-1 skipped cells between eachfilter element on that dimension. The dimension order is determined bythe value of  `data_format` , see above for details. Dilations in the batchand depth dimensions must be 1.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

