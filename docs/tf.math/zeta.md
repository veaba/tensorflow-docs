[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/zeta)  
---  
  
Defined in generated file: `python/ops/gen_math_ops.py`

Compute the Hurwitz zeta function \\(\zeta(x, q)\\).

### Aliases:

  * [`tf.compat.v1.math.zeta`](/api_docs/python/tf/math/zeta)
  * [`tf.compat.v1.zeta`](/api_docs/python/tf/math/zeta)
  * [`tf.compat.v2.math.zeta`](/api_docs/python/tf/math/zeta)

    
    
    tf.math.zeta(
        x,
        q,
        name=None
    )
    

The Hurwitz zeta function is defined as:

\\(\zeta(x, q) = \sum_{n=0}^{\infty} (q + n)^{-x}\\)

#### Args:

  * **`x`** : A `Tensor`. Must be one of the following types: `float32`, `float64`.
  * **`q`** : A `Tensor`. Must have the same type as `x`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `x`.

