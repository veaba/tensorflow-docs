## Class LinearOperatorBlockDiag
Combines one or more `LinearOperators` in to a Block Diagonal matrix.
Inherits From: `LinearOperator`
### Aliases:
- Class `tf.compat.v1.linalg.LinearOperatorBlockDiag`
- Class `tf.compat.v2.linalg.LinearOperatorBlockDiag`
This operator combines one or more linear operators `[op1,...,opJ]`, building a new `LinearOperator`, whose underlying matrix representation is square and has each operator `opi` on the main diagonal, and zero's elsewhere.
#### Shape compatibility
If `opj` acts like a [batch] square matrix `Aj`, then `op_combined` acts like the [batch] square matrix formed by having each matrix `Aj` on the main diagonal.
Each `opj` is required to represent a square matrix, and hence will have shape `batch_shape_j + [M_j, M_j]`.
If `opj` has shape `batch_shape_j + [M_j, M_j]`, then the combined operator has shape `broadcast_batch_shape + [sum M_j, sum M_j]`, where `broadcast_batch_shape` is the mutual broadcast of `batch_shape_j`, `j = 1,...,J`, assuming the intermediate batch shapes broadcast. Even if the combined shape is well defined, the combined operator's methods may fail due to lack of broadcasting ability in the defining operators' methods.

```
 # Create a 4 x 4 linear operator combined of two 2 x 2 operators.
operator_1 = LinearOperatorFullMatrix([[1., 2.], [3., 4.]])
operator_2 = LinearOperatorFullMatrix([[1., 0.], [0., 1.]])
operator = LinearOperatorBlockDiag([operator_1, operator_2])

operator.to_dense()
==> [[1., 2., 0., 0.],
     [3., 4., 0., 0.],
     [0., 0., 1., 0.],
     [0., 0., 0., 1.]]

operator.shape
==> [4, 4]

operator.log_abs_determinant()
==> scalar Tensor

x1 = ... # Shape [2, 2] Tensor
x2 = ... # Shape [2, 2] Tensor
x = tf.concat([x1, x2], 0)  # Shape [2, 4] Tensor
operator.matmul(x)
==> tf.concat([operator_1.matmul(x1), operator_2.matmul(x2)])

# Create a [2, 3] batch of 4 x 4 linear operators.
matrix_44 = tf.random.normal(shape=[2, 3, 4, 4])
operator_44 = LinearOperatorFullMatrix(matrix)

# Create a [1, 3] batch of 5 x 5 linear operators.
matrix_55 = tf.random.normal(shape=[1, 3, 5, 5])
operator_55 = LinearOperatorFullMatrix(matrix_55)

# Combine to create a [2, 3] batch of 9 x 9 operators.
operator_99 = LinearOperatorBlockDiag([operator_44, operator_55])

# Create a shape [2, 3, 9] vector.
x = tf.random.normal(shape=[2, 3, 9])
operator_99.matmul(x)
==> Shape [2, 3, 9] Tensor
```
#### Performance
The performance of `LinearOperatorBlockDiag` on any operation is equal to the sum of the individual operators' operations.
#### Matrix property hints
This `LinearOperator` is initialized with boolean flags of the form `is_X`, for `X = non_singular, self_adjoint, positive_definite, square`. These have the following meaning:
- If `is_X == True`, callers should expect the operator to have the property `X`. This is a promise that should be fulfilled, but is not a runtime assert. For example, finite floating point precision may result in these promises being violated.
- If `is_X == False`, callers should expect the operator to not have `X`.
- If `is_X == None` (the default), callers should have no expectation either way.
## __init__
View source

```
 __init__(
    operators,
    is_non_singular=None,
    is_self_adjoint=None,
    is_positive_definite=None,
    is_square=True,
    name=None
)
```
Initialize a `LinearOperatorBlockDiag`.
`LinearOperatorBlockDiag` is initialized with a list of operators `[op_1,...,op_J]`.
#### Args:
- `operators`: Iterable of `LinearOperator` objects, each with the same `dtype` and composable shape.
- `is_non_singular`: Expect that this operator is non-singular.
- `is_self_adjoint`: Expect that this operator is equal to its hermitian transpose.
- `is_positive_definite`: E`x`pect that this operator is positive definite, meaning the quadratic form `x`^H A `x` has positive real part for all nonzero `x`. Note that we do not require the operator to be self-adjoint to be positive-definite. See: https://en.wikipedia.org/wiki/Positive-definite_matri`x`#E`x`tension_for_non-symmetric_matrices
- `is_square`: Expect that this operator acts like square [batch] matrices. This is true by default, and will raise a `ValueError` otherwise.
- `name`: A `name` for this `LinearOperator`. Default is the individual operators `name`s joined with `_o_`.
#### Raises:
- `TypeError`: If all operators do not have the same `dtype`.
- `ValueError`: If `operators` is empty or are non-square.
## Properties
### H
Returns the adjoint of the current `LinearOperator`.
