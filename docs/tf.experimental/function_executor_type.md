[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/experimental/function_executor_type)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/eager/context.py#L1786-L1806)  
---|---  
  
Context manager for setting the executor of eager defined functions.

### Aliases:

  * [`tf.compat.v1.experimental.function_executor_type`](/api_docs/python/tf/experimental/function_executor_type)
  * [`tf.compat.v2.experimental.function_executor_type`](/api_docs/python/tf/experimental/function_executor_type)

    
    
    tf.experimental.function_executor_type(executor_type)
    

Eager defined functions are functions decorated by tf.contrib.eager.defun.

#### Args:

  * **`executor_type`** : a string for the name of the executor to be used to execute functions defined by tf.contrib.eager.defun.

#### Yields:

Context manager for setting the executor of eager defined functions.

