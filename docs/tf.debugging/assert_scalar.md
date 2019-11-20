[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/debugging/assert_scalar) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/check_ops.py#L2161-L2180)  
---|---  
  
Asserts that the given `tensor` is a scalar.

### Aliases:

  * [`tf.compat.v2.debugging.assert_scalar`](/api_docs/python/tf/debugging/assert_scalar)

    
    
    tf.debugging.assert_scalar(
        tensor,
        message=None,
        name=None
    )
    

This function raises `ValueError` unless it can be certain that the given
`tensor` is a scalar. `ValueError` is also raised if the shape of `tensor` is
unknown.

This is always checked statically, so this method returns nothing.

#### Args:

  * **`tensor`** : A `Tensor`.
  * **`message`** : A string to prefix to the default message.
  * **`name`** : A name for this operation. Defaults to "assert_scalar"

#### Raises:

  * **`ValueError`** : If the tensor is not scalar (rank 0), or if its shape is unknown.

