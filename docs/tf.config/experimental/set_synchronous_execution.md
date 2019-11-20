[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/config/experimental/set_synchronous_execution)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/config.py#L271-L293)  
  
  
Specifies whether operations are executed synchronously or asynchronously.

### Aliases:

  * [`tf.compat.v1.config.experimental.set_synchronous_execution`](/api_docs/python/tf/config/experimental/set_synchronous_execution)
  * [`tf.compat.v2.config.experimental.set_synchronous_execution`](/api_docs/python/tf/config/experimental/set_synchronous_execution)

    
    
    tf.config.experimental.set_synchronous_execution(enable)
    

TensorFlow can execute operations synchronously or asynchronously. If
asynchronous execution is enabled, operations may return "non-ready" handles.

When `enable` is set to None, an appropriate value will be picked
automatically. The value picked may change between TensorFlow releases.

#### Args:

  * **`enable`** : Whether operations should be dispatched synchronously. Valid values: 
    * None: sets the system default.
    * True: executes each operation synchronously.
    * False: executes each operation asynchronously.

