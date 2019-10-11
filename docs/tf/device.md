
Specifies the device for ops created/executed in this context.
### Aliases:
- `tf.compat.v2.device`

```
 tf.device(device_name)
```
### Used in the guide:
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``R``e``c``u``r``r``e``n``t`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s`` ``(``R``N``N``)`` ``w``i``t``h`` ``K``e``r``a``s``
- ``U``s``e`` ``a`` ``G``P``U``
### Used in the tutorials:
- ``C``u``s``t``o``m``i``z``a``t``i``o``n`` ``b``a``s``i``c``s``:`` ``t``e``n``s``o``r``s`` ``a``n``d`` ``o``p``e``r``a``t``i``o``n``s``

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
- `device_name`: The device name to use in the context.
#### Returns:

A context manager that specifies the default device to use for newly created ops.
#### Raises:
- `RuntimeError`: If a function is passed in.
