Returns x * y element-wise.

**别名** : [ `tf.compat.v1.math.multiply` ](/api_docs/python/tf/math/multiply), [ `tf.compat.v1.multiply` ](/api_docs/python/tf/math/multiply), [ `tf.compat.v2.math.multiply` ](/api_docs/python/tf/math/multiply), [ `tf.compat.v2.multiply` ](/api_docs/python/tf/math/multiply), [ `tf.multiply` ](/api_docs/python/tf/math/multiply)

```
 tf.math.multiply(    x,    y,    name=None) 
```

### 在指南中使用：
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)


### 在教程中使用：
- [Automatic differentiation and gradient tape](https://tensorflow.google.cn/tutorials/customization/autodiff)
- [Customization basics: tensors and operations](https://tensorflow.google.cn/tutorials/customization/basics)
*NOTE*: [ `tf.multiply` ](https://tensorflow.google.cn/api_docs/python/tf/math/multiply) supports broadcasting. More about broadcasting[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `uint8` ,  `int8` ,  `uint16` ,  `int16` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` .
- **`y`** : A  `Tensor` . Must have the same type as  `x` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

