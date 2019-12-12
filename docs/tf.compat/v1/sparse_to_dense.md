Converts a sparse representation into a dense tensor. (deprecated)

```
 tf.compat.v1.sparse_to_dense(    sparse_indices,    output_shape,    sparse_values,    default_value=0,    validate_indices=True,    name=None) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Create a [ `tf.sparse.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor) and use [ `tf.sparse.to_dense` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/to_dense) instead.
Builds an array  `dense`  with shape  `output_shape`  such that

```
 # If sparse_indices is scalar
dense[i] = (i == sparse_indices ? sparse_values : default_value)

# If sparse_indices is a vector, then for each i
dense[sparse_indices[i]] = sparse_values[i]

# If sparse_indices is an n by d matrix, then for each i in [0, n)
dense[sparse_indices[i][0], ..., sparse_indices[i][d-1]] = sparse_values[i]
 
```

All other values in  `dense`  are set to  `default_value` .  If  `sparse_values` is a scalar, all sparse indices are set to this single value.

Indices should be sorted in lexicographic order, and indices must notcontain any repeats. If  `validate_indices`  is True, these propertiesare checked during execution.

#### 参数：
- **`sparse_indices`** : A 0-D, 1-D, or 2-D  `Tensor`  of type  `int32`  or  `int64` . `sparse_indices[i]`  contains the complete index where  `sparse_values[i]` will be placed.
- **`output_shape`** : A 1-D  `Tensor`  of the same type as  `sparse_indices` .  Shapeof the dense output tensor.
- **`sparse_values`** : A 0-D or 1-D  `Tensor` .  Values corresponding to each row of `sparse_indices` , or a scalar value to be used for all sparse indices.
- **`default_value`** : A 0-D  `Tensor`  of the same type as  `sparse_values` .  Valueto set for indices not specified in  `sparse_indices` .  Defaults to zero.
- **`validate_indices`** : A boolean value.  If True, indices are checked to makesure they are sorted in lexicographic order and that there are no repeats.
- **`name`** : A name for the operation (optional).


#### 返回：
Dense  `Tensor`  of shape  `output_shape` .  Has the same type as `sparse_values` .

