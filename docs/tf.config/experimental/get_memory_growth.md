Get if memory growth is enabled for a PhysicalDevice.
### Aliases:
- tf.compat.v1.config.experimental.get_memory_growth
- tf.compat.v2.config.experimental.get_memory_growth

```
 tf.config.experimental.get_memory_growth(device)
```
A PhysicalDevice with memory growth set will not allocate all memory on the device upfront.
#### For example:

```
 physical_devices = config.experimental.list_physical_devices('GPU')
assert len(physical_devices) > 0, "Not enough GPU hardware devices available"
tf.config.experimental.set_memory_growth(physical_devices[0], True)
assert tf.config.experimental.get_memory_growth(physical_devices[0]) == True
```
#### Args:
- device: PhysicalDevice to query
#### Returns:
Current memory growth setting.
