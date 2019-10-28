Set if memory growth should be enabled for a PhysicalDevice.
### Aliases:
- `tf.compat.v1.config.experimental.set_memory_growth`
- `tf.compat.v2.config.experimental.set_memory_growth`

```
 tf.config.experimental.set_memory_growth(
    device,
    enable
)
```
### Used in the guide:
- ``U``s``e`` ``a`` ``G``P``U``
- ``U``s``i``n``g`` ``t``h``e`` ``S``a``v``e``d``M``o``d``e``l`` ``f``o``r``m``a``t``
A PhysicalDevice with memory growth set will not allocate all memory on the device upfront. Memory growth cannot be configured on a PhysicalDevice with virtual devices configured.
#### For example:

```
 physical_devices = tf.config.experimental.list_physical_devices('GPU')
assert len(physical_devices) > 0, "Not enough GPU hardware devices available"
tf.config.experimental.set_memory_growth(physical_devices[0], True)
```
#### Args:
- `device`: PhysicalDevice to configure
- `enable`: Whether to `enable` or disable memory growth
