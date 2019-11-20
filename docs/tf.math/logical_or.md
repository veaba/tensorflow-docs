[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/logical_or)  
---  
  
Defined in generated file: `python/ops/gen_math_ops.py`

Returns the truth value of x OR y element-wise.

### Aliases:

  * [`tf.RaggedTensor. **or**`](/api_docs/python/tf/RaggedTensor#__or__)
  * [`tf.compat.v1.RaggedTensor. **or**`](/api_docs/python/tf/RaggedTensor#__or__)
  * [`tf.compat.v1.logical_or`](/api_docs/python/tf/math/logical_or)
  * [`tf.compat.v1.math.logical_or`](/api_docs/python/tf/math/logical_or)
  * [`tf.compat.v2.RaggedTensor. **or**`](/api_docs/python/tf/RaggedTensor#__or__)
  * [`tf.compat.v2.logical_or`](/api_docs/python/tf/math/logical_or)
  * [`tf.compat.v2.math.logical_or`](/api_docs/python/tf/math/logical_or)
  * [`tf.logical_or`](/api_docs/python/tf/math/logical_or)

    
    
    tf.math.logical_or(
        x,
        y,
        name=None
    )
    

_NOTE_ :
[`math.logical_or`](https://tensorflow.google.cn/api_docs/python/tf/math/logical_or)
supports broadcasting. More about broadcasting
[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

#### Args:

  * **`x`** : A `Tensor` of type `bool`.
  * **`y`** : A `Tensor` of type `bool`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `bool`.

