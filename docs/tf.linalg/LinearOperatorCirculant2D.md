## Class LinearOperatorCirculant2D

LinearOperator acting like a block circulant matrix.
### Aliases:
- Class `tf.compat.v1.linalg.LinearOperatorCirculant2D`
- Class `tf.compat.v2.linalg.LinearOperatorCirculant2D`

This operator acts like a block circulant matrix A with shape [B1,...,Bb, N, N] for some b >= 0. The first b indices index a batch member. For every batch index (i1,...,ib), A[i1,...,ib, : :] is an N x N matrix. This matrix A is not materialized, but for purposes of broadcasting this shape will be relevant.
#### Description in terms of block circulant matrices

If A is block circulant, with block sizes N0, N1 (N0 * N1 = N): A has a block circulant structure, composed of N0 x N0 blocks, with each block an N1 x N1 circulant matrix.

For example, with W, X, Y, Z each circulant,

```
 A = |W Z Y X|
    |X W Z Y|
    |Y X W Z|
    |Z Y X W|
```

Note that A itself will not in general be circulant.
#### Description in terms of the frequency spectrum

There is an equivalent description in terms of the [batch] spectrum H and Fourier transforms. Here we consider A.shape = [N, N] and ignore batch dimensions.

If H.shape = [N0, N1], (N0 * N1 = N): Loosely speaking, matrix multiplication is equal to the action of a Fourier multiplier: A u = IDFT2[ H DFT2[u] ]. Precisely speaking, given [N, R] matrix u, let DFT2[u] be the [N0, N1, R] Tensor defined by re-shaping u to [N0, N1, R] and taking a two dimensional DFT across the first two dimensions. Let IDFT2 be the inverse of DFT2. Matrix multiplication may be expressed columnwise:

(A u)_r = IDFT2[ H * (DFT2[u])_r ]
#### Operator properties deduced from the spectrum.
- This operator is positive definite if and only if `Real{H} > 0`.

A general property of Fourier transforms is the correspondence between Hermitian functions and real valued transforms.

Suppose H.shape = [B1,...,Bb, N0, N1], we say that H is a Hermitian spectrum if, with % indicating modulus division,

```
 H[..., n0 % N0, n1 % N1] = ComplexConjugate[ H[..., (-n0) % N0, (-n1) % N1 ].
```
- This operator corresponds to a real matrix if and only if `H` is `H`ermitian.
- This operator is self-adjoint if and only if `H` is real.

See e.g. "Discrete-Time Signal Processing", Oppenheim and Schafer.
### Example of a self-adjoint positive definite operator

```
 # spectrum is real ==> operator is self-adjoint
# spectrum is positive ==> operator is positive definite
spectrum = [[1., 2., 3.],
            [4., 5., 6.],
            [7., 8., 9.]]

operator = LinearOperatorCirculant2D(spectrum)

# IFFT[spectrum]
operator.convolution_kernel()
==> [[5.0+0.0j, -0.5-.3j, -0.5+.3j],
     [-1.5-.9j,        0,        0],
     [-1.5+.9j,        0,        0]]

operator.to_dense()
==> Complex self adjoint 9 x 9 matrix.
```
#### Example of defining in terms of a real convolution kernel,

```
 # convolution_kernel is real ==> spectrum is Hermitian.
convolution_kernel = [[1., 2., 1.], [5., -1., 1.]]
spectrum = tf.signal.fft2d(tf.cast(convolution_kernel, tf.complex64))

# spectrum is shape [2, 3] ==> operator is shape [6, 6]
# spectrum is Hermitian ==> operator is real.
operator = LinearOperatorCirculant2D(spectrum, input_output_dtype=tf.float32)
```
#### Performance

Suppose operator is a LinearOperatorCirculant of shape [N, N], and x.shape = [N, R]. Then
- operator.matmul(x) is O(R*N*Log[N])
- operator.solve(x) is O(R*N*Log[N])
- `operator.determinant`() involves a size `N` `reduce_prod`.

If instead operator and x have shape [B1,...,Bb, N, N] and [B1,...,Bb, N, R], every operation increases in complexity by B1*...*Bb.
#### Matrix property hints

This LinearOperator is initialized with boolean flags of the form is_X, for X = non_singular, self_adjoint, positive_definite, square. These have the following meaning * If is_X == True, callers should expect the operator to have the property X. This is a promise that should be fulfilled, but is not a runtime assert. For example, finite floating point precision may result in these promises being violated. * If is_X == False, callers should expect the operator to not have X. * If is_X == None (the default), callers should have no expectation either way.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator_circulant.py#L860-L913)


```
 __init__(
    spectrum,
    input_output_dtype=tf.dtypes.complex64,
    is_non_singular=None,
    is_self_adjoint=None,
    is_positive_definite=None,
    is_square=True,
    name='LinearOperatorCirculant2D'
)
```

Initialize an LinearOperatorCirculant2D.

This LinearOperator is initialized to have shape [B1,...,Bb, N, N] by providing spectrum, a [B1,...,Bb, N0, N1] Tensor with N0*N1 = N.

If input_output_dtype = DTYPE:
- Arguments to methods such as `matmul` or `solve` must be `DTYPE`.
- Values returned by all methods, such as `matmul` or `determinant` will be cast to `DTYPE`.

Note that if the spectrum is not Hermitian, then this operator corresponds to a complex matrix with non-zero imaginary part. In this case, setting input_output_dtype to a real type will forcibly cast the output to be real, resulting in incorrect results!

If on the other hand the spectrum is Hermitian, then this operator corresponds to a real-valued matrix, and setting input_output_dtype to a real type is fine.
#### Args:
- `spectrum`:` `Shape` `[`B``1``,``.``.``.``,``B``b``,`` ``N`]` ``Tensor``.`` `Allowed` `dtypes:` ``float16``,`` ``float32``,`` ``float64``,`` ``complex64``,`` ``complex128``.`` `Type` `can` ``b`e` `different` `than` ``input_output_dtype`
- `input_output_dtype`:` ``dtype`` `for` `input/output`.`
- `is_non_singular`:` `Expect` `that` `this` `operator` `is` `non-singular`.`
- `is_self_adjoint`:` `Expect` `that` `this` `operator` `is` `equal` `to` `its` `hermitian` `transpose`.`` `If` ``spectrum`` `is` `real`,`` `this` `will` `always` ``b`e` `true`.`
- `is_positive_definite`:` `E`x`pect` `that` `this` `operator` `is` `positive` `definite`,`` `meaning` `the` `quadratic` `form` ``x`^H` `A` ``x`` `has` `positive` `real` `part` `for` `all` `nonzero` ``x``.`` ``N`ote` `that` `we` `do` `not` `require` `the` `operator` `to` ``b`e` `self-adjoint` `to` ``b`e` `positive-definite`.`` `See:` `https://en`.`wikipedia`.`org/wiki/Positive-definite_matri`x`
#E`x`tension_for_non_symmetric_matrices
- `is_square`:` `E`x`pect` `that` `this` `operator` `acts` `like` `square` `[`b`atch]` `matrices`.`
- `name`:` `A` ``name`` `to` `prepend` `to` `all` `ops` `created` ``b`y` `this` `class`.`
## Properties
### H

Returns the adjoint of the current LinearOperator.

Given A representing this LinearOperator, return A*. Note that calling self.adjoint() and self.H are equivalent.
#### Args:
- `name`: A `name` for this `Op`.
#### Returns:

LinearOperator which represents the adjoint of this LinearOperator.
### batch_shape

TensorShape of batch dimensions of this LinearOperator.

If this operator acts like the batch matrix A with A.shape = [B1,...,Bb, M, N], then this returns TensorShape([B1,...,Bb]), equivalent to A.get_shape()[:-2]
#### Returns:

TensorShape, statically determined, may be undefined.
### block_depth

Depth of recursively defined circulant blocks defining this Operator.

With A the dense representation of this Operator,

block_depth = 1 means A is symmetric circulant. For example,

```
 A = |w z y x|
    |x w z y|
    |y x w z|
    |z y x w|
```

block_depth = 2 means A is block symmetric circulant with symemtric circulant blocks. For example, with W, X, Y, Z symmetric circulant,

```
 A = |W Z Y X|
    |X W Z Y|
    |Y X W Z|
    |Z Y X W|
```

block_depth = 3 means A is block symmetric circulant with block symmetric circulant blocks.
#### Returns:

Python integer.
### block_shape
### domain_dimension

Dimension (in the sense of vector spaces) of the domain of this operator.

If this operator acts like the batch matrix A with A.shape = [B1,...,Bb, M, N], then this returns N.
#### Returns:

Dimension object.
### dtype

The DType of Tensors handled by this LinearOperator.
### graph_parents

List of graph dependencies of this LinearOperator.
### is_non_singular
### is_positive_definite
### is_self_adjoint
### is_square

Return True/False depending on if this operator is square.
### range_dimension

Dimension (in the sense of vector spaces) of the range of this operator.

If this operator acts like the batch matrix A with A.shape = [B1,...,Bb, M, N], then this returns M.
#### Returns:

Dimension object.
### shape

TensorShape of this LinearOperator.

If this operator acts like the batch matrix A with A.shape = [B1,...,Bb, M, N], then this returns TensorShape([B1,...,Bb, M, N]), equivalent to A.get_shape().
#### Returns:

TensorShape, statically determined, may be undefined.
### spectrum
### tensor_rank

Rank (in the sense of tensors) of matrix corresponding to this operator.

If this operator acts like the batch matrix A with A.shape = [B1,...,Bb, M, N], then this returns b + 2.
#### Args:
- `name`: A `name` for this `Op`.
#### Returns:

Python integer, or None if the tensor rank is undefined.
## Methods
### add_to_tensor
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L1014-L1027)


```
 add_to_tensor(
    x,
    name='add_to_tensor'
)
```

Add matrix represented by this operator to x. Equivalent to A + x.
#### Args:
- `x`: `Tensor` with same `dtype` and shape broadcastable to `self.shape`.
- `name`: A `name` to give this `Op`.
#### Returns:

A Tensor with broadcast shape and same dtype as self.
### adjoint
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L870-L885)


```
 adjoint(name='adjoint')
```

Returns the adjoint of the current LinearOperator.

Given A representing this LinearOperator, return A*. Note that calling self.adjoint() and self.H are equivalent.
#### Args:
- `name`: A `name` for this `Op`.
#### Returns:

LinearOperator which represents the adjoint of this LinearOperator.
### assert_hermitian_spectrum
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator_circulant.py#L328-L348)


```
 assert_hermitian_spectrum(name='assert_hermitian_spectrum')
```

Returns an Op that asserts this operator has Hermitian spectrum.

This operator corresponds to a real-valued matrix if and only if its spectrum is Hermitian.
#### Args:
- `name`: A `name` to give this `Op`.
#### Returns:

An Op that asserts this operator has Hermitian spectrum.
### assert_non_singular
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L484-L502)


```
 assert_non_singular(name='assert_non_singular')
```

Returns an Op that asserts this operator is non singular.

This operator is considered non-singular if

```
 ConditionNumber < max{100, range_dimension, domain_dimension} * eps,
eps := np.finfo(self.dtype.as_numpy_dtype).eps
```
#### Args:
- `name`: A string `name` to prepend to created ops.
#### Returns:

An Assert Op, that, when run, will raise an InvalidArgumentError if the operator is singular.
### assert_positive_definite
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L520-L535)


```
 assert_positive_definite(name='assert_positive_definite')
```

Returns an Op that asserts this operator is positive definite.

Here, positive definite means that the quadratic form x^H A x has positive real part for all nonzero x. Note that we do not require the operator to be self-adjoint to be positive definite.
#### Args:
- `name`: A `name` to give this `Op`.
#### Returns:

An Assert Op, that, when run, will raise an InvalidArgumentError if the operator is not positive definite.
### assert_self_adjoint
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L547-L561)


```
 assert_self_adjoint(name='assert_self_adjoint')
```

Returns an Op that asserts this operator is self-adjoint.

Here we check that this operator is exactly equal to its hermitian transpose.
#### Args:
- `name`: A string `name` to prepend to created ops.
#### Returns:

An Assert Op, that, when run, will raise an InvalidArgumentError if the operator is not self-adjoint.
### batch_shape_tensor
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L318-L338)


```
 batch_shape_tensor(name='batch_shape_tensor')
```

Shape of batch dimensions of this operator, determined at runtime.

If this operator acts like the batch matrix A with A.shape = [B1,...,Bb, M, N], then this returns a Tensor holding [B1,...,Bb].
#### Args:
- `name`: A `name` for this `Op`.
#### Returns:

int32 Tensor
### block_shape_tensor
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator_circulant.py#L180-L182)


```
 block_shape_tensor()
```

Shape of the block dimensions of self.spectrum.
### cholesky
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L915-L938)


```
 cholesky(name='cholesky')
```

Returns a Cholesky factor as a LinearOperator.

Given A representing this LinearOperator, if A is positive definite self-adjoint, return L, where A = L L^T, i.e. the cholesky decomposition.
#### Args:
- `name`: A `name` for this `Op`.
#### Returns:

LinearOperator which represents the lower triangular matrix in the Cholesky decomposition.
#### Raises:
- `ValueError`: When the `LinearOperator` is not hinted to be positive definite and self adjoint.
### convolution_kernel
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator_circulant.py#L284-L298)


```
 convolution_kernel(name='convolution_kernel')
```

Convolution kernel corresponding to self.spectrum.

The D dimensional DFT of this kernel is the frequency domain spectrum of this operator.
#### Args:
- `name`: A `name` to give this `Op`.
#### Returns:

Tensor with dtype self.dtype.
### determinant
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L677-L694)


```
 determinant(name='det')
```

Determinant for every batch member.
#### Args:
- `name`: A `name` for this `Op`.
#### Returns:

Tensor with shape self.batch_shape and same dtype as self.
#### Raises:
- `NotImplementedError`: If `self.is_square` is `False`.
### diag_part
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L965-L991)


```
 diag_part(name='diag_part')
```

Efficiently get the [batch] diagonal part of this operator.

If this operator has shape [B1,...,Bb, M, N], this returns a Tensor diagonal, of shape [B1,...,Bb, min(M, N)], where diagonal[b1,...,bb, i] = self.to_dense()[b1,...,bb, i, i].

```
 my_operator = LinearOperatorDiag([1., 2.])

# Efficiently get the diagonal
my_operator.diag_part()
==> [1., 2.]

# Equivalent, but inefficient method
tf.linalg.diag_part(my_operator.to_dense())
==> [1., 2.]
```
#### Args:
- `name`: A `name` for this `Op`.
#### Returns:
- `diag_part`: A `Tensor` of same `dtype` as self.
### domain_dimension_tensor
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L393-L414)


```
 domain_dimension_tensor(name='domain_dimension_tensor')
```

Dimension (in the sense of vector spaces) of the domain of this operator.

Determined at runtime.

If this operator acts like the batch matrix A with A.shape = [B1,...,Bb, M, N], then this returns N.
#### Args:
- `name`: A `name` for this `Op`.
#### Returns:

int32 Tensor
### inverse
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L890-L913)


```
 inverse(name='inverse')
```

Returns the Inverse of this LinearOperator.

Given A representing this LinearOperator, return a LinearOperator representing A^-1.
#### Args:
- `name`: A `name` scope to use for ops added by this method.
#### Returns:

LinearOperator representing inverse of this matrix.
#### Raises:
- `ValueError`: When the `LinearOperator` is not hinted to be `non_singular`.
### log_abs_determinant
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L706-L723)


```
 log_abs_determinant(name='log_abs_det')
```

Log absolute value of determinant for every batch member.
#### Args:
- `name`: A `name` for this `Op`.
#### Returns:

Tensor with shape self.batch_shape and same dtype as self.
#### Raises:
- `NotImplementedError`: If `self.is_square` is `False`.
### matmul
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L574-L627)


```
 matmul(
    x,
    adjoint=False,
    adjoint_arg=False,
    name='matmul'
)
```

Transform [batch] matrix x with left multiplication: x --> Ax.

```
 # Make an operator acting like batch matrix A.  Assume A.shape = [..., M, N]
operator = LinearOperator(...)
operator.shape = [..., M, N]

X = ... # shape [..., N, R], batch matrix, R > 0.

Y = operator.matmul(X)
Y.shape
==> [..., M, R]

Y[..., :, r] = sum_j A[..., :, j] X[j, r]
```
#### Args:
- `x`: `LinearOperator` or `Tensor` with compatible shape and same `dtype` as `self`. See class docstring for definition of compatibility.
- `adjoint`: Python `bool`. If `True`, left multiply by the `adjoint`: A^H `x`.
- `adjoint`_arg: Python `bool`. If `True`, compute A `x`^H where `x`^H is the hermitian transpose (transposition and comple`x` conjugation).
- `name`: A `name` for this `Op`.
#### Returns:

A LinearOperator or Tensor with shape [..., M, R] and same dtype as self.
### matvec
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L634-L667)


```
 matvec(
    x,
    adjoint=False,
    name='matvec'
)
```

Transform [batch] vector x with left multiplication: x --> Ax.

```
 # Make an operator acting like batch matric A.  Assume A.shape = [..., M, N]
operator = LinearOperator(...)

X = ... # shape [..., N], batch vector

Y = operator.matvec(X)
Y.shape
==> [..., M]

Y[..., :] = sum_j A[..., :, j] X[..., j]
```
#### Args:
- `x`: `Tensor` with compatible shape and same `dtype` as `self`. `x` is treated as a [batch] vector meaning for every set of leading dimensions, the last dimension defines a vector. See class docstring for definition of compatibility.
- `adjoint`: Python `bool`. If `True`, left multiply by the `adjoint`: A^H `x`.
- `name`: A `name` for this `Op`.
#### Returns:

A Tensor with shape [..., M] and same dtype as self.
### range_dimension_tensor
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L432-L453)


```
 range_dimension_tensor(name='range_dimension_tensor')
```

Dimension (in the sense of vector spaces) of the range of this operator.

Determined at runtime.

If this operator acts like the batch matrix A with A.shape = [B1,...,Bb, M, N], then this returns M.
#### Args:
- `name`: A `name` for this `Op`.
#### Returns:

int32 Tensor
### shape_tensor
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L284-L302)


```
 shape_tensor(name='shape_tensor')
```

Shape of this LinearOperator, determined at runtime.
[tf.shape(A)](https://www.tensorflow.org/api_docs/python/tf/shape)If this operator acts like the batch matrix A with A.shape = [B1,...,Bb, M, N], then this returns a Tensor holding [B1,...,Bb, M, N], equivalent to .

#### Args:
- `name`: A `name` for this `Op`.
#### Returns:

int32 Tensor
### solve
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L740-L813)


```
 solve(
    rhs,
    adjoint=False,
    adjoint_arg=False,
    name='solve'
)
```

Solve (exact or approx) R (batch) systems of equations: A X = rhs.

The returned Tensor will be close to an exact solution if A is well conditioned. Otherwise closeness will vary. See class docstring for details.
#### Examples:

```
 # Make an operator acting like batch matrix A.  Assume A.shape = [..., M, N]
operator = LinearOperator(...)
operator.shape = [..., M, N]

# Solve R > 0 linear systems for every member of the batch.
RHS = ... # shape [..., M, R]

X = operator.solve(RHS)
# X[..., :, r] is the solution to the r'th linear system
# sum_j A[..., :, j] X[..., j, r] = RHS[..., :, r]

operator.matmul(X)
==> RHS
```
#### Args:
- `rhs`: `Tensor` with same `dtype` as this operator and compatible shape. `rhs` is treated like a [batch] matrix meaning for every set of leading dimensions, the last two dimensions defines a matrix. See class docstring for definition of compatibility.
- `adjoint`: Python `bool`. If `True`, solve the system involving the `adjoint` of this `LinearOperator`: A^H X = `rhs`.
- `adjoint`_arg: Python `bool`. If `True`, solve A X = `rhs`^H where `rhs`^H is the hermitian transpose (transposition and complex conjugation).
- `name`: A `name` scope to use for ops added by this method.
#### Returns:

Tensor with shape [...,N, R] and same dtype as rhs.
#### Raises:
- `NotImplementedError`: If `self.is_non_singular` or `is_square` is False.
### solvevec
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L821-L868)


```
 solvevec(
    rhs,
    adjoint=False,
    name='solve'
)
```

Solve single equation with best effort: A X = rhs.

The returned Tensor will be close to an exact solution if A is well conditioned. Otherwise closeness will vary. See class docstring for details.
#### Examples:

```
 # Make an operator acting like batch matrix A.  Assume A.shape = [..., M, N]
operator = LinearOperator(...)
operator.shape = [..., M, N]

# Solve one linear system for every member of the batch.
RHS = ... # shape [..., M]

X = operator.solvevec(RHS)
# X is the solution to the linear system
# sum_j A[..., :, j] X[..., j] = RHS[..., :]

operator.matvec(X)
==> RHS
```
#### Args:
- `rhs`: `Tensor` with same `dtype` as this operator. `rhs` is treated like a [batch] vector meaning for every set of leading dimensions, the last dimension defines a vector. See class docstring for definition of compatibility regarding batch dimensions.
- `adjoint`: Python `bool`. If `True`, solve the system involving the `adjoint` of this `LinearOperator`: A^H X = `rhs`.
- `name`: A `name` scope to use for ops added by this method.
#### Returns:

Tensor with shape [...,N] and same dtype as rhs.
#### Raises:
- `NotImplementedError`: If `self.is_non_singular` or `is_square` is False.
### tensor_rank_tensor
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L357-L375)


```
 tensor_rank_tensor(name='tensor_rank_tensor')
```

Rank (in the sense of tensors) of matrix corresponding to this operator.

If this operator acts like the batch matrix A with A.shape = [B1,...,Bb, M, N], then this returns b + 2.
#### Args:
- `name`: A `name` for this `Op`.
#### Returns:

int32 Tensor, determined at runtime.
### to_dense
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L956-L959)


```
 to_dense(name='to_dense')
```

Return a dense (batch) matrix representing this operator.
### trace
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L996-L1008)


```
 trace(name='trace')
```

Trace of the linear operator, equal to sum of self.diag_part().

If the operator is square, this is also the sum of the eigenvalues.
#### Args:
- `name`: A `name` for this `Op`.
#### Returns:

Shape [B1,...,Bb] Tensor of same dtype as self.
