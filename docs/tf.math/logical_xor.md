[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/logical_xor) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1234-L1265)  
---|---  
  
Logical XOR function.

### Aliases:

  * [`tf.RaggedTensor. **xor**`](/api_docs/python/tf/RaggedTensor#__xor__)
  * [`tf.compat.v1.RaggedTensor. **xor**`](/api_docs/python/tf/RaggedTensor#__xor__)
  * [`tf.compat.v1.logical_xor`](/api_docs/python/tf/math/logical_xor)
  * [`tf.compat.v1.math.logical_xor`](/api_docs/python/tf/math/logical_xor)
  * [`tf.compat.v2.RaggedTensor. **xor**`](/api_docs/python/tf/RaggedTensor#__xor__)
  * [`tf.compat.v2.math.logical_xor`](/api_docs/python/tf/math/logical_xor)

    
    
    tf.math.logical_xor(
        x,
        y,
        name='LogicalXor'
    )
    

x ^ y = (x | y) & ~(x & y)

Inputs are tensor and if the tensors contains more than one element, an
element-wise logical XOR is computed.

#### Usage:

    
    
    x = tf.constant([False, False, True, True], dtype = tf.bool)
    y = tf.constant([False, True, False, True], dtype = tf.bool)
    z = tf.logical_xor(x, y, name="LogicalXor")
    #  here z = [False  True  True False]
    

#### Args:

  * **`x`** : A `Tensor` type bool.
  * **`y`** : A `Tensor` of type bool.

#### Returns:

A `Tensor` of type bool with the same size as that of x or y.

