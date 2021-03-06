Depthwise 2-D convolution.

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

Given a 4D input tensor ('NHWC' or 'NCHW' data formats)and a filter tensor of shape `[filter_height, filter_width, in_channels, channel_multiplier]` containing  `in_channels`  convolutional filters of depth 1,  `depthwise_conv2d` applies a different filter to each input channel (expanding from 1 channelto  `channel_multiplier`  channels for each), then concatenates the resultstogether.  The output has  `in_channels * channel_multiplier`  channels.

In detail, with the default NHWC format,

```
 output[b, i, j, k * channel_multiplier + q] = sum_{di, dj}
     filter[di, dj, k, q] * input[b, strides[1] * i + rate[0] * di,
                                     strides[2] * j + rate[1] * dj, k]
 
```

Must have  `strides[0] = strides[3] = 1` .  For the most common case of thesame horizontal and vertical strides,  `strides = [1, stride, stride, 1]` .If any value in  `rate`  is greater than 1, we perform atrous depthwiseconvolution, in which case all values in the  `strides`  tensor must be equalto 1.

#### 参数：
- **`input`** : 4-D with shape according to  `data_format` .
- **`filter`** : 4-D with shape `[filter_height, filter_width, in_channels, channel_multiplier]` .
- **`strides`** : 1-D of size 4.  The stride of the sliding window for eachdimension of  `input` .
- **`padding`** : A string, either  `'VALID'`  or  `'SAME'` . The padding algorithm.See the "returns" section of [ `tf.nn.convolution` ](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution) for details.
- **`data_format`** : The data format for input. Either "NHWC" (default) or "NCHW".
- **`dilations`** : 1-D of size 2. The dilation rate in which we sample input valuesacross the  `height`  and  `width`  dimensions in atrous convolution. If it isgreater than 1, then all values of strides must be 1.
- **`name`** : A name for this operation (optional).


#### 返回：
A 4-D  `Tensor`  with shape according to  `data_format` .  E.g., for"NHWC" format, shape is `[batch, out_height, out_width, in_channels * channel_multiplier].` 

