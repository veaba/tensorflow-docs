Asserts that two structures are nested in the same way.
### Aliases:
- `tf.compat.v1.nest.assert_same_structure`
- `tf.compat.v2.nest.assert_same_structure`

```
 tf.nest.assert_same_structure(
    nest1,
    nest2,
    check_types=True,
    expand_composites=False
)
```
Note that namedtuples with identical name and fields are always considered to have the same shallow structure (even with `check_types=True`). For instance, this code will print `True`:

```
 def nt(a, b):
  return collections.namedtuple('foo', 'a b')(a, b)
print(assert_same_structure(nt(0, 1), nt(2, 3)))
```
#### Args:
- `nest1`: an arbitrarily nested structure.
- `nest2`: an arbitrarily nested structure.
- `check_types`: if `True` (default) types of sequences are checked as well, including the keys of dictionaries. If set to `False`, for example a list and a tuple of objects will look the same if they have the same size. Note that namedtuples with identical name and fields are always considered to have the same shallow structure. Two types will also be considered the same if they are both list subtypes (which allows "list" and "_ListWrapper" from trackable dependency tracking to compare equal).
- `expand_composites`: If true, then composite tensors such as `tf.SparseTensor` and `tf.RaggedTensor` are expanded into their component tensors.
#### Raises:
- `ValueError`: If the two structures do not have the same number of elements or if the two structures are not nested in the same way.
- `TypeError`: If the two structures differ in the type of sequence in any of their substructures. Only possible if `check_types` is `True`.
