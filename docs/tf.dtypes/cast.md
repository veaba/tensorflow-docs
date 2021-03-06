把张量转换成一种新的类型。

**别名** : [ `tf.cast` ](/api_docs/python/tf/dtypes/cast), [ `tf.compat.v1.cast` ](/api_docs/python/tf/dtypes/cast), [ `tf.compat.v1.dtypes.cast` ](/api_docs/python/tf/dtypes/cast), [ `tf.compat.v2.cast` ](/api_docs/python/tf/dtypes/cast), [ `tf.compat.v2.dtypes.cast` ](/api_docs/python/tf/dtypes/cast)

```
 tf.dtypes.cast(
    x,
    dtype,
    name=None
)
 
```

### 在指南中使用：
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)
- [Eager execution](https://tensorflow.google.cn/guide/eager)
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)


### 在教程中使用：
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
- [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)
- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Distributed training with Keras](https://tensorflow.google.cn/tutorials/distribute/keras)
The operation casts  `x`  (in case of  `Tensor` ) or  `x.values` (in case of  `SparseTensor`  or  `IndexedSlices` ) to  `dtype` .

#### 例如：


```
 x = tf.constant([1.8, 2.2], dtype=tf.float32)
tf.dtypes.cast(x, tf.int32)  # [1, 2], dtype=tf.int32
 
```

The operation supports data types (for  `x`  and  `dtype` ) of `uint8` ,  `uint16` ,  `uint32` ,  `uint64` ,  `int8` ,  `int16` ,  `int32` ,  `int64` , `float16` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` ,  `bfloat16` .In case of casting from complex types ( `complex64` ,  `complex128` ) to realtypes, only the real part of  `x`  is returned. In case of casting from realtypes to complex types ( `complex64` ,  `complex128` ), the imaginary part of thereturned value is set to  `0` . The handling of complex types here matches thebehavior of numpy.

#### 参数：
- **`x`** : A  `Tensor`  or  `SparseTensor`  or  `IndexedSlices`  of numeric type. It couldbe  `uint8` ,  `uint16` ,  `uint32` ,  `uint64` ,  `int8` ,  `int16` ,  `int32` , `int64` ,  `float16` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` , `bfloat16` .
- **`dtype`** : The destination type. The list of supported dtypes is the same as `x` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  or  `SparseTensor`  or  `IndexedSlices`  with same shape as  `x`  and  same type as  `dtype` .

#### 加薪：
- **`TypeError`** : If  `x`  cannot be cast to the  `dtype` .
