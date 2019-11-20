[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/debugging/assert_non_negative) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/check_ops.py#L271-L302)  
  
  
Assert the condition `x >= 0` holds element-wise.

### Aliases:

  * [`tf.compat.v2.debugging.assert_non_negative`](/api_docs/python/tf/debugging/assert_non_negative)

    
    
    tf.debugging.assert_non_negative(
        x,
        message=None,
        summarize=None,
        name=None
    )
    

This Op checks that `x[i] >= 0` holds for every element of `x`. If `x` is
empty, this is trivially satisfied.

If `x` is not >= 0 everywhere, `message`, as well as the first `summarize`
entries of `x` are printed, and `InvalidArgumentError` is raised.

#### Args:

  * **`x`** : Numeric `Tensor`.
  * **`message`** : A string to prefix to the default message.
  * **`summarize`** : Print this many entries of each tensor.
  * **`name`** : A name for this operation (optional). Defaults to "assert_non_negative".

#### Returns:

Op raising `InvalidArgumentError` unless `x` is all non-negative. This can be
used with
[`tf.control_dependencies`](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies)
inside of
[`tf.function`](https://tensorflow.google.cn/api_docs/python/tf/function)s to
block followup computation until the check has executed.

#### Raises:

  * **`InvalidArgumentError`** : if the check can be performed immediately and `x[i] >= 0` is False. The check can be performed immediately during eager execution or if `x` is statically known.

#### Eager Compatibility

returns None

