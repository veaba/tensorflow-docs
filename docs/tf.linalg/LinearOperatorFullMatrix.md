## Class LinearOperatorFullMatrix
`LinearOperator` that wraps a [batch] matrix.
Inherits From: `LinearOperator`
### Aliases:
- Class `tf.compat.v1.linalg.LinearOperatorFullMatrix`
- Class `tf.compat.v2.linalg.LinearOperatorFullMatrix`
This operator wraps a [`b`atch] matrix `A` (which is a `Tensor`) with shape `[B1,...,Bb, M, N]` for some `b >= 0`. The first `b` indices index a `b`atch mem`b`er. For every `b`atch index `i1,...,ib)`, `A`[i1,...,i`b`, : :] is an `M x N` matrix.

```
 # Create a 2 x 2 linear operator.
matrix = [[1., 2.], [3., 4.]]
operator = LinearOperatorFullMatrix(matrix)

operator.to_dense()
==> [[1., 2.]
     [3., 4.]]

operator.shape
==> [2, 2]

operator.log_abs_determinant()
==> scalar Tensor

x = ... Shape [2, 4] Tensor
operator.matmul(x)
==> Shape [2, 4] Tensor

# Create a [2, 3] batch of 4 x 4 linear operators.
matrix = tf.random.normal(shape=[2, 3, 4, 4])
operator = LinearOperatorFullMatrix(matrix)
```
#### Shape compatibility
This operator acts on [batch] matri`x` with compatible shape. `x` is a batch matri`x` with compatible shape for `matmul` and `solve` if

```
 operator.shape = [B1,...,Bb] + [M, N],  with b >= 0
x.shape =        [B1,...,Bb] + [N, R],  with R >= 0.
```
#### Performance
`LinearOperatorFullMatrix` has exactly the same performance as would be achieved by using standard `TensorFlow` matrix ops. Intelligent choices are made based on the following initialization hints.
- If `dtype` is real, and `is_self_adjoint` and `is_positive_definite`, a Cholesky factorization is used for the determinant and solve.
In all cases, suppose `operator` is a `LinearOperatorFullMatrix` of shape `[M, N]`, and `x.shape = [N, R]`. Then
If instead `operator` and `x` have shape `[B1,...,Bb, M, N]` and `[B1,...,Bb, N, R]`, every operation increases in comple`x`ity by B1*...*Bb.
#### Matrix property hints
This `LinearOperator` is initialized with boolean flags of the form `is_X`, for `X = non_singular, self_adjoint, positive_definite, square`. These have the following meaning:
- If `is_X == True`, callers should expect the operator to have the property `X`. This is a promise that should be fulfilled, but is not a runtime assert. For example, finite floating point precision may result in these promises being violated.
- If `is_X == False`, callers should expect the operator to not have `X`.
- If `is_X == None` (the default), callers should have no expectation either way.
## __init__
View source

```
 __init__(
    matrix,
    is_non_singular=None,
    is_self_adjoint=None,
    is_positive_definite=None,
    is_square=None,
    name='LinearOperatorFullMatrix'
)
```
Initialize a `LinearOperatorFullMatrix`.
#### Args:
- `matrix`: Shape `[B1,...,Bb, M, N]` with `b >= 0`, `M, N >= 0`. Allowed dtypes: `float16`, `float32`, `float64`, `complex64`, `complex128`.
- `is_non_singular`: Expect that this operator is non-singular.
- `is_self_adjoint`: Expect that this operator is equal to its hermitian transpose.
- `is_positive_definite`: E`x`pect that this operator is positive definite, meaning the quadratic form `x`^H A `x` has positive real part for all nonzero `x`. Note that we do not require the operator to be self-adjoint to be positive-definite. See: https://en.wikipedia.org/wiki/Positive-definite_matri`x`#E`x`tension_for_non-symmetric_matrices
- `is_square`: Expect that this operator acts like square [batch] matrices.
- `name`: A `name` for this `LinearOperator`.
#### Raises:
- `TypeError`: If `diag.dtype` is not an allowed type.
## Properties
### H
Returns the adjoint of the current `LinearOperator`.
