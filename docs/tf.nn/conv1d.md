

Computes a 1-D convolution given 3-D input and filter tensors.

```
 tf.nn.conv1d(
    input,
    filters,
    stride,
    padding,
    data_format='NWC',
    dilations=None,
    name=None
)
 
```

Given an input tensor of shape  [batch, in_width, in_channels]if data_format is "NWC", or  [batch, in_channels, in_width]if data_format is "NCW",and a filter / kernel tensor of shape[filter_width, in_channels, out_channels], this op reshapesthe arguments to pass them to conv2d to perform the equivalentconvolution operation.

Internally, this op reshapes the input tensors and invokes [ `tf.nn.conv2d` ](https://tensorflow.google.cn/api_docs/python/tf/nn/conv2d).For example, if  `data_format`  does not start with "NC", a tensor of shape  [batch, in_width, in_channels]is reshaped to  [batch, 1, in_width, in_channels],and the filter is reshaped to  [1, filter_width, in_channels, out_channels].The result is then reshaped back to  [batch, out_width, out_channels](where out_width is a function of the stride and padding as in conv2d) andreturned to the caller.

#### 参数：
- **`input`** : A 3D  `Tensor` .  Must be of type  `float16` ,  `float32` , or  `float64` .
- **`filters`** : A 3D  `Tensor` .  Must have the same type as  `input` .
- **`stride`** : An int or list of  `ints`  that has length  `1`  or  `3` .  The number ofentries by which the filter is moved right at each step.
- **`padding`** : 'SAME' or 'VALID'
- **`data_format`** : An optional  `string`  from  `"NWC", "NCW"` .  Defaults to  `"NWC"` ,the data is stored in the order of [batch, in_width, in_channels].  The `"NCW"`  format stores data as [batch, in_channels, in_width].
- **`dilations`** : An int or list of  `ints`  that has length  `1`  or  `3`  whichdefaults to 1. The dilation factor for each dimension of input. If set tok > 1, there will be k-1 skipped cells between each filter element on thatdimension. Dilations in the batch and depth dimensions must be 1.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` .  Has the same type as input.

#### 加薪：
- **`ValueError`** : if  `data_format`  is invalid.
