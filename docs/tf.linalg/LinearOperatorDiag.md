## Class LinearOperatorDiag
`LinearOperator` acting like a [batch] square diagonal matrix.
Inherits From: `LinearOperator`
### Aliases:
- Class `tf.compat.v1.linalg.LinearOperatorDiag`
- Class `tf.compat.v2.linalg.LinearOperatorDiag`
This operator acts like a [`b`atch] diagonal matrix `A` with shape `[B1,...,Bb, N, N]` for some `b >= 0`. The first `b` indices index a `b`atch mem`b`er. For every `b`atch index `i1,...,ib)`, `A`[i1,...,i`b`, : :] is an `N x N` matrix. This matrix `A` is not materialized, `b`ut for purposes of `b`roadcasting this shape will `b`e relevant.
`LinearOperatorDiag` is initialized with a (batch) vector.

```
 # Create a 2 x 2 diagonal linear operator.
diag = [1., -1.]
operator = LinearOperatorDiag(diag)

operator.to_dense()
==> [[1.,  0.]
     [0., -1.]]

operator.shape
==> [2, 2]

operator.log_abs_determinant()
==> scalar Tensor

x = ... Shape [2, 4] Tensor
operator.matmul(x)
==> Shape [2, 4] Tensor

# Create a [2, 3] batch of 4 x 4 linear operators.
diag = tf.random.normal(shape=[2, 3, 4])
operator = LinearOperatorDiag(diag)

# Create a shape [2, 1, 4, 2] vector.  Note that this shape is compatible
# since the batch dimensions, [2, 1], are broadcast to
# operator.batch_shape = [2, 3].
y = tf.random.normal(shape=[2, 1, 4, 2])
x = operator.solve(y)
==> operator.matmul(x) = y
```
#### Shape compatibility
This operator acts on [batch] matri`x` with compatible shape. `x` is a batch matri`x` with compatible shape for `matmul` and `solve` if

```
 operator.shape = [B1,...,Bb] + [N, N],  with b >= 0
x.shape =   [C1,...,Cc] + [N, R],
and [C1,...,Cc] broadcasts with [B1,...,Bb] to [D1,...,Dd]
```
#### Performance
Suppose `operator` is a `LinearOperatorDiag` of shape `[N, N]`, and `x.shape = [N, R]`. Then
If instead `operator` and `x` have shape `[B1,...,Bb, N, N]` and `[B1,...,Bb, N, R]`, every operation increases in comple`x`ity by B1*...*Bb.
#### Matrix property hints
This `LinearOperator` is initialized with boolean flags of the form `is_X`, for `X = non_singular, self_adjoint, positive_definite, square`. These have the following meaning:
- If `is_X == True`, callers should expect the operator to have the property `X`. This is a promise that should be fulfilled, but is not a runtime assert. For example, finite floating point precision may result in these promises being violated.
- If `is_X == False`, callers should expect the operator to not have `X`.
- If `is_X == None` (the default), callers should have no expectation either way.
## __init__
View source

```
 __init__(
    diag,
    is_non_singular=None,
    is_self_adjoint=None,
    is_positive_definite=None,
    is_square=None,
    name='LinearOperatorDiag'
)
```
Initialize a `LinearOperatorDiag`.
#### Args:
- `diag`: Shape `[B1,...,Bb, N]` `Tensor` with `b >= 0` `N >= 0`. The `diag`onal of the operator. Allowed dtypes: `float16`, `float32`, `float64`, `complex64`, `complex128`.
- `is_non_singular`: Expect that this operator is non-singular.
- `is_self_adjoint`: Expect that this operator is equal to its hermitian transpose. If `diag.dtype` is real, this is auto-set to `True`.
- `is_positive_definite`: E`x`pect that this operator is positive definite, meaning the quadratic form `x`^H A `x` has positive real part for all nonzero `x`. Note that we do not require the operator to be self-adjoint to be positive-definite. See: https://en.wikipedia.org/wiki/Positive-definite_matri`x`#E`x`tension_for_non-symmetric_matrices
- `is_square`: Expect that this operator acts like square [batch] matrices.
- `name`: A `name` for this `LinearOperator`.
#### Raises:
- `TypeError`: If `diag.dtype` is not an allowed type.
- `ValueError`: If `diag.dtype` is real, and `is_self_adjoint` is not `True`.
## Properties
### H
Returns the adjoint of the current `LinearOperator`.
