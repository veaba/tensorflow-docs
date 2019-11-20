[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/get_static_value) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_util.py#L767-L802)  
  
  
Returns the constant value of the given tensor, if efficiently calculable.

### Aliases:

  * [`tf.compat.v1.get_static_value`](/api_docs/python/tf/get_static_value)
  * [`tf.compat.v2.get_static_value`](/api_docs/python/tf/get_static_value)

    
    
    tf.get_static_value(
        tensor,
        partial=False
    )
    

This function attempts to partially evaluate the given tensor, and returns its
value as a numpy ndarray if this succeeds.

Compatibility(V1): If `constant_value(tensor)` returns a non-`None` result, it
will no longer be possible to feed a different value for `tensor`. This allows
the result of this function to influence the graph that is constructed, and
permits static shape optimizations.

#### Args:

  * **`tensor`** : The Tensor to be evaluated.
  * **`partial`** : If True, the returned numpy array is allowed to have partially evaluated values. Values that can't be evaluated will be None.

#### Returns:

A numpy ndarray containing the constant value of the given `tensor`, or None
if it cannot be calculated.

#### Raises:

  * **`TypeError`** : if tensor is not an ops.Tensor.

