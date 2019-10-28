Enables eager execution for the lifetime of this program.

```
 tf.compat.v1.enable_eager_execution(
    config=None,
    device_policy=None,
    execution_mode=None
)
```
[tf.compat.v1.Session](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session)

#### For example:

```
 tf.compat.v1.enable_eager_execution()

# After eager execution is enabled, operations are executed as they are
# defined and Tensor objects hold concrete values, which can be accessed as
# numpy.ndarray`s through the numpy() method.
assert tf.multiply(6, 7).numpy() == 42
```
Eager execution cannot be enabled after TensorFlow APIs have been used to create or execute graphs. It is typically recommended to invoke this function at program startup and not in a library (as most libraries should be usable both with and without eager execution).
#### Args:
- `config`: (Optional.) A `tf.compat.v1.ConfigProto` to use to `config`ure the environment in which operations are executed. Note that `tf.compat.v1.ConfigProto` is also used to `config`ure graph execution (via `tf.compat.v1.Session`) and many options within `tf.compat.v1.ConfigProto` are not implemented (or are irrelevant) when eager execution is enabled.
- `device_policy`: (Optional.) Policy controlling how operations requiring inputs on a specific device (e.g., a GPU 0) handle inputs on a different device (e.g. GPU 1 or CPU). When set to None, an appropriate value will be picked automatically. The value picked may change between TensorFlow releases. Valid values:
tf.contrib.eager.DEVICE_PLACEMENT_EXPLICIT: raises an error if the placement is not correct.
tf.contrib.eager.DEVICE_PLACEMENT_WARN: copies the tensors which are not on the right device but logs a warning.
tf.contrib.eager.DEVICE_PLACEMENT_SILENT: silently copies the tensors. Note that this may hide performance problems as there is no notification provided when operations are blocked on the tensor being copied between devices.
tf.contrib.eager.DEVICE_PLACEMENT_SILENT_FOR_INT32: silently copies int32 tensors, raising errors on the other ones.
- ``t``f``.``c``o``n``t``r``i``b``.``e``a``g``e``r``.``D``E``V``I``C``E``_``P``L``A``C``E``M``E``N``T``_``E``X``P``L``I``C``I``T``:`` ``r``a``i``s``e``s`` ``a``n`` ``e``r``r``o``r`` ``i``f`` ``t``h``e`` ``p``l``a``c``e``m``e``n``t`` ``i``s`` ``n``o``t`` ``c``o``r``r``e``c``t``.``
- ``t``f``.``c``o``n``t``r``i``b``.``e``a``g``e``r``.``D``E``V``I``C``E``_``P``L``A``C``E``M``E``N``T``_``W``A``R``N``:`` ``c``o``p``i``e``s`` ``t``h``e`` ``t``e``n``s``o``r``s`` ``w``h``i``c``h`` ``a``r``e`` ``n``o``t`` ``o``n`` ``t``h``e`` ``r``i``g``h``t`` ``d``e``v``i``c``e`` ``b``u``t`` ``l``o``g``s`` ``a`` ``w``a``r``n``i``n``g``.``
- ``t``f``.``c``o``n``t``r``i``b``.``e``a``g``e``r``.``D``E``V``I``C``E``_``P``L``A``C``E``M``E``N``T``_``S``I``L``E``N``T``:`` ``s``i``l``e``n``t``l``y`` ``c``o``p``i``e``s`` ``t``h``e`` ``t``e``n``s``o``r``s``.`` ``N``o``t``e`` ``t``h``a``t`` ``t``h``i``s`` ``m``a``y`` ``h``i``d``e`` ``p``e``r``f``o``r``m``a``n``c``e`` ``p``r``o``b``l``e``m``s`` ``a``s`` ``t``h``e``r``e`` ``i``s`` ``n``o`` ``n``o``t``i``f``i``c``a``t``i``o``n`` ``p``r``o``v``i``d``e``d`` ``w``h``e``n`` ``o``p``e``r``a``t``i``o``n``s`` ``a``r``e`` ``b``l``o``c``k``e``d`` ``o``n`` ``t``h``e`` ``t``e``n``s``o``r`` ``b``e``i``n``g`` ``c``o``p``i``e``d`` ``b``e``t``w``e``e``n`` ``d``e``v``i``c``e``s``.``
- ``t``f``.``c``o``n``t``r``i``b``.``e``a``g``e``r``.``D``E``V``I``C``E``_``P``L``A``C``E``M``E``N``T``_``S``I``L``E``N``T``_``F``O``R``_``I``N``T``3``2``:`` ``s``i``l``e``n``t``l``y`` ``c``o``p``i``e``s`` ``i``n``t``3``2`` ``t``e``n``s``o``r``s``,`` ``r``a``i``s``i``n``g`` ``e``r``r``o``r``s`` ``o``n`` ``t``h``e`` ``o``t``h``e``r`` ``o``n``e``s``.``
- `execution_mode`: (Optional.) Policy controlling how operations dispatched are actually executed. When set to None, an appropriate value will be picked automatically. The value picked may change between TensorFlow releases. Valid values:
tf.contrib.eager.SYNC: executes each operation synchronously.
tf.contrib.eager.ASYNC: executes each operation asynchronously. These operations may return "non-ready" handles.
- ``t``f``.``c``o``n``t``r``i``b``.``e``a``g``e``r``.``S``Y``N``C``:`` ``e``x``e``c``u``t``e``s`` ``e``a``c``h`` ``o``p``e``r``a``t``i``o``n`` ``s``y``n``c``h``r``o``n``o``u``s``l``y``.``
- ``t``f``.``c``o``n``t``r``i``b``.``e``a``g``e``r``.``A``S``Y``N``C``:`` ``e``x``e``c``u``t``e``s`` ``e``a``c``h`` ``o``p``e``r``a``t``i``o``n`` ``a``s``y``n``c``h``r``o``n``o``u``s``l``y``.`` ``T``h``e``s``e`` ``o``p``e``r``a``t``i``o``n``s`` ``m``a``y`` ``r``e``t``u``r``n`` ``"``n``o``n``-``r``e``a``d``y``"`` ``h``a``n``d``l``e``s``.``
#### Raises:
- `ValueError`: If eager execution is enabled after creating/executing a TensorFlow graph, or if options provided conflict with a previous call to this function.
