
Returns a flat list from a given nested structure.
### Aliases:
- `tf.compat.v1.nest.flatten`
- `tf.compat.v2.nest.flatten`

```
 tf.nest.flatten(
    structure,
    expand_composites=False
)
```
### Used in the guide:
- ``R``e``c``u``r``r``e``n``t`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s`` ``(``R``N``N``)`` ``w``i``t``h`` ``K``e``r``a``s``

If nest is not a sequence, tuple, or dict, then returns a single-element list: [nest].

In the case of dict instances, the sequence consists of the values, sorted by key to ensure deterministic behavior. This is true also for OrderedDict instances: their sequence order is ignored, the sorting order of keys is used instead. The same convention is followed in pack_sequence_as. This correctly repacks dicts and OrderedDicts after they have been flattened, and also allows flattening an OrderedDict and then repacking it back using a corresponding plain dict, or vice-versa. Dictionaries with non-sortable keys cannot be flattened.

Users must not modify any collections used in nest while this function is running.
#### Args:
- `structure`: an arbitrarily nested `structure` or a scalar object. Note, numpy arrays are considered scalars.
- `expand_composites`: If true, then composite tensors such as tf.SparseTensor and tf.RaggedTensor are expanded into their component tensors.
#### Returns:

A Python list, the flattened version of the input.
#### Raises:
- `TypeError`: The nest is or contains a dict with non-sortable keys.
