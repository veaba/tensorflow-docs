计算一个或多个平方可逆矩阵的逆

**别名** : [ `tf.compat.v1.linalg.inv` ](/api_docs/python/tf/linalg/inv), [ `tf.compat.v1.matrix_inverse` ](/api_docs/python/tf/linalg/inv), [ `tf.compat.v2.linalg.inv` ](/api_docs/python/tf/linalg/inv)

```
 tf.linalg.inv(
    input,
    adjoint=False,
    name=None
)
 
```

伴随（共轭转置）。

The input is a tensor of shape  `[..., M, M]`  whose inner-most 2 dimensionsform square matrices. The output is a tensor of the same shape as the inputcontaining the inverse for all input submatrices  `[..., :, :]` .

op使用lu分解和部分旋转来计算逆。

If a matrix is not invertible there is no guarantee what the op does. Itmay detect the condition and raise an exception or it may simply return agarbage result.

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `float64` ,  `float32` ,  `half` ,  `complex64` ,  `complex128` .Shape is  `[..., M, M]` .
- **`adjoint`** : An optional  `bool` . Defaults to  `False` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

