[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/summary_ops_v2.py#L157-L173)  
---  
  
Sets the default summary step for the current thread.

### Aliases:

  * [`tf.compat.v2.summary.experimental.set_step`](/api_docs/python/tf/summary/experimental/set_step)

    
    
    tf.summary.experimental.set_step(step)
    

For convenience, this function sets a default value for the `step` parameter
used in summary-writing functions elsewhere in the API so that it need not be
explicitly passed in every such invocation. The value can be a constant or a
variable, and can be retrieved via
[`tf.summary.experimental.get_step()`](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step).

**Note:** when using this with @tf.functions, the step value will be captured
at the time the function is traced, so changes to the step outside the
function will not be reflected inside the function unless using a
[`tf.Variable`](https://tensorflow.google.cn/api_docs/python/tf/Variable)
step.

#### Args:

  * **`step`** : An `int64`-castable default step value, or None to unset.

