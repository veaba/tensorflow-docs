[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/scalar_mul) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L427-L431)  
---|---  
  
Multiplies a scalar times a `Tensor` or `IndexedSlices` object.

### Aliases:

  * [`tf.compat.v2.math.scalar_mul`](/api_docs/python/tf/math/scalar_mul)
  * [`tf.compat.v2.scalar_mul`](/api_docs/python/tf/math/scalar_mul)
  * [`tf.scalar_mul`](/api_docs/python/tf/math/scalar_mul)

    
    
    tf.math.scalar_mul(
        scalar,
        x,
        name=None
    )
    

Intended for use in gradient code which might deal with `IndexedSlices`
objects, which are easy to multiply by a scalar but more expensive to multiply
with arbitrary tensors.

#### Args:

  * **`scalar`** : A 0-D scalar `Tensor`. Must have known shape.
  * **`x`** : A `Tensor` or `IndexedSlices` to be scaled.
  * **`name`** : A name for the operation (optional).

#### Returns:

`scalar * x` of the same type (`Tensor` or `IndexedSlices`) as `x`.

#### Raises:

  * **`ValueError`** : if scalar is not a 0-D `scalar`.

