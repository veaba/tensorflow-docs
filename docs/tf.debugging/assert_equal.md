[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/debugging/assert_equal) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/check_ops.py#L425-L456)  
---|---  
  
Assert the condition `x == y` holds element-wise.

### Aliases:

  * [`tf.assert_equal`](/api_docs/python/tf/debugging/assert_equal)
  * [`tf.compat.v2.assert_equal`](/api_docs/python/tf/debugging/assert_equal)
  * [`tf.compat.v2.debugging.assert_equal`](/api_docs/python/tf/debugging/assert_equal)

    
    
    tf.debugging.assert_equal(
        x,
        y,
        message=None,
        summarize=None,
        name=None
    )
    

### Used in the guide:

  * [Eager execution](https://tensorflow.google.cn/guide/eager)

This Op checks that `x[i] == y[i]` holds for every pair of (possibly
broadcast) elements of `x` and `y`. If both `x` and `y` are empty, this is
trivially satisfied.

If `x` and `y` are not equal, `message`, as well as the first `summarize`
entries of `x` and `y` are printed, and `InvalidArgumentError` is raised.

#### Args:

  * **`x`** : Numeric `Tensor`.
  * **`y`** : Numeric `Tensor`, same dtype as and broadcastable to `x`.
  * **`message`** : A string to prefix to the default message.
  * **`summarize`** : Print this many entries of each tensor.
  * **`name`** : A name for this operation (optional). Defaults to "assert_equal".

#### Returns:

Op that raises `InvalidArgumentError` if `x == y` is False. This can be used
with
[`tf.control_dependencies`](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies)
inside of
[`tf.function`](https://tensorflow.google.cn/api_docs/python/tf/function)s to
block followup computation until the check has executed.

#### Raises:

  * **`InvalidArgumentError`** : if the check can be performed immediately and `x == y` is False. The check can be performed immediately during eager execution or if `x` and `y` are statically known.

#### Eager Compatibility

returns None

