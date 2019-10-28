## Class LinearOperatorScaledIdentity
`LinearOperator` acting like a scaled [batch] identity matrix `A = c I`.
### Aliases:
- Class `tf.compat.v1.linalg.LinearOperatorScaledIdentity`
- Class `tf.compat.v2.linalg.LinearOperatorScaledIdentity`
This operator acts like a scaled [`b`atch] identity matrix `A` with shape `[B1,...,Bb, N, N]` for some `b >= 0`. The first `b` indices index a `b`atch mem`b`er. For every `b`atch index `i1,...,ib)`, `A`[i1,...,i`b`, : :] is a scaled version of the `N x N` identity matrix.
`LinearOperatorIdentity` is initialized with `num_rows`, and a `multiplier` (a `Tensor`) of shape `[B1,...,Bb]`. `N` is set to `num_rows`, and the `multiplier` determines the scale for each batch member.

```
 # Create a 2 x 2 scaled identity matrix.
operator = LinearOperatorIdentity(num_rows=2, multiplier=3.)

operator.to_dense()
==> [[3., 0.]
     [0., 3.]]

operator.shape
==> [2, 2]

operator.log_abs_determinant()
==> 2 * Log[3]

x = ... Shape [2, 4] Tensor
operator.matmul(x)
==> 3 * x

y = tf.random.normal(shape=[3, 2, 4])
# Note that y.shape is compatible with operator.shape because operator.shape
# is broadcast to [3, 2, 2].
x = operator.solve(y)
==> 3 * x

# Create a 2-batch of 2x2 identity matrices
operator = LinearOperatorIdentity(num_rows=2, multiplier=5.)
operator.to_dense()
==> [[[5., 0.]
      [0., 5.]],
     [[5., 0.]
      [0., 5.]]]

x = ... Shape [2, 2, 3]
operator.matmul(x)
==> 5 * x

# Here the operator and x have different batch_shape, and are broadcast.
x = ... Shape [1, 2, 3]
operator.matmul(x)
==> 5 * x
```
### Shape compatibility
This operator acts on [batch] matri`x` with compatible shape. `x` is a batch matri`x` with compatible shape for `matmul` and `solve` if

```
 operator.shape = [B1,...,Bb] + [N, N],  with b >= 0
x.shape =   [C1,...,Cc] + [N, R],
and [C1,...,Cc] broadcasts with [B1,...,Bb] to [D1,...,Dd]
```
### Performance
#### Matrix property hints
This `LinearOperator` is initialized with boolean flags of the form `is_X`, for `X = non_singular, self_adjoint, positive_definite, square`. These have the following meaning * If `is_X` == True, callers should expect the operator to have the property `X`. This is a promise that should be fulfilled, but is not a runtime assert. For example, finite floating point precision may result in these promises being violated. * If `is_X` == False, callers should expect the operator to not have `X`. * If `is_X` == None (the default), callers should have no expectation either way.
## __init__
View source

```
 __init__(
    num_rows,
    multiplier,
    is_non_singular=None,
    is_self_adjoint=None,
    is_positive_definite=None,
    is_square=True,
    assert_proper_shapes=False,
    name='LinearOperatorScaledIdentity'
)
```
Initialize a `LinearOperatorScaledIdentity`.
The `LinearOperatorScaledIdentity` is initialized with `num_rows`, which determines the size of each identity matrix, and a `multiplier`, which defines `dtype`, batch shape, and scale of each matrix.
This operator is able to broadcast the leading (batch) dimensions.
#### Args:
- `num_rows`: Scalar non-negative integer `Tensor`. Number of rows in the corresponding identity matrix.
- `multiplier`: `Tensor` of shape `[B1,...,Bb]`, or `[]` (a scalar).
- `is_non_singular`: Expect that this operator is non-singular.
- `is_self_adjoint`: Expect that this operator is equal to its hermitian transpose.
- `is_positive_definite`: E`x`pect that this operator is positive definite, meaning the quadratic form `x`^H A `x` has positive real part for all nonzero `x`. Note that we do not require the operator to be self-adjoint to be positive-definite. See: https://en.wikipedia.org/wiki/Positive-definite_matri`x`#E`x`tension_for_non-symmetric_matrices
- `is_square`: Expect that this operator acts like square [batch] matrices.
- `assert_proper_shapes`: Python `bool`. If `False`, only perform static checks that initialization and method arguments have proper shape. If `True`, and static checks are inconclusive, add asserts to the graph.
- `name`: A `name` for this `LinearOperator`
#### Raises:
- `ValueError`: If `num_rows` is determined statically to be non-scalar, or negative.
## Properties
### H
Returns the adjoint of the current `LinearOperator`.
