Computes the max of elements across dimensions of a SparseTensor. (deprecated arguments)
### Aliases:
- tf.compat.v1.sparse.reduce_max_sparse

```
 tf.compat.v1.sparse_reduce_max_sparse(
    sp_input,
    axis=None,
    keepdims=None,
    reduction_axes=None,
    keep_dims=None
)
```
[tf.reduce_max()](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_max)This Op takes a SparseTensor and is the sparse counterpart to . In contrast to SparseReduceSum, this Op returns a SparseTensor.

Reduces sp_input along the dimensions given in reduction_axes. Unless keepdims is true, the rank of the tensor is reduced by 1 for each entry in reduction_axes. If keepdims is true, the reduced dimensions are retained with length 1.
If reduction_axes has no entries, all dimensions are reduced, and a tensor with a single element is returned. Additionally, the axes can be negative, which are interpreted according to the indexing rules in Python.
#### Args:
- sp_input: The SparseTensor to reduce. Should have numeric type.
- axis: The dimensions to reduce; list or scalar. If None (the default), reduces all dimensions.
- keepdims: If true, retain reduced dimensions with length 1.
- reduction_axes: Deprecated name of axis.
- keep_dims: Deprecated alias for keepdims.
#### Returns:
The reduced SparseTensor.
