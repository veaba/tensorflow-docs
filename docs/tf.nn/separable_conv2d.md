2-D convolution with separable filters.

```
 tf.nn.separable_conv2d(
    input,
    depthwise_filter,
    pointwise_filter,
    strides,
    padding,
    data_format=None,
    dilations=None,
    name=None
)
 
```

Performs a depthwise convolution that acts separately on channels followed bya pointwise convolution that mixes channels.  Note that this is separabilitybetween dimensions  `[1, 2]`  and  `3` , not spatial separability betweendimensions  `1`  and  `2` .

In detail, with the default NHWC format,

```
 output[b, i, j, k] = sum_{di, dj, q, r}
    input[b, strides[1] * i + di, strides[2] * j + dj, q] *
    depthwise_filter[di, dj, q, r] *
    pointwise_filter[0, 0, q * channel_multiplier + r, k]
 
```

 `strides`  controls the strides for the depthwise convolution only, sincethe pointwise convolution has implicit strides of  `[1, 1, 1, 1]` .  Must have `strides[0] = strides[3] = 1` .  For the most common case of the samehorizontal and vertical strides,  `strides = [1, stride, stride, 1]` .If any value in  `rate`  is greater than 1, we perform atrous depthwiseconvolution, in which case all values in the  `strides`  tensor must be equalto 1.

#### Args:
- **`input`** : 4-D  `Tensor`  with shape according to  `data_format` .
- **`depthwise_filter`** : 4-D  `Tensor`  with shape  `[filter_height, filter_width,in_channels, channel_multiplier]` . Contains  `in_channels`  convolutionalfilters of depth 1.
- **`pointwise_filter`** : 4-D  `Tensor`  with shape  `[1, 1, channel_multiplier *in_channels, out_channels]` .  Pointwise filter to mix channels after `depthwise_filter`  has convolved spatially.
- **`strides`** : 1-D of size 4.  The strides for the depthwise convolution for eachdimension of  `input` .
- **`padding`** : A string, either  `'VALID'`  or  `'SAME'` .  The padding algorithm. Seethe "returns" section of [ `tf.nn.convolution` ](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution) for details.
- **`data_format`** : The data format for input. Either "NHWC" (default) or "NCHW".
- **`dilations`** : 1-D of size 2. The dilation rate in which we sample input valuesacross the  `height`  and  `width`  dimensions in atrous convolution. If it isgreater than 1, then all values of strides must be 1.
- **`name`** : A name for this operation (optional).


#### Returns:
A 4-D  `Tensor`  with shape according to 'data_format'. For  example, with data_format="NHWC", shape is [batch, out_height,  out_width, out_channels].

