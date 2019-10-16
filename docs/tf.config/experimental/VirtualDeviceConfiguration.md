## Class VirtualDeviceConfiguration

Configuration class for virtual devices for a PhysicalDevice.
### Aliases:
- Class `tf.compat.v1.config.experimental.VirtualDeviceConfiguration`
- Class `tf.compat.v2.config.experimental.VirtualDeviceConfiguration`
### Used in the guide:
- ``U``s``e`` ``a`` ``G``P``U``
#### Fields:
- `memory_limit`: (optional) Maximum memory (in MB) to allocate on the virtual device. Currently only supported for GPUs.
## __new__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/eager/context.py#L272-L273)


```
 @staticmethod
__new__(
    cls,
    memory_limit=None
)
```

Create new instance of VirtualDeviceConfiguration(memory_limit,)
## Properties
### memory_limit
