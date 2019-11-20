[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/check_ops.py#L1208-L1267)  
---  
  
Assert `x` has rank equal to `rank`.

### Aliases:

  * [`tf.compat.v1.debugging.assert_rank`](/api_docs/python/tf/compat/v1/assert_rank)

    
    
    tf.compat.v1.assert_rank(
        x,
        rank,
        data=None,
        summarize=None,
        message=None,
        name=None
    )
    

Example of adding a dependency to an operation:

    
    
    with tf.control_dependencies([tf.compat.v1.assert_rank(x, 2)]):
      output = tf.reduce_sum(x)
    

#### Args:

  * **`x`** : Numeric `Tensor`.
  * **`rank`** : Scalar integer `Tensor`.
  * **`data`** : The tensors to print out if the condition is False. Defaults to error message and the shape of `x`.
  * **`summarize`** : Print this many entries of each tensor.
  * **`message`** : A string to prefix to the default message.
  * **`name`** : A name for this operation (optional). Defaults to "assert_rank".

#### Returns:

Op raising `InvalidArgumentError` unless `x` has specified rank. If static
checks determine `x` has correct rank, a `no_op` is returned.

#### Raises:

  * **`ValueError`** : If static checks determine `x` has wrong rank.

