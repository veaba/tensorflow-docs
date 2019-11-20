[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/real) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L508-L539)  
  
  
Returns the real part of a complex (or real) tensor.

### Aliases:

  * [`tf.compat.v1.math.real`](/api_docs/python/tf/math/real)
  * [`tf.compat.v1.real`](/api_docs/python/tf/math/real)
  * [`tf.compat.v2.math.real`](/api_docs/python/tf/math/real)

    
    
    tf.math.real(
        input,
        name=None
    )
    

Given a tensor `input`, this operation returns a tensor of type `float` that
is the real part of each element in `input` considered as a complex number.

#### For example:

    
    
    x = tf.constant([-2.25 + 4.75j, 3.25 + 5.75j])
    tf.math.real(x)  # [-2.25, 3.25]
    

If `input` is already real, it is returned unchanged.

#### Args:

  * **`input`** : A `Tensor`. Must have numeric type.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `float32` or `float64`.

