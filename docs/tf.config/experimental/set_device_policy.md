Sets the current thread device policy.



### Aliases:

- [ `tf.compat.v1.config.experimental.set_device_policy` ](/api_docs/python/tf/config/experimental/set_device_policy)

- [ `tf.compat.v2.config.experimental.set_device_policy` ](/api_docs/python/tf/config/experimental/set_device_policy)



```
 tf.config.experimental.set_device_policy(device_policy)
 
```

The device policy controls how operations requiring inputs on a specific
device (e.g., on GPU:0) handle inputs on a different device (e.g. GPU:1).

When using the default, an appropriate policy will be picked automatically.
The default policy may change over time.

This function only sets the device policy for the current thread. Any
subsequently started thread will again use the default policy.



#### Args:

- **`device_policy`** : A device policy.
Valid values:



    - None: Switch to a system default.

    - 'warn': Copies the tensors which are not on the right device and logs
a warning.

    - 'explicit': Raises an error if the placement is not as required.

    - 'silent': Silently copies the tensors. Note that this may hide
performance problems as there is no notification provided when
operations are blocked on the tensor being copied between devices.

    - 'silent_for_int32': silently copies  `int32`  tensors, raising errors on
the other ones.



#### Raises:

- **`ValueError`** : If an invalid  `device_policy`  is passed.

