返回张量维度上具有最小值的索引。

```
 tf.compat.v1.arg_min(    input,    dimension,    output_type=tf.dtypes.int64,    name=None) 
```

请注意，如果是关系，则不保证返回值的标识。

#### 用法：


```
 import tensorflow as tf
a = [1, 10, 26.9, 2.8, 166.32, 62.3]
b = tf.math.argmin(input = a)
c = tf.keras.backend.eval(b)
# c = 0
# here a[0] = 1 which is the smallest element of a across axis 0
 
```

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `complex64` ,  `int64` ,  `qint8` ,  `quint8` ,  `qint32` ,  `bfloat16` ,  `uint16` ,  `complex128` ,  `half` ,  `uint32` ,  `uint64` .
- **`dimension`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .int32 or int64, must be in the range  `[-rank(input), rank(input))` .Describes which dimension of the input Tensor to reduce across. For vectors,use dimension = 0.
- **`output_type`** : An optional [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from:  `tf.int32, tf.int64` . Defaults to [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64).
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `output_type` .

