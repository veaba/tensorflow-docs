Sets the default summary step for the current thread.
### Aliases:
- tf.compat.v2.summary.experimental.set_step

```
 tf.summary.experimental.set_step(step)
```
[tf.summary.experimental.get_step()](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step)For convenience, this function sets a default value for the step parameter used in summary-writing functions elsewhere in the API so that it need not be explicitly passed in every such invocation. The value can be a constant or a variable, and can be retrieved via .

#### Args:
- step: An int64-castable default step value, or None to unset.
