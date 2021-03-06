获取物理设备的虚拟设备配置。

**别名** : [ `tf.compat.v1.config.experimental.get_virtual_device_configuration` ](/api_docs/python/tf/config/experimental/get_virtual_device_configuration), [ `tf.compat.v2.config.experimental.get_virtual_device_configuration` ](/api_docs/python/tf/config/experimental/get_virtual_device_configuration)

```
 tf.config.experimental.get_virtual_device_configuration(device)
 
```

Returns the list of VirtualDeviceConfiguration objects previously configuredby a call to [ `tf.config.experimental.set_virtual_device_configuration()` ](https://tensorflow.google.cn/api_docs/python/tf/config/experimental/set_virtual_device_configuration).

#### 例如：


```
 physical_devices = tf.config.experimental.list_physical_devices('CPU')
assert len(physical_devices) == 1, "No CPUs found"
configs = tf.config.experimental.get_virtual_device_configuration(
    physical_devices[0])
assert configs is None
tf.config.experimental.set_virtual_device_configuration(
    physical_devices[0],
    [tf.config.experimental.VirtualDeviceConfiguration(),
     tf.config.experimental.VirtualDeviceConfiguration()])
configs = tf.config.experimental.get_virtual_device_configuration(
    physical_devices[0])
assert len(configs) == 2
 
```

#### 参数：
- **`device`** : PhysicalDevice to query


#### 返回：
List of [ `tf.config.experimental.VirtualDeviceConfiguration` ](https://tensorflow.google.cn/api_docs/python/tf/config/experimental/VirtualDeviceConfiguration) objects or `None`  if no virtual device configuration has been set for this physicaldevice.

