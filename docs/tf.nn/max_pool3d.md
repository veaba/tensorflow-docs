对输入执行最大池。

**别名** : [ `tf.compat.v1.nn.max_pool3d` ](/api_docs/python/tf/nn/max_pool3d), [ `tf.compat.v2.nn.max_pool3d` ](/api_docs/python/tf/nn/max_pool3d)

```
 tf.nn.max_pool3d(
    input,
    ksize,
    strides,
    padding,
    data_format='NDHWC',
    name=None
)
 
```

#### 参数：
- **`input`** : A 5-D  `Tensor`  of the format specified by  `data_format` .
- **`ksize`** : An int or list of  `ints`  that has length  `1` ,  `3`  or  `5` . The size ofthe window for each dimension of the input tensor.
- **`strides`** : An int or list of  `ints`  that has length  `1` ,  `3`  or  `5` . Thestride of the sliding window for each dimension of the input tensor.
- **`padding`** : A string, either  `'VALID'`  or  `'SAME'` . The padding algorithm. Seethe "returns" section of [ `tf.nn.convolution` ](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution) for details.
- **`data_format`** : An optional string from: "NDHWC", "NCDHW". Defaults to "NDHWC".The data format of the input and output data. With the default format"NDHWC", the data is stored in the order of: [batch, in_depth, in_height,in_width, in_channels]. Alternatively, the format could be "NCDHW", thedata storage order is: [batch, in_channels, in_depth, in_height,in_width].
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of format specified by  `data_format` .The max pooled output tensor.

