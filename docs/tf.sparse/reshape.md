Reshapes a  `SparseTensor`  to represent values in a new dense shape.

**Aliases** : [ `tf.compat.v1.sparse.reshape` ](/api_docs/python/tf/sparse/reshape), [ `tf.compat.v1.sparse_reshape` ](/api_docs/python/tf/sparse/reshape), [ `tf.compat.v2.sparse.reshape` ](/api_docs/python/tf/sparse/reshape)

```
 tf.sparse.reshape(
    sp_input,
    shape,
    name=None
)
 
```

This operation has the same semantics as  `reshape`  on the represented densetensor.  The indices of non-empty values in  `sp_input`  are recomputed basedon the new dense shape, and a new  `SparseTensor`  is returned containing thenew indices and new shape.  The order of non-empty values in  `sp_input`  isunchanged.

If one component of  `shape`  is the special value -1, the size of thatdimension is computed so that the total dense size remains constant.  Atmost one component of  `shape`  can be -1.  The number of dense elementsimplied by  `shape`  must be the same as the number of dense elementsoriginally represented by  `sp_input` .

For example, if  `sp_input`  has shape  `[2, 3, 6]`  and  `indices`  /  `values` :

```
 [0, 0, 0]: a
[0, 0, 1]: b
[0, 1, 0]: c
[1, 0, 0]: d
[1, 2, 3]: e
 
```

and  `shape`  is  `[9, -1]` , then the output will be a  `SparseTensor`  ofshape  `[9, 4]`  and  `indices`  /  `values` :

```
 [0, 0]: a
[0, 1]: b
[1, 2]: c
[4, 2]: d
[8, 1]: e
 
```

#### Args:
- **`sp_input`** : The input  `SparseTensor` .
- **`shape`** : A 1-D (vector) int64  `Tensor`  specifying the new dense shape of therepresented  `SparseTensor` .
- **`name`** : A name prefix for the returned tensors (optional)


#### Returns:
A  `SparseTensor`  with the same non-empty values but with indices calculatedby the new dense shape.

#### Raises:
- **`TypeError`** : If  `sp_input`  is not a  `SparseTensor` .
- **`ValueError`** :  If argument  `shape`  requests a  `SparseTensor`  with a differentnumber of elements than  `sp_input` .
- **`ValueError`** :  If  `shape`  has more than one inferred (== -1) dimension.
