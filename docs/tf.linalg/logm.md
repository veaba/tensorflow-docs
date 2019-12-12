

计算一个或多个方阵的矩阵对数：

**别名** : [ `tf.compat.v1.linalg.logm` ](/api_docs/python/tf/linalg/logm), [ `tf.compat.v2.linalg.logm` ](/api_docs/python/tf/linalg/logm)

```
 tf.linalg.logm(
    input,
    name=None
)
 
```

\(log(exp(A)) = A\)

This op is only defined for complex matrices. If A is positive-definite andreal, then casting to a complex matrix, taking the logarithm and casting backto a real matrix will give the correct result.

This function computes the matrix logarithm using the Schur-Parlett algorithm.Details of the algorithm can be found in Section 11.6.2 of:Nicholas J. Higham, Functions of Matrices: Theory and Computation, SIAM 2008.ISBN 978-0-898716-46-7.

The input is a tensor of shape  `[..., M, M]`  whose inner-most 2 dimensionsform square matrices. The output is a tensor of the same shape as the inputcontaining the exponential for all input submatrices  `[..., :, :]` .

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `complex64` ,  `complex128` .Shape is  `[..., M, M]` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

