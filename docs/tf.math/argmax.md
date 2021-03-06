返回在张量的轴上具有最大值的索引。

**别名** : [ `tf.argmax` ](/api_docs/python/tf/math/argmax), [ `tf.compat.v2.argmax` ](/api_docs/python/tf/math/argmax), [ `tf.compat.v2.math.argmax` ](/api_docs/python/tf/math/argmax)

```
 tf.math.argmax(    input,    axis=None,    output_type=tf.dtypes.int64,    name=None) 
```

### 在指南中使用：
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
- [Recurrent Neural Networks (RNN) with Keras](https://tensorflow.google.cn/guide/keras/rnn)
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)


### 在教程中使用：
- [Custom training: walkthrough](https://tensorflow.google.cn/tutorials/customization/custom_training_walkthrough)
- [Image segmentation](https://tensorflow.google.cn/tutorials/images/segmentation)
- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
请注意，如果是关系，则不保证返回值的标识。

#### 例如：


```
 A=tf.constant([2,20,30,3,6]) # Constant 1-D Tensor
tf.math.argmax(A) # output 2 as index 2 (A[2]) is maximum in tensor A
B=tf.constant([[2,20,30,3,6],[3,11,16,1,8],[14,45,23,5,27]])
tf.math.argmax(B,0) # [2, 2, 0, 2, 2]
tf.math.argmax(B,1) # [2, 2, 1]
 
```

Args:  input: A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,     `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `complex64` ,  `int64` ,  `qint8` ,     `quint8` ,  `qint32` ,  `bfloat16` ,  `uint16` ,  `complex128` ,  `half` ,  `uint32` ,     `uint64` .  axis: A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .    int32 or int64, must be in the range  `-rank(input), rank(input))` .    Describes which axis of the input Tensor to reduce across. For vectors,    use axis = 0.  output_type: An optional [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from:  `tf.int32, tf.int64` . Defaults to    [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64).  name: A name for the operation (optional).

#### 返回：
A  `Tensor`  of type  `output_type` .

#### 用法：


```
 import tensorflow as tf
a = [1, 10, 26.9, 2.8, 166.32, 62.3]
b = tf.math.argmax(input = a)
c = tf.keras.backend.eval(b)
# c = 4
# here a[4] = 166.32 which is the largest element of a across axis 0
 
```

