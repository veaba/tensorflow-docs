计算二维卷积给定的量化4d输入和滤波器张量。

```
 tf.compat.v1.nn.quantized_conv2d(    input,    filter,    min_input,    max_input,    min_filter,    max_filter,    strides,    padding,    out_type=tf.dtypes.qint32,    dilations=[1, 1, 1, 1],    name=None) 
```

The inputs are quantized tensors where the lowest value represents the realnumber of the associated minimum, and the highest represents the maximum.This means that you can only interpret the quantized output in the same way, bytaking the returned minimum and maximum values into account.

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `qint8` ,  `quint8` ,  `qint32` ,  `qint16` ,  `quint16` .
- **`filter`** : A  `Tensor` . Must be one of the following types:  `qint8` ,  `quint8` ,  `qint32` ,  `qint16` ,  `quint16` .filter's input_depth dimension must match input's depth dimensions.
- **`min_input`** : A  `Tensor`  of type  `float32` .The float value that the lowest quantized input value represents.
- **`max_input`** : A  `Tensor`  of type  `float32` .The float value that the highest quantized input value represents.
- **`min_filter`** : A  `Tensor`  of type  `float32` .The float value that the lowest quantized filter value represents.
- **`max_filter`** : A  `Tensor`  of type  `float32` .The float value that the highest quantized filter value represents.
- **`strides`** : A list of  `ints` .The stride of the sliding window for each dimension of the inputtensor.
- **`padding`** : A  `string`  from:  `"SAME", "VALID"` .The type of padding algorithm to use.
- **`out_type`** : An optional [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from:  `tf.qint8, tf.quint8, tf.qint32, tf.qint16, tf.quint16` . Defaults to [ `tf.qint32` ](https://tensorflow.google.cn/api_docs/python/tf#qint32).
- **`dilations`** : An optional list of  `ints` . Defaults to  `[1, 1, 1, 1]` .1-D tensor of length 4.  The dilation factor for each dimension of `input` . If set to k > 1, there will be k-1 skipped cells between eachfilter element on that dimension. The dimension order is determined by thevalue of  `data_format` , see above for details. Dilations in the batch anddepth dimensions must be 1.
- **`name`** : A name for the operation (optional).


#### 返回：
A tuple of  `Tensor`  objects (output, min_output, max_output).

- **`output`** : A  `Tensor`  of type  `out_type` .
- **`min_output`** : A  `Tensor`  of type  `float32` .
- **`max_output`** : A  `Tensor`  of type  `float32` .
