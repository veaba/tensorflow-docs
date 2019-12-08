Returns a given flattened sequence packed into a given structure.



### Aliases:

- [ `tf.compat.v1.nest.pack_sequence_as` ](/api_docs/python/tf/nest/pack_sequence_as)

- [ `tf.compat.v2.nest.pack_sequence_as` ](/api_docs/python/tf/nest/pack_sequence_as)



```
 tf.nest.pack_sequence_as(
    structure,
    flat_sequence,
    expand_composites=False
)
 
```

If  `structure`  is a scalar,  `flat_sequence`  must be a single-element list;
in this case the return value is  `flat_sequence[0]` .

If  `structure`  is or contains a dict instance, the keys will be sorted to
pack the flat sequence in deterministic order. This is true also for
 `OrderedDict`  instances: their sequence order is ignored, the sorting order of
keys is used instead. The same convention is followed in  `flatten` .
This correctly repacks dicts and  `OrderedDict` s after they have been
flattened, and also allows flattening an  `OrderedDict`  and then repacking it
back using a corresponding plain dict, or vice-versa.
Dictionaries with non-sortable keys cannot be flattened.



#### Args:

- **`structure`** : Nested structure, whose structure is given by nested lists,
tuples, and dicts. Note: numpy arrays and strings are considered
scalars.

- **`flat_sequence`** : flat sequence to pack.

- **`expand_composites`** : If true, then composite tensors such as [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor)
and [ `tf.RaggedTensor` ](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor) are expanded into their component tensors.



#### Returns:

- **`packed`** :  `flat_sequence`  converted to have the same recursive structure as
 `structure` .



#### Raises:

- **`ValueError`** : If  `flat_sequence`  and  `structure`  have different
element counts.

- **`TypeError`** :  `structure`  is or contains a dict with non-sortable keys.

