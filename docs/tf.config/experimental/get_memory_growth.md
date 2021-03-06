如果物理设备启用了内存增长，则获取。

**别名** : [ `tf.compat.v1.config.experimental.get_memory_growth` ](/api_docs/python/tf/config/experimental/get_memory_growth), [ `tf.compat.v2.config.experimental.get_memory_growth` ](/api_docs/python/tf/config/experimental/get_memory_growth)

```
 tf.config.experimental.get_memory_growth(device)
 
```

A PhysicalDevice with memory growth set will not allocate all memory on thedevice upfront.

#### 例如：


```
 physical_devices = config.experimental.list_physical_devices('GPU')
assert len(physical_devices) > 0, "Not enough GPU hardware devices available"
tf.config.experimental.set_memory_growth(physical_devices[0], True)
assert tf.config.experimental.get_memory_growth(physical_devices[0]) == True
 
```

#### 参数：
- **`device`** : PhysicalDevice to query


#### 返回：
当前内存增长设置。

