对输入执行平均池。

```
 tf.nn.avg_pool2d(    input,    ksize,    strides,    padding,    data_format='NHWC',    name=None) 
```

Each entry in  `output`  is the mean of the corresponding size  `ksize` window in  `value` .

#### 参数：
- **`input`** : A 4-D  `Tensor`  of shape  `[batch, height, width, channels]`  and type `float32` ,  `float64` ,  `qint8` ,  `quint8` , or  `qint32` .
- **`ksize`** : An int or list of  `ints`  that has length  `1` ,  `2`  or  `4` . The size ofthe window for each dimension of the input tensor.
- **`strides`** : An int or list of  `ints`  that has length  `1` ,  `2`  or  `4` . Thestride of the sliding window for each dimension of the input tensor.
- **`padding`** : A string, either  `'VALID'`  or  `'SAME'` . The padding algorithm.See the "returns" section of [ `tf.nn.convolution` ](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution) for details.
- **`data_format`** : A string. 'NHWC' and 'NCHW' are supported.
- **`name`** : Optional name for the operation.


#### 返回：
A  `Tensor`  with the same type as  `value` .  The average pooled output tensor.

