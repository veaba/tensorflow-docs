对输入执行最大池。

**别名** : [ `tf.compat.v1.nn.max_pool_v2` ](/api_docs/python/tf/nn/max_pool), [ `tf.compat.v2.nn.max_pool` ](/api_docs/python/tf/nn/max_pool)

```
 tf.nn.max_pool(
    input,
    ksize,
    strides,
    padding,
    data_format=None,
    name=None
)
 
```

#### 参数：
- **`input`** :  Tensor of rank N+2, of shape  `[batch_size] + input_spatial_shape +[num_channels]`  if  `data_format`  does not start with "NC" (default), or `[batch_size, num_channels] + input_spatial_shape`  if data_format startswith "NC". Pooling happens over the spatial dimensions only.
- **`ksize`** : An int or list of  `ints`  that has length  `1` ,  `N`  or  `N+2` . The sizeof the window for each dimension of the input tensor.
- **`strides`** : An int or list of  `ints`  that has length  `1` ,  `N`  or  `N+2` . Thestride of the sliding window for each dimension of the input tensor.
- **`padding`** : A string, either  `'VALID'`  or  `'SAME'` . The padding algorithm. Seethe "returns" section of [ `tf.nn.convolution` ](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution) for details.
- **`data_format`** : A string. Specifies the channel dimension. For N=1 it can beeither "NWC" (default) or "NCW", for N=2 it can be either "NHWC" (default)or "NCHW" and for N=3 either "NDHWC" (default) or "NCDHW".
- **`name`** : Optional name for the operation.


#### 返回：
A  `Tensor`  of format specified by  `data_format` .The max pooled output tensor.

