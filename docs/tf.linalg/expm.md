计算一个或多个方阵的矩阵指数。

**别名** : [ `tf.compat.v1.linalg.expm` ](/api_docs/python/tf/linalg/expm), [ `tf.compat.v2.linalg.expm` ](/api_docs/python/tf/linalg/expm)

```
 tf.linalg.expm(
    input,
    name=None
)
 
```

exp(A) = \sum_{n=0}^\infty A^n/n!

The exponential is computed using a combination of the scaling and squaringmethod and the Pade approximation. Details can be found in:Nicholas J. Higham, "The scaling and squaring method for the matrixexponential revisited," SIAM J. Matrix Anal. Applic., 26:1179-1193, 2005.

The input is a tensor of shape  `[..., M, M]`  whose inner-most 2 dimensionsform square matrices. The output is a tensor of the same shape as the inputcontaining the exponential for all input submatrices  `[..., :, :]` .

#### 参数：
- **`input`** : A  `Tensor` . Must be  `float16` ,  `float32` ,  `float64` ,  `complex64` , or `complex128`  with shape  `[..., M, M]` .
- **`name`** :  A name to give this  `Op`  (optional).


#### 返回：
输入的矩阵指数。

#### 加薪：
- **`ValueError`** : An unsupported type is provided as input.


#### scipy兼容性
相当于scipy.linalg.expm

