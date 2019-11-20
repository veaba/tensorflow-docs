[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/check_ops.py#L1608-L1636)  
---  
  
Statically asserts that the given `Tensor` is of the specified type.

### Aliases:

  * [`tf.compat.v1.debugging.assert_type`](/api_docs/python/tf/compat/v1/assert_type)

    
    
    tf.compat.v1.assert_type(
        tensor,
        tf_type,
        message=None,
        name=None
    )
    

#### Args:

  * **`tensor`** : A `Tensor`.
  * **`tf_type`** : A tensorflow type ([`dtypes.float32`](/api_docs/python/tf/dtypes#float32), [`tf.int64`](https://tensorflow.google.cn/api_docs/python/tf#int64), [`dtypes.bool`](/api_docs/python/tf/dtypes#bool), etc).
  * **`message`** : A string to prefix to the default message.
  * **`name`** : A name to give this `Op`. Defaults to "assert_type"

#### Raises:

  * **`TypeError`** : If the tensors data type doesn't match `tf_type`.

#### Returns:

A `no_op` that does nothing. Type can be determined statically.

