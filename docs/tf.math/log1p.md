[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/log1p)  
---  
  
Defined in generated file: `python/ops/gen_math_ops.py`

Computes natural logarithm of (1 + x) element-wise.

### Aliases:

  * [`tf.compat.v1.log1p`](/api_docs/python/tf/math/log1p)
  * [`tf.compat.v1.math.log1p`](/api_docs/python/tf/math/log1p)
  * [`tf.compat.v2.math.log1p`](/api_docs/python/tf/math/log1p)

    
    
    tf.math.log1p(
        x,
        name=None
    )
    

I.e., \\(y = \log_e (1 + x)\\).

#### Args:

  * **`x`** : A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `x`.

