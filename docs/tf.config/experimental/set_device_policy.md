Sets the current thread device policy.
### Aliases:
- `tf.compat.v1.config.experimental.set_device_policy`
- `tf.compat.v2.config.experimental.set_device_policy`

```
 tf.config.experimental.set_device_policy(device_policy)
```
The device policy controls how operations requiring inputs on a specific device (e.g., on GPU:0) handle inputs on a different device (e.g. GPU:1).
When using the default, an appropriate policy will be picked automatically. The default policy may change over time.
This function only sets the device policy for the current thread. Any subsequently started thread will again use the default policy.
#### Args:
- `device_policy`: A device policy. Valid values:
None: Switch to a system default.
'warn': Copies the tensors which are not on the right device and logs a warning.
'explicit': Raises an error if the placement is not as required.
'silent': Silently copies the tensors. Note that this may hide performance problems as there is no notification provided when operations are blocked on the tensor being copied between devices.
'silent_for_`int32`': silently copies `int32` tensors, raising errors on the other ones.
- ``N``o``n``e``:`` ``S``w``i``t``c``h`` ``t``o`` ``a`` ``s``y``s``t``e``m`` ``d``e``f``a``u``l``t``.``
- ``'``w``a``r``n``'``:`` ``C``o``p``i``e``s`` ``t``h``e`` ``t``e``n``s``o``r``s`` ``w``h``i``c``h`` ``a``r``e`` ``n``o``t`` ``o``n`` ``t``h``e`` ``r``i``g``h``t`` ``d``e``v``i``c``e`` ``a``n``d`` ``l``o``g``s`` ``a`` ``w``a``r``n``i``n``g``.``
- ``'``e``x``p``l``i``c``i``t``'``:`` ``R``a``i``s``e``s`` ``a``n`` ``e``r``r``o``r`` ``i``f`` ``t``h``e`` ``p``l``a``c``e``m``e``n``t`` ``i``s`` ``n``o``t`` ``a``s`` ``r``e``q``u``i``r``e``d``.``
- ``'``s``i``l``e``n``t``'``:`` ``S``i``l``e``n``t``l``y`` ``c``o``p``i``e``s`` ``t``h``e`` ``t``e``n``s``o``r``s``.`` ``N``o``t``e`` ``t``h``a``t`` ``t``h``i``s`` ``m``a``y`` ``h``i``d``e`` ``p``e``r``f``o``r``m``a``n``c``e`` ``p``r``o``b``l``e``m``s`` ``a``s`` ``t``h``e``r``e`` ``i``s`` ``n``o`` ``n``o``t``i``f``i``c``a``t``i``o``n`` ``p``r``o``v``i``d``e``d`` ``w``h``e``n`` ``o``p``e``r``a``t``i``o``n``s`` ``a``r``e`` ``b``l``o``c``k``e``d`` ``o``n`` ``t``h``e`` ``t``e``n``s``o``r`` ``b``e``i``n``g`` ``c``o``p``i``e``d`` ``b``e``t``w``e``e``n`` ``d``e``v``i``c``e``s``.``
- 'silent_for_`int32`': silently copies `int32` tensors, raising errors on the other ones.
#### Raises:
- `ValueError`: If an invalid `device_policy` is passed.
