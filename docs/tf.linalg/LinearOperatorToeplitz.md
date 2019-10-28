## Class LinearOperatorToeplitz
`LinearOperator` acting like a [batch] of toeplitz matrices.
Inherits From: `LinearOperator`
### Aliases:
- Class `tf.compat.v1.linalg.LinearOperatorToeplitz`
- Class `tf.compat.v2.linalg.LinearOperatorToeplitz`
This operator acts like a [`b`atch] Toeplitz matrix `A` with shape `[B1,...,Bb, N, N]` for some `b >= 0`. The first `b` indices index a `b`atch mem`b`er. For every `b`atch index `i1,...,ib)`, `A`[i1,...,i`b`, : :] is an `N x N` matrix. This matrix `A` is not materialized, `b`ut for purposes of `b`roadcasting this shape will `b`e relevant.
#### Description in terms of toeplitz matrices
Toeplitz means that `A` has constant diagonals. Hence, `A` can be generated with two vectors. One represents the first column of the matrix, and the other represents the first row.
Below is a 4 x 4 example:

```
 A = |a b c d|
    |e a b c|
    |f e a b|
    |g f e a|
```
#### Example of a Toeplitz operator.

```
 # Create a 3 x 3 Toeplitz operator.
col = [1., 2., 3.]
row = [1., 4., -9.]
operator = LinearOperatorToeplitz(col, row)

operator.to_dense()
==> [[1., 4., -9.],
     [2., 1., 4.],
     [3., 2., 1.]]

operator.shape
==> [3, 3]

operator.log_abs_determinant()
==> scalar Tensor

x = ... Shape [3, 4] Tensor
operator.matmul(x)
==> Shape [3, 4] Tensor

#### Shape compatibility

This operator acts on [batch] matrix with compatible shape.
`x` is a batch matrix with compatible shape for `matmul` and `solve` if
```
operator.shape = [B1,...,Bb] + [N, N], with b >= 0 x.shape = [C1,...,Cc] + [N, R], and [C1,...,Cc] broadcasts with [B1,...,Bb] to [D1,...,Dd]

```
 #### Matrix property hints

This `LinearOperator` is initialized with boolean flags of the form `is_X`,
for `X = non_singular, self_adjoint, positive_definite, square`.
These have the following meaning:

* If `is_X == True`, callers should expect the operator to have the
  property `X`.  This is a promise that should be fulfilled, but is *not* a
  runtime assert.  For example, finite floating point precision may result
  in these promises being violated.
* If `is_X == False`, callers should expect the operator to not have `X`.
* If `is_X == None` (the default), callers should have no expectation either
  way.

<h2 id="__init__"><code>__init__</code></h2>

<a target="_blank" href="https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator_toeplitz.py#L109-L166">View source</a>

``` python
__init__(
    col,
    row,
    is_non_singular=None,
    is_self_adjoint=None,
    is_positive_definite=None,
    is_square=None,
    name='LinearOperatorToeplitz'
)
```
Initialize a `LinearOperatorToeplitz`.
#### Args:
- `col`: Shape `[B1,...,Bb, N]` `Tensor` with `b >= 0` `N >= 0`. The first `col`umn of the operator. Allowed dtypes: `float16`, `float32`, `float64`, `complex64`, `complex128`. Note that the first entry of `col` is assumed to be the same as the first entry of `row`.
- `row`: Shape `[B1,...,Bb, N]` `Tensor` with `b >= 0` `N >= 0`. The first `row` of the operator. Allowed dtypes: `float16`, `float32`, `float64`, `complex64`, `complex128`. Note that the first entry of `row` is assumed to be the same as the first entry of `col`.
- `is_non_singular`: Expect that this operator is non-singular.
- `is_self_adjoint`: Expect that this operator is equal to its hermitian transpose. If `diag.dtype` is real, this is auto-set to `True`.
- `is_positive_definite`: E`x`pect that this operator is positive definite, meaning the quadratic form `x`^H A `x` has positive real part for all nonzero `x`. Note that we do not require the operator to be self-adjoint to be positive-definite. See: https://en.wikipedia.org/wiki/Positive-definite_matri`x`#E`x`tension_for_non-symmetric_matrices
- `is_square`: Expect that this operator acts like square [batch] matrices.
- `name`: A `name` for this `LinearOperator`.
## Properties
### H
Returns the adjoint of the current `LinearOperator`.
