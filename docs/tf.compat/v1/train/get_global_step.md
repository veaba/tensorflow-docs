
Get the global step tensor.

```
 tf.compat.v1.train.get_global_step(graph=None)
```
### Used in the guide:
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``

The global step tensor must be an integer variable. We first try to find it in the collection GLOBAL_STEP, or by name global_step:0.
#### Args:
- `graph`: The `graph` to find the global step in. If missing, use default `graph`.
#### Returns:

The global step variable, or None if none was found.
#### Raises:
- `TypeError`: If the global step tensor has a non-integer type, or if it is not a `Variable`.
