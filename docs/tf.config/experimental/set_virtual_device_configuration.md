为物理设备设置虚拟设备配置。

**别名** : [ `tf.compat.v1.config.experimental.set_virtual_device_configuration` ](/api_docs/python/tf/config/experimental/set_virtual_device_configuration), [ `tf.compat.v2.config.experimental.set_virtual_device_configuration` ](/api_docs/python/tf/config/experimental/set_virtual_device_configuration)

```
 tf.config.experimental.set_virtual_device_configuration(
    device,
    virtual_devices
)
 
```

### 在指南中使用：
- [Use a GPU](https://tensorflow.google.cn/guide/gpu)
A PhysicalDevice marked as visible will by default have a single LogicalDeviceallocated to it once the runtime is configured. Specifying a list oftf.config.experimental.VirtualDeviceConfiguration objects allows multipledevices to be configured that utilize the same PhysicalDevice.

以下示例将CPU拆分为两个虚拟设备：

```
 physical_devices = tf.config.experimental.list_physical_devices('CPU')
assert len(physical_devices) == 1, "No CPUs found"
# Specify 2 virtual CPUs. Note currently memory limit is not supported.
tf.config.experimental.set_virtual_device_configuration(
  physical_devices[0],
  [tf.config.experimental.VirtualDeviceConfiguration(),
   tf.config.experimental.VirtualDeviceConfiguration()])
logical_devices = tf.config.experimental.list_logical_devices('CPU')
assert len(logical_devices) == 2

try:
  tf.config.experimental.set_virtual_device_configuration(
    physical_devices[0],
    [tf.config.experimental.VirtualDeviceConfiguration(),
     tf.config.experimental.VirtualDeviceConfiguration(),
     tf.config.experimental.VirtualDeviceConfiguration(),
     tf.config.experimental.VirtualDeviceConfiguration()])
除外：
  print('Cannot modify the virtual devices once they have been initialized.')
 
```

The following example splits the GPU into 2 virtual devices with 100 MB each:

```
 physical_devices = tf.config.experimental.list_physical_devices('GPU')
assert len(physical_devices) > 0, "No GPUs found"
tf.config.experimental.set_virtual_device_configuration(
  physical_devices[0],
  [tf.config.experimental.VirtualDeviceConfiguration(memory_limit=100),
   tf.config.experimental.VirtualDeviceConfiguration(memory_limit=100)])

try:
  tf.config.experimental.set_memory_growth(physical_devices[0], True)
除外：
  print('Cannot set memory growth when virtual devices configured')

logical_devices = tf.config.experimental.list_logical_devices('GPU')
assert len(logical_devices) == len(physical_devices) + 1

try:
  tf.config.experimental.set_virtual_device_configuration(
    physical_devices[0],
    [tf.config.experimental.VirtualDeviceConfiguration(memory_limit=10),
     tf.config.experimental.VirtualDeviceConfiguration(memory_limit=10)])
除外：
  print('Cannot modify the virtual devices once they have been initialized.')
 
```

#### 参数：
- **`device`** : (optional) Need to update
- **`virtual_devices`** : (optional) Need to update
