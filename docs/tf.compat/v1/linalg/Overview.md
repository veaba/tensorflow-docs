Operations for linear algebra.
## Classes
[class LinearOperator](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperator): Base class defining a [batch of] linear operator[s].

[class LinearOperatorAdjoint](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorAdjoint): LinearOperator representing the adjoint of another operator.

[class LinearOperatorBlockDiag](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorBlockDiag): Combines one or more LinearOperators in to a Block Diagonal matrix.

[class LinearOperatorCirculant](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorCirculant): LinearOperator acting like a circulant matrix.

[class LinearOperatorCirculant2D](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorCirculant2D): LinearOperator acting like a block circulant matrix.

[class LinearOperatorCirculant3D](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorCirculant3D): LinearOperator acting like a nested block circulant matrix.

[class LinearOperatorComposition](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorComposition): Composes one or more LinearOperators.

[class LinearOperatorDiag](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorDiag): LinearOperator acting like a [batch] square diagonal matrix.

[class LinearOperatorFullMatrix](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorFullMatrix): LinearOperator that wraps a [batch] matrix.

[class LinearOperatorHouseholder](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorHouseholder): LinearOperator acting like a [batch] of Householder transformations.

[class LinearOperatorIdentity](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorIdentity): LinearOperator acting like a [batch] square identity matrix.

[class LinearOperatorInversion](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorInversion): LinearOperator representing the inverse of another operator.

[class LinearOperatorKronecker](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorKronecker): Kronecker product between two LinearOperators.

[class LinearOperatorLowRankUpdate](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorLowRankUpdate): Perturb a LinearOperator with a rank K update.

[class LinearOperatorLowerTriangular](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorLowerTriangular): LinearOperator acting like a [batch] square lower triangular matrix.

[class LinearOperatorScaledIdentity](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorScaledIdentity): LinearOperator acting like a scaled [batch] identity matrix A = c I.

[class LinearOperatorToeplitz](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorToeplitz): LinearOperator acting like a [batch] of toeplitz matrices.

[class LinearOperatorZeros](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperatorZeros): LinearOperator acting like a [batch] zero matrix.

## Functions
[adjoint(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/adjoint): Transposes the last two dimensions of and conjugates tensor matrix.

[band_part(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/band_part): Copy a tensor setting everything outside a central band in each innermost matrix

[cholesky(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/cholesky): Computes the Cholesky decomposition of one or more square matrices.

[cholesky_solve(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/cholesky_solve): Solves systems of linear eqns A X = RHS, given Cholesky factorizations.

[cross(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/cross): Compute the pairwise cross product.

[det(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/det): Computes the determinant of one or more square matrices.

[diag(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/diag): Returns a batched diagonal tensor with given batched diagonal values.

[diag_part(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/diag_part): Returns the batched diagonal part of a batched tensor.

[eigh(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/eigh): Computes the eigen decomposition of a batch of self-adjoint matrices.

[eigvalsh(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/eigvalsh): Computes the eigenvalues of one or more self-adjoint matrices.

[einsum(...)](https://tensorflow.google.cn/api_docs/python/tf/einsum): A generalized contraction between tensors of arbitrary dimension.

[expm(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/expm): Computes the matrix exponential of one or more square matrices.

[eye(...)](https://tensorflow.google.cn/api_docs/python/tf/eye): Construct an identity matrix, or a batch of matrices.

[global_norm(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/global_norm): Computes the global norm of multiple tensors.

[inv(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/inv): Computes the inverse of one or more square invertible matrices or their

[l2_normalize(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/linalg/l2_normalize): Normalizes along dimension axis using an L2 norm. (deprecated arguments)

[logdet(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/logdet): Computes log of the determinant of a hermitian positive definite matrix.

[logm(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/logm): Computes the matrix logarithm of one or more square matrices:

[lstsq(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/lstsq): Solves one or more linear least-squares problems.

[lu(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/lu): Computes the LU decomposition of one or more square matrices.

[matmul(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/matmul): Multiplies matrix a by matrix b, producing a * b.

[matrix_transpose(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/matrix_transpose): Transposes last two dimensions of tensor a.

[matvec(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/matvec): Multiplies matrix a by vector b, producing a * b.

[norm(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/norm): Computes the norm of vectors, matrices, and tensors. (deprecated arguments)

[normalize(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/normalize): Normalizes tensor along dimension axis using specified norm.

[qr(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/qr): Computes the QR decompositions of one or more matrices.

[set_diag(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/set_diag): Returns a batched matrix tensor with new batched diagonal values.

[slogdet(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/slogdet): Computes the sign and the log of the absolute value of the determinant of

[solve(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/solve): Solves systems of linear equations.

[sqrtm(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/sqrtm): Computes the matrix square root of one or more square matrices:

[svd(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/svd): Computes the singular value decompositions of one or more matrices.

[tensor_diag(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/tensor_diag): Returns a diagonal tensor with a given diagonal values.

[tensor_diag_part(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/tensor_diag_part): Returns the diagonal part of the tensor.

[tensordot(...)](https://tensorflow.google.cn/api_docs/python/tf/tensordot): Tensor contraction of a and b along specified axes.

[trace(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/trace): Compute the trace of a tensor x.

[transpose(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/matrix_transpose): Transposes last two dimensions of tensor a.

[triangular_solve(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/triangular_solve): Solves systems of linear equations with upper or lower triangular matrices by backsubstitution.

[tridiagonal_matmul(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/tridiagonal_matmul): Multiplies tridiagonal matrix by matrix.

[tridiagonal_solve(...)](https://tensorflow.google.cn/api_docs/python/tf/linalg/tridiagonal_solve): Solves tridiagonal systems of equations.

