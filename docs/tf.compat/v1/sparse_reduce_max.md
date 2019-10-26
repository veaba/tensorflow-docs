Computes the max of elements across dimensions of a SparseTensor. (deprecated arguments) (deprecated arguments)
### Aliases:
- tf.compat.v1.sparse.reduce_max

```
 tf.compat.v1.sparse_reduce_max(
    sp_input,
    axis=None,
    keepdims=None,
    reduction_axes=None,
    keep_dims=None
)
```
[tf.reduce_max()](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_max)This Op takes a SparseTensor and is the sparse counterpart to . In particular, this Op also returns a dense Tensor instead of a sparse one.

Reduces sp_input along the dimensions given in reduction_axes. Unless keepdims is true, the rank of the tensor is reduced by 1 for each entry in reduction_axes. If keepdims is true, the reduced dimensions are retained with length 1.
If reduction_axes has no entries, all dimensions are reduced, and a tensor with a single element is returned. Additionally, the axes can be negative, similar to the indexing rules in Python.
The values not defined in sp_input don't participate in the reduce max, as opposed to be implicitly assumed 0 -- hence it can return negative values for sparse reduction_axes. But, in case there are no values in reduction_axes, it will reduce to 0. See second example below.
#### For example:

```
 # 'x' represents [[1, ?, 2]
#                 [?, 3, ?]]
# where ? is implicitly-zero.
tf.sparse.reduce_max(x) ==> 3
tf.sparse.reduce_max(x, 0) ==> [1, 3, 2]
tf.sparse.reduce_max(x, 1) ==> [2, 3]  # Can also use -1 as the axis.
tf.sparse.reduce_max(x, 1, keepdims=True) ==> [[2], [3]]
tf.sparse.reduce_max(x, [0, 1]) ==> 3

# 'y' represents [[-7, ?]
#                 [ 4, 3]
#                 [ ?, ?]
tf.sparse.reduce_max(x, 1) ==> [-7, 4, 0]
```
#### Args:
- sp_input: The SparseTensor to reduce. Should have numeric type.
- axis: The dimensions to reduce; list or scalar. If None (the default), reduces all dimensions.
- keepdims: If true, retain reduced dimensions with length 1.
- reduction_axes: Deprecated name of axis.
- keep_dims: Deprecated alias for keepdims.
#### Returns:
The reduced Tensor.
