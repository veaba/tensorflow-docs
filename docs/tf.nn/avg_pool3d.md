对输入执行平均池。

**别名** : [ `tf.compat.v1.nn.avg_pool3d` ](/api_docs/python/tf/nn/avg_pool3d), [ `tf.compat.v2.nn.avg_pool3d` ](/api_docs/python/tf/nn/avg_pool3d)

```
 tf.nn.avg_pool3d(    input,    ksize,    strides,    padding,    data_format='NDHWC',    name=None) 
```

Each entry in  `output`  is the mean of the corresponding size  `ksize` window in  `value` .

#### 参数：
- **`input`** : A 5-D  `Tensor`  of shape  `[batch, height, width, channels]`  and type `float32` ,  `float64` ,  `qint8` ,  `quint8` , or  `qint32` .
- **`ksize`** : An int or list of  `ints`  that has length  `1` ,  `3`  or  `5` . The size ofthe window for each dimension of the input tensor.
- **`strides`** : An int or list of  `ints`  that has length  `1` ,  `3`  or  `5` . Thestride of the sliding window for each dimension of the input tensor.
- **`padding`** : A string, either  `'VALID'`  or  `'SAME'` . The padding algorithm.See the "returns" section of [ `tf.nn.convolution` ](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution) for details.
- **`data_format`** : A string. 'NDHWC' and 'NCDHW' are supported.
- **`name`** : Optional name for the operation.


#### 返回：
A  `Tensor`  with the same type as  `value` .  The average pooled output tensor.

