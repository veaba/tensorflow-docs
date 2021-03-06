Reorders a  `SparseTensor`  into the canonical, row-major ordering.

**别名** : [ `tf.compat.v1.sparse.reorder` ](/api_docs/python/tf/sparse/reorder), [ `tf.compat.v1.sparse_reorder` ](/api_docs/python/tf/sparse/reorder), [ `tf.compat.v2.sparse.reorder` ](/api_docs/python/tf/sparse/reorder)

```
 tf.sparse.reorder(
    sp_input,
    name=None
)
 
```

Note that by convention, all sparse ops preserve the canonical orderingalong increasing dimension number. The only time ordering can be violatedis during manual manipulation of the indices and values to add entries.

Reordering does not affect the shape of the  `SparseTensor` .

For example, if  `sp_input`  has shape  `[4, 5]`  and  `indices`  /  `values` :

```
 [0, 3]: b
[0, 1]: a
[3, 1]: d
[2, 0]: c
 
```

then the output will be a  `SparseTensor`  of shape  `[4, 5]`  and `indices`  /  `values` :

```
 [0, 1]: a
[0, 3]: b
[2, 0]: c
[3, 1]: d
 
```

#### 参数：
- **`sp_input`** : The input  `SparseTensor` .
- **`name`** : A name prefix for the returned tensors (optional)


#### 返回：
A  `SparseTensor`  with the same shape and non-empty values, but incanonical ordering.

#### 加薪：
- **`TypeError`** : If  `sp_input`  is not a  `SparseTensor` .
