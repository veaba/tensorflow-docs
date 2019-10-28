## Class LinearOperatorLowRankUpdate
Perturb a `LinearOperator` with a rank `K` update.
Inherits From: `LinearOperator`
### Aliases:
- Class `tf.compat.v1.linalg.LinearOperatorLowRankUpdate`
- Class `tf.compat.v2.linalg.LinearOperatorLowRankUpdate`
This operator acts like a [`b`atch] matrix `A` with shape `[B1,...,Bb, M, N]` for some `b >= 0`. The first `b` indices index a `b`atch mem`b`er. For every `b`atch index `i1,...,ib)`, `A`[i1,...,i`b`, : :] is an `M x N` matrix.
`LinearOperatorLowRankUpdate` represents A = L + U D V^H, where

```
 L, is a LinearOperator representing [batch] M x N matrices
U, is a [batch] M x K matrix.  Typically K << M.
D, is a [batch] K x K matrix.
V, is a [batch] N x K matrix.  Typically K << N.
V^H is the Hermitian transpose (adjoint) of V.
```
If `M = N`, determinants and solves are done using the matrix determinant lemma and Woodbury identities, and thus require L and D to be non-singular.
Solves and determinants will be attempted unless the "is_non_singular" property of L and D is False.
In the event that L and D are positive-definite, and U = V, solves and determinants can be done using a Cholesky factorization.

```
 # Create a 3 x 3 diagonal linear operator.
diag_operator = LinearOperatorDiag(
    diag_update=[1., 2., 3.], is_non_singular=True, is_self_adjoint=True,
    is_positive_definite=True)

# Perturb with a rank 2 perturbation
operator = LinearOperatorLowRankUpdate(
    operator=diag_operator,
    u=[[1., 2.], [-1., 3.], [0., 0.]],
    diag_update=[11., 12.],
    v=[[1., 2.], [-1., 3.], [10., 10.]])

operator.shape
==> [3, 3]

operator.log_abs_determinant()
==> scalar Tensor

x = ... Shape [3, 4] Tensor
operator.matmul(x)
==> Shape [3, 4] Tensor
```
### Shape compatibility
This operator acts on [batch] matri`x` with compatible shape. `x` is a batch matri`x` with compatible shape for `matmul` and `solve` if

```
 operator.shape = [B1,...,Bb] + [M, N],  with b >= 0
x.shape =        [B1,...,Bb] + [N, R],  with R >= 0.
```
### Performance
