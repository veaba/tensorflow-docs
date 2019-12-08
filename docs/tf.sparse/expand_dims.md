Inserts a dimension of 1 into a tensor's shape.



### Aliases:

- [ `tf.compat.v1.sparse.expand_dims` ](/api_docs/python/tf/sparse/expand_dims)

- [ `tf.compat.v2.sparse.expand_dims` ](/api_docs/python/tf/sparse/expand_dims)



```
 tf.sparse.expand_dims(
    sp_input,
    axis=None,
    name=None
)
 
```

Given a tensor  `sp_input` , this operation inserts a dimension of 1 at the
dimension index  `axis`  of  `sp_input` 's shape. The dimension index  `axis` 
starts at zero; if you specify a negative number for  `axis`  it is counted
backwards from the end.



#### Args:

- **`sp_input`** : A  `SparseTensor` .

- **`axis`** : 0-D (scalar). Specifies the dimension index at which to expand the
shape of  `input` . Must be in the range <code translate="no" dir="ltr">[-rank(sp_input) - 1,
rank(sp_input)]</code>.

- **`name`** : The name of the output  `SparseTensor` .



#### Returns:
A  `SparseTensor`  with the same data as  `sp_input` , but its shape has an
additional dimension of size 1 added.

