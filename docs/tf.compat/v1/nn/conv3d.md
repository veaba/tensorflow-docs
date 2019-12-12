Computes a 3-D convolution given 5-D  `input`  and  `filter`  tensors.

```
 tf.compat.v1.nn.conv3d(
    input,
    filter=None,
    strides=None,
    padding=None,
    data_format='NDHWC',
    dilations=[1, 1, 1, 1, 1],
    name=None,
    filters=None
)
 
```

In signal processing, cross-correlation is a measure of similarity oftwo waveforms as a function of a time-lag applied to one of them. Thisis also known as a sliding dot product or sliding inner-product.

Our Conv3D implements a form of cross-correlation.

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `half` ,  `bfloat16` ,  `float32` ,  `float64` .Shape  `[batch, in_depth, in_height, in_width, in_channels]` .
- **`filter`** : A  `Tensor` . Must have the same type as  `input` .Shape  `[filter_depth, filter_height, filter_width, in_channels,out_channels]` .  `in_channels`  must match between  `input`  and  `filter` .
- **`strides`** : A list of  `ints`  that has length  `>= 5` .1-D tensor of length 5. The stride of the sliding window for eachdimension of  `input` . Must have  `strides[0] = strides[4] = 1` .
- **`padding`** : A  `string`  from:  `"SAME", "VALID"` .The type of padding algorithm to use.
- **`data_format`** : An optional  `string`  from:  `"NDHWC", "NCDHW"` . Defaults to  `"NDHWC"` .The data format of the input and output data. With thedefault format "NDHWC", the data is stored in the order of:  [batch, in_depth, in_height, in_width, in_channels].Alternatively, the format could be "NCDHW", the data storage order is:  [batch, in_channels, in_depth, in_height, in_width].
- **`dilations`** : An optional list of  `ints` . Defaults to  `[1, 1, 1, 1, 1]` .1-D tensor of length 5.  The dilation factor for each dimension of `input` . If set to k > 1, there will be k-1 skipped cells between eachfilter element on that dimension. The dimension order is determined by thevalue of  `data_format` , see above for details. Dilations in the batch anddepth dimensions must be 1.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

