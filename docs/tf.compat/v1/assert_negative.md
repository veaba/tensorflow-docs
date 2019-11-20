[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/check_ops.py#L156-L195)  
---  
  
Assert the condition `x < 0` holds element-wise.

### Aliases:

  * [`tf.compat.v1.debugging.assert_negative`](/api_docs/python/tf/compat/v1/assert_negative)

    
    
    tf.compat.v1.assert_negative(
        x,
        data=None,
        summarize=None,
        message=None,
        name=None
    )
    

Example of adding a dependency to an operation:

    
    
    with tf.control_dependencies([tf.compat.v1.assert_negative(x)]):
      output = tf.reduce_sum(x)
    

Negative means, for every element `x[i]` of `x`, we have `x[i] < 0`. If `x` is
empty this is trivially satisfied.

#### Args:

  * **`x`** : Numeric `Tensor`.
  * **`data`** : The tensors to print out if the condition is False. Defaults to error message and first few entries of `x`.
  * **`summarize`** : Print this many entries of each tensor.
  * **`message`** : A string to prefix to the default message.
  * **`name`** : A name for this operation (optional). Defaults to "assert_negative".

#### Returns:

Op raising `InvalidArgumentError` unless `x` is all negative.

