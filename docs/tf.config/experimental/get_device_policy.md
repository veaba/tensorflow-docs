获取当前设备策略。

**别名** : [ `tf.compat.v1.config.experimental.get_device_policy` ](/api_docs/python/tf/config/experimental/get_device_policy), [ `tf.compat.v2.config.experimental.get_device_policy` ](/api_docs/python/tf/config/experimental/get_device_policy)

```
 tf.config.experimental.get_device_policy()
 
```

The device policy controls how operations requiring inputs on a specificdevice (e.g., on GPU:0) handle inputs on a different device (e.g. GPU:1).

This function only gets the device policy for the current thread. Anysubsequently started thread will again use the default policy.

#### 返回：
当前线程设备策略

