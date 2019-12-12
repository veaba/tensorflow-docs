

## Class  `VirtualDeviceConfiguration` 
物理设备的虚拟设备的配置类。

**别名** : [ `tf.compat.v1.config.experimental.VirtualDeviceConfiguration` ](/api_docs/python/tf/config/experimental/VirtualDeviceConfiguration), [ `tf.compat.v2.config.experimental.VirtualDeviceConfiguration` ](/api_docs/python/tf/config/experimental/VirtualDeviceConfiguration)

### 在指南中使用：
- [Use a GPU](https://tensorflow.google.cn/guide/gpu)


#### 字段：
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

## 属性


###  `memory_limit` 
