Create an op that groups multiple operations.
### Aliases:
- `tf.compat.v1.group`
- `tf.compat.v2.group`

```
 tf.group(
    *inputs,
    **kwargs
)
```
### Used in the guide:
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
When this op finishes, all ops in `inputs` have finished. This op has no output.
[tf.tuple](https://tensorflow.google.cn/api_docs/python/tf/tuple)See also  and tf.control_dependencies.

#### Args:
#### Returns:
An Operation that executes all its inputs.
#### Raises:
- `ValueError`: If an unknown keyword argument is provided.
