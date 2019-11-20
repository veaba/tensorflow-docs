[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/sigmoid) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L3112-L3132)  
---|---  
  
Computes sigmoid of `x` element-wise.

### Aliases:

  * [`tf.compat.v1.math.sigmoid`](/api_docs/python/tf/math/sigmoid)
  * [`tf.compat.v1.nn.sigmoid`](/api_docs/python/tf/math/sigmoid)
  * [`tf.compat.v1.sigmoid`](/api_docs/python/tf/math/sigmoid)
  * [`tf.compat.v2.math.sigmoid`](/api_docs/python/tf/math/sigmoid)
  * [`tf.compat.v2.nn.sigmoid`](/api_docs/python/tf/math/sigmoid)
  * [`tf.compat.v2.sigmoid`](/api_docs/python/tf/math/sigmoid)
  * [`tf.nn.sigmoid`](/api_docs/python/tf/math/sigmoid)
  * [`tf.sigmoid`](/api_docs/python/tf/math/sigmoid)

    
    
    tf.math.sigmoid(
        x,
        name=None
    )
    

### Used in the tutorials:

  * [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)

Specifically, `y = 1 / (1 + exp(-x))`.

#### Args:

  * **`x`** : A Tensor with type `float16`, `float32`, `float64`, `complex64`, or `complex128`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A Tensor with the same type as `x`.

#### Scipy Compatibility

Equivalent to scipy.special.expit

