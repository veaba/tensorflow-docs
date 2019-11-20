[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/debugging/assert_none_equal) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/check_ops.py#L565-L600)  
  
  
Assert the condition `x != y` holds for all elements.

### Aliases:

  * [`tf.compat.v2.debugging.assert_none_equal`](/api_docs/python/tf/debugging/assert_none_equal)

    
    
    tf.debugging.assert_none_equal(
        x,
        y,
        summarize=None,
        message=None,
        name=None
    )
    

This Op checks that `x[i] != y[i]` holds for every pair of (possibly
broadcast) elements of `x` and `y`. If both `x` and `y` are empty, this is
trivially satisfied.

If any elements of `x` and `y` are equal, `message`, as well as the first
`summarize` entries of `x` and `y` are printed, and `InvalidArgumentError` is
raised.

#### Args:

  * **`x`** : Numeric `Tensor`.
  * **`y`** : Numeric `Tensor`, same dtype as and broadcastable to `x`.
  * **`summarize`** : Print this many entries of each tensor.
  * **`message`** : A string to prefix to the default message.
  * **`name`** : A name for this operation (optional). Defaults to "assert_none_equal".

#### Returns:

Op that raises `InvalidArgumentError` if `x != y` is ever False. This can be
used with
[`tf.control_dependencies`](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies)
inside of
[`tf.function`](https://tensorflow.google.cn/api_docs/python/tf/function)s to
block followup computation until the check has executed.

#### Raises:

  * **`InvalidArgumentError`** : if the check can be performed immediately and `x != y` is False for any pair of elements in `x` and `y`. The check can be performed immediately during eager execution or if `x` and `y` are statically known.

#### Eager Compatibility

returns None

