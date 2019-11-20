[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/config/experimental/get_device_policy)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/config.py#L189-L212)  
---|---  
  
Gets the current device policy.

### Aliases:

  * [`tf.compat.v1.config.experimental.get_device_policy`](/api_docs/python/tf/config/experimental/get_device_policy)
  * [`tf.compat.v2.config.experimental.get_device_policy`](/api_docs/python/tf/config/experimental/get_device_policy)

    
    
    tf.config.experimental.get_device_policy()
    

The device policy controls how operations requiring inputs on a specific
device (e.g., on GPU:0) handle inputs on a different device (e.g. GPU:1).

This function only gets the device policy for the current thread. Any
subsequently started thread will again use the default policy.

#### Returns:

Current thread device policy

