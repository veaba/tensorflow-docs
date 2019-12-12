返回运行时创建的逻辑设备列表。

**别名** : [ `tf.compat.v1.config.experimental.list_logical_devices` ](/api_docs/python/tf/config/experimental/list_logical_devices), [ `tf.compat.v2.config.experimental.list_logical_devices` ](/api_docs/python/tf/config/experimental/list_logical_devices)

```
 tf.config.experimental.list_logical_devices(device_type=None)
 
```

### 在指南中使用：
- [Use a GPU](https://tensorflow.google.cn/guide/gpu)
Logical devices may correspond to physical devices or remote devices in thecluster. Operations and tensors may be placed on these devices by using the `name`  of the LogicalDevice.

#### 例如：


```
 logical_devices = tf.config.experimental.list_logical_devices('GPU')
# Allocate on GPU:0
with tf.device(logical_devices[0].name):
  one = tf.constant(1)
# Allocate on GPU:1
with tf.device(logical_devices[1].name):
  two = tf.constant(2)
 
```

#### 参数：
- **`device_type`** : (optional) Device type to filter by such as "CPU" or "GPU"


#### 返回：
逻辑设备对象列表

