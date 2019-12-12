计算一个或多个方阵的矩阵平方根：

**别名** : [ `tf.compat.v1.linalg.sqrtm` ](/api_docs/python/tf/linalg/sqrtm), [ `tf.compat.v1.matrix_square_root` ](/api_docs/python/tf/linalg/sqrtm), [ `tf.compat.v2.linalg.sqrtm` ](/api_docs/python/tf/linalg/sqrtm), [ `tf.compat.v2.matrix_square_root` ](/api_docs/python/tf/linalg/sqrtm), [ `tf.matrix_square_root` ](/api_docs/python/tf/linalg/sqrtm)

```
 tf.linalg.sqrtm(    input,    name=None) 
```

matmul(sqrtm(A), sqrtm(A)) = A

The input matrix should be invertible. If the input matrix is real, it shouldhave no eigenvalues which are real and negative (pairs of complex conjugateeigenvalues are allowed).

The matrix square root is computed by first reducing the matrix to quasi-triangular form with the real Schur decomposition. The square root of the quasi-triangular matrix is then computed directly. Details of the algorithm can be found in: Nicholas J. Higham, "Computing real square roots of a real matrix", Linear Algebra Appl., 1987.

The input is a tensor of shape  `[..., M, M]`  whose inner-most 2 dimensionsform square matrices. The output is a tensor of the same shape as the inputcontaining the matrix square root for all input submatrices  `[..., :, :]` .

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `float64` ,  `float32` ,  `half` ,  `complex64` ,  `complex128` .Shape is  `[..., M, M]` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

