设置当前线程设备策略。

**别名** : [ `tf.compat.v1.config.experimental.set_device_policy` ](/api_docs/python/tf/config/experimental/set_device_policy), [ `tf.compat.v2.config.experimental.set_device_policy` ](/api_docs/python/tf/config/experimental/set_device_policy)

```
 tf.config.experimental.set_device_policy(device_policy)
 
```

The device policy controls how operations requiring inputs on a specificdevice (e.g., on GPU:0) handle inputs on a different device (e.g. GPU:1).

When using the default, an appropriate policy will be picked automatically.The default policy may change over time.

This function only sets the device policy for the current thread. Anysubsequently started thread will again use the default policy.

#### 参数：
- **`device_policy`** : A device policy.Valid values:
    - None: Switch to a system default.
    - 'warn': Copies the tensors which are not on the right device and logsa warning.
    - 'explicit': Raises an error if the placement is not as required.
    - 'silent': Silently copies the tensors. Note that this may hideperformance problems as there is no notification provided whenoperations are blocked on the tensor being copied between devices.
    - 'silent_for_int32': silently copies  `int32`  tensors, raising errors onthe other ones.


#### 加薪：
- **`ValueError`** : If an invalid  `device_policy`  is passed.
