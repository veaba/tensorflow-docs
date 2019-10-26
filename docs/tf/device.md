Specifies the device for ops created/executed in this context.
### Aliases:
- tf.compat.v2.device

```
 tf.device(device_name)
```
### Used in the guide:
- Use a GPU
- Eager execution
- Recurrent Neural Networks (RNN) with Keras
### Used in the tutorials:
- Customization basics: tensors and operations
device_name can be fully specified, as in "/job:worker/task:1/device:cpu:0", or partially specified, containing only a subset of the "/"-separated fields. Any fields which are specified override device annotations from outer scopes. For example:

```
 with tf.device('/job:foo'):
  # ops created here have devices with /job:foo
  with tf.device('/job:bar/task:0/device:gpu:2'):
    # ops created here have the fully specified device above
  with tf.device('/device:gpu:1'):
    # ops created here have the device '/job:foo/device:gpu:1'
```
#### Args:
- device_name: The device name to use in the context.
#### Returns:
A context manager that specifies the default device to use for newly created ops.
#### Raises:
- RuntimeError: If a function is passed in.
