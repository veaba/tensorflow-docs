[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/sqrt)  
---  
  
Defined in generated file: `python/ops/gen_math_ops.py`

Computes square root of x element-wise.

### Aliases:

  * [`tf.compat.v1.math.sqrt`](/api_docs/python/tf/math/sqrt)
  * [`tf.compat.v1.sqrt`](/api_docs/python/tf/math/sqrt)
  * [`tf.compat.v2.math.sqrt`](/api_docs/python/tf/math/sqrt)
  * [`tf.compat.v2.sqrt`](/api_docs/python/tf/math/sqrt)
  * [`tf.sqrt`](/api_docs/python/tf/math/sqrt)

    
    
    tf.math.sqrt(
        x,
        name=None
    )
    

### Used in the tutorials:

  * [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)

I.e., \\(y = \sqrt{x} = x^{1/2}\\).

#### Args:

  * **`x`** : A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `x`.

If `x` is a `SparseTensor`, returns `SparseTensor(x.indices,
tf.math.sqrt(x.values, ...), x.dense_shape)`

