
Return a list of physical devices visible to the runtime.
### Aliases:
- `tf.compat.v1.config.experimental.list_physical_devices`
- `tf.compat.v2.config.experimental.list_physical_devices`

```
 tf.config.experimental.list_physical_devices(device_type=None)
```
### Used in the guide:
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``U``s``e`` ``a`` ``G``P``U``
### Used in the tutorials:
- ``C``u``s``t``o``m``i``z``a``t``i``o``n`` ``b``a``s``i``c``s``:`` ``t``e``n``s``o``r``s`` ``a``n``d`` ``o``p``e``r``a``t``i``o``n``s``
- ``T``e``x``t`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n`` ``w``i``t``h`` ``T``e``n``s``o``r``F``l``o``w`` ``H``u``b``:`` ``M``o``v``i``e`` ``r``e``v``i``e``w``s``

Physical devices are hardware devices locally present on the current machine. By default all discovered CPU and GPU devices are considered visible. The list_physical_devices allows querying the hardware prior to runtime initialization.

The following example ensures the machine can see at least 1 GPU.

```
 physical_devices = tf.config.experimental.list_physical_devices('GPU')
assert len(physical_devices) > 0, "No GPUs found."
```
#### Args:
- `device_type`: (optional) Device type to filter by such as "CPU" or "GPU"
#### Returns:

List of PhysicalDevice objects
