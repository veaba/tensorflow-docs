[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/debugging/Assert) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/control_flow_ops.py#L112-L176)  
  
  
Asserts that the given condition is true.

### Aliases:

  * [`tf.Assert`](/api_docs/python/tf/debugging/Assert)
  * [`tf.compat.v1.Assert`](/api_docs/python/tf/debugging/Assert)
  * [`tf.compat.v1.debugging.Assert`](/api_docs/python/tf/debugging/Assert)
  * [`tf.compat.v2.Assert`](/api_docs/python/tf/debugging/Assert)
  * [`tf.compat.v2.debugging.Assert`](/api_docs/python/tf/debugging/Assert)

    
    
    tf.debugging.Assert(
        condition,
        data,
        summarize=None,
        name=None
    )
    

If `condition` evaluates to false, print the list of tensors in `data`.
`summarize` determines how many entries of the tensors to print.

NOTE: In graph mode, to ensure that Assert executes, one usually attaches a
dependency:

    
    
    # Ensure maximum element of x is smaller or equal to 1
    assert_op = tf.Assert(tf.less_equal(tf.reduce_max(x), 1.), [x])
    with tf.control_dependencies([assert_op]):
      ... code using x ...
    

#### Args:

  * **`condition`** : The condition to evaluate.
  * **`data`** : The tensors to print out when condition is false.
  * **`summarize`** : Print this many entries of each tensor.
  * **`name`** : A name for this operation (optional).

#### Returns:

  * **`assert_op`** : An `Operation` that, when executed, raises a [`tf.errors.InvalidArgumentError`](https://tensorflow.google.cn/api_docs/python/tf/errors/InvalidArgumentError) if `condition` is not true.

#### Raises:

**NOTE** The output of this function should be used. If it is not, a warning
will be logged. To mark the output as used, call its .mark_used() method.

#### Eager Compatibility

[`tf.errors.InvalidArgumentError`](https://tensorflow.google.cn/api_docs/python/tf/errors/InvalidArgumentError)
if `condition` is not true

