生成量化类型的输入张量的平均池。

```
 tf.compat.v1.nn.quantized_avg_pool(
    input,
    min_input,
    max_input,
    ksize,
    strides,
    padding,
    name=None
)
 
```

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `qint8` ,  `quint8` ,  `qint32` ,  `qint16` ,  `quint16` .4-D with shape  `[batch, height, width, channels]` .
- **`min_input`** : A  `Tensor`  of type  `float32` .The float value that the lowest quantized input value represents.
- **`max_input`** : A  `Tensor`  of type  `float32` .The float value that the highest quantized input value represents.
- **`ksize`** : A list of  `ints` .The size of the window for each dimension of the input tensor.The length must be 4 to match the number of dimensions of the input.
- **`strides`** : A list of  `ints` .The stride of the sliding window for each dimension of the inputtensor.  The length must be 4 to match the number of dimensions of the input.
- **`padding`** : A  `string`  from:  `"SAME", "VALID"` .The type of padding algorithm to use.
- **`name`** : A name for the operation (optional).


#### 返回：
A tuple of  `Tensor`  objects (output, min_output, max_output).

- **`output`** : A  `Tensor` . Has the same type as  `input` .
- **`min_output`** : A  `Tensor`  of type  `float32` .
- **`max_output`** : A  `Tensor`  of type  `float32` .
