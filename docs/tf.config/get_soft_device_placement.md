如果启用软设备放置，则获取。

**别名** : [ `tf.compat.v1.config.get_soft_device_placement` ](/api_docs/python/tf/config/get_soft_device_placement), [ `tf.compat.v2.config.get_soft_device_placement` ](/api_docs/python/tf/config/get_soft_device_placement)

```
 tf.config.get_soft_device_placement()
 
```

If enabled, an op will be placed on CPU if any of the following are true  1. there's no GPU implementation for the OP  2. no GPU devices are known or registered  3. need to co-locate with reftype input(s) which are from CPU

#### 返回：
如果启用软放置。

