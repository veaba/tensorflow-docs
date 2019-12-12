Enables / disables eager execution of [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function)s.

**别名** : [ `tf.compat.v1.config.experimental_run_functions_eagerly` ](/api_docs/python/tf/config/experimental_run_functions_eagerly), [ `tf.compat.v2.config.experimental_run_functions_eagerly` ](/api_docs/python/tf/config/experimental_run_functions_eagerly)

```
 tf.config.experimental_run_functions_eagerly(run_eagerly)
 
```

### 在指南中使用：
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)
After calling [ `tf.config.experimental_run_functions_eagerly(True)` ](https://tensorflow.google.cn/api_docs/python/tf/config/experimental_run_functions_eagerly) allinvocations of tf.function will run eagerly instead of running through a graphfunction.

这对于调试或分析非常有用。

Similarly, calling [ `tf.config.experimental_run_functions_eagerly(False)` ](https://tensorflow.google.cn/api_docs/python/tf/config/experimental_run_functions_eagerly) willrevert the behavior of all functions to graph functions.

#### 参数：
- **`run_eagerly`** : Boolean. Whether to run functions eagerly.
