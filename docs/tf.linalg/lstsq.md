

Solves one or more linear least-squares problems.



### Aliases:

- [ `tf.compat.v1.linalg.lstsq` ](/api_docs/python/tf/linalg/lstsq)

- [ `tf.compat.v1.matrix_solve_ls` ](/api_docs/python/tf/linalg/lstsq)

- [ `tf.compat.v2.linalg.lstsq` ](/api_docs/python/tf/linalg/lstsq)



```
 tf.linalg.lstsq(
    matrix,
    rhs,
    l2_regularizer=0.0,
    fast=True,
    name=None
)
 
```

 `matrix`  is a tensor of shape  `[..., M, N]`  whose inner-most 2 dimensions
form  `M` -by- `N`  matrices. Rhs is a tensor of shape  `[..., M, K]`  whose
inner-most 2 dimensions form  `M` -by- `K`  matrices.  The computed output is a
 `Tensor`  of shape  `[..., N, K]`  whose inner-most 2 dimensions form  `M` -by- `K` 
matrices that solve the equations
 `matrix[..., :, :] * output[..., :, :] = rhs[..., :, :]`  in the least squares
sense.

Below we will use the following notation for each pair of matrix and
right-hand sides in the batch:

 `matrix` =A∈ℜm×n,
 `rhs` =B∈ℜm×k,
 `output` =X∈ℜn×k,
 `l2_regularizer` =λ.

If  `fast`  is  `True` , then the solution is computed by solving the normal
equations using Cholesky decomposition. Specifically, if m≥n then
X=(ATA+λI)−1ATB, which solves the least-squares
problem X=argminZ∈ℜn×k||AZ−B||2F+λ||Z||2F<script type="math/tex" id="MathJax-Element-7">X = \mathrm{argmin}_{Z \in \Re^{n \times k}} ||A Z - B||_F^2 +
\lambda ||Z||_F^2</script>. If m<n then  `output`  is computed as
X=AT(AAT+λI)−1B, which (for λ=0) is
the minimum-norm solution to the under-determined linear system, i.e.
X=argminZ∈ℜn×k||Z||2F, subject to
AZ=B. Notice that the fast path is only numerically stable when
A is numerically full rank and has a condition number
cond(A)<1√ϵmach orλ
is sufficiently large.

If  `fast`  is  `False`  an algorithm based on the numerically robust complete
orthogonal decomposition is used. This computes the minimum-norm
least-squares solution, even when A is rank deficient. This path is
typically 6-7 times slower than the fast path. If  `fast`  is  `False`  then
 `l2_regularizer`  is ignored.



#### Args:

- **`matrix`** :  `Tensor`  of shape  `[..., M, N]` .

- **`rhs`** :  `Tensor`  of shape  `[..., M, K]` .

- **`l2_regularizer`** : 0-D  `double`   `Tensor` . Ignored if  `fast=False` .

- **`fast`** : bool. Defaults to  `True` .

- **`name`** : string, optional name of the operation.



#### Returns:

- **`output`** :  `Tensor`  of shape  `[..., N, K]`  whose inner-most 2 dimensions form
 `M` -by- `K`  matrices that solve the equations
 `matrix[..., :, :] * output[..., :, :] = rhs[..., :, :]`  in the least
squares sense.



#### Raises:

- **`NotImplementedError`** : linalg.lstsq is currently disabled for complex128
and l2_regularizer != 0 due to poor accuracy.

