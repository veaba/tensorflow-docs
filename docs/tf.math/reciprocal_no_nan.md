[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/reciprocal_no_nan) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L4132-L4161)  
---|---  
  
Performs a safe reciprocal operation, element wise.

### Aliases:

  * [`tf.compat.v1.math.reciprocal_no_nan`](/api_docs/python/tf/math/reciprocal_no_nan)
  * [`tf.compat.v2.math.reciprocal_no_nan`](/api_docs/python/tf/math/reciprocal_no_nan)

    
    
    tf.math.reciprocal_no_nan(
        x,
        name=None
    )
    

If a particular element is zero, the reciprocal for that element is also set
to zero.

#### For example:

    
    
    x = tf.constant([2.0, 0.5, 0, 1], dtype=tf.float32)
    tf.math.reciprocal_no_nan(x)  # [ 0.5, 2, 0.0, 1.0 ]
    

#### Args:

  * **`x`** : A `Tensor` of type `float16`, `float32`, `float64` `complex64` or `complex128`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of same shape and type as `x`.

#### Raises:

  * **`TypeError`** : x must be of a valid dtype.

