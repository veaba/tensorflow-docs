设置是否启用软设备放置。

**别名** : [ `tf.compat.v1.config.set_soft_device_placement` ](/api_docs/python/tf/config/set_soft_device_placement), [ `tf.compat.v2.config.set_soft_device_placement` ](/api_docs/python/tf/config/set_soft_device_placement)

```
 tf.config.set_soft_device_placement(enabled)
 
```

### 在指南中使用：
- [Use a GPU](https://tensorflow.google.cn/guide/gpu)
If enabled, an op will be placed on CPU if any of the following are true  1. there's no GPU implementation for the OP  2. no GPU devices are known or registered  3. need to co-locate with reftype input(s) which are from CPU

#### 参数：
- **`enabled`** : Whether to enable soft placement.
