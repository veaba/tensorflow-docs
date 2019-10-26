Solves one or more linear least-squares problems.
### Aliases:
- tf.compat.v1.linalg.lstsq
- tf.compat.v1.matrix_solve_ls
- tf.compat.v2.linalg.lstsq

```
 tf.linalg.lstsq(
    matrix,
    rhs,
    l2_regularizer=0.0,
    fast=True,
    name=None
)
```
matrix is a tensor of shape [..., M, N] whose inner-most 2 dimensions form M-by-N matrices. Rhs is a tensor of shape [..., M, K] whose inner-most 2 dimensions form M-by-K matrices. The computed output is a Tensor of shape [..., N, K] whose inner-most 2 dimensions form M-by-K matrices that solve the equations matrix[..., :, :] * output[..., :, :] = rhs[..., :, :] in the least squares sense.
Below we will use the following notation for each pair of matrix and right-hand sides in the batch:
matrix=
, rhs=
, output=
, l2_regularizer=
.
If fast is True, then the solution is computed by solving the normal equations using Cholesky decomposition. Specifically, if
then
, which solves the least-squares problem
. If
then output is computed as
, which (for
) is the minimum-norm solution to the under-determined linear system, i.e.
, subject to
. Notice that the fast path is only numerically stable when
is numerically full rank and has a condition number
or
is sufficiently large.
If fast is False an algorithm based on the numerically robust complete orthogonal decomposition is used. This computes the minimum-norm least-squares solution, even when
is rank deficient. This path is typically 6-7 times slower than the fast path. If fast is False then l2_regularizer is ignored.
#### Args:
- matrix: Tensor of shape [..., M, N].
- rhs: Tensor of shape [..., M, K].
- l2_regularizer: 0-D double Tensor. Ignored if fast=False.
- fast: bool. Defaults to True.
- name: string, optional name of the operation.
#### Returns:
- output: Tensor of shape [..., N, K] whose inner-most 2 dimensions form M-by-K matrices that solve the equations matrix[..., :, :] * output[..., :, :] = rhs[..., :, :] in the least squares sense.
#### Raises:
- NotImplementedError: linalg.lstsq is currently disabled for complex128 and l2_regularizer != 0 due to poor accuracy.
