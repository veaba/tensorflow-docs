[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/erf)  
---  
  
Defined in generated file: `python/ops/gen_math_ops.py`

Computes the Gauss error function of `x` element-wise.

### Aliases:

  * [`tf.compat.v1.erf`](/api_docs/python/tf/math/erf)
  * [`tf.compat.v1.math.erf`](/api_docs/python/tf/math/erf)
  * [`tf.compat.v2.math.erf`](/api_docs/python/tf/math/erf)

    
    
    tf.math.erf(
        x,
        name=None
    )
    

#### Args:

  * **`x`** : A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `x`.

If `x` is a `SparseTensor`, returns `SparseTensor(x.indices,
tf.math.erf(x.values, ...), x.dense_shape)`

