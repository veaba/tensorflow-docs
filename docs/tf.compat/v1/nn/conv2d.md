Computes a 2-D convolution given 4-D  `input`  and  `filter`  tensors.

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

Given an input tensor of shape  `[batch, in_height, in_width, in_channels]` and a filter / kernel tensor of shape `[filter_height, filter_width, in_channels, out_channels]` , this opperforms the following:

1. Flattens the filter to a 2-D matrix with shape `[filter_height * filter_width * in_channels, output_channels]` .
2. Extracts image patches from the input tensor to form a *virtual*tensor of shape  `[batch, out_height, out_width,filter_height * filter_width * in_channels]` .
3. For each patch, right-multiplies the filter matrix and the image patchvector.
In detail, with the default NHWC format,

```
 output[b, i, j, k] =
    sum_{di, dj, q} input[b, strides[1] * i + di, strides[2] * j + dj, q]
                    * filter[di, dj, q, k]
 
```

Must have  `strides[0] = strides[3] = 1` .  For the most common case of the samehorizontal and vertices strides,  `strides = [1, stride, stride, 1]` .

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types: `half` ,  `bfloat16` ,  `float32` ,  `float64` .A 4-D tensor. The dimension order is interpreted according to the valueof  `data_format` , see below for details.
- **`filter`** : A  `Tensor` . Must have the same type as  `input` .A 4-D tensor of shape `[filter_height, filter_width, in_channels, out_channels]` 
- **`strides`** : An int or list of  `ints`  that has length  `1` ,  `2`  or  `4` .  Thestride of the sliding window for each dimension of  `input` . If a singlevalue is given it is replicated in the  `H`  and  `W`  dimension. By defaultthe  `N`  and  `C`  dimensions are set to 1. The dimension order is determinedby the value of  `data_format` , see below for details.
- **`padding`** : Either the  `string`   `"SAME"`  or  `"VALID"`  indicating the type ofpadding algorithm to use, or a list indicating the explicit paddings atthe start and end of each dimension. When explicit padding is used anddata_format is  `"NHWC"` , this should be in the form  `[[0, 0], [pad_top,pad_bottom], [pad_left, pad_right], [0, 0]]` . When explicit padding usedand data_format is  `"NCHW"` , this should be in the form  `[[0, 0], [0, 0],[pad_top, pad_bottom], [pad_left, pad_right]]` .
- **`use_cudnn_on_gpu`** : An optional  `bool` . Defaults to  `True` .
- **`data_format`** : An optional  `string`  from:  `"NHWC", "NCHW"` .Defaults to  `"NHWC"` .Specify the data format of the input and output data. With thedefault format "NHWC", the data is stored in the order of:  [batch, height, width, channels].Alternatively, the format could be "NCHW", the data storage order of:  [batch, channels, height, width].
- **`dilations`** : An int or list of  `ints`  that has length  `1` ,  `2`  or  `4` ,defaults to 1. The dilation factor for each dimension of `input` . If asingle value is given it is replicated in the  `H`  and  `W`  dimension. Bydefault the  `N`  and  `C`  dimensions are set to 1. If set to k > 1, therewill be k-1 skipped cells between each filter element on that dimension.The dimension order is determined by the value of  `data_format` , see abovefor details. Dilations in the batch and depth dimensions if a 4-d tensormust be 1.
- **`name`** : A name for the operation (optional).
- **`filters`** : Alias for filter.


#### 返回：
A  `Tensor` . Has the same type as  `input` .

