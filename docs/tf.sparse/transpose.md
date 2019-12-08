Transposes a  `SparseTensor` 



### Aliases:

- [ `tf.compat.v1.sparse.transpose` ](/api_docs/python/tf/sparse/transpose)

- [ `tf.compat.v1.sparse_transpose` ](/api_docs/python/tf/sparse/transpose)

- [ `tf.compat.v2.sparse.transpose` ](/api_docs/python/tf/sparse/transpose)



```
 tf.sparse.transpose(
    sp_input,
    perm=None,
    name=None
)
 
```

The returned tensor's dimension i will correspond to the input dimension
 `perm[i]` . If  `perm`  is not given, it is set to (n-1...0), where n is
the rank of the input tensor. Hence by default, this operation performs a
regular matrix transpose on 2-D input Tensors.

For example, if  `sp_input`  has shape  `[4, 5]`  and  `indices`  /  `values` :



```
 [0, 3]: b
[0, 1]: a
[3, 1]: d
[2, 0]: c
 
```

then the output will be a  `SparseTensor`  of shape  `[5, 4]`  and
 `indices`  /  `values` :



```
 [0, 2]: c
[1, 0]: a
[1, 3]: d
[3, 0]: b
 
```



#### Args:

- **`sp_input`** : The input  `SparseTensor` .

- **`perm`** : A permutation of the dimensions of  `sp_input` .

- **`name`** : A name prefix for the returned tensors (optional)



#### Returns:
A transposed  `SparseTensor` .



#### Raises:

- **`TypeError`** : If  `sp_input`  is not a  `SparseTensor` .

