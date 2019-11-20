[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/config/experimental/get_synchronous_execution)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/config.py#L258-L268)  
---|---  
  
Gets whether operations are executed synchronously or asynchronously.

### Aliases:

  * [`tf.compat.v1.config.experimental.get_synchronous_execution`](/api_docs/python/tf/config/experimental/get_synchronous_execution)
  * [`tf.compat.v2.config.experimental.get_synchronous_execution`](/api_docs/python/tf/config/experimental/get_synchronous_execution)

    
    
    tf.config.experimental.get_synchronous_execution()
    

TensorFlow can execute operations synchronously or asynchronously. If
asynchronous execution is enabled, operations may return "non-ready" handles.

#### Returns:

Current thread execution mode

