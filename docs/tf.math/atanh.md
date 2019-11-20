[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/atanh)  
---  
  
Defined in generated file: `python/ops/gen_math_ops.py`

Computes inverse hyperbolic tangent of x element-wise.

### Aliases:

  * [`tf.atanh`](/api_docs/python/tf/math/atanh)
  * [`tf.compat.v1.atanh`](/api_docs/python/tf/math/atanh)
  * [`tf.compat.v1.math.atanh`](/api_docs/python/tf/math/atanh)
  * [`tf.compat.v2.atanh`](/api_docs/python/tf/math/atanh)
  * [`tf.compat.v2.math.atanh`](/api_docs/python/tf/math/atanh)

    
    
    tf.math.atanh(
        x,
        name=None
    )
    

Given an input tensor, this function computes inverse hyperbolic tangent for
every element in the tensor. Input range is `[-1,1]` and output range is
`[-inf, inf]`. If input is `-1`, output will be `-inf` and if the input is
`1`, output will be `inf`. Values outside the range will have `nan` as output.

>
>     x = tf.constant([-float("inf"), -1, -0.5, 1, 0, 0.5, 10, float("inf")])
>     tf.math.atanh(x) ==> [nan -inf -0.54930615 inf  0. 0.54930615 nan nan]
>  

#### Args:

  * **`x`** : A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `x`.

