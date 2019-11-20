[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/config/optimizer/get_experimental_options)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/config.py#L101-L114)  
---|---  
  
Get experimental optimizer options.

### Aliases:

  * [`tf.compat.v1.config.optimizer.get_experimental_options`](/api_docs/python/tf/config/optimizer/get_experimental_options)
  * [`tf.compat.v2.config.optimizer.get_experimental_options`](/api_docs/python/tf/config/optimizer/get_experimental_options)

    
    
    tf.config.optimizer.get_experimental_options()
    

Refer to tf.config.optimizer.set_experimental_options for a list of current
options.

Note that optimizations are only applied in graph mode, (within tf.function).
In addition, as these are experimental options, the list is subject to change.

#### Returns:

Dictionary of configured experimental optimizer options

