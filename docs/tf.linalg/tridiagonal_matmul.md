将三对角矩阵乘以矩阵。

**别名** : [ `tf.compat.v1.linalg.tridiagonal_matmul` ](/api_docs/python/tf/linalg/tridiagonal_matmul), [ `tf.compat.v2.linalg.tridiagonal_matmul` ](/api_docs/python/tf/linalg/tridiagonal_matmul)

```
 tf.linalg.tridiagonal_matmul(
    diagonals,
    rhs,
    diagonals_format='compact',
    name=None
)
 
```

 `diagonals`  is representation of 3-diagonal NxN matrix, which depends on `diagonals_format` .

In  `matrix`  format,  `diagonals`  must be a tensor of shape  `[..., M, M]` , withtwo inner-most dimensions representing the square tridiagonal matrices.Elements outside of the three diagonals will be ignored.

If  `sequence`  format,  `diagonals`  is list or tuple of three tensors: `[superdiag, maindiag, subdiag]` , each having shape [..., M]. Last elementof  `superdiag`  first element of  `subdiag`  are ignored.

In  `compact`  format the three diagonals are brought together into one tensorof shape  `[..., 3, M]` , with last two dimensions containing superdiagonals,diagonals, and subdiagonals, in order. Similarly to  `sequence`  format,elements  `diagonals[..., 0, M-1]`  and  `diagonals[..., 2, 0]`  are ignored.

The  `sequence`  format is recommended as the one with the best performance.

 `rhs`  is matrix to the right of multiplication. It has shape  `[..., M, N]` .

#### 示例：


```
 superdiag = tf.constant([-1, -1, 0], dtype=tf.float64)
maindiag = tf.constant([2, 2, 2], dtype=tf.float64)
subdiag = tf.constant([0, -1, -1], dtype=tf.float64)
diagonals = [superdiag, maindiag, subdiag]
rhs = tf.constant([[1, 1], [1, 1], [1, 1]], dtype=tf.float64)
x = tf.linalg.tridiagonal_matmul(diagonals, rhs, diagonals_format='sequence')
 
```

#### 参数：
- **`diagonals`** : A  `Tensor`  or tuple of  `Tensor` s describing left-hand sides. Theshape depends of  `diagonals_format` , see description above. Must be `float32` ,  `float64` ,  `complex64` , or  `complex128` .
- **`rhs`** : A  `Tensor`  of shape [..., M, N] and with the same dtype as  `diagonals` .
- **`diagonals_format`** : one of  `sequence` , or  `compact` . Default is  `compact` .
- **`name`** :  A name to give this  `Op`  (optional).


#### 返回：
A  `Tensor`  of shape [..., M, N] containing the result of multiplication.

#### 加薪：
- **`ValueError`** : An unsupported type is provided as input, or when the inputtensors have incorrect shapes.
