[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/config/experimental_run_functions_eagerly)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/eager/def_function.py#L254-L271)  
  
  
Enables / disables eager execution of
[`tf.function`](https://tensorflow.google.cn/api_docs/python/tf/function)s.

### Aliases:

  * [`tf.compat.v1.config.experimental_run_functions_eagerly`](/api_docs/python/tf/config/experimental_run_functions_eagerly)
  * [`tf.compat.v2.config.experimental_run_functions_eagerly`](/api_docs/python/tf/config/experimental_run_functions_eagerly)

    
    
    tf.config.experimental_run_functions_eagerly(run_eagerly)
    

### Used in the guide:

  * [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)

After calling
[`tf.config.experimental_run_functions_eagerly(True)`](https://tensorflow.google.cn/api_docs/python/tf/config/experimental_run_functions_eagerly)
all invocations of tf.function will run eagerly instead of running through a
graph function.

This can be useful for debugging or profiling.

Similarly, calling
[`tf.config.experimental_run_functions_eagerly(False)`](https://tensorflow.google.cn/api_docs/python/tf/config/experimental_run_functions_eagerly)
will revert the behavior of all functions to graph functions.

#### Args:

  * **`run_eagerly`** : Boolean. Whether to run functions eagerly.

