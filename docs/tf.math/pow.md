[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/pow) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L434-L459)  
  
  
Computes the power of one value to another.

### Aliases:

  * [`tf.RaggedTensor. **pow**`](/api_docs/python/tf/RaggedTensor#__pow__)
  * [`tf.compat.v1.RaggedTensor. **pow**`](/api_docs/python/tf/RaggedTensor#__pow__)
  * [`tf.compat.v1.math.pow`](/api_docs/python/tf/math/pow)
  * [`tf.compat.v1.pow`](/api_docs/python/tf/math/pow)
  * [`tf.compat.v2.RaggedTensor. **pow**`](/api_docs/python/tf/RaggedTensor#__pow__)
  * [`tf.compat.v2.math.pow`](/api_docs/python/tf/math/pow)
  * [`tf.compat.v2.pow`](/api_docs/python/tf/math/pow)
  * [`tf.pow`](/api_docs/python/tf/math/pow)

    
    
    tf.math.pow(
        x,
        y,
        name=None
    )
    

Given a tensor `x` and a tensor `y`, this operation computes \\(x^y\\) for
corresponding elements in `x` and `y`. For example:

    
    
    x = tf.constant([[2, 2], [3, 3]])
    y = tf.constant([[8, 16], [2, 3]])
    tf.pow(x, y)  # [[256, 65536], [9, 27]]
    

#### Args:

  * **`x`** : A `Tensor` of type `float16`, `float32`, `float64`, `int32`, `int64`, `complex64`, or `complex128`.
  * **`y`** : A `Tensor` of type `float16`, `float32`, `float64`, `int32`, `int64`, `complex64`, or `complex128`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`.

