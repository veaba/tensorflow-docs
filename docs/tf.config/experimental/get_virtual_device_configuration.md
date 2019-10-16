
Get the virtual device configuration for a PhysicalDevice.
### Aliases:
- `tf.compat.v1.config.experimental.get_virtual_device_configuration`
- `tf.compat.v2.config.experimental.get_virtual_device_configuration`

```
 tf.config.experimental.get_virtual_device_configuration(device)
```
[tf.config.experimental.set_virtual_device_configuration()](https://www.tensorflow.org/api_docs/python/tf/config/experimental/set_virtual_device_configuration)Returns the list of VirtualDeviceConfiguration objects previously configured by a call to .

#### For example:

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
#### Args:
- `device`: PhysicalDevice to query
#### Returns:
[tf.config.experimental.VirtualDeviceConfiguration](https://www.tensorflow.org/api_docs/python/tf/config/experimental/VirtualDeviceConfiguration)List of  objects or None if no virtual device configuration has been set for this physical device.

