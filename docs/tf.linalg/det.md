计算一个或多个方阵的行列式。

**别名** : [ `tf.compat.v1.linalg.det` ](/api_docs/python/tf/linalg/det), [ `tf.compat.v1.matrix_determinant` ](/api_docs/python/tf/linalg/det), [ `tf.compat.v2.linalg.det` ](/api_docs/python/tf/linalg/det)

```
 tf.linalg.det(
    input,
    name=None
)
 
```

The input is a tensor of shape  `[..., M, M]`  whose inner-most 2 dimensionsform square matrices. The output is a tensor containing the determinantsfor all input submatrices  `[..., :, :]` .

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .Shape is  `[..., M, M]` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

