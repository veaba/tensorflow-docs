Converts a flat index or array of flat indices into a tuple of

**Aliases** : [ `tf.compat.v1.unravel_index` ](/api_docs/python/tf/unravel_index), [ `tf.compat.v2.unravel_index` ](/api_docs/python/tf/unravel_index)

```
 tf.unravel_index(
    indices,
    dims,
    name=None
)
 
```

coordinate arrays.

#### Args:
- **`indices`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .An 0-D or 1-D  `int`  Tensor whose elements are indices into theflattened version of an array of dimensions dims.
- **`dims`** : A  `Tensor` . Must have the same type as  `indices` .An 1-D  `int`  Tensor. The shape of the array to use for unravelingindices.
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor` . Has the same type as  `indices` .

#### Numpy Compatibility
Equivalent to np.unravel_index

