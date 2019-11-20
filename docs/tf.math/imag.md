[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/imag) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L542-L572)  
---|---  
  
Returns the imaginary part of a complex (or real) tensor.

### Aliases:

  * [`tf.compat.v1.imag`](/api_docs/python/tf/math/imag)
  * [`tf.compat.v1.math.imag`](/api_docs/python/tf/math/imag)
  * [`tf.compat.v2.math.imag`](/api_docs/python/tf/math/imag)

    
    
    tf.math.imag(
        input,
        name=None
    )
    

Given a tensor `input`, this operation returns a tensor of type `float` that
is the imaginary part of each element in `input` considered as a complex
number. If `input` is real, a tensor of all zeros is returned.

#### For example:

    
    
    x = tf.constant([-2.25 + 4.75j, 3.25 + 5.75j])
    tf.math.imag(x)  # [4.75, 5.75]
    

#### Args:

  * **`input`** : A `Tensor`. Must be one of the following types: `float`, `double`, `complex64`, `complex128`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `float32` or `float64`.

