Computes the gradients of 3-D convolution with respect to the filter.

```
 tf.compat.v1.nn.conv3d_backprop_filter(
    input,
    filter_sizes,
    out_backprop,
    strides,
    padding,
    data_format='NDHWC',
    dilations=[1, 1, 1, 1, 1],
    name=None
)
 
```

#### Args:
- **`input`** : A  `Tensor` . Must be one of the following types:  `half` ,  `bfloat16` ,  `float32` ,  `float64` .Shape  `[batch, depth, rows, cols, in_channels]` .
- **`filter_sizes`** : A  `Tensor`  of type  `int32` .An integer vector representing the tensor shape of  `filter` ,where  `filter`  is a 5-D `[filter_depth, filter_height, filter_width, in_channels, out_channels]` tensor.
- **`out_backprop`** : A  `Tensor` . Must have the same type as  `input` .Backprop signal of shape  `[batch, out_depth, out_rows, out_cols,out_channels]` .
- **`strides`** : A list of  `ints`  that has length  `>= 5` .1-D tensor of length 5. The stride of the sliding window for eachdimension of  `input` . Must have  `strides[0] = strides[4] = 1` .
- **`padding`** : A  `string`  from:  `"SAME", "VALID"` .The type of padding algorithm to use.
- **`data_format`** : An optional  `string`  from:  `"NDHWC", "NCDHW"` . Defaults to  `"NDHWC"` .The data format of the input and output data. With thedefault format "NDHWC", the data is stored in the order of:  [batch, in_depth, in_height, in_width, in_channels].Alternatively, the format could be "NCDHW", the data storage order is:  [batch, in_channels, in_depth, in_height, in_width].
- **`dilations`** : An optional list of  `ints` . Defaults to  `[1, 1, 1, 1, 1]` .1-D tensor of length 5.  The dilation factor for each dimension of `input` . If set to k > 1, there will be k-1 skipped cells between eachfilter element on that dimension. The dimension order is determined by thevalue of  `data_format` , see above for details. Dilations in the batch anddepth dimensions must be 1.
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor` . Has the same type as  `input` .

