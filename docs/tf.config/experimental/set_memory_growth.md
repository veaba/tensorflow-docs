[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/config/experimental/set_memory_growth)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/config.py#L434-L454)  
---|---  
  
Set if memory growth should be enabled for a PhysicalDevice.

### Aliases:

  * [`tf.compat.v1.config.experimental.set_memory_growth`](/api_docs/python/tf/config/experimental/set_memory_growth)
  * [`tf.compat.v2.config.experimental.set_memory_growth`](/api_docs/python/tf/config/experimental/set_memory_growth)

    
    
    tf.config.experimental.set_memory_growth(
        device,
        enable
    )
    

### Used in the guide:

  * [Use a GPU](https://tensorflow.google.cn/guide/gpu)
  * [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)

A PhysicalDevice with memory growth set will not allocate all memory on the
device upfront. Memory growth cannot be configured on a PhysicalDevice with
virtual devices configured.

#### For example:

    
    
    physical_devices = tf.config.experimental.list_physical_devices('GPU')
    assert len(physical_devices) > 0, "Not enough GPU hardware devices available"
    tf.config.experimental.set_memory_growth(physical_devices[0], True)
    

#### Args:

  * **`device`** : PhysicalDevice to configure
  * **`enable`** : Whether to enable or disable memory growth

