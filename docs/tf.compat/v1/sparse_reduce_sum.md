Computes the sum of elements across dimensions of a SparseTensor. (deprecated arguments) (deprecated arguments)



### Aliases:

- [ `tf.compat.v1.sparse.reduce_sum` ](/api_docs/python/tf/compat/v1/sparse_reduce_sum)



```
 tf.compat.v1.sparse_reduce_sum(
    sp_input,
    axis=None,
    keepdims=None,
    reduction_axes=None,
    keep_dims=None
)
 
```


<aside class="warning">**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(keep_dims)` . They will be removed in a future version.
Instructions for updating:
keep_dims is deprecated, use keepdims instead</aside>

<aside class="warning">**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(reduction_axes)` . They will be removed in a future version.
Instructions for updating:
reduction_axes is deprecated, use axis instead</aside>
This Op takes a SparseTensor and is the sparse counterpart to
[ `tf.reduce_sum()` ](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_sum).  In particular, this Op also returns a dense  `Tensor` 
instead of a sparse one.

Reduces  `sp_input`  along the dimensions given in  `reduction_axes` .  Unless
 `keepdims`  is true, the rank of the tensor is reduced by 1 for each entry in
 `reduction_axes` . If  `keepdims`  is true, the reduced dimensions are retained
with length 1.

If  `reduction_axes`  has no entries, all dimensions are reduced, and a tensor
with a single element is returned.  Additionally, the axes can be negative,
similar to the indexing rules in Python.



#### For example:


```
 # 'x' represents [[1, ?, 1]
#                 [?, 1, ?]]
# where ? is implicitly-zero.
tf.sparse.reduce_sum(x) ==> 3
tf.sparse.reduce_sum(x, 0) ==> [1, 1, 1]
tf.sparse.reduce_sum(x, 1) ==> [2, 1]  # Can also use -1 as the axis.
tf.sparse.reduce_sum(x, 1, keepdims=True) ==> [[2], [1]]
tf.sparse.reduce_sum(x, [0, 1]) ==> 3
 
```



#### Args:

- **`sp_input`** : The SparseTensor to reduce. Should have numeric type.

- **`axis`** : The dimensions to reduce; list or scalar. If  `None`  (the
default), reduces all dimensions.

- **`keepdims`** : If true, retain reduced dimensions with length 1.

- **`reduction_axes`** : Deprecated name of  `axis` .

- **`keep_dims`** : Deprecated alias for  `keepdims` .



#### Returns:
The reduced Tensor.

