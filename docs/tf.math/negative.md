[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/negative)  
---  
  
Defined in generated file: `python/ops/gen_math_ops.py`

Computes numerical negative value element-wise.

### Aliases:

  * [`tf.RaggedTensor. **neg**`](/api_docs/python/tf/RaggedTensor#__neg__)
  * [`tf.Tensor. **neg**`](/api_docs/python/tf/Tensor#__neg__)
  * [`tf.compat.v1.RaggedTensor. **neg**`](/api_docs/python/tf/RaggedTensor#__neg__)
  * [`tf.compat.v1.Tensor. **neg**`](/api_docs/python/tf/Tensor#__neg__)
  * [`tf.compat.v1.math.negative`](/api_docs/python/tf/math/negative)
  * [`tf.compat.v1.negative`](/api_docs/python/tf/math/negative)
  * [`tf.compat.v2.RaggedTensor. **neg**`](/api_docs/python/tf/RaggedTensor#__neg__)
  * [`tf.compat.v2.Tensor. **neg**`](/api_docs/python/tf/Tensor#__neg__)
  * [`tf.compat.v2.math.negative`](/api_docs/python/tf/math/negative)
  * [`tf.compat.v2.negative`](/api_docs/python/tf/math/negative)
  * [`tf.negative`](/api_docs/python/tf/math/negative)

    
    
    tf.math.negative(
        x,
        name=None
    )
    

I.e., \\(y = -x\\).

#### Args:

  * **`x`** : A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int32`, `int64`, `complex64`, `complex128`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `x`.

If `x` is a `SparseTensor`, returns `SparseTensor(x.indices,
tf.math.negative(x.values, ...), x.dense_shape)`

