[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/bessel_i0) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/special_math_ops.py#L89-L110)  
---|---  
  
Computes the Bessel i0 function of `x` element-wise.

### Aliases:

  * [`tf.compat.v1.math.bessel_i0`](/api_docs/python/tf/math/bessel_i0)
  * [`tf.compat.v2.math.bessel_i0`](/api_docs/python/tf/math/bessel_i0)

    
    
    tf.math.bessel_i0(
        x,
        name=None
    )
    

Modified Bessel function of order 0.

It is preferable to use the numerically stabler function `i0e(x)` instead.

#### Args:

  * **`x`** : A `Tensor` or `SparseTensor`. Must be one of the following types: `half`, `float32`, `float64`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` or `SparseTensor`, respectively. Has the same type as `x`.

#### Scipy Compatibility

Equivalent to scipy.special.i0

