[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/config/set_soft_device_placement)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/config.py#L174-L186)  
---|---  
  
Set if soft device placement is enabled.

### Aliases:

  * [`tf.compat.v1.config.set_soft_device_placement`](/api_docs/python/tf/config/set_soft_device_placement)
  * [`tf.compat.v2.config.set_soft_device_placement`](/api_docs/python/tf/config/set_soft_device_placement)

    
    
    tf.config.set_soft_device_placement(enabled)  
    

### Used in the guide:

  * [Use a GPU](https://tensorflow.google.cn/guide/gpu)

If enabled, an op will be placed on CPU if any of the following are true 1\.
there's no GPU implementation for the OP 2\. no GPU devices are known or
registered 3\. need to co-locate with reftype input(s) which are from CPU

#### Args:

  * **`enabled`** : Whether to enable soft placement.

