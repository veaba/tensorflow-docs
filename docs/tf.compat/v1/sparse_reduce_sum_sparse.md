Computes the sum of elements across dimensions of a SparseTensor. (deprecated arguments)

```
 tf.compat.v1.sparse_reduce_sum_sparse(
    sp_input,
    axis=None,
    keepdims=None,
    reduction_axes=None,
    keep_dims=None
)
 
```


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(keep_dims)` . They will be removed in a future version.Instructions for updating:keep_dims is deprecated, use keepdims instead
This Op takes a SparseTensor and is the sparse counterpart to[ `tf.reduce_sum()` ](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_sum).  In contrast to SparseReduceSum, this Op returns aSparseTensor.


**Note:**  A gradient is not defined for this function, so it can't be usedin training models that need gradient descent.
Reduces  `sp_input`  along the dimensions given in  `reduction_axes` .  Unless `keepdims`  is true, the rank of the tensor is reduced by 1 for each entry in `reduction_axes` . If  `keepdims`  is true, the reduced dimensions are retainedwith length 1.

If  `reduction_axes`  has no entries, all dimensions are reduced, and a tensorwith a single element is returned.  Additionally, the axes can be negative,which are interpreted according to the indexing rules in Python.

#### 参数：
- **`sp_input`** : The SparseTensor to reduce. Should have numeric type.
- **`axis`** : The dimensions to reduce; list or scalar. If  `None`  (thedefault), reduces all dimensions.
- **`keepdims`** : If true, retain reduced dimensions with length 1.
- **`reduction_axes`** : Deprecated name of axis.
- **`keep_dims`** : Deprecated alias for  `keepdims` .


#### 返回：
简化的Sparsetensor。

