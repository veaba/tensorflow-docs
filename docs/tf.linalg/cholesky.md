计算一个或多个方阵的cholesky分解。

**别名** : [ `tf.compat.v1.cholesky` ](/api_docs/python/tf/linalg/cholesky), [ `tf.compat.v1.linalg.cholesky` ](/api_docs/python/tf/linalg/cholesky), [ `tf.compat.v2.linalg.cholesky` ](/api_docs/python/tf/linalg/cholesky)

```
 tf.linalg.cholesky(
    input,
    name=None
)
 
```

The input is a tensor of shape  `[..., M, M]`  whose inner-most 2 dimensionsform square matrices.

The input has to be symmetric and positive definite. Only the lower-triangularpart of the input will be used for this operation. The upper-triangular partwill not be read.

The output is a tensor of the same shape as the inputcontaining the Cholesky decompositions for all input submatrices  `[..., :, :]` .

**Note** : The gradient computation on GPU is faster for large matrices butnot for large batch dimensions when the submatrices are small. In thiscase it might be faster to use the CPU.

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `float64` ,  `float32` ,  `half` ,  `complex64` ,  `complex128` .Shape is  `[..., M, M]` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

