

## Class  `LinearOperatorIdentity` 
 `LinearOperator`  acting like a [batch] square identity matrix.

**别名** : [ `tf.compat.v1.linalg.LinearOperatorIdentity` ](/api_docs/python/tf/linalg/LinearOperatorIdentity), [ `tf.compat.v2.linalg.LinearOperatorIdentity` ](/api_docs/python/tf/linalg/LinearOperatorIdentity)

This operator acts like a [batch] identity matrix  `A`  with shape `[B1,...,Bb, N, N]`  for some  `b >= 0` .  The first  `b`  indices index abatch member.  For every batch index  `(i1,...,ib)` ,  `A[i1,...,ib, : :]`  isan  `N x N`  matrix.  This matrix  `A`  is not materialized, but forpurposes of broadcasting this shape will be relevant.

 `LinearOperatorIdentity`  is initialized with  `num_rows` , and optionally `batch_shape` , and  `dtype`  arguments.  If  `batch_shape`  is  `None` , thisoperator efficiently passes through all arguments.  If  `batch_shape`  isprovided, broadcasting may occur, which will require making copies.

```
 # Create a 2 x 2 identity matrix.
operator = LinearOperatorIdentity(num_rows=2, dtype=tf.float32)

operator.to_dense()
==> [[1., 0.]
     [0., 1.]]

运算符.shape
==> [2, 2]

operator.log_abs_determinant()
==> 0.

x = ... Shape [2, 4] Tensor
operator.matmul(x)
==> Shape [2, 4] Tensor, same as x.

y = tf.random.normal(shape=[3, 2, 4])
# Note that y.shape is compatible with operator.shape because operator.shape
# is broadcast to [3, 2, 2].
# This broadcast does NOT require copying data, since we can infer that y
# will be passed through without changing shape.  We are always able to infer
# this if the operator has no batch_shape.
x = operator.solve(y)
==> Shape [3, 2, 4] Tensor, same as y.

# Create a 2-batch of 2x2 identity matrices
operator = LinearOperatorIdentity(num_rows=2, batch_shape=[2])
operator.to_dense()
==> [[[1., 0.]
      [0., 1.]],
     [[1., 0.]
      [0., 1.]]]

# Here, even though the operator has a batch shape, the input is the same as
# the output, so x can be passed through without a copy.  The operator is able
# to detect that no broadcast is necessary because both x and the operator
# have statically defined shape.
x = ... Shape [2, 2, 3]
operator.matmul(x)
==> Shape [2, 2, 3] Tensor, same as x

# Here the operator and x have different batch_shape, and are broadcast.
# This requires a copy, since the output is different size than the input.
x = ... Shape [1, 2, 3]
operator.matmul(x)
==> Shape [2, 2, 3] Tensor, equal to [x, x]
 
```

### 形状兼容性
This operator acts on [batch] matrix with compatible shape. `x`  is a batch matrix with compatible shape for  `matmul`  and  `solve`  if

```
 operator.shape = [B1,...,Bb] + [N, N],  with b >= 0
x.shape =   [C1,...,Cc] + [N, R],
and [C1,...,Cc] broadcasts with [B1,...,Bb] to [D1,...,Dd]
 
```

### 性能
If  `batch_shape`  initialization arg is  `None` :

-  `operator.matmul(x)`  is  `O(1)` 
-  `operator.solve(x)`  is  `O(1)` 
-  `operator.determinant()`  is  `O(1)` 
If  `batch_shape`  initialization arg is provided, and static checks cannotrule out the need to broadcast:

-  `operator.matmul(x)`  is  `O(D1*...*Dd*N*R)` 
-  `operator.solve(x)`  is  `O(D1*...*Dd*N*R)` 
-  `operator.determinant()`  is  `O(B1*...*Bb)` 


#### 矩阵属性提示
This  `LinearOperator`  is initialized with boolean flags of the form  `is_X` ,for  `X = non_singular, self_adjoint, positive_definite, square` .These have the following meaning:

- If  `is_X == True` , callers should expect the operator to have theproperty  `X` .  This is a promise that should be fulfilled, but is *not* aruntime assert.  For example, finite floating point precision may resultin these promises being violated.
- If  `is_X == False` , callers should expect the operator to not have  `X` .
- If  `is_X == None`  (the default), callers should have no expectation eitherway.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator_identity.py#L207-L292)

```
 __init__(
    num_rows,
    batch_shape=None,
    dtype=None,
    is_non_singular=True,
    is_self_adjoint=True,
    is_positive_definite=True,
    is_square=True,
    assert_proper_shapes=False,
    name='LinearOperatorIdentity'
)
 
```

Initialize a  `LinearOperatorIdentity` .

The  `LinearOperatorIdentity`  is initialized with arguments defining  `dtype` and shape.

This operator is able to broadcast the leading (batch) dimensions, whichsometimes requires copying data.  If  `batch_shape`  is  `None` , the operatorcan take arguments of any batch shape without copying.  See examples.

#### 参数：
- **`num_rows`** :  Scalar non-negative integer  `Tensor` .  Number of rows in thecorresponding identity matrix.
- **`batch_shape`** :  Optional  `1-D`  integer  `Tensor` .  The shape of the leadingdimensions.  If  `None` , this operator has no leading dimensions.
- **`dtype`** :  Data type of the matrix that this operator represents.
- **`is_non_singular`** :  Expect that this operator is non-singular.
- **`is_self_adjoint`** :  Expect that this operator is equal to its hermitiantranspose.
- **`is_positive_definite`** :  Expect that this operator is positive definite,meaning the quadratic form  `x^H A x`  has positive real part for allnonzero  `x` .  Note that we do not require the operator to beself-adjoint to be positive-definite.  See:https://en.wikipedia.org/wiki/Positive-definite_matrix#Extension_for_non-symmetric_matrices
- **`is_square`** :  Expect that this operator acts like square [batch] matrices.
- **`assert_proper_shapes`** :  Python  `bool` .  If  `False` , only perform staticchecks that initialization and method arguments have proper shape.If  `True` , and static checks are inconclusive, add asserts to the graph.
- **`name`** : A name for this  `LinearOperator` 


#### 加薪：
- **`ValueError`** :  If  `num_rows`  is determined statically to be non-scalar, ornegative.
- **`ValueError`** :  If  `batch_shape`  is determined statically to not be 1-D, ornegative.
- **`ValueError`** :  If any of the following is not  `True` : `{is_self_adjoint, is_non_singular, is_positive_definite}` .
- **`TypeError`** :  If  `num_rows`  or  `batch_shape`  is ref-type (e.g. Variable).


## 属性


###  `H` 
Returns the adjoint of the current  `LinearOperator` .

Given  `A`  representing this  `LinearOperator` , return  `A*` .Note that calling  `self.adjoint()`  and  `self.H`  are equivalent.

#### 参数：
- **`name`** :  A name for this  `Op` .


#### 返回：
 `LinearOperator`  which represents the adjoint of this  `LinearOperator` .

###  `batch_shape` 
 `TensorShape`  of batch dimensions of this  `LinearOperator` .

If this operator acts like the batch matrix  `A`  with `A.shape = [B1,...,Bb, M, N]` , then this returns `TensorShape([B1,...,Bb])` , equivalent to  `A.get_shape()[:-2]` 

#### 返回：
 `TensorShape` , statically determined, may be undefined.

###  `domain_dimension` 
这个算子域的维数（在向量空间的意义上）。

If this operator acts like the batch matrix  `A`  with `A.shape = [B1,...,Bb, M, N]` , then this returns  `N` .

#### 返回：
 `Dimension`  object.

###  `dtype` 
The  `DType`  of  `Tensor` s handled by this  `LinearOperator` .

###  `graph_parents` 
List of graph dependencies of this  `LinearOperator` .

###  `is_non_singular` 


###  `is_positive_definite` 


###  `is_self_adjoint` 


###  `is_square` 
Return  `True/False`  depending on if this operator is square.

###  `range_dimension` 
此运算符范围的维数（在向量空间的意义上）。

If this operator acts like the batch matrix  `A`  with `A.shape = [B1,...,Bb, M, N]` , then this returns  `M` .

#### 返回：
 `Dimension`  object.

###  `shape` 
 `TensorShape`  of this  `LinearOperator` .

If this operator acts like the batch matrix  `A`  with `A.shape = [B1,...,Bb, M, N]` , then this returns `TensorShape([B1,...,Bb, M, N])` , equivalent to  `A.get_shape()` .

#### 返回：
 `TensorShape` , statically determined, may be undefined.

###  `tensor_rank` 
与此算子对应的矩阵的秩（在张量意义上）。

If this operator acts like the batch matrix  `A`  with `A.shape = [B1,...,Bb, M, N]` , then this returns  `b + 2` .

#### 参数：
- **`name`** :  A name for this  `Op` .


#### 返回：
Python integer, or None if the tensor rank is undefined.

## 方法


###  `add_to_tensor` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator_identity.py#L386-L400)

```
 add_to_tensor(
    mat,
    name='add_to_tensor'
)
 
```

Add matrix represented by this operator to  `mat` .  Equiv to  `I + mat` .

#### 参数：
- **`mat`** :   `Tensor`  with same  `dtype`  and shape broadcastable to  `self` .
- **`name`** :  A name to give this  `Op` .


#### 返回：
A  `Tensor`  with broadcast shape and same  `dtype`  as  `self` .

###  `adjoint` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L870-L885)

```
 adjoint(name='adjoint')
 
```

Returns the adjoint of the current  `LinearOperator` .

Given  `A`  representing this  `LinearOperator` , return  `A*` .Note that calling  `self.adjoint()`  and  `self.H`  are equivalent.

#### 参数：
- **`name`** :  A name for this  `Op` .


#### 返回：
 `LinearOperator`  which represents the adjoint of this  `LinearOperator` .

###  `assert_non_singular` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L484-L502)

```
 assert_non_singular(name='assert_non_singular')
 
```

Returns an  `Op`  that asserts this operator is non singular.

This operator is considered non-singular if

```
 ConditionNumber < max{100, range_dimension, domain_dimension} * eps,
eps := np.finfo(self.dtype.as_numpy_dtype).eps
 
```

#### 参数：
- **`name`** :  A string name to prepend to created ops.


#### 返回：
An  `Assert`   `Op` , that, when run, will raise an  `InvalidArgumentError`  if  the operator is singular.

###  `assert_positive_definite` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L520-L535)

```
 assert_positive_definite(name='assert_positive_definite')
 
```

Returns an  `Op`  that asserts this operator is positive definite.

Here, positive definite means that the quadratic form  `x^H A x`  has positivereal part for all nonzero  `x` .  Note that we do not require the operator tobe self-adjoint to be positive definite.

#### 参数：
- **`name`** :  A name to give this  `Op` .


#### 返回：
An  `Assert`   `Op` , that, when run, will raise an  `InvalidArgumentError`  if  the operator is not positive definite.

###  `assert_self_adjoint` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L547-L561)

```
 assert_self_adjoint(name='assert_self_adjoint')
 
```

Returns an  `Op`  that asserts this operator is self-adjoint.

Here we check that this operator is *exactly* equal to its hermitiantranspose.

#### 参数：
- **`name`** :  A string name to prepend to created ops.


#### 返回：
An  `Assert`   `Op` , that, when run, will raise an  `InvalidArgumentError`  if  the operator is not self-adjoint.

###  `batch_shape_tensor` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L318-L338)

```
 batch_shape_tensor(name='batch_shape_tensor')
 
```

Shape of batch dimensions of this operator, determined at runtime.

If this operator acts like the batch matrix  `A`  with `A.shape = [B1,...,Bb, M, N]` , then this returns a  `Tensor`  holding `[B1,...,Bb]` .

#### 参数：
- **`name`** :  A name for this  `Op` .


#### 返回：
 `int32`   `Tensor` 

###  `cholesky` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L915-L938)

```
 cholesky(name='cholesky')
 
```

Returns a Cholesky factor as a  `LinearOperator` .

Given  `A`  representing this  `LinearOperator` , if  `A`  is positive definiteself-adjoint, return  `L` , where  `A = L L^T` , i.e. the choleskydecomposition.

#### 参数：
- **`name`** :  A name for this  `Op` .


#### 返回：
 `LinearOperator`  which represents the lower triangular matrixin the Cholesky decomposition.

#### 加薪：
- **`ValueError`** : When the  `LinearOperator`  is not hinted to be positivedefinite and self adjoint.


###  `determinant` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L677-L694)

```
 determinant(name='det')
 
```

每个批处理成员的行列式。

#### 参数：
- **`name`** :  A name for this  `Op` .


#### 返回：
 `Tensor`  with shape  `self.batch_shape`  and same  `dtype`  as  `self` .

#### 加薪：
- **`NotImplementedError`** :  If  `self.is_square`  is  `False` .


###  `diag_part` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L965-L991)

```
 diag_part(name='diag_part')
 
```

有效地得到该运算符的[批处理]对角线部分。

If this operator has shape  `[B1,...,Bb, M, N]` , this returns a `Tensor`   `diagonal` , of shape  `[B1,...,Bb, min(M, N)]` , where `diagonal[b1,...,bb, i] = self.to_dense()[b1,...,bb, i, i]` .

```
 my_operator = LinearOperatorDiag([1., 2.])

# Efficiently get the diagonal
my_operator.diag_part()
==> [1., 2.]

# Equivalent, but inefficient method
tf.linalg.diag_part(my_operator.to_dense())
==> [1., 2.]
 
```

#### 参数：
- **`name`** :  A name for this  `Op` .


#### 返回：
- **`diag_part`** :  A  `Tensor`  of same  `dtype`  as self.


###  `domain_dimension_tensor` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L393-L414)

```
 domain_dimension_tensor(name='domain_dimension_tensor')
 
```

这个算子域的维数（在向量空间的意义上）。

在运行时确定。

If this operator acts like the batch matrix  `A`  with `A.shape = [B1,...,Bb, M, N]` , then this returns  `N` .

#### 参数：
- **`name`** :  A name for this  `Op` .


#### 返回：
 `int32`   `Tensor` 

###  `inverse` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L890-L913)

```
 inverse(name='inverse')
 
```

Returns the Inverse of this  `LinearOperator` .

Given  `A`  representing this  `LinearOperator` , return a  `LinearOperator` representing  `A^-1` .

#### 参数：
- **`name`** : A name scope to use for ops added by this method.


#### 返回：
 `LinearOperator`  representing inverse of this matrix.

#### 加薪：
- **`ValueError`** : When the  `LinearOperator`  is not hinted to be  `non_singular` .


###  `log_abs_determinant` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L706-L723)

```
 log_abs_determinant(name='log_abs_det')
 
```

记录每个批处理成员的行列式的绝对值。

#### 参数：
- **`name`** :  A name for this  `Op` .


#### 返回：
 `Tensor`  with shape  `self.batch_shape`  and same  `dtype`  as  `self` .

#### 加薪：
- **`NotImplementedError`** :  If  `self.is_square`  is  `False` .


###  `matmul` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L574-L627)

```
 matmul(
    x,
    adjoint=False,
    adjoint_arg=False,
    name='matmul'
)
 
```

Transform [batch] matrix  `x`  with left multiplication:   `x --> Ax` .

```
 # Make an operator acting like batch matrix A.  Assume A.shape = [..., M, N]
operator = LinearOperator(...)
operator.shape = [..., M, N]

X = ... # shape [..., N, R], batch matrix, R > 0.

Y = operator.matmul(X)
Y形
==> [..., M, R]

Y[..., :, r] = sum_j A[..., :, j] X[j, r]
 
```

#### 参数：
- **`x`** :  `LinearOperator`  or  `Tensor`  with compatible shape and same  `dtype`  as `self` . See class docstring for definition of compatibility.
- **`adjoint`** : Python  `bool` .  If  `True` , left multiply by the adjoint:  `A^H x` .
- **`adjoint_arg`** :  Python  `bool` .  If  `True` , compute  `A x^H`  where  `x^H`  isthe hermitian transpose (transposition and complex conjugation).
- **`name`** :  A name for this  `Op` .


#### 返回：
A  `LinearOperator`  or  `Tensor`  with shape  `[..., M, R]`  and same  `dtype`   as  `self` .

###  `matvec` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L634-L667)

```
 matvec(
    x,
    adjoint=False,
    name='matvec'
)
 
```

Transform [batch] vector  `x`  with left multiplication:   `x --> Ax` .

```
 # Make an operator acting like batch matric A.  Assume A.shape = [..., M, N]
operator = LinearOperator(...)

X = ... # shape [..., N], batch vector

Y = operator.matvec(X)
Y形
==> [..., M]

Y[..., :] = sum_j A[..., :, j] X[..., j]
 
```

#### 参数：
- **`x`** :  `Tensor`  with compatible shape and same  `dtype`  as  `self` . `x`  is treated as a [batch] vector meaning for every set of leadingdimensions, the last dimension defines a vector.See class docstring for definition of compatibility.
- **`adjoint`** : Python  `bool` .  If  `True` , left multiply by the adjoint:  `A^H x` .
- **`name`** :  A name for this  `Op` .


#### 返回：
A  `Tensor`  with shape  `[..., M]`  and same  `dtype`  as  `self` .

###  `range_dimension_tensor` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L432-L453)

```
 range_dimension_tensor(name='range_dimension_tensor')
 
```

此运算符范围的维数（在向量空间的意义上）。

在运行时确定。

If this operator acts like the batch matrix  `A`  with `A.shape = [B1,...,Bb, M, N]` , then this returns  `M` .

#### 参数：
- **`name`** :  A name for this  `Op` .


#### 返回：
 `int32`   `Tensor` 

###  `shape_tensor` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L284-L302)

```
 shape_tensor(name='shape_tensor')
 
```

Shape of this  `LinearOperator` , determined at runtime.

If this operator acts like the batch matrix  `A`  with `A.shape = [B1,...,Bb, M, N]` , then this returns a  `Tensor`  holding `[B1,...,Bb, M, N]` , equivalent to [ `tf.shape(A)` ](https://tensorflow.google.cn/api_docs/python/tf/shape).

#### 参数：
- **`name`** :  A name for this  `Op` .


#### 返回：
 `int32`   `Tensor` 

###  `solve` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L740-L813)

```
 solve(
    rhs,
    adjoint=False,
    adjoint_arg=False,
    name='solve'
)
 
```

Solve (exact or approx)  `R`  (batch) systems of equations:  `A X = rhs` .

The returned  `Tensor`  will be close to an exact solution if  `A`  is wellconditioned. Otherwise closeness will vary. See class docstring for details.

#### 示例：


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

#### 参数：
- **`rhs`** :  `Tensor`  with same  `dtype`  as this operator and compatible shape. `rhs`  is treated like a [batch] matrix meaning for every set of leadingdimensions, the last two dimensions defines a matrix.See class docstring for definition of compatibility.
- **`adjoint`** : Python  `bool` .  If  `True` , solve the system involving the adjointof this  `LinearOperator` :   `A^H X = rhs` .
- **`adjoint_arg`** :  Python  `bool` .  If  `True` , solve  `A X = rhs^H`  where  `rhs^H` is the hermitian transpose (transposition and complex conjugation).
- **`name`** :  A name scope to use for ops added by this method.


#### 返回：
 `Tensor`  with shape  `[...,N, R]`  and same  `dtype`  as  `rhs` .

#### 加薪：
- **`NotImplementedError`** :  If  `self.is_non_singular`  or  `is_square`  is False.


###  `solvevec` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L821-L868)

```
 solvevec(
    rhs,
    adjoint=False,
    name='solve'
)
 
```

Solve single equation with best effort:  `A X = rhs` .

The returned  `Tensor`  will be close to an exact solution if  `A`  is wellconditioned. Otherwise closeness will vary. See class docstring for details.

#### 示例：


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

#### 参数：
- **`rhs`** :  `Tensor`  with same  `dtype`  as this operator. `rhs`  is treated like a [batch] vector meaning for every set of leadingdimensions, the last dimension defines a vector.  See class docstringfor definition of compatibility regarding batch dimensions.
- **`adjoint`** : Python  `bool` .  If  `True` , solve the system involving the adjointof this  `LinearOperator` :   `A^H X = rhs` .
- **`name`** :  A name scope to use for ops added by this method.


#### 返回：
 `Tensor`  with shape  `[...,N]`  and same  `dtype`  as  `rhs` .

#### 加薪：
- **`NotImplementedError`** :  If  `self.is_non_singular`  or  `is_square`  is False.


###  `tensor_rank_tensor` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L357-L375)

```
 tensor_rank_tensor(name='tensor_rank_tensor')
 
```

与此算子对应的矩阵的秩（在张量意义上）。

If this operator acts like the batch matrix  `A`  with `A.shape = [B1,...,Bb, M, N]` , then this returns  `b + 2` .

#### 参数：
- **`name`** :  A name for this  `Op` .


#### 返回：
 `int32`   `Tensor` , determined at runtime.

###  `to_dense` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L956-L959)

```
 to_dense(name='to_dense')
 
```

返回表示此运算符的密集（批处理）矩阵。

###  `trace` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L996-L1008)

```
 trace(name='trace')
 
```

Trace of the linear operator, equal to sum of  `self.diag_part()` .

If the operator is square, this is also the sum of the eigenvalues.

#### 参数：
- **`name`** :  A name for this  `Op` .


#### 返回：
Shape  `[B1,...,Bb]`   `Tensor`  of same  `dtype`  as  `self` .

