[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/multiply) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L328-L331)  
  
  
Returns x * y element-wise.

### Aliases:

  * [`tf.RaggedTensor. **mul**`](/api_docs/python/tf/RaggedTensor#__mul__)
  * [`tf.compat.v1.RaggedTensor. **mul**`](/api_docs/python/tf/RaggedTensor#__mul__)
  * [`tf.compat.v1.math.multiply`](/api_docs/python/tf/math/multiply)
  * [`tf.compat.v1.multiply`](/api_docs/python/tf/math/multiply)
  * [`tf.compat.v2.RaggedTensor. **mul**`](/api_docs/python/tf/RaggedTensor#__mul__)
  * [`tf.compat.v2.math.multiply`](/api_docs/python/tf/math/multiply)
  * [`tf.compat.v2.multiply`](/api_docs/python/tf/math/multiply)
  * [`tf.multiply`](/api_docs/python/tf/math/multiply)

    
    
    tf.math.multiply(
        x,
        y,
        name=None
    )
    

### Used in the guide:

  * [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)

### Used in the tutorials:

  * [Automatic differentiation and gradient tape](https://tensorflow.google.cn/tutorials/customization/autodiff)
  * [Customization basics: tensors and operations](https://tensorflow.google.cn/tutorials/customization/basics)

_NOTE_ :
[`tf.multiply`](https://tensorflow.google.cn/api_docs/python/tf/math/multiply)
supports broadcasting. More about broadcasting
[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

#### Args:

  * **`x`** : A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `uint16`, `int16`, `int32`, `int64`, `complex64`, `complex128`.
  * **`y`** : A `Tensor`. Must have the same type as `x`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `x`.

