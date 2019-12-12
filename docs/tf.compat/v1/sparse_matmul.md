将矩阵“a”乘以矩阵“b”。

```
 tf.compat.v1.sparse_matmul(    a,    b,    transpose_a=False,    transpose_b=False,    a_is_sparse=False,    b_is_sparse=False,    name=None) 
```

The inputs must be two-dimensional matrices and the inner dimension of "a" mustmatch the outer dimension of "b". Both "a" and "b" must be  `Tensor` s not `SparseTensor` s.  This op is optimized for the case where at least one of "a" or"b" is sparse, in the sense that they have a large proportion of zero values.The breakeven for using this versus a dense matrix multiply on one platform was30% zero values in the sparse matrix.

The gradient computation of this operation will only take advantage of sparsityin the input gradient when that gradient comes from a Relu.

#### 参数：
- **`a`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `bfloat16` .
- **`b`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `bfloat16` .
- **`transpose_a`** : An optional  `bool` . Defaults to  `False` .
- **`transpose_b`** : An optional  `bool` . Defaults to  `False` .
- **`a_is_sparse`** : An optional  `bool` . Defaults to  `False` .
- **`b_is_sparse`** : An optional  `bool` . Defaults to  `False` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `float32` .

