
Applies func to each entry in structure and returns a new structure.
### Aliases:
- `tf.compat.v1.nest.map_structure`
- `tf.compat.v2.nest.map_structure`

```
 tf.nest.map_structure(
    func,
    *structure,
    **kwargs
)
```
### Used in the guide:
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``

Applies func(x[0], x[1], ...) where x[i] is an entry in structure[i]. All structures in structure must have the same arity, and the return value will contain results with the same structure layout.
#### Args:
- `func`: A callable that accepts as many arguments as there are structures.
#### Returns:

A new structure with the same arity as structure, whose values correspond to func(x[0], x[1], ...) where x[i] is a value in the corresponding location in structure[i]. If there are different sequence types and check_types is False the sequence types of the first structure will be used.
#### Raises:
- `TypeError`: If `func` is not callable or if the structures do not match each other by depth tree.
- `ValueError`: If no structure is provided or if the structures do not match each other by type.
- `ValueError`: If wrong keyword arguments are provided.
