获取可见物理设备的列表。

**别名** : [ `tf.compat.v1.config.experimental.get_visible_devices` ](/api_docs/python/tf/config/experimental/get_visible_devices), [ `tf.compat.v2.config.experimental.get_visible_devices` ](/api_docs/python/tf/config/experimental/get_visible_devices)

```
 tf.config.experimental.get_visible_devices(device_type=None)
 
```

Returns a list of PhysicalDevice objects that are current marked as visible tothe runtime. Any visible devices will have LogicalDevices assigned to themonce the runtime is initialized.

以下示例验证是否已禁用所有可见的GPU：

```
 physical_devices = config.experimental.list_physical_devices('GPU')
assert len(physical_devices) > 0, "Not enough GPU hardware devices available"
# Disable all GPUS
tf.config.experimental.set_visible_devices([], 'GPU')
visible_devices = tf.config.experimental.get_visible_devices()
for device in visible_devices:
  assert device.device_type != 'GPU'
 
```

#### 参数：
- **`device_type`** : (optional) Device types to limit query to.


#### 返回：
物理设备对象列表

