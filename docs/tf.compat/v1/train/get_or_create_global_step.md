Returns and create (if necessary) the global step tensor.

```
 tf.compat.v1.train.get_or_create_global_step(graph=None)
```
### Used in the guide:
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
### Used in the tutorials:
- ``M``u``l``t``i``-``w``o``r``k``e``r`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``E``s``t``i``m``a``t``o``r``
#### Args:
- `graph`: The `graph` in which to create the global step tensor. If missing, use default `graph`.
#### Returns:
The global step tensor.
