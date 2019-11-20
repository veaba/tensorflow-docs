[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/debugging/assert_integer) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/check_ops.py#L1530-L1547)  
---|---  
  
Assert that `x` is of integer dtype.

### Aliases:

  * [`tf.compat.v2.debugging.assert_integer`](/api_docs/python/tf/debugging/assert_integer)

    
    
    tf.debugging.assert_integer(
        x,
        message=None,
        name=None
    )
    

If `x` has a non-integer type, `message`, as well as the dtype of `x` are
printed, and `InvalidArgumentError` is raised.

This can always be checked statically, so this method returns nothing.

#### Args:

  * **`x`** : A `Tensor`.
  * **`message`** : A string to prefix to the default message.
  * **`name`** : A name for this operation (optional). Defaults to "assert_integer".

#### Raises:

  * **`TypeError`** : If `x.dtype` is not a non-quantized integer type.

