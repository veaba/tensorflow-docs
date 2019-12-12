Computes sigmoid of  `x`  element-wise.

**Aliases** : [ `tf.compat.v1.math.sigmoid` ](/api_docs/python/tf/math/sigmoid), [ `tf.compat.v1.nn.sigmoid` ](/api_docs/python/tf/math/sigmoid), [ `tf.compat.v1.sigmoid` ](/api_docs/python/tf/math/sigmoid), [ `tf.compat.v2.math.sigmoid` ](/api_docs/python/tf/math/sigmoid), [ `tf.compat.v2.nn.sigmoid` ](/api_docs/python/tf/math/sigmoid), [ `tf.compat.v2.sigmoid` ](/api_docs/python/tf/math/sigmoid), [ `tf.nn.sigmoid` ](/api_docs/python/tf/math/sigmoid), [ `tf.sigmoid` ](/api_docs/python/tf/math/sigmoid)

```
 tf.math.sigmoid(
    x,
    name=None
)
 
```

### Used in the tutorials:
- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
Specifically,  `y = 1 / (1 + exp(-x))` .

#### Args:
- **`x`** : A Tensor with type  `float16` ,  `float32` ,  `float64` ,  `complex64` , or `complex128` .
- **`name`** : A name for the operation (optional).


#### Returns:
A Tensor with the same type as  `x` .

#### Scipy Compatibility
Equivalent to scipy.special.expit

