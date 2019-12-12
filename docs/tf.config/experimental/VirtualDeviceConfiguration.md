

## Class  `VirtualDeviceConfiguration` 
Configuration class for virtual devices for a PhysicalDevice.

**Aliases** : [ `tf.compat.v1.config.experimental.VirtualDeviceConfiguration` ](/api_docs/python/tf/config/experimental/VirtualDeviceConfiguration), [ `tf.compat.v2.config.experimental.VirtualDeviceConfiguration` ](/api_docs/python/tf/config/experimental/VirtualDeviceConfiguration)

### Used in the guide:
- [Use a GPU](https://tensorflow.google.cn/guide/gpu)


#### Fields:
- **`memory_limit`** : (optional) Maximum memory (in MB) to allocate on the virtualdevice. Currently only supported for GPUs.


##  `__new__` 
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


###  `memory_limit` 
