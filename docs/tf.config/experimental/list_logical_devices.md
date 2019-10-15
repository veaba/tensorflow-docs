
Return a list of logical devices created by runtime.
### Aliases:
- `tf.compat.v1.config.experimental.list_logical_devices`
- `tf.compat.v2.config.experimental.list_logical_devices`

```
 tf.config.experimental.list_logical_devices(device_type=None)
```
### Used in the guide:
- ``U``s``e`` ``a`` ``G``P``U``

Logical devices may correspond to physical devices or remote devices in the cluster. Operations and tensors may be placed on these devices by using the name of the LogicalDevice.
#### For example:

```
 logical_devices = tf.config.experimental.list_logical_devices('GPU')
# Allocate on GPU:0
with tf.device(logical_devices[0].name):
  one = tf.constant(1)
# Allocate on GPU:1
with tf.device(logical_devices[1].name):
  two = tf.constant(2)
```
#### Args:
- `device_type`: (optional) Device type to filter by such as "CPU" or "GPU"
#### Returns:

List of LogicalDevice objects
