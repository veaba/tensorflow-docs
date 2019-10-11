## Class Tensor

Represents one of the outputs of an Operation.
### Aliases:
- Class `tf.compat.v1.Tensor`
- Class `tf.compat.v2.Tensor`
[tf.compat.v1.Session](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session)A Tensor is a symbolic handle to one of the outputs of an Operation. It does not hold the values of that operation's output, but instead provides a means of computing those values in a TensorFlow .


This class has two primary purposes:

In the following example, c, d, and e are symbolic Tensor objects, whereas result is a numpy array that stores a concrete value:

```
 # Build a dataflow graph.
c = tf.constant([[1.0, 2.0], [3.0, 4.0]])
d = tf.constant([[1.0, 1.0], [0.0, 1.0]])
e = tf.matmul(c, d)

# Construct a `Session` to execute the graph.
sess = tf.compat.v1.Session()

# Execute the graph and store the value that `e` represents in `result`.
result = sess.run(e)
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L370-L395)


```
 __init__(
    op,
    value_index,
    dtype
)
```

Creates a new Tensor.
#### Args:
- `op`: An `Operation`. `Operation` that computes this tensor.
- `value_index`: An `int`. Index of the `op`eration's endpo`int` that produces this tensor.
- `dtype`: A `DType`. Type of elements stored in this tensor.
#### Raises:
- `TypeError`: If the op is not an `Operation`.
## Properties
### device

The name of the device on which this tensor will be produced, or None.
### dtype

The DType of elements in this tensor.
### graph

The Graph that contains this tensor.
### name

The string name of this tensor.
### op

The Operation that produces this tensor as an output.
### shape

Returns the TensorShape that represents the shape of this tensor.
[tf.TensorShape](https://tensorflow.google.cn/api_docs/python/tf/TensorShape)The shape is computed using shape inference functions that are registered in the Op for each Operation. See  for more details of what a shape represents.


The inferred shape of a tensor is used to provide shape information without having to launch the graph in a session. This can be used for debugging, and providing early error messages. For example:

```
 c = tf.constant([[1.0, 2.0, 3.0], [4.0, 5.0, 6.0]])

print(c.shape)
==> TensorShape([Dimension(2), Dimension(3)])

d = tf.constant([[1.0, 0.0], [0.0, 1.0], [1.0, 0.0], [0.0, 1.0]])

print(d.shape)
==> TensorShape([Dimension(4), Dimension(2)])

# Raises a ValueError, because `c` and `d` do not have compatible
# inner dimensions.
e = tf.matmul(c, d)

f = tf.matmul(c, d, transpose_a=True, transpose_b=True)

print(f.shape)
==> TensorShape([Dimension(3), Dimension(4)])
```
[Tensor.set_shape()](https://tensorflow.google.cn/api_docs/python/tf/Tensor#set_shape)In some cases, the inferred shape may have unknown dimensions. If the caller has additional information about the values of these dimensions,  can be used to augment the inferred shape.

#### Returns:

A TensorShape representing the shape of this tensor.
### value_index

The index of this tensor in the outputs of its Operation.
## Methods
### __abs__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L245-L278)


```
 __abs__(
    x,
    name=None
)
```

Computes the absolute value of a tensor.

Given a tensor of integer or floating-point values, this operation returns a tensor of the same type, where each element contains the absolute value of the corresponding element in the input.

Given a tensor x of complex numbers, this operation returns a tensor of type float32 or float64 that is the absolute value of each element in x. All elements in x must be complex numbers of the form
. The absolute value is computed as
. For example:

```
 x = tf.constant([[-2.25 + 4.75j], [-3.25 + 5.75j]])
tf.abs(x)  # [5.25594902, 6.60492229]
```
#### Args:
- `x`: A `Tensor` or `SparseTensor` of type `float16`, `float32`, `float64`, `int32`, `int64`, `complex64` or `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor or SparseTensor the same size, type, and sparsity as x with absolute values. Note, for complex64 or complex128 input, the returned Tensor will be of type float32 or float64, respectively.

If x is a SparseTensor, returns SparseTensor(x.indices, tf.math.abs(x.values, ...), x.dense_shape)
### __add__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L896-L912)


```
 __add__(
    x,
    y
)
```

Dispatches to add for strings and add_v2 for all other types.
### __and__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L896-L912)


```
 __and__(
    x,
    y
)
```

Returns the truth value of x AND y element-wise.
[math.logical_and](https://tensorflow.google.cn/api_docs/python/tf/math/logical_and)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor` of type `bool`.
- `y`: A `Tensor` of t`y`pe `bool`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __bool__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L747-L765)


```
 __bool__()
```

Dummy method to prevent a tensor from being used as a Python bool.

This overload raises a TypeError when the user inadvertently treats a Tensor as a boolean (most commonly in an if or while statement), in code that was not converted by AutoGraph. For example:

```
 if tf.constant(True):  # Will raise.
  # ...

if tf.constant(5) < tf.constant(7):  # Will raise.
  # ...
```
#### Raises:

TypeError.
### __div__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L896-L912)


```
 __div__(
    x,
    y
)
```

Divide two values using Python 2 semantics.

Used for Tensor.div.
#### Args:
- `x`: `Tensor` numerator of real numeric type.
- `y`: `Tensor` denominator of real numeric t`y`pe.
- `name`: A `name` for the operation (optional).
#### Returns:

x / y returns the quotient of x and y.
### __eq__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1328-L1339)


```
 __eq__(other)
```

Compares two tensors element-wise for equality.
### __floordiv__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L896-L912)


```
 __floordiv__(
    x,
    y
)
```

Divides x / y elementwise, rounding toward the most negative integer.
[tf.compat.v1.div(x,y)](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor#__div__)The same as  for integers, but uses tf.floor() for floating point arguments so that the result is always an integer (though possibly an integer represented as floating point). This op is generated by x // y floor division in Python 3 and in Python 2.7 with from __future__ import division.


x and y must have the same type, and the result will have the same type as well.
#### Args:
- `x`: `Tensor` numerator of real numeric type.
- `y`: `Tensor` denominator of real numeric t`y`pe.
- `name`: A `name` for the operation (optional).
#### Returns:

x / y rounded down.
#### Raises:
- `TypeError`: If the inputs are complex.
### __ge__

Defined in generated file: python/ops/gen_math_ops.py

```
 __ge__(
    x,
    y,
    name=None
)
```

Returns the truth value of (x >= y) element-wise.
[math.greater_equal](https://tensorflow.google.cn/api_docs/python/tf/math/greater_equal)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __getitem__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/array_ops.py#L669-L813)


```
 __getitem__(
    tensor,
    slice_spec,
    var=None
)
```

Overload for Tensor.getitem.

This operation extracts the specified region from the tensor. The notation is similar to NumPy with the restriction that currently only support basic indexing. That means that using a non-scalar tensor as input is not currently allowed.
#### Some useful examples:

```
 # Strip leading and trailing 2 elements
foo = tf.constant([1,2,3,4,5,6])
print(foo[2:-2].eval())  # => [3,4]

# Skip every other row and reverse the order of the columns
foo = tf.constant([[1,2,3], [4,5,6], [7,8,9]])
print(foo[::2,::-1].eval())  # => [[3,2,1], [9,8,7]]

# Use scalar tensors as indices on both dimensions
print(foo[tf.constant(0), tf.constant(2)].eval())  # => 3

# Insert another dimension
foo = tf.constant([[1,2,3], [4,5,6], [7,8,9]])
print(foo[tf.newaxis, :, :].eval()) # => [[[1,2,3], [4,5,6], [7,8,9]]]
print(foo[:, tf.newaxis, :].eval()) # => [[[1,2,3]], [[4,5,6]], [[7,8,9]]]
print(foo[:, :, tf.newaxis].eval()) # => [[[1],[2],[3]], [[4],[5],[6]],
[[7],[8],[9]]]

# Ellipses (3 equivalent operations)
foo = tf.constant([[1,2,3], [4,5,6], [7,8,9]])
print(foo[tf.newaxis, :, :].eval())  # => [[[1,2,3], [4,5,6], [7,8,9]]]
print(foo[tf.newaxis, ...].eval())  # => [[[1,2,3], [4,5,6], [7,8,9]]]
print(foo[tf.newaxis].eval())  # => [[[1,2,3], [4,5,6], [7,8,9]]]

# Masks
foo = tf.constant([[1,2,3], [4,5,6], [7,8,9]])
print(foo[foo > 2].eval())  # => [3, 4, 5, 6, 7, 8, 9]
```
#### Notes:
- `tf.newaxis` is `None` as in NumPy.
- An implicit ellipsis is placed at the end of the `slice_spec`
- NumPy advanced indexing is currently not supported.
#### Args:
- `tensor`: An ops.Tensor object.
- `slice_spec`: The arguments to Tensor.getitem.
- `var`: In the case of `var`iable slice assignment, the Variable object to slice (i.e. `tensor` is the read-only view of this `var`iable).
#### Returns:

The appropriate slice of "tensor", based on "slice_spec".
#### Raises:
- `ValueError`: If a slice range is negative size.
- `TypeError`: If the slice indices aren't int, slice, ellipsis, tf.newaxis or scalar int32/int64 tensors.
### __gt__

Defined in generated file: python/ops/gen_math_ops.py

```
 __gt__(
    x,
    y,
    name=None
)
```

Returns the truth value of (x > y) element-wise.
[math.greater](https://tensorflow.google.cn/api_docs/python/tf/math/greater)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __invert__

Defined in generated file: python/ops/gen_math_ops.py

```
 __invert__(
    x,
    name=None
)
```

Returns the truth value of NOT x element-wise.
#### Args:
- `x`: A `Tensor` of type `bool`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __iter__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L545-L558)


```
 __iter__()
```
### __le__

Defined in generated file: python/ops/gen_math_ops.py

```
 __le__(
    x,
    y,
    name=None
)
```

Returns the truth value of (x <= y) element-wise.
[math.less_equal](https://tensorflow.google.cn/api_docs/python/tf/math/less_equal)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __len__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L738-L741)


```
 __len__()
```
### __lt__

Defined in generated file: python/ops/gen_math_ops.py

```
 __lt__(
    x,
    y,
    name=None
)
```

Returns the truth value of (x < y) element-wise.
[math.less](https://tensorflow.google.cn/api_docs/python/tf/math/less)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __matmul__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L896-L912)


```
 __matmul__(
    x,
    y
)
```

Multiplies matrix a by matrix b, producing a * b.

The inputs must, following any transpositions, be tensors of rank >= 2 where the inner 2 dimensions specify valid matrix multiplication arguments, and any further outer dimensions match.

Both matrices must be of the same type. The supported types are: float16, float32, float64, int32, complex64, complex128.

Either matrix can be transposed or adjointed (conjugated and transposed) on the fly by setting one of the corresponding flag to True. These are False by default.

If one or both of the matrices contain a lot of zeros, a more efficient multiplication algorithm can be used by setting the corresponding a_is_sparse or b_is_sparse flag to True. These are False by default. This optimization is only available for plain matrices (rank-2 tensors) with datatypes bfloat16 or float32.
#### For example:

```
 # 2-D tensor `a`
# [[1, 2, 3],
#  [4, 5, 6]]
a = tf.constant([1, 2, 3, 4, 5, 6], shape=[2, 3])

# 2-D tensor `b`
# [[ 7,  8],
#  [ 9, 10],
#  [11, 12]]
b = tf.constant([7, 8, 9, 10, 11, 12], shape=[3, 2])

# `a` * `b`
# [[ 58,  64],
#  [139, 154]]
c = tf.matmul(a, b)


# 3-D tensor `a`
# [[[ 1,  2,  3],
#   [ 4,  5,  6]],
#  [[ 7,  8,  9],
#   [10, 11, 12]]]
a = tf.constant(np.arange(1, 13, dtype=np.int32),
                shape=[2, 2, 3])

# 3-D tensor `b`
# [[[13, 14],
#   [15, 16],
#   [17, 18]],
#  [[19, 20],
#   [21, 22],
#   [23, 24]]]
b = tf.constant(np.arange(13, 25, dtype=np.int32),
                shape=[2, 3, 2])

# `a` * `b`
# [[[ 94, 100],
#   [229, 244]],
#  [[508, 532],
#   [697, 730]]]
c = tf.matmul(a, b)

# Since python >= 3.5 the @ operator is supported (see PEP 465).
# In TensorFlow, it simply calls the `tf.matmul()` function, so the
# following lines are equivalent:
d = a @ b @ [[10.], [11.]]
d = tf.matmul(tf.matmul(a, b), [[10.], [11.]])
```
#### Args:
- `a`: `Tensor` of type `float16`, `float32`, `float64`, `int32`, `complex64`, `complex128` `a`nd r`a`nk > 1.
- `b`: `Tensor` with s`a`me type `a`nd r`a`nk `a`s `a`.
- `transpose_a`: If `True`, `a` is tr`a`nsposed `b`efore multiplic`a`tion.
- `transpose_b`: If `True`, `b` is tr`a`nsposed `b`efore multiplic`a`tion.
- `a`djoint_`a`: If `True`, `a` is conjug`a`ted `a`nd tr`a`nsposed `b`efore multiplic`a`tion.
- `a`djoint_`b`: If `True`, `b` is conjug`a`ted `a`nd tr`a`nsposed `b`efore multiplic`a`tion.
- `a`_is_sp`a`rse: If `True`, `a` is tre`a`ted `a`s `a` sp`a`rse m`a`trix.
- `b`_is_sp`a`rse: If `True`, `b` is tre`a`ted `a`s `a` sp`a`rse m`a`trix.
- `name`: N`a`me for the oper`a`tion (option`a`l).
#### Returns:

A Tensor of the same type as a and b where each inner-most matrix is the product of the corresponding matrices in a and b, e.g. if all transpose or adjoint attributes are False:

output[..., i, j] = sum_k (a[..., i, k] * b[..., k, j]), for all indices i, j.
- `Note`: This is matrix product, not element-wise product.
#### Raises:
- `ValueError`: If transpose_a and adjoint_a, or transpose_b and adjoint_b are both set to True.
### __mod__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L896-L912)


```
 __mod__(
    x,
    y
)
```

Returns element-wise remainder of division. When x < 0 xor y < 0 is

true, this follows Python semantics in that the result here is consistent with a flooring divide. E.g. floor(x / y) * y + mod(x, y) = x.
[math.floormod](https://tensorflow.google.cn/api_docs/python/tf/math/floormod)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `int32`, `int64`, `bfloat16`, `half`, `float32`, `float64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
### __mul__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L896-L912)


```
 __mul__(
    x,
    y
)
```

Dispatches cwise mul for "DenseDense" and "DenseSparse".
### __ne__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1342-L1351)


```
 __ne__(other)
```

Compares two tensors element-wise for equality.
### __neg__

Defined in generated file: python/ops/gen_math_ops.py

```
 __neg__(
    x,
    name=None
)
```

Computes numerical negative value element-wise.

I.e.,
.
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int32`, `int64`, `complex64`, `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.

If x is a SparseTensor, returns SparseTensor(x.indices, tf.math.negative(x.values, ...), x.dense_shape)
### __nonzero__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L767-L775)


```
 __nonzero__()
```

Dummy method to prevent a tensor from being used as a Python bool.

This is the Python 2.x counterpart to __bool__() above.
#### Raises:

TypeError.
### __or__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L896-L912)


```
 __or__(
    x,
    y
)
```

Returns the truth value of x OR y element-wise.
[math.logical_or](https://tensorflow.google.cn/api_docs/python/tf/math/logical_or)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor` of type `bool`.
- `y`: A `Tensor` of t`y`pe `bool`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __pow__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L896-L912)


```
 __pow__(
    x,
    y
)
```

Computes the power of one value to another.

Given a tensor x and a tensor y, this operation computes
for corresponding elements in x and y. For example:

```
 x = tf.constant([[2, 2], [3, 3]])
y = tf.constant([[8, 16], [2, 3]])
tf.pow(x, y)  # [[256, 65536], [9, 27]]
```
#### Args:
- `x`: A `Tensor` of type `float16`, `float32`, `float64`, `int32`, `int64`, `complex64`, or `complex128`.
- `y`: A `Tensor` of t`y`pe `float16`, `float32`, `float64`, `int32`, `int64`, `complex64`, or `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor.
### __radd__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L922-L925)


```
 __radd__(
    y,
    x
)
```

Dispatches to add for strings and add_v2 for all other types.
### __rand__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L922-L925)


```
 __rand__(
    y,
    x
)
```

Returns the truth value of x AND y element-wise.
[math.logical_and](https://tensorflow.google.cn/api_docs/python/tf/math/logical_and)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor` of type `bool`.
- `y`: A `Tensor` of t`y`pe `bool`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __rdiv__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L922-L925)


```
 __rdiv__(
    y,
    x
)
```

Divide two values using Python 2 semantics.

Used for Tensor.div.
#### Args:
- `x`: `Tensor` numerator of real numeric type.
- `y`: `Tensor` denominator of real numeric t`y`pe.
- `name`: A `name` for the operation (optional).
#### Returns:

x / y returns the quotient of x and y.
### __rfloordiv__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L922-L925)


```
 __rfloordiv__(
    y,
    x
)
```

Divides x / y elementwise, rounding toward the most negative integer.
[tf.compat.v1.div(x,y)](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor#__div__)The same as  for integers, but uses tf.floor() for floating point arguments so that the result is always an integer (though possibly an integer represented as floating point). This op is generated by x // y floor division in Python 3 and in Python 2.7 with from __future__ import division.


x and y must have the same type, and the result will have the same type as well.
#### Args:
- `x`: `Tensor` numerator of real numeric type.
- `y`: `Tensor` denominator of real numeric t`y`pe.
- `name`: A `name` for the operation (optional).
#### Returns:

x / y rounded down.
#### Raises:
- `TypeError`: If the inputs are complex.
### __rmatmul__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L922-L925)


```
 __rmatmul__(
    y,
    x
)
```

Multiplies matrix a by matrix b, producing a * b.

The inputs must, following any transpositions, be tensors of rank >= 2 where the inner 2 dimensions specify valid matrix multiplication arguments, and any further outer dimensions match.

Both matrices must be of the same type. The supported types are: float16, float32, float64, int32, complex64, complex128.

Either matrix can be transposed or adjointed (conjugated and transposed) on the fly by setting one of the corresponding flag to True. These are False by default.

If one or both of the matrices contain a lot of zeros, a more efficient multiplication algorithm can be used by setting the corresponding a_is_sparse or b_is_sparse flag to True. These are False by default. This optimization is only available for plain matrices (rank-2 tensors) with datatypes bfloat16 or float32.
#### For example:

```
 # 2-D tensor `a`
# [[1, 2, 3],
#  [4, 5, 6]]
a = tf.constant([1, 2, 3, 4, 5, 6], shape=[2, 3])

# 2-D tensor `b`
# [[ 7,  8],
#  [ 9, 10],
#  [11, 12]]
b = tf.constant([7, 8, 9, 10, 11, 12], shape=[3, 2])

# `a` * `b`
# [[ 58,  64],
#  [139, 154]]
c = tf.matmul(a, b)


# 3-D tensor `a`
# [[[ 1,  2,  3],
#   [ 4,  5,  6]],
#  [[ 7,  8,  9],
#   [10, 11, 12]]]
a = tf.constant(np.arange(1, 13, dtype=np.int32),
                shape=[2, 2, 3])

# 3-D tensor `b`
# [[[13, 14],
#   [15, 16],
#   [17, 18]],
#  [[19, 20],
#   [21, 22],
#   [23, 24]]]
b = tf.constant(np.arange(13, 25, dtype=np.int32),
                shape=[2, 3, 2])

# `a` * `b`
# [[[ 94, 100],
#   [229, 244]],
#  [[508, 532],
#   [697, 730]]]
c = tf.matmul(a, b)

# Since python >= 3.5 the @ operator is supported (see PEP 465).
# In TensorFlow, it simply calls the `tf.matmul()` function, so the
# following lines are equivalent:
d = a @ b @ [[10.], [11.]]
d = tf.matmul(tf.matmul(a, b), [[10.], [11.]])
```
#### Args:
- `a`: `Tensor` of type `float16`, `float32`, `float64`, `int32`, `complex64`, `complex128` `a`nd r`a`nk > 1.
- `b`: `Tensor` with s`a`me type `a`nd r`a`nk `a`s `a`.
- `transpose_a`: If `True`, `a` is tr`a`nsposed `b`efore multiplic`a`tion.
- `transpose_b`: If `True`, `b` is tr`a`nsposed `b`efore multiplic`a`tion.
- `a`djoint_`a`: If `True`, `a` is conjug`a`ted `a`nd tr`a`nsposed `b`efore multiplic`a`tion.
- `a`djoint_`b`: If `True`, `b` is conjug`a`ted `a`nd tr`a`nsposed `b`efore multiplic`a`tion.
- `a`_is_sp`a`rse: If `True`, `a` is tre`a`ted `a`s `a` sp`a`rse m`a`trix.
- `b`_is_sp`a`rse: If `True`, `b` is tre`a`ted `a`s `a` sp`a`rse m`a`trix.
- `name`: N`a`me for the oper`a`tion (option`a`l).
#### Returns:

A Tensor of the same type as a and b where each inner-most matrix is the product of the corresponding matrices in a and b, e.g. if all transpose or adjoint attributes are False:

output[..., i, j] = sum_k (a[..., i, k] * b[..., k, j]), for all indices i, j.
- `Note`: This is matrix product, not element-wise product.
#### Raises:
- `ValueError`: If transpose_a and adjoint_a, or transpose_b and adjoint_b are both set to True.
### __rmod__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L922-L925)


```
 __rmod__(
    y,
    x
)
```

Returns element-wise remainder of division. When x < 0 xor y < 0 is

true, this follows Python semantics in that the result here is consistent with a flooring divide. E.g. floor(x / y) * y + mod(x, y) = x.
[math.floormod](https://tensorflow.google.cn/api_docs/python/tf/math/floormod)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `int32`, `int64`, `bfloat16`, `half`, `float32`, `float64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
### __rmul__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L922-L925)


```
 __rmul__(
    y,
    x
)
```

Dispatches cwise mul for "DenseDense" and "DenseSparse".
### __ror__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L922-L925)


```
 __ror__(
    y,
    x
)
```

Returns the truth value of x OR y element-wise.
[math.logical_or](https://tensorflow.google.cn/api_docs/python/tf/math/logical_or)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor` of type `bool`.
- `y`: A `Tensor` of t`y`pe `bool`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __rpow__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L922-L925)


```
 __rpow__(
    y,
    x
)
```

Computes the power of one value to another.

Given a tensor x and a tensor y, this operation computes
for corresponding elements in x and y. For example:

```
 x = tf.constant([[2, 2], [3, 3]])
y = tf.constant([[8, 16], [2, 3]])
tf.pow(x, y)  # [[256, 65536], [9, 27]]
```
#### Args:
- `x`: A `Tensor` of type `float16`, `float32`, `float64`, `int32`, `int64`, `complex64`, or `complex128`.
- `y`: A `Tensor` of t`y`pe `float16`, `float32`, `float64`, `int32`, `int64`, `complex64`, or `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor.
### __rsub__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L922-L925)


```
 __rsub__(
    y,
    x
)
```

Returns x - y element-wise.
[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)NOTE: Subtract supports broadcasting. More about broadcasting 

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `uint16`, `int16`, `int32`, `int64`, `complex64`, `complex128`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
### __rtruediv__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L922-L925)


```
 __rtruediv__(
    y,
    x
)
```
### __rxor__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L922-L925)


```
 __rxor__(
    y,
    x
)
```

Logical XOR function.

x ^ y = (x | y) & ~(x & y)

Inputs are tensor and if the tensors contains more than one element, an element-wise logical XOR is computed.
#### Usage:

```
 x = tf.constant([False, False, True, True], dtype = tf.bool)
y = tf.constant([False, True, False, True], dtype = tf.bool)
z = tf.logical_xor(x, y, name="LogicalXor")
#  here z = [False  True  True False]
```
#### Args:
- `x`: A `Tensor` type bool.
- `y`: A `Tensor` of t`y`pe bool.
#### Returns:

A Tensor of type bool with the same size as that of x or y.
### __sub__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L896-L912)


```
 __sub__(
    x,
    y
)
```

Returns x - y element-wise.
[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)NOTE: Subtract supports broadcasting. More about broadcasting 

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `uint16`, `int16`, `int32`, `int64`, `complex64`, `complex128`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
### __truediv__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L896-L912)


```
 __truediv__(
    x,
    y
)
```
### __xor__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L896-L912)


```
 __xor__(
    x,
    y
)
```

Logical XOR function.

x ^ y = (x | y) & ~(x & y)

Inputs are tensor and if the tensors contains more than one element, an element-wise logical XOR is computed.
#### Usage:

```
 x = tf.constant([False, False, True, True], dtype = tf.bool)
y = tf.constant([False, True, False, True], dtype = tf.bool)
z = tf.logical_xor(x, y, name="LogicalXor")
#  here z = [False  True  True False]
```
#### Args:
- `x`: A `Tensor` type bool.
- `y`: A `Tensor` of t`y`pe bool.
#### Returns:

A Tensor of type bool with the same size as that of x or y.
### consumers
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L652-L664)


```
 consumers()
```

Returns a list of Operations that consume this tensor.
#### Returns:

A list of Operations.
### eval
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L777-L798)


```
 eval(
    feed_dict=None,
    session=None
)
```

Evaluates this tensor in a Session.

Calling this method will execute all preceding operations that produce the inputs needed for the operation that produces this tensor.
[Tensor.eval()](https://tensorflow.google.cn/api_docs/python/tf/Tensor#eval)N.B. Before invoking , its graph must have been launched in a session, and either a default session must be available, or session must be specified explicitly.

#### Args:
- `feed_dict`: A dictionary that maps `Tensor` objects to feed values. See `tf.Session.run` for a description of the valid feed values.
- `session`: (Optional.) The `Session` to be used to evaluate this tensor. If none, the default `session` will be used.
#### Returns:

A numpy array corresponding to the value of this tensor.
### experimental_ref
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L800-L851)


```
 experimental_ref()
```

Returns a hashable reference object to this Tensor.

The primary usecase for this API is to put tensors in a set/dictionary. We can't put tensors in a set/dictionary as tensor.__hash__() is no longer available starting Tensorflow 2.0.

```
 import tensorflow as tf

x = tf.constant(5)
y = tf.constant(10)
z = tf.constant(10)

# The followings will raise an exception starting 2.0
# TypeError: Tensor is unhashable if Tensor equality is enabled.
tensor_set = {x, y, z}
tensor_dict = {x: 'five', y: 'ten', z: 'ten'}
```

Instead, we can use tensor.experimental_ref().

```
 tensor_set = {x.experimental_ref(),
              y.experimental_ref(),
              z.experimental_ref()}

print(x.experimental_ref() in tensor_set)
==> True

tensor_dict = {x.experimental_ref(): 'five',
               y.experimental_ref(): 'ten',
               z.experimental_ref(): 'ten'}

print(tensor_dict[y.experimental_ref()])
==> ten
```

Also, the reference object provides .deref() function that returns the original Tensor.

```
 x = tf.constant(5)
print(x.experimental_ref().deref())
==> tf.Tensor(5, shape=(), dtype=int32)
```
### get_shape
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L580-L582)


```
 get_shape()
```

Alias of Tensor.shape.
### set_shape
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L584-L645)


```
 set_shape(shape)
```

Updates the shape of this tensor.

This method can be called multiple times, and will merge the given shape with the current shape of this tensor. It can be used to provide additional information about the shape of this tensor that cannot be inferred from the graph alone. For example, this can be used to provide additional information about the shapes of images:

```
 _, image_data = tf.compat.v1.TFRecordReader(...).read(...)
image = tf.image.decode_png(image_data, channels=3)

# The height and width dimensions of `image` are data dependent, and
# cannot be computed without executing the op.
print(image.shape)
==> TensorShape([Dimension(None), Dimension(None), Dimension(3)])

# We know that each image in this dataset is 28 x 28 pixels.
image.set_shape([28, 28, 3])
print(image.shape)
==> TensorShape([Dimension(28), Dimension(28), Dimension(3)])
```
[tf.ensure_shape](https://tensorflow.google.cn/api_docs/python/tf/ensure_shape)NOTE: This shape is not enforced at runtime. Setting incorrect shapes can result in inconsistencies between the statically-known graph and the runtime value of tensors. For runtime validation of the shape, use  instead.

#### Args:
- `shape`: A `TensorShape` representing the `shape` of this tensor, a `TensorShape`Proto, a list, a tuple, or None.
#### Raises:
- `ValueError`: If `shape` is not compatible with the current `shape` of this tensor.
## Class Members
- `OVERLOADABLE_OPERATORS`
