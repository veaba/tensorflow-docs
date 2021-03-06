解三对角方程组。

**别名** : [ `tf.compat.v1.linalg.tridiagonal_solve` ](/api_docs/python/tf/linalg/tridiagonal_solve), [ `tf.compat.v2.linalg.tridiagonal_solve` ](/api_docs/python/tf/linalg/tridiagonal_solve)

```
 tf.linalg.tridiagonal_solve(
    diagonals,
    rhs,
    diagonals_format='compact',
    transpose_rhs=False,
    conjugate_rhs=False,
    name=None,
    partial_pivoting=True
)
 
```

The input can be supplied in various formats:  `matrix` ,  `sequence`  and `compact` , specified by the  `diagonals_format`  arg.

In  `matrix`  format,  `diagonals`  must be a tensor of shape  `[..., M, M]` , withtwo inner-most dimensions representing the square tridiagonal matrices.Elements outside of the three diagonals will be ignored.

In  `sequence`  format,  `diagonals`  are supplied as a tuple or list of threetensors of shapes  `[..., N]` ,  `[..., M]` ,  `[..., N]`  representingsuperdiagonals, diagonals, and subdiagonals, respectively.  `N`  can be either `M-1`  or  `M` ; in the latter case, the last element of superdiagonal and thefirst element of subdiagonal will be ignored.

In  `compact`  format the three diagonals are brought together into one tensorof shape  `[..., 3, M]` , with last two dimensions containing superdiagonals,diagonals, and subdiagonals, in order. Similarly to  `sequence`  format,elements  `diagonals[..., 0, M-1]`  and  `diagonals[..., 2, 0]`  are ignored.

The  `compact`  format is recommended as the one with best performance. In caseyou need to cast a tensor into a compact format manually, use [ `tf.gather_nd` ](https://tensorflow.google.cn/api_docs/python/tf/gather_nd).An example for a tensor of shape [m, m]:

```
 rhs = tf.constant([...])
matrix = tf.constant([[...]])
m = matrix.shape[0]
dummy_idx = [0, 0]  # An arbitrary element to use as a dummy
indices = [[[i, i + 1] for i in range(m - 1)] + [dummy_idx],  # Superdiagonal
         [[i, i] for i in range(m)],                          # Diagonal
         [dummy_idx] + [[i + 1, i] for i in range(m - 1)]]    # Subdiagonal
diagonals=tf.gather_nd(matrix, indices)
x = tf.linalg.tridiagonal_solve(diagonals, rhs)
 
```

Regardless of the  `diagonals_format` ,  `rhs`  is a tensor of shape  `[..., M]`  or `[..., M, K]` . The latter allows to simultaneously solve K systems with thesame left-hand sides and K different right-hand sides. If  `transpose_rhs` is set to  `True`  the expected shape is  `[..., M]`  or  `[..., K, M]` .

The batch dimensions, denoted as  `...` , must be the same in  `diagonals`  and `rhs` .

The output is a tensor of the same shape as  `rhs` : either  `[..., M]`  or `[..., M, K]` .

The op isn't guaranteed to raise an error if the input matrix is notinvertible. [ `tf.debugging.check_numerics` ](https://tensorflow.google.cn/api_docs/python/tf/debugging/check_numerics) can be applied to the output todetect invertibility problems.

**Note** : with large batch sizes, the computation on the GPU may be slow, ifeither  `partial_pivoting=True`  or there are multiple right-hand sides( `K > 1` ). If this issue arises, consider if it's possible to disable pivotingand have  `K = 1` , or, alternatively, consider using CPU.

On CPU, solution is computed via Gaussian elimination with or without partialpivoting, depending on  `partial_pivoting`  parameter. On GPU, Nvidia's cuSPARSElibrary is used: https://docs.nvidia.com/cuda/cusparse/index.html#gtsv

#### 参数：
- **`diagonals`** : A  `Tensor`  or tuple of  `Tensor` s describing left-hand sides. Theshape depends of  `diagonals_format` , see description above. Must be `float32` ,  `float64` ,  `complex64` , or  `complex128` .
- **`rhs`** : A  `Tensor`  of shape [..., M] or [..., M, K] and with the same dtype as `diagonals` .
- **`diagonals_format`** : one of  `matrix` ,  `sequence` , or  `compact` . Default is `compact` .
- **`transpose_rhs`** : If  `True` ,  `rhs`  is transposed before solving (has no effectif the shape of rhs is [..., M]).
- **`conjugate_rhs`** : If  `True` ,  `rhs`  is conjugated before solving.
- **`name`** :  A name to give this  `Op`  (optional).
- **`partial_pivoting`** : whether to perform partial pivoting.  `True`  by default.Partial pivoting makes the procedure more stable, but slower. Partialpivoting is unnecessary in some cases, including diagonally dominant andsymmetric positive definite matrices (see e.g. theorem 9.12 in [1]).


#### 返回：
A  `Tensor`  of shape [..., M] or [..., M, K] containing the solutions.

#### 加薪：
- **`ValueError`** : An unsupported type is provided as input, or when the inputtensors have incorrect shapes.
[1] Nicholas J. Higham (2002). Accuracy and Stability of Numerical Algorithms:Second Edition. SIAM. p. 175. ISBN 978-0-89871-802-7.

