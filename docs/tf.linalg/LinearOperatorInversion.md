## Class LinearOperatorInversion
`LinearOperator` representing the inverse of another operator.
Inherits From: `LinearOperator`
### Aliases:
- Class `tf.compat.v1.linalg.LinearOperatorInversion`
- Class `tf.compat.v2.linalg.LinearOperatorInversion`
This operator represents the inverse of another operator.

```
 # Create a 2 x 2 linear operator.
operator = LinearOperatorFullMatrix([[1., 0.], [0., 2.]])
operator_inv = LinearOperatorInversion(operator)

operator_inv.to_dense()
==> [[1., 0.]
     [0., 0.5]]

operator_inv.shape
==> [2, 2]

operator_inv.log_abs_determinant()
==> - log(2)

x = ... Shape [2, 4] Tensor
operator_inv.matmul(x)
==> Shape [2, 4] Tensor, equal to operator.solve(x)
```
#### Performance
The performance of `LinearOperatorInversion` depends on the underlying operators performance: `solve` and `matmul` are swapped, and determinant is inverted.
#### Matrix property hints
This `LinearOperator` is initialized with boolean flags of the form `is_X`, for `X = non_singular, self_adjoint, positive_definite, square`. These have the following meaning:
- If `is_X == True`, callers should expect the operator to have the property `X`. This is a promise that should be fulfilled, but is not a runtime assert. For example, finite floating point precision may result in these promises being violated.
- If `is_X == False`, callers should expect the operator to not have `X`.
- If `is_X == None` (the default), callers should have no expectation either way.
## __init__
View source

```
 __init__(
    operator,
    is_non_singular=None,
    is_self_adjoint=None,
    is_positive_definite=None,
    is_square=None,
    name=None
)
```
Initialize a `LinearOperatorInversion`.
`LinearOperatorInversion` is initialized with an operator `A`. The `solve` and `matmul` methods are effectively swapped. E.g.

```
 A = MyLinearOperator(...)
B = LinearOperatorInversion(A)
x = [....]  # a vector

assert A.matvec(x) == B.solvevec(x)
```
#### Args:
- `operator`: `LinearOperator` object. If `operator`.is_non_singular == False, an exception is raised. We do allow `operator`.`is_non_singular == None`, in which case this `operator` will have `is_non_singular == None`. Similarly for `is_self_adjoint` and `is_positive_definite`.
- `is_non_singular`: Expect that this operator is non-singular.
- `is_self_adjoint`: Expect that this operator is equal to its hermitian transpose.
- `is_positive_definite`: E`x`pect that this operator is positive definite, meaning the quadratic form `x`^H A `x` has positive real part for all nonzero `x`. Note that we do not require the operator to be self-adjoint to be positive-definite. See: https://en.wikipedia.org/wiki/Positive-definite_matri`x`#E`x`tension_for_non-symmetric_matrices
- `is_square`: Expect that this operator acts like square [batch] matrices.
- `name`: A `name` for this `LinearOperator`. Default is `operator.name + "_inv"`.
#### Raises:
- `ValueError`: If `operator.is_non_singular` is False.
## Properties
### H
Returns the adjoint of the current `LinearOperator`.
