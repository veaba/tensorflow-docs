

## Class  `LinearOperatorHouseholder` 
 `LinearOperator`  acting like a [batch] of Householder transformations.

Inherits From: [ `LinearOperator` ](https://tensorflow.google.cn/api_docs/python/tf/linalg/LinearOperator)

**别名** : [ `tf.compat.v1.linalg.LinearOperatorHouseholder` ](/api_docs/python/tf/linalg/LinearOperatorHouseholder), [ `tf.compat.v2.linalg.LinearOperatorHouseholder` ](/api_docs/python/tf/linalg/LinearOperatorHouseholder)

This operator acts like a [batch] of householder reflections with shape `[B1,...,Bb, N, N]`  for some  `b >= 0` .  The first  `b`  indices index abatch member.  For every batch index  `(i1,...,ib)` ,  `A[i1,...,ib, : :]`  isan  `N x N`  matrix.  This matrix  `A`  is not materialized, but forpurposes of broadcasting this shape will be relevant.

 `LinearOperatorHouseholder`  is initialized with a (batch) vector.

A Householder reflection, defined via a vector  `v` , which reflects pointsin  `R^n`  about the hyperplane orthogonal to  `v`  and through the origin.

```
 # Create a 2 x 2 householder transform.
vec = [1 / np.sqrt(2), 1. / np.sqrt(2)]
operator = LinearOperatorHouseholder(vec)

operator.to_dense()
==> [[0.,  -1.]
     [-1., -0.]]

运算符.shape
==> [2, 2]

operator.log_abs_determinant()
==> scalar Tensor

x = ... Shape [2, 4] Tensor
operator.matmul(x)
==> Shape [2, 4] Tensor

#### 形状兼容性

此运算符作用于具有兼容形状的[批处理]矩阵。
`x` is a batch matrix with compatible shape for `matmul` and `solve` if

 
```

operator.shape = [B1,...,Bb] + [N, N],  with b >= 0x.shape =   [C1,...,Cc] + [N, R],and [C1,...,Cc] broadcasts with [B1,...,Bb] to [D1,...,Dd]


#### 矩阵属性提示

This `LinearOperator` is initialized with boolean flags of the form `is_X`,
for `X = non_singular, self_adjoint, positive_definite, square`.
其含义如下：

- If `is_X == True`, callers should expect the operator to have the
  property `X`.  This is a promise that should be fulfilled, but is *not* a
  runtime assert.  For example, finite floating point precision may result
  in these promises being violated.
- If `is_X == False`, callers should expect the operator to not have `X`.
- If `is_X == None` (the default), callers should have no expectation either
  way.

####  __init__

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator_householder.py#L94-L154)

``` python
__init__(
    reflection_axis,
    is_non_singular=None,
    is_self_adjoint=None,
    is_positive_definite=None,
    is_square=None,
    name='LinearOperatorHouseholder'
)

```

Initialize a  `LinearOperatorHouseholder` .

#### 参数：
- **`reflection_axis`** :  Shape  `[B1,...,Bb, N]`   `Tensor`  with  `b >= 0`   `N >= 0` .The vector defining the hyperplane to reflect about.Allowed dtypes:  `float16` ,  `float32` ,  `float64` ,  `complex64` , `complex128` .
- **`is_non_singular`** :  Expect that this operator is non-singular.
- **`is_self_adjoint`** :  Expect that this operator is equal to its hermitiantranspose.  This is autoset to true
- **`is_positive_definite`** :  Expect that this operator is positive definite,meaning the quadratic form  `x^H A x`  has positive real part for allnonzero  `x` .  Note that we do not require the operator to beself-adjoint to be positive-definite.  See:https://en.wikipedia.org/wiki/Positive-definite_matrix#Extension_for_non-symmetric_matricesThis is autoset to false.
- **`is_square`** :  Expect that this operator acts like square [batch] matrices.This is autoset to true.
- **`name`** : A name for this  `LinearOperator` .


#### 加薪：
- **`ValueError`** :   `is_self_adjoint`  is not  `True` ,  `is_positive_definite`  isnot  `False`  or  `is_square`  is not  `True` .


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

###  `reflection_axis` 


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linear_operator.py#L1014-L1027)

```
 add_to_tensor(
    x,
    name='add_to_tensor'
)
 
```

Add matrix represented by this operator to  `x` .  Equivalent to  `A + x` .

#### 参数：
- **`x`** :   `Tensor`  with same  `dtype`  and shape broadcastable to  `self.shape` .
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

