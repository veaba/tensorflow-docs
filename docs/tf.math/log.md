Computes natural logarithm of x element-wise.

**别名** : [ `tf.compat.v1.log` ](/api_docs/python/tf/math/log), [ `tf.compat.v1.math.log` ](/api_docs/python/tf/math/log), [ `tf.compat.v2.math.log` ](/api_docs/python/tf/math/log)

```
 tf.math.log(    x,    name=None) 
```

### 在指南中使用：
- [Eager execution](https://tensorflow.google.cn/guide/eager)
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)


### 在教程中使用：
- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
I.e., \(y = \log_e x\).

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

