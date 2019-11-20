[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/greater_equal)  
---  
  
Defined in generated file: `python/ops/gen_math_ops.py`

Returns the truth value of (x >= y) element-wise.

### Aliases:

  * [`tf.RaggedTensor. **ge**`](/api_docs/python/tf/RaggedTensor#__ge__)
  * [`tf.Tensor. **ge**`](/api_docs/python/tf/Tensor#__ge__)
  * [`tf.compat.v1.RaggedTensor. **ge**`](/api_docs/python/tf/RaggedTensor#__ge__)
  * [`tf.compat.v1.Tensor. **ge**`](/api_docs/python/tf/Tensor#__ge__)
  * [`tf.compat.v1.greater_equal`](/api_docs/python/tf/math/greater_equal)
  * [`tf.compat.v1.math.greater_equal`](/api_docs/python/tf/math/greater_equal)
  * [`tf.compat.v2.RaggedTensor. **ge**`](/api_docs/python/tf/RaggedTensor#__ge__)
  * [`tf.compat.v2.Tensor. **ge**`](/api_docs/python/tf/Tensor#__ge__)
  * [`tf.compat.v2.greater_equal`](/api_docs/python/tf/math/greater_equal)
  * [`tf.compat.v2.math.greater_equal`](/api_docs/python/tf/math/greater_equal)
  * [`tf.greater_equal`](/api_docs/python/tf/math/greater_equal)

    
    
    tf.math.greater_equal(
        x,
        y,
        name=None
    )
    

_NOTE_ :
[`math.greater_equal`](https://tensorflow.google.cn/api_docs/python/tf/math/greater_equal)
supports broadcasting. More about broadcasting
[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

#### Args:

  * **`x`** : A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.
  * **`y`** : A `Tensor`. Must have the same type as `x`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `bool`.

