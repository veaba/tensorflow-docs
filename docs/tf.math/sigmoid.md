Computes sigmoid of  `x`  element-wise.

**别名** : [ `tf.compat.v1.math.sigmoid` ](/api_docs/python/tf/math/sigmoid), [ `tf.compat.v1.nn.sigmoid` ](/api_docs/python/tf/math/sigmoid), [ `tf.compat.v1.sigmoid` ](/api_docs/python/tf/math/sigmoid), [ `tf.compat.v2.math.sigmoid` ](/api_docs/python/tf/math/sigmoid), [ `tf.compat.v2.nn.sigmoid` ](/api_docs/python/tf/math/sigmoid), [ `tf.compat.v2.sigmoid` ](/api_docs/python/tf/math/sigmoid), [ `tf.nn.sigmoid` ](/api_docs/python/tf/math/sigmoid), [ `tf.sigmoid` ](/api_docs/python/tf/math/sigmoid)

```
 tf.math.sigmoid(
    x,
    name=None
)
 
```

### 在教程中使用：
- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
Specifically,  `y = 1 / (1 + exp(-x))` .

#### 参数：
- **`x`** : A Tensor with type  `float16` ,  `float32` ,  `float64` ,  `complex64` , or `complex128` .
- **`name`** : A name for the operation (optional).


#### 返回：
A Tensor with the same type as  `x` .

#### scipy兼容性
相当于scipy.special.expit

