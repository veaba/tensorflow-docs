Specifies whether operations are executed synchronously or asynchronously.
### Aliases:
- `tf.compat.v1.config.experimental.set_synchronous_execution`
- `tf.compat.v2.config.experimental.set_synchronous_execution`

```
 tf.config.experimental.set_synchronous_execution(enable)
```
TensorFlow can execute operations synchronously or asynchronously. If asynchronous execution is enabled, operations may return "non-ready" handles.
When `enable` is set to None, an appropriate value will be picked automatically. The value picked may change between TensorFlow releases.
#### Args:
- `enable`: Whether operations should be dispatched synchronously. Valid values:
None: sets the system default.
True: executes each operation synchronously.
False: executes each operation asynchronously.
- ``N``o``n``e``:`` ``s``e``t``s`` ``t``h``e`` ``s``y``s``t``e``m`` ``d``e``f``a``u``l``t``.``
- ``T``r``u``e``:`` ``e``x``e``c``u``t``e``s`` ``e``a``c``h`` ``o``p``e``r``a``t``i``o``n`` ``s``y``n``c``h``r``o``n``o``u``s``l``y``.``
- ``F``a``l``s``e``:`` ``e``x``e``c``u``t``e``s`` ``e``a``c``h`` ``o``p``e``r``a``t``i``o``n`` ``a``s``y``n``c``h``r``o``n``o``u``s``l``y``.``
