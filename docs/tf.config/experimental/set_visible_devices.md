设置可见设备的列表。

**别名** : [ `tf.compat.v1.config.experimental.set_visible_devices` ](/api_docs/python/tf/config/experimental/set_visible_devices), [ `tf.compat.v2.config.experimental.set_visible_devices` ](/api_docs/python/tf/config/experimental/set_visible_devices)

```
 tf.config.experimental.set_visible_devices(
    devices,
    device_type=None
)
 
```

### 在指南中使用：
- [Use a GPU](https://tensorflow.google.cn/guide/gpu)
Sets the list of PhysicalDevices to be marked as visible to the runtime. Anydevices that are not marked as visible means TensorFlow will not allocatememory on it and will not be able to place any operations on it as noLogicalDevice will be created on it. By default all discovered devices aremarked as visible.

下面的示例演示如何禁用计算机上的第一个GPU。

```
 physical_devices = config.experimental.list_physical_devices('GPU')
assert len(physical_devices) > 0, "Not enough GPU hardware devices available"
# Disable first GPU
tf.config.experimental.set_visible_devices(physical_devices[1:], 'GPU')
logical_devices = config.experimental.list_logical_devices('GPU')
# Logical device was not created for first GPU
assert len(logical_devices) == len(physical_devices) - 1
 
```

#### 参数：
- **`devices`** : (optional) List of PhysicalDevice objects to make visible
- **`device_type`** : (optional) Device types to limit visibility configuration to.Other device types will be left unaltered.
