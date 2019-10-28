Returns True if the current thread has eager execution enabled.
### Aliases:
- `tf.compat.v1.executing_eagerly`
- `tf.compat.v2.executing_eagerly`

```
 tf.executing_eagerly()
```
### Used in the guide:
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
### Used in the tutorials:
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``w``a``l``k``t``h``r``o``u``g``h``
- ``T``e``x``t`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n`` ``w``i``t``h`` ``T``e``n``s``o``r``F``l``o``w`` ``H``u``b``:`` ``M``o``v``i``e`` ``r``e``v``i``e``w``s``
Eager execution is typically enabled via `tf.compat.v1.enable_eager_execution`, but may also be enabled within the context of a Python function via tf.contrib.eager.py_func.
