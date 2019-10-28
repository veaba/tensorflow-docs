Operations for linear algebra.
## Classes
`class LinearOperator`: Base class defining a [batch of] linear operator[s].
`class LinearOperatorAdjoint`: `LinearOperator` representing the adjoint of another operator.
`class LinearOperatorBlockDiag`: Combines one or more `LinearOperators` in to a Block Diagonal matrix.
`class LinearOperatorCirculant`: `LinearOperator` acting like a circulant matrix.
`class LinearOperatorCirculant2D`: `LinearOperator` acting like a block circulant matrix.
`class LinearOperatorCirculant3D`: `LinearOperator` acting like a nested block circulant matrix.
`class LinearOperatorComposition`: Composes one or more `LinearOperators`.
`class LinearOperatorDiag`: `LinearOperator` acting like a [batch] square diagonal matrix.
`class LinearOperatorFullMatrix`: `LinearOperator` that wraps a [batch] matrix.
`class LinearOperatorHouseholder`: `LinearOperator` acting like a [batch] of Householder transformations.
`class LinearOperatorIdentity`: `LinearOperator` acting like a [batch] square identity matrix.
`class LinearOperatorInversion`: `LinearOperator` representing the inverse of another operator.
`class LinearOperatorKronecker`: Kronecker product between two `LinearOperators`.
`class LinearOperatorLowRankUpdate`: Perturb a `LinearOperator` with a rank `K` update.
`class LinearOperatorLowerTriangular`: `LinearOperator` acting like a [batch] square lower triangular matrix.
`class LinearOperatorScaledIdentity`: `LinearOperator` acting like a scaled [batch] identity matrix `A = c I`.
`class LinearOperatorToeplitz`: `LinearOperator` acting like a [batch] of toeplitz matrices.
`class LinearOperatorZeros`: `LinearOperator` acting like a [batch] zero matrix.
## Functions
