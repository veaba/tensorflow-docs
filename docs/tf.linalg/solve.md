解线性方程组。

**别名** : [ `tf.compat.v1.linalg.solve` ](/api_docs/python/tf/linalg/solve), [ `tf.compat.v1.matrix_solve` ](/api_docs/python/tf/linalg/solve), [ `tf.compat.v2.linalg.solve` ](/api_docs/python/tf/linalg/solve)

```
 tf.linalg.solve(    matrix,    rhs,    adjoint=False,    name=None) 
```

 `Matrix`  is a tensor of shape  `[..., M, M]`  whose inner-most 2 dimensionsform square matrices.  `Rhs`  is a tensor of shape  `[..., M, K]` . The  `output`  isa tensor shape  `[..., M, K]` .  If  `adjoint`  is  `False`  then each output matrixsatisfies  `matrix[..., :, :] * output[..., :, :] = rhs[..., :, :]` .If  `adjoint`  is  `True`  then each output matrix satisfies `adjoint(matrix[..., :, :]) * output[..., :, :] = rhs[..., :, :]` .

#### 参数：
- **`matrix`** : A  `Tensor` . Must be one of the following types:  `float64` ,  `float32` ,  `half` ,  `complex64` ,  `complex128` .Shape is  `[..., M, M]` .
- **`rhs`** : A  `Tensor` . Must have the same type as  `matrix` .Shape is  `[..., M, K]` .
- **`adjoint`** : An optional  `bool` . Defaults to  `False` .Boolean indicating whether to solve with  `matrix`  or its (block-wise)adjoint.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `matrix` .

