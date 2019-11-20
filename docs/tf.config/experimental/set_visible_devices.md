[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/config/experimental/set_visible_devices)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/config.py#L379-L406)  
---|---  
  
Set the list of visible devices.

### Aliases:

  * [`tf.compat.v1.config.experimental.set_visible_devices`](/api_docs/python/tf/config/experimental/set_visible_devices)
  * [`tf.compat.v2.config.experimental.set_visible_devices`](/api_docs/python/tf/config/experimental/set_visible_devices)

    
    
    tf.config.experimental.set_visible_devices(
        devices,
        device_type=None
    )
    

### Used in the guide:

  * [Use a GPU](https://tensorflow.google.cn/guide/gpu)

Sets the list of PhysicalDevices to be marked as visible to the runtime. Any
devices that are not marked as visible means TensorFlow will not allocate
memory on it and will not be able to place any operations on it as no
LogicalDevice will be created on it. By default all discovered devices are
marked as visible.

The following example demonstrates disabling the first GPU on the machine.

    
    
    physical_devices = config.experimental.list_physical_devices('GPU')
    assert len(physical_devices) > 0, "Not enough GPU hardware devices available"
    # Disable first GPU
    tf.config.experimental.set_visible_devices(physical_devices[1:], 'GPU')
    logical_devices = config.experimental.list_logical_devices('GPU')
    # Logical device was not created for first GPU
    assert len(logical_devices) == len(physical_devices) - 1
    

#### Args:

  * **`devices`** : (optional) List of PhysicalDevice objects to make visible
  * **`device_type`** : (optional) Device types to limit visibility configuration to. Other device types will be left unaltered.

