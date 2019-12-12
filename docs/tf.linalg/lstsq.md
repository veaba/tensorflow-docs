

Solves one or more linear least-squares problems.

**Aliases** : [ `tf.compat.v1.linalg.lstsq` ](/api_docs/python/tf/linalg/lstsq), [ `tf.compat.v1.matrix_solve_ls` ](/api_docs/python/tf/linalg/lstsq), [ `tf.compat.v2.linalg.lstsq` ](/api_docs/python/tf/linalg/lstsq)

```
 tf.linalg.lstsq(
    matrix,
    rhs,
    l2_regularizer=0.0,
    fast=True,
    name=None
)
 
```

 `matrix`  is a tensor of shape  `[..., M, N]`  whose inner-most 2 dimensionsform  `M` -by- `N`  matrices. Rhs is a tensor of shape  `[..., M, K]`  whoseinner-most 2 dimensions form  `M` -by- `K`  matrices.  The computed output is a `Tensor`  of shape  `[..., N, K]`  whose inner-most 2 dimensions form  `M` -by- `K` matrices that solve the equations `matrix[..., :, :] * output[..., :, :] = rhs[..., :, :]`  in the least squaressense.

Below we will use the following notation for each pair of matrix andright-hand sides in the batch:

 `matrix` =A∈ℜm×n, `rhs` =B∈ℜm×k, `output` =X∈ℜn×k, `l2_regularizer` =λ.

If  `fast`  is  `True` , then the solution is computed by solving the normalequations using Cholesky decomposition. Specifically, if m≥n thenX=(ATA+λI)−1ATB, which solves the least-squaresproblem X=argminZ∈ℜn×k||AZ−B||2F+λ||Z||2F. If m<n then  `output`  is computed asX=AT(AAT+λI)−1B, which (for λ=0) isthe minimum-norm solution to the under-determined linear system, i.e.X=argminZ∈ℜn×k||Z||2F, subject toAZ=B. Notice that the fast path is only numerically stable whenA is numerically full rank and has a condition numbercond(A)<1√ϵmach orλis sufficiently large.

If  `fast`  is  `False`  an algorithm based on the numerically robust completeorthogonal decomposition is used. This computes the minimum-normleast-squares solution, even when A is rank deficient. This path istypically 6-7 times slower than the fast path. If  `fast`  is  `False`  then `l2_regularizer`  is ignored.

#### Args:
- **`matrix`** :  `Tensor`  of shape  `[..., M, N]` .
- **`rhs`** :  `Tensor`  of shape  `[..., M, K]` .
- **`l2_regularizer`** : 0-D  `double`   `Tensor` . Ignored if  `fast=False` .
- **`fast`** : bool. Defaults to  `True` .
- **`name`** : string, optional name of the operation.


#### Returns:
- **`output`** :  `Tensor`  of shape  `[..., N, K]`  whose inner-most 2 dimensions form `M` -by- `K`  matrices that solve the equations `matrix[..., :, :] * output[..., :, :] = rhs[..., :, :]`  in the leastsquares sense.


#### Raises:
- **`NotImplementedError`** : linalg.lstsq is currently disabled for complex128and l2_regularizer != 0 due to poor accuracy.
