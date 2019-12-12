Computes the LU decomposition of one or more square matrices.

**Aliases** : [ `tf.compat.v1.linalg.lu` ](/api_docs/python/tf/linalg/lu), [ `tf.compat.v2.linalg.lu` ](/api_docs/python/tf/linalg/lu)

```
 tf.linalg.lu(    input,    output_idx_type=tf.dtypes.int32,    name=None) 
```

The input is a tensor of shape  `[..., M, M]`  whose inner-most 2 dimensionsform square matrices.

The input has to be invertible.

The output consists of two tensors LU and P containing the LU decompositionof all input submatrices  `[..., :, :]` . LU encodes the lower triangular andupper triangular factors.

For each input submatrix of shape  `[M, M]` , L is a lower triangular matrix ofshape  `[M, M]`  with unit diagonal whose entries correspond to the strictly lowertriangular part of LU. U is a upper triangular matrix of shape  `[M, M]`  whoseentries correspond to the upper triangular part, including the diagonal, of LU.

P represents a permutation matrix encoded as a list of indices each between  `0` and  `M-1` , inclusive. If P_mat denotes the permutation matrix corresponding toP, then the L, U and P satisfies P_mat * input = L * U.

#### Args:
- **`input`** : A  `Tensor` . Must be one of the following types:  `float64` ,  `float32` ,  `half` ,  `complex64` ,  `complex128` .A tensor of shape  `[..., M, M]`  whose inner-most 2 dimensions form matrices ofsize  `[M, M]` .
- **`output_idx_type`** : An optional [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from:  `tf.int32, tf.int64` . Defaults to [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32).
- **`name`** : A name for the operation (optional).


#### Returns:
A tuple of  `Tensor`  objects (lu, p).

- **`lu`** : A  `Tensor` . Has the same type as  `input` .
- **`p`** : A  `Tensor`  of type  `output_idx_type` .
