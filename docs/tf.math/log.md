Computes natural logarithm of x element-wise.

**Aliases** : [ `tf.compat.v1.log` ](/api_docs/python/tf/math/log), [ `tf.compat.v1.math.log` ](/api_docs/python/tf/math/log), [ `tf.compat.v2.math.log` ](/api_docs/python/tf/math/log)

```
 tf.math.log(    x,    name=None) 
```

### Used in the guide:
- [Eager execution](https://tensorflow.google.cn/guide/eager)
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)


### Used in the tutorials:
- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
I.e., \(y = \log_e x\).

#### Args:
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor` . Has the same type as  `x` .

