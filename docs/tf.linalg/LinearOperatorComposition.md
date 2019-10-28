## Class LinearOperatorComposition
Composes one or more `LinearOperators`.
Inherits From: `LinearOperator`
### Aliases:
- Class `tf.compat.v1.linalg.LinearOperatorComposition`
- Class `tf.compat.v2.linalg.LinearOperatorComposition`
This operator composes one or more linear operators `[op1,...,opJ]`, building a new `LinearOperator` with action defined by:

```
 op_composed(x) := op1(op2(...(opJ(x)...))
```
If `opj` acts like [batch] matrix `Aj`, then `op_composed` acts like the [batch] matrix formed with the multiplication `A1 A2...AJ`.
If `opj` has shape `batch_shape_j + [M_j, N_j]`, then we must have `N_j = M_{j+1}`, in which case the composed operator has shape equal to `broadcast_batch_shape + [M_1, N_J]`, where `broadcast_batch_shape` is the mutual broadcast of `batch_shape_j`, `j = 1,...,J`, assuming the intermediate batch shapes broadcast. Even if the composed shape is well defined, the composed operator's methods may fail due to lack of broadcasting ability in the defining operators' methods.

```
 # Create a 2 x 2 linear operator composed of two 2 x 2 operators.
operator_1 = LinearOperatorFullMatrix([[1., 2.], [3., 4.]])
operator_2 = LinearOperatorFullMatrix([[1., 0.], [0., 1.]])
operator = LinearOperatorComposition([operator_1, operator_2])

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

# Create a [2, 3] batch of 4 x 5 linear operators.
matrix_45 = tf.random.normal(shape=[2, 3, 4, 5])
operator_45 = LinearOperatorFullMatrix(matrix)

# Create a [2, 3] batch of 5 x 6 linear operators.
matrix_56 = tf.random.normal(shape=[2, 3, 5, 6])
operator_56 = LinearOperatorFullMatrix(matrix_56)

# Compose to create a [2, 3] batch of 4 x 6 operators.
operator_46 = LinearOperatorComposition([operator_45, operator_56])

# Create a shape [2, 3, 6, 2] vector.
x = tf.random.normal(shape=[2, 3, 6, 2])
operator.matmul(x)
==> Shape [2, 3, 4, 2] Tensor
```
#### Performance
The performance of `LinearOperatorComposition` on any operation is equal to the sum of the individual operators' operations.
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
    is_square=None,
    name=None
)
```
Initialize a `LinearOperatorComposition`.
