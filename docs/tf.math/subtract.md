[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/subtract) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L349-L352)  
  
  
Returns x - y element-wise.

### Aliases:

  * [`tf.RaggedTensor. **sub**`](/api_docs/python/tf/RaggedTensor#__sub__)
  * [`tf.compat.v1.RaggedTensor. **sub**`](/api_docs/python/tf/RaggedTensor#__sub__)
  * [`tf.compat.v1.math.subtract`](/api_docs/python/tf/math/subtract)
  * [`tf.compat.v1.subtract`](/api_docs/python/tf/math/subtract)
  * [`tf.compat.v2.RaggedTensor. **sub**`](/api_docs/python/tf/RaggedTensor#__sub__)
  * [`tf.compat.v2.math.subtract`](/api_docs/python/tf/math/subtract)
  * [`tf.compat.v2.subtract`](/api_docs/python/tf/math/subtract)
  * [`tf.subtract`](/api_docs/python/tf/math/subtract)

    
    
    tf.math.subtract(
        x,
        y,
        name=None
    )
    

_NOTE_ : `Subtract` supports broadcasting. More about broadcasting
[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

#### Args:

  * **`x`** : A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `uint16`, `int16`, `int32`, `int64`, `complex64`, `complex128`.
  * **`y`** : A `Tensor`. Must have the same type as `x`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `x`.

