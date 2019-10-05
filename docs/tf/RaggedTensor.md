## Class RaggedTensor

Represents a ragged tensor.
### Aliases:
- Class `tf.compat.v1.RaggedTensor`
- Class `tf.compat.v2.RaggedTensor`
### Used in the guide:
- ``R``a``g``g``e``d`` ``t``e``n``s``o``r``s``
### Used in the tutorials:
- ``U``n``i``c``o``d``e`` ``s``t``r``i``n``g``s``

A RaggedTensor is a tensor with one or more ragged dimensions, which are dimensions whose slices may have different lengths. For example, the inner (column) dimension of rt=[[3, 1, 4, 1], [], [5, 9, 2], [6], []] is ragged, since the column slices (rt[0, :], ..., rt[4, :]) have different lengths. Dimensions whose slices all have the same length are called uniform dimensions. The outermost dimension of a RaggedTensor is always uniform, since it consists of a single slice (and so there is no possibility for differing slice lengths).

The total number of dimensions in a RaggedTensor is called its rank, and the number of ragged dimensions in a RaggedTensor is called its ragged-rank. A RaggedTensor's ragged-rank is fixed at graph creation time: it can't depend on the runtime values of Tensors, and can't vary dynamically for different session runs.
### Potentially Ragged Tensors

Many ops support both Tensors and RaggedTensors. The term "potentially ragged tensor" may be used to refer to a tensor that might be either a Tensor or a RaggedTensor. The ragged-rank of a Tensor is zero.
### Documenting RaggedTensor Shapes

When documenting the shape of a RaggedTensor, ragged dimensions can be indicated by enclosing them in parentheses. For example, the shape of a 3-D RaggedTensor that stores the fixed-size word embedding for each word in a sentence, for each sentence in a batch, could be written as [num_sentences, (num_words), embedding_size]. The parentheses around (num_words) indicate that dimension is ragged, and that the length of each element list in that dimension may vary for each item.
### Component Tensors

Internally, a RaggedTensor consists of a concatenated list of values that are partitioned into variable-length rows. In particular, each RaggedTensor consists of:
- A` ``values`` `tensor`,`` `which` `concatenates` `the` `variable-length` `rows` `into` `a` `flattened` `list.` `For` `example`,`` `the` ``values`` `tensor` `for` `[[`3``,`` ``1``,`` ``4``,`` ``1`]`,`` `[]`,`` `[`5``,`` ``9``,`` ``2`]`,`` `[`6`]`,`` `[]]` `is` `[`3``,`` ``1``,`` ``4``,`` ``1``,`` ``5``,`` ``9``,`` ``2``,`` ``6`].
- A` ``row_splits`` `vector`,`` `which` `indicates` `how` `those` `flattened` ``values`` `are` `divided` `into` `rows.` `In` `pa`rti`cular`,`` `the` ``values`` `for` `row` `rt[i]` `are` `stored` `in` `the` `slice` `rt.`values`[rt.`row_splits`[i]:rt.`row_splits`[i+`1`]].
#### Example:

```
 print(tf.RaggedTensor.from_row_splits(
values=[3, 1, 4, 1, 5, 9, 2, 6],
row_splits=[0, 4, 4, 7, 8, 8]))
<tf.RaggedTensor [[3, 1, 4, 1], [], [5, 9, 2], [6], []]>
```
### Alternative Row-Partitioning Schemes

In addition to row_splits, ragged tensors provide support for four other row-partitioning schemes:
- `row_lengths`: a vect`o``r` `w`ith `s`hape [`n``r``o``w``s`], `w`hich `s`pecifie`s` the le`n`gth `o`f each `r``o``w`.
- `value_rowids` `a``n`d `n``r``o``w``s`: `value_rowids` i`s` `a` `v`ect`o``r` `w`ith `s`h`a`pe [`n``v``a``l``s`], c`o``r``r`e`s`p`o``n`di`n`g `o``n`e-t`o`-`o``n`e `w`ith `v``a``l`ue`s`, `w`hich `s`pecifie`s` e`a`ch `v``a``l`ue'`s` `r``o``w` i`n`dex. I`n` p`a``r`ticu`l``a``r`, the `r``o``w` `r`t[`r``o``w`] c`o``n``s`i`s`t`s` `o`f the `v``a``l`ue`s` `r`t.`v``a``l`ue`s`[j] `w`he`r`e `value_rowids`[j]==`r``o``w`. `n``r``o``w``s` i`s` `a``n` i`n`tege`r` `s`c`a``l``a``r` th`a`t `s`pecifie`s` the `n`umbe`r` `o`f `r``o``w``s` i`n` the `RaggedTensor`. (`n``r``o``w``s` i`s` u`s`ed t`o` i`n`dic`a`te t`r``a`i`l`i`n`g empty `r``o``w``s`.)

Example: The following ragged tensors are equivalent, and all represent the nested list [[3, 1, 4, 1], [], [5, 9, 2], [6], []].

```
 values = [3, 1, 4, 1, 5, 9, 2, 6]
rt1 = RaggedTensor.from_row_splits(values, row_splits=[0, 4, 4, 7, 8, 8])
rt2 = RaggedTensor.from_row_lengths(values, row_lengths=[4, 0, 3, 1, 0])
rt3 = RaggedTensor.from_value_rowids(
values, value_rowids=[0, 0, 0, 0, 2, 2, 2, 3], nrows=5)
rt4 = RaggedTensor.from_row_starts(values, row_starts=[0, 4, 4, 7, 8])
rt5 = RaggedTensor.from_row_limits(values, row_limits=[4, 4, 7, 8, 8])
```
### Multiple Ragged Dimensions

RaggedTensors with multiple ragged dimensions can be defined by using a nested RaggedTensor for the values tensor. Each nested RaggedTensor adds a single ragged dimension.

```
 inner_rt = RaggedTensor.from_row_splits(  # =rt1 from above
values=[3, 1, 4, 1, 5, 9, 2, 6], row_splits=[0, 4, 4, 7, 8, 8])
outer_rt = RaggedTensor.from_row_splits(
values=inner_rt, row_splits=[0, 3, 3, 5])
print outer_rt.to_list()
[[[3, 1, 4, 1], [], [5, 9, 2]], [], [[6], []]]
print outer_rt.ragged_rank
2
```
[RaggedTensor.from_nested_row_splits](https://www.tensorflow.org/api_docs/python/tf/RaggedTensor#from_nested_row_splits)The factory function  may be used to construct a RaggedTensor with multiple ragged dimensions directly, by providing a list of row_splits tensors:


```
 RaggedTensor.from_nested_row_splits(
flat_values=[3, 1, 4, 1, 5, 9, 2, 6],
nested_row_splits=([0, 3, 3, 5], [0, 4, 4, 7, 8, 8])).to_list()
[[[3, 1, 4, 1], [], [5, 9, 2]], [], [[6], []]]
```
### Uniform Inner Dimensions

RaggedTensors with uniform inner dimensions can be defined by using a multidimensional Tensor for values.

```
 rt = RaggedTensor.from_row_splits(values=tf.ones([5, 3]),
..                                    row_splits=[0, 2, 5])
print rt.to_list()
[[[1, 1, 1], [1, 1, 1]],
 [[1, 1, 1], [1, 1, 1], [1, 1, 1]]]
 >>> print rt.shape
 (2, ?, 3)
```
### RaggedTensor Shape Restrictions

The shape of a RaggedTensor is currently restricted to have the following form:
- ``A`` ``s``i``n``g``l``e`` ``u``n``i``f``o``r``m`` ``d``i``m``e``n``s``i``o``n``
- ``F``o``l``l``o``w``e``d`` ``b``y`` ``o``n``e`` ``o``r`` ``m``o``r``e`` ``r``a``g``g``e``d`` ``d``i``m``e``n``s``i``o``n``s``
- ``F``o``l``l``o``w``e``d`` ``b``y`` ``z``e``r``o`` ``o``r`` ``m``o``r``e`` ``u``n``i``f``o``r``m`` ``d``i``m``e``n``s``i``o``n``s``.``

This restriction follows from the fact that each nested RaggedTensor replaces the uniform outermost dimension of its values with a uniform dimension followed by a ragged dimension.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L206-L279)


```
 __init__(
    values,
    row_splits,
    cached_row_lengths=None,
    cached_value_rowids=None,
    cached_nrows=None,
    internal=False
)
```

Creates a RaggedTensor with a specified partitioning for values.

This constructor is private -- please use one of the following ops to build RaggedTensors:
- `tf.RaggedTensor.from_row_lengths`
- `tf.RaggedTensor.from_value_rowids`
- `tf.RaggedTensor.from_row_splits`
- `tf.RaggedTensor.from_row_starts`
- `tf.RaggedTensor.from_row_limits`
- `tf.RaggedTensor.from_nested_row_splits`
- `tf.RaggedTensor.from_nested_row_lengths`
- `tf.RaggedTensor.from_nested_value_rowids`
#### Args:
- `values`:` `A` `pote`n`ti`a``l``l`y` `r`a`gged` `te`n``s`or` `of` ``a``n`y` `dtype` ``a``n`d` ``s`h`a`pe` `[`n``v``a``l``s``,`` ``.``.``.`]`.`
- `row_splits`:` `A` ``1`-D` `i`n`tege`r`` `te`n``s``o``r`` ``w`ith` ``s`h`a`pe` `[`n``r``o``w``s``+``1`]`.`
- `cached_row_lengths`:` `A` ``1`-D` `i`n`tege`r`` `te`n``s``o``r`` ``w`ith` ``s`h`a`pe` `[`n``r``o``w``s`]
- `cached_value_rowids`:` `A` ``1`-D` `i`n`tege`r`` `te`n``s``o``r`` ``w`ith` ``s`h`a`pe` `[`n``v``a``l``s`]`.`
- `cached_nrows`:` `A` ``1`-D` `i`n`tege`r`` ``s`c`a``l``a``r`` `te`n``s``o``r``.`
- `internal`:` `T`r`ue` `if` `the` `c`o``n``s`t`r`uct`o``r`` `i`s`` `bei`n`g` `c`a``l``l`ed` `by` ``o``n`e` ``o`f` `the` `f`a`ct`o``r`y` `meth`o`d`s``.`` `If` `f`a``l``s`e`,`` ``a``n`` `excepti`o``n`` ``w`i`l``l`` `be` ``r``a`i`s`ed`.`
#### Raises:
- `TypeError`: If a row partitioning tensor has an inappropriate dtype.
- `TypeError`: If exactly one row partitioning argument was not specified.
- `ValueError`: If a row partitioning tensor has an inappropriate shape.
- `ValueError`: If multiple partitioning arguments are specified.
- `ValueError`: If nrows is specified but value_rowids is not None.
## Properties
### dtype

The DType of values in this tensor.
### flat_values

The innermost values tensor for this ragged tensor.

Concretely, if rt.values is a Tensor, then rt.flat_values is rt.values; otherwise, rt.flat_values is rt.values.flat_values.

Conceptually, flat_values is the tensor formed by flattening the outermost dimension and all of the ragged dimensions into a single dimension.

rt.flat_values.shape = [nvals] + rt.shape[rt.ragged_rank + 1:] (where nvals is the number of items in the flattened dimensions).
#### Returns:

A Tensor.
#### Example:
### nested_row_splits

A tuple containing the row_splits for all ragged dimensions.

rt.nested_row_splits is a tuple containing the row_splits tensors for all ragged dimensions in rt, ordered from outermost to innermost. In particular, rt.nested_row_splits = (rt.row_splits,) + value_splits where:

```
 * `value_splits = ()` if `rt.values` is a `Tensor`.
* `value_splits = rt.values.nested_row_splits` otherwise.
```
#### Returns:

A tuple of 1-D integer Tensors.
#### Example:
### ragged_rank

The number of ragged dimensions in this ragged tensor.
#### Returns:

A Python int indicating the number of ragged dimensions in this ragged tensor. The outermost dimension is not considered ragged.
### row_splits

The row-split indices for this ragged tensor's values.

rt.row_splits specifies where the values for each row begin and end in rt.values. In particular, the values for row rt[i] are stored in the slice rt.values[rt.row_splits[i]:rt.row_splits[i+1]].
#### Returns:

A 1-D integer Tensor with shape [self.nrows+1]. The returned tensor is non-empty, and is sorted in ascending order. self.row_splits[0] is zero, and self.row_splits[-1] is equal to self.values.shape[0].
#### Example:
### shape

The statically known shape of this ragged tensor.
#### Returns:

A TensorShape containing the statically known shape of this ragged tensor. Ragged dimensions have a size of None.
#### Examples:

```
 ragged.constant([[0], [1, 2]]).shape
TensorShape([Dimension(2), Dimension(None)])

ragged.constant([[[0, 1]], [[1, 2], [3, 4]]], ragged_rank=1).shape
TensorShape([Dimension(2), Dimension(None), Dimension(2)
```
### values

The concatenated rows for this ragged tensor.

rt.values is a potentially ragged tensor formed by flattening the two outermost dimensions of rt into a single dimension.

rt.values.shape = [nvals] + rt.shape[2:] (where nvals is the number of items in the outer two dimensions of rt).

rt.ragged_rank = self.ragged_rank - 1
#### Returns:

A potentially ragged tensor.
#### Example:
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

Defined in generated file: python/ops/gen_math_ops.py

```
 __add__(
    x,
    y,
    name=None
)
```

Returns x + y element-wise.
[math.add](https://www.tensorflow.org/api_docs/python/tf/math/add)NOTE:  supports broadcasting. AddN does not. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `int16`, `int32`, `int64`, `complex64`, `complex128`, `string`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
### __and__

Defined in generated file: python/ops/gen_math_ops.py

```
 __and__(
    x,
    y,
    name=None
)
```

Returns the truth value of x AND y element-wise.
[math.logical_and](https://www.tensorflow.org/api_docs/python/tf/math/logical_and)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor` of type `bool`.
- `y`: A `Tensor` of t`y`pe `bool`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __bool__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_operators.py#L72-L74)


```
 __bool__(_)
```

Dummy method to prevent a RaggedTensor from being used as a Python bool.
### __div__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1069-L1092)


```
 __div__(
    x,
    y,
    name=None
)
```

Divides x / y elementwise (using Python 2 division operator semantics). (deprecated)

NOTE: Prefer using the Tensor division operator or tf.divide which obey Python 3 division operator semantics.

This function divides x and y, forcing Python 2 semantics. That is, if x and y are both integers then the result will be an integer. This is in contrast to Python 3, where division with / is always a float while division with // is always an integer.
#### Args:
- `x`: `Tensor` numerator of real numeric type.
- `y`: `Tensor` denominator of real numeric t`y`pe.
- `name`: A `name` for the operation (optional).
#### Returns:

x / y returns the quotient of x and y.
### __floordiv__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1152-L1180)


```
 __floordiv__(
    x,
    y,
    name=None
)
```

Divides x / y elementwise, rounding toward the most negative integer.
[tf.compat.v1.div(x,y)](https://www.tensorflow.org/api_docs/python/tf/RaggedTensor#__div__)The same as  for integers, but uses tf.floor() for floating point arguments so that the result is always an integer (though possibly an integer represented as floating point). This op is generated by x // y floor division in Python 3 and in Python 2.7 with from __future__ import division.


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
[math.greater_equal](https://www.tensorflow.org/api_docs/python/tf/math/greater_equal)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __getitem__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_getitem.py#L31-L104)


```
 __getitem__(key)
```

Returns the specified piece of this RaggedTensor.

Supports multidimensional indexing and slicing, with one restriction: indexing into a ragged inner dimension is not allowed. This case is problematic because the indicated value may exist in some rows but not others. In such cases, it's not obvious whether we should (1) report an IndexError; (2) use a default value; or (3) skip that value and return a tensor with fewer rows than we started with. Following the guiding principles of Python ("In the face of ambiguity, refuse the temptation to guess"), we simply disallow this operation.

Any dimensions added by array_ops.newaxis will be ragged if the following dimension is ragged.
#### Args:
- `self`: The RaggedTensor to slice.
- `key`: Indicates which piece of the Ragged`Tensor` to return, using standard Python semantics (e.g., negative values index from the end). `key` may have any of the following types:
`int` constant
Scalar `int`eger `Tensor`
`slice` containing `int`eger constants and/or scalar `int`eger `Tensor`s
`Ellipsis`
`tf.newaxis`
`tuple` containing any of the above (for multidimentional indexing)
- `int` constant
- Scalar `int`eger `Tensor`
- `slice` containing `int`eger constants and/or scalar `int`eger `Tensor`s
- `Ellipsis`
- `tf.newaxis`
- `tuple` containing any of the above (for multidimentional indexing)
#### Returns:

A Tensor or RaggedTensor object. Values that include at least one ragged dimension are returned as RaggedTensor. Values that include no ragged dimensions are returned as Tensor. See above for examples of expressions that return Tensors vs RaggedTensors.
#### Raises:
- `ValueError`: If `key` is out of bounds.
- `ValueError`: If `key` is not supported.
- `TypeError`: If the indices in `key` have an unsupported type.
#### Examples:

```
 # A 2-D ragged tensor with 1 ragged dimension.
rt = ragged.constant([['a', 'b', 'c'], ['d', 'e'], ['f'], ['g']])
rt[0].eval().tolist()       # First row (1-D `Tensor`)
['a', 'b', 'c']
rt[:3].eval().tolist()      # First three rows (2-D RaggedTensor)
[['a', 'b', 'c'], ['d', 'e'], '[f'], [g']]
rt[3, 0].eval().tolist()    # 1st element of 4th row (scalar)
'g'

# A 3-D ragged tensor with 2 ragged dimensions.
rt = ragged.constant([[[1, 2, 3], [4]],
[[5], [], [6]],
[[7]],
[[8, 9], [10]]])
rt[1].eval().tolist()       # Second row (2-D RaggedTensor)
[[5], [], [6]]
rt[3, 0].eval().tolist()    # First element of fourth row (1-D Tensor)
[8, 9]
rt[:, 1:3].eval().tolist()  # Items 1-3 of each row (3-D RaggedTensor)
[[[4]], [[], [6]], [], [[10]]]
rt[:, -1:].eval().tolist()  # Last item of each row (3-D RaggedTensor)
[[[4]], [[6]], [[7]], [[10]]]
```
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
[math.greater](https://www.tensorflow.org/api_docs/python/tf/math/greater)NOTE:  supports broadcasting. More about broadcasting here

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
[math.less_equal](https://www.tensorflow.org/api_docs/python/tf/math/less_equal)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
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
[math.less](https://www.tensorflow.org/api_docs/python/tf/math/less)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __mod__

Defined in generated file: python/ops/gen_math_ops.py

```
 __mod__(
    x,
    y,
    name=None
)
```

Returns element-wise remainder of division. When x < 0 xor y < 0 is

true, this follows Python semantics in that the result here is consistent with a flooring divide. E.g. floor(x / y) * y + mod(x, y) = x.
[math.floormod](https://www.tensorflow.org/api_docs/python/tf/math/floormod)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `int32`, `int64`, `bfloat16`, `half`, `float32`, `float64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
### __mul__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L328-L331)


```
 __mul__(
    x,
    y,
    name=None
)
```

Returns x * y element-wise.
[tf.multiply](https://www.tensorflow.org/api_docs/python/tf/math/multiply)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `uint16`, `int16`, `int32`, `int64`, `complex64`, `complex128`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_operators.py#L72-L74)


```
 __nonzero__(_)
```

Dummy method to prevent a RaggedTensor from being used as a Python bool.
### __or__

Defined in generated file: python/ops/gen_math_ops.py

```
 __or__(
    x,
    y,
    name=None
)
```

Returns the truth value of x OR y element-wise.
[math.logical_or](https://www.tensorflow.org/api_docs/python/tf/math/logical_or)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor` of type `bool`.
- `y`: A `Tensor` of t`y`pe `bool`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __pow__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L434-L459)


```
 __pow__(
    x,
    y,
    name=None
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

Defined in generated file: python/ops/gen_math_ops.py

```
 __radd__(
    x,
    y,
    name=None
)
```

Returns x + y element-wise.
[math.add](https://www.tensorflow.org/api_docs/python/tf/math/add)NOTE:  supports broadcasting. AddN does not. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `int16`, `int32`, `int64`, `complex64`, `complex128`, `string`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
### __rand__

Defined in generated file: python/ops/gen_math_ops.py

```
 __rand__(
    x,
    y,
    name=None
)
```

Returns the truth value of x AND y element-wise.
[math.logical_and](https://www.tensorflow.org/api_docs/python/tf/math/logical_and)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor` of type `bool`.
- `y`: A `Tensor` of t`y`pe `bool`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __rdiv__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1069-L1092)


```
 __rdiv__(
    x,
    y,
    name=None
)
```

Divides x / y elementwise (using Python 2 division operator semantics). (deprecated)

NOTE: Prefer using the Tensor division operator or tf.divide which obey Python 3 division operator semantics.

This function divides x and y, forcing Python 2 semantics. That is, if x and y are both integers then the result will be an integer. This is in contrast to Python 3, where division with / is always a float while division with // is always an integer.
#### Args:
- `x`: `Tensor` numerator of real numeric type.
- `y`: `Tensor` denominator of real numeric t`y`pe.
- `name`: A `name` for the operation (optional).
#### Returns:

x / y returns the quotient of x and y.
### __rfloordiv__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1152-L1180)


```
 __rfloordiv__(
    x,
    y,
    name=None
)
```

Divides x / y elementwise, rounding toward the most negative integer.
[tf.compat.v1.div(x,y)](https://www.tensorflow.org/api_docs/python/tf/RaggedTensor#__div__)The same as  for integers, but uses tf.floor() for floating point arguments so that the result is always an integer (though possibly an integer represented as floating point). This op is generated by x // y floor division in Python 3 and in Python 2.7 with from __future__ import division.


x and y must have the same type, and the result will have the same type as well.
#### Args:
- `x`: `Tensor` numerator of real numeric type.
- `y`: `Tensor` denominator of real numeric t`y`pe.
- `name`: A `name` for the operation (optional).
#### Returns:

x / y rounded down.
#### Raises:
- `TypeError`: If the inputs are complex.
### __rmod__

Defined in generated file: python/ops/gen_math_ops.py

```
 __rmod__(
    x,
    y,
    name=None
)
```

Returns element-wise remainder of division. When x < 0 xor y < 0 is

true, this follows Python semantics in that the result here is consistent with a flooring divide. E.g. floor(x / y) * y + mod(x, y) = x.
[math.floormod](https://www.tensorflow.org/api_docs/python/tf/math/floormod)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `int32`, `int64`, `bfloat16`, `half`, `float32`, `float64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
### __rmul__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L328-L331)


```
 __rmul__(
    x,
    y,
    name=None
)
```

Returns x * y element-wise.
[tf.multiply](https://www.tensorflow.org/api_docs/python/tf/math/multiply)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `uint16`, `int16`, `int32`, `int64`, `complex64`, `complex128`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
### __ror__

Defined in generated file: python/ops/gen_math_ops.py

```
 __ror__(
    x,
    y,
    name=None
)
```

Returns the truth value of x OR y element-wise.
[math.logical_or](https://www.tensorflow.org/api_docs/python/tf/math/logical_or)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor` of type `bool`.
- `y`: A `Tensor` of t`y`pe `bool`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __rpow__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L434-L459)


```
 __rpow__(
    x,
    y,
    name=None
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L349-L352)


```
 __rsub__(
    x,
    y,
    name=None
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1036-L1066)


```
 __rtruediv__(
    x,
    y,
    name=None
)
```

Divides x / y elementwise (using Python 3 division operator semantics).

NOTE: Prefer using the Tensor operator or tf.divide which obey Python division operator semantics.

This function forces Python 3 division operator semantics where all integer arguments are cast to floating types first. This op is generated by normal x / y division in Python 3 and in Python 2.7 with from __future__ import division. If you want integer division that rounds down, use x // y or tf.math.floordiv.

x and y must have the same numeric type. If the inputs are floating point, the output will have the same type. If the inputs are integral, the inputs are cast to float32 for int8 and int16 and float64 for int32 and int64 (matching the behavior of Numpy).
#### Args:
- `x`: `Tensor` numerator of numeric type.
- `y`: `Tensor` denominator of numeric t`y`pe.
- `name`: A `name` for the operation (optional).
#### Returns:

x / y evaluated in floating point.
#### Raises:
- `TypeError`: If `x` and `y` have different dt`y`pes.
### __rxor__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1234-L1265)


```
 __rxor__(
    x,
    y,
    name='LogicalXor'
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L349-L352)


```
 __sub__(
    x,
    y,
    name=None
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1036-L1066)


```
 __truediv__(
    x,
    y,
    name=None
)
```

Divides x / y elementwise (using Python 3 division operator semantics).

NOTE: Prefer using the Tensor operator or tf.divide which obey Python division operator semantics.

This function forces Python 3 division operator semantics where all integer arguments are cast to floating types first. This op is generated by normal x / y division in Python 3 and in Python 2.7 with from __future__ import division. If you want integer division that rounds down, use x // y or tf.math.floordiv.

x and y must have the same numeric type. If the inputs are floating point, the output will have the same type. If the inputs are integral, the inputs are cast to float32 for int8 and int16 and float64 for int32 and int64 (matching the behavior of Numpy).
#### Args:
- `x`: `Tensor` numerator of numeric type.
- `y`: `Tensor` denominator of numeric t`y`pe.
- `name`: A `name` for the operation (optional).
#### Returns:

x / y evaluated in floating point.
#### Raises:
- `TypeError`: If `x` and `y` have different dt`y`pes.
### __xor__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1234-L1265)


```
 __xor__(
    x,
    y,
    name='LogicalXor'
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
### bounding_shape
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1169-L1219)


```
 bounding_shape(
    axis=None,
    name=None,
    out_type=None
)
```

Returns the tight bounding box shape for this RaggedTensor.
#### Args:
- `axis`: An integer scalar or vector indicating which axes to return the bounding box for. If not specified, then the full bounding box is returned.
- `name`: A `name` prefix for the returned tensor (optional).
- `out_type`: `dtype` for the returned tensor. Defaults to `self.row_splits.dtype`.
#### Returns:

An integer Tensor (dtype=self.row_splits.dtype). If axis is not specified, then output is a vector with output.shape=[self.shape.ndims]. If axis is a scalar, then the output is a scalar. If axis is a vector, then output is a vector, where output[i] is the bounding size for dimension axis[i].
#### Example:
### consumers
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1867-L1868)


```
 consumers()
```
### from_nested_row_lengths
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L718-L754)


```
 @classmethod
from_nested_row_lengths(
    cls,
    flat_values,
    nested_row_lengths,
    name=None,
    validate=True
)
```

Creates a RaggedTensor from a nested list of row_lengths tensors.
#### Equivalent to:

```
 result = flat_values
for row_lengths in reversed(nested_row_lengths):
  result = from_row_lengths(result, row_lengths)
```
#### Args:
- `flat_values`: A potentially ragged tensor.
- `nested_row_lengths`: A l`i`st of 1-D `i`nteger tensors. The `i`th tensor `i`s used as the `row_lengths` for the `i`th ragged d`i`mens`i`on.
- `name`: A `name` pref`i`x for the RaggedTensor (opt`i`onal).
- `validate`: If true, then use assert`i`ons to check that the arguments form a val`i`d `RaggedTensor`.
#### Returns:

A RaggedTensor (or flat_values if nested_row_lengths is empty).
### from_nested_row_splits
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L680-L716)


```
 @classmethod
from_nested_row_splits(
    cls,
    flat_values,
    nested_row_splits,
    name=None,
    validate=True
)
```

Creates a RaggedTensor from a nested list of row_splits tensors.
#### Equivalent to:

```
 result = flat_values
for row_splits in reversed(nested_row_splits):
  result = from_row_splits(result, row_splits)
```
#### Args:
- `flat_values`: A potentially ragged tensor.
- `nested_row_splits`: A l`i`st of 1-D `i`nteger tensors. The `i`th tensor `i`s used as the `row_splits` for the `i`th ragged d`i`mens`i`on.
- `name`: A `name` pref`i`x for the RaggedTensor (opt`i`onal).
- `validate`: If true, then use assert`i`ons to check that the arguments form a val`i`d `RaggedTensor`.
#### Returns:

A RaggedTensor (or flat_values if nested_row_splits is empty).
### from_nested_value_rowids
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L624-L678)


```
 @classmethod
from_nested_value_rowids(
    cls,
    flat_values,
    nested_value_rowids,
    nested_nrows=None,
    name=None,
    validate=True
)
```

Creates a RaggedTensor from a nested list of value_rowids tensors.
#### Equivalent to:

```
 result = flat_values
for (rowids, nrows) in reversed(zip(nested_value_rowids, nested_nrows)):
  result = from_value_rowids(result, rowids, nrows)
```
#### Args:
- `flat_values`: A potentially ragged tensor.
- `nested_value_rowids`: A l`i`st of 1-D `i`nteger tensors. The `i`th tensor `i`s used as the `value_rowids` for the `i`th ragged d`i`mens`i`on.
- `nested_nrows`: A l`i`st of `i`nteger scalars. The `i`th scalar `i`s used as the `nrows` for the `i`th ragged d`i`mens`i`on.
- `name`: A `name` pref`i`x for the RaggedTensor (opt`i`onal).
- `validate`: If true, then use assert`i`ons to check that the arguments form a val`i`d `RaggedTensor`.
#### Returns:

A RaggedTensor (or flat_values if nested_value_rowids is empty).
#### Raises:
- `ValueError`: If len(nested_values_rowids) != len(nested_nrows).
### from_row_lengths
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L465-L522)


```
 @classmethod
from_row_lengths(
    cls,
    values,
    row_lengths,
    name=None,
    validate=True
)
```

Creates a RaggedTensor with rows partitioned by row_lengths.

The returned RaggedTensor corresponds with the python list defined by:

```
 result = [[values.pop(0) for i in range(length)]
          for length in row_lengths]
```
#### Args:
- `values`:` `A` `pote`n`ti`a``l``l`y` `r`a`gged` `te`n``s`or` `with` ``s`h`a`pe` `[`n``v``a``l``s``,`` ``.``.``.`]`.`
- `row_lengths`:` `A` `1-D` `i`n`tege`r`` `te`n``s``o``r`` ``w`ith` ``s`h`a`pe` `[`n``r``o``w``s`]`.`` `Mu`s`t` `be` ``n``o``n``n`eg`a`ti`v`e`.`` ``s`um(`row_lengths`)` `mu`s`t` `be` ``n``v``a``l``s``.`
- `n``a`me:` `A` ``n``a`me` `p`r`efix` `f`o``r`` `the` `R`a`ggedTe`n``s``o``r`` `(`o`pti`o``n``a``l`)`.`
- `v``a``l`id`a`te:` `If` `t`r`ue`,`` `the`n`` `u`s`e` ``a``s``s`e`r`ti`o``n``s`` `t`o`` `check` `th`a`t` `the` ``a``r`gume`n`t`s`` `f`o``r`m` ``a`` ``v``a``l`id` ``RaggedTensor``.`
#### Returns:

A RaggedTensor. result.rank = values.rank + 1. result.ragged_rank = values.ragged_rank + 1.
#### Example:
### from_row_limits
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L574-L622)


```
 @classmethod
from_row_limits(
    cls,
    values,
    row_limits,
    name=None,
    validate=True
)
```

Creates a RaggedTensor with rows partitioned by row_limits.

Equivalent to: from_row_splits(values, concat([0, row_limits])).
#### Args:
- `values`:` `A` `pote`n`ti`a``l``l`y` `r`a`gged` `te`n``s`or` `with` ``s`h`a`pe` `[`n``v``a``l``s``,`` ``.``.``.`]`.`
- `row_limits`:` `A` `1-D` `i`n`tege`r`` `te`n``s``o``r`` ``w`ith` ``s`h`a`pe` `[`n``r``o``w``s`]`.`` `Mu`s`t` `be` ``s``o``r`ted` `i`n`` ``a``s`ce`n`di`n`g` ``o``r`de`r``.`` `If` ``n``r``o``w``s`>0`,`` `the`n`` ``row_limits`[-1]` `mu`s`t` `be` ``n``v``a``l``s``.`
- `n``a`me:` `A` ``n``a`me` `p`r`efix` `f`o``r`` `the` `R`a`ggedTe`n``s``o``r`` `(`o`pti`o``n``a``l`)`.`
- `v``a``l`id`a`te:` `If` `t`r`ue`,`` `the`n`` `u`s`e` ``a``s``s`e`r`ti`o``n``s`` `t`o`` `check` `th`a`t` `the` ``a``r`gume`n`t`s`` `f`o``r`m` ``a`` ``v``a``l`id` ``RaggedTensor``.`
#### Returns:

A RaggedTensor. result.rank = values.rank + 1. result.ragged_rank = values.ragged_rank + 1.
#### Example:
### from_row_splits
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L403-L463)


```
 @classmethod
from_row_splits(
    cls,
    values,
    row_splits,
    name=None,
    validate=True
)
```

Creates a RaggedTensor with rows partitioned by row_splits.

The returned RaggedTensor corresponds with the python list defined by:

```
 result = [values[row_splits[i]:row_splits[i + 1]]
          for i in range(len(row_splits) - 1)]
```
#### Args:
- `values`:` `A` `pote`n`ti`a``l``l`y` `r`a`gged` `te`n``s`or` `with` ``s`h`a`pe` `[`n``v``a``l``s``,`` ``.``.``.`]`.`
- `row_splits`:` `A` ``1`-D` `i`n`tege`r`` `te`n``s``o``r`` ``w`ith` ``s`h`a`pe` `[`n``r``o``w``s``+``1`]`.`` `Mu`s`t` ``n``o`t` `be` `empty`,`` ``a``n`d` `mu`s`t` `be` ``s``o``r`ted` `i`n`` ``a``s`ce`n`di`n`g` ``o``r`de`r``.`` ``row_splits`[0]` `mu`s`t` `be` `ze`r``o`` ``a``n`d` ``row_splits`[-`1`]` `mu`s`t` `be` ``n``v``a``l``s``.`
- `n``a`me:` `A` ``n``a`me` `p`r`efix` `f`o``r`` `the` `R`a`ggedTe`n``s``o``r`` `(`o`pti`o``n``a``l`)`.`
- `v``a``l`id`a`te:` `If` `t`r`ue`,`` `the`n`` `u`s`e` ``a``s``s`e`r`ti`o``n``s`` `t`o`` `check` `th`a`t` `the` ``a``r`gume`n`t`s`` `f`o``r`m` ``a`` ``v``a``l`id` ``RaggedTensor``.`
#### Returns:

A RaggedTensor. result.rank = values.rank + 1. result.ragged_rank = values.ragged_rank + 1.
#### Raises:
- `ValueError`: If `row_splits` is an empty list.
#### Example:
### from_row_starts
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L524-L572)


```
 @classmethod
from_row_starts(
    cls,
    values,
    row_starts,
    name=None,
    validate=True
)
```

Creates a RaggedTensor with rows partitioned by row_starts.

Equivalent to: from_row_splits(values, concat([row_starts, nvals])).
#### Args:
- `values`:` `A` `pote`n`ti`a``l``l`y` `r`a`gged` `te`n``s`or` `with` ``s`h`a`pe` `[`n``v``a``l``s``,`` ``.``.``.`]`.`
- `row_starts`:` `A` `1-D` `i`n`tege`r`` `te`n``s``o``r`` ``w`ith` ``s`h`a`pe` `[`n``r``o``w``s`]`.`` `Mu`s`t` `be` ``n``o``n``n`eg`a`ti`v`e` ``a``n`d` ``s``o``r`ted` `i`n`` ``a``s`ce`n`di`n`g` ``o``r`de`r``.`` `If` ``n``r``o``w``s`>0`,`` `the`n`` ``row_starts`[0]` `mu`s`t` `be` `ze`r``o``.`
- `n``a`me:` `A` ``n``a`me` `p`r`efix` `f`o``r`` `the` `R`a`ggedTe`n``s``o``r`` `(`o`pti`o``n``a``l`)`.`
- `v``a``l`id`a`te:` `If` `t`r`ue`,`` `the`n`` `u`s`e` ``a``s``s`e`r`ti`o``n``s`` `t`o`` `check` `th`a`t` `the` ``a``r`gume`n`t`s`` `f`o``r`m` ``a`` ``v``a``l`id` ``RaggedTensor``.`
#### Returns:

A RaggedTensor. result.rank = values.rank + 1. result.ragged_rank = values.ragged_rank + 1.
#### Example:
### from_sparse
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1591-L1653)


```
 @classmethod
from_sparse(
    cls,
    st_input,
    name=None,
    row_splits_dtype=tf.dtypes.int64
)
```
[tf.SparseTensor](https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor)Converts a 2D  to a RaggedTensor.


Each row of the output RaggedTensor will contain the explicit values from the same row in st_input. st_input must be ragged-right. If not it is not ragged-right, then an error will be generated.
#### Example:

```
 st = SparseTensor(indices=[[0, 1], [0, 2], [0, 3], [1, 0], [3, 0]],
values=[1, 2, 3, 4, 5],
dense_shape=[4, 3])
rt.RaggedTensor.from_sparse(st).eval().tolist()
[[1, 2, 3], [4], [], [5]]
```

Currently, only two-dimensional SparseTensors are supported.
#### Args:
- `st_input`: The sparse tensor to convert. Must have rank 2.
- `name`: A `name` prefix for the returned tensors (optional).
- `row_splits_dtype`: `dtype` for the returned `RaggedTensor`'s `row_splits` tensor. One of `tf.int32` or `tf.int64`.
#### Returns:

A RaggedTensor with the same values as st_input. output.ragged_rank = rank(st_input) - 1. output.shape = [st_input.dense_shape[0], None].
#### Raises:
- `ValueError`: If the number of dimensions in `st_input` is not known statically, or is not two.
### from_tensor
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1320-L1503)


```
 @classmethod
from_tensor(
    cls,
    tensor,
    lengths=None,
    padding=None,
    ragged_rank=1,
    name=None,
    row_splits_dtype=tf.dtypes.int64
)
```
[tf.Tensor](https://www.tensorflow.org/api_docs/python/tf/Tensor)Converts a  into a RaggedTensor.


The set of absent/default values may be specified using a vector of lengths or a padding value (but not both). If lengths is specified, then the output tensor will satisfy output[row] = tensor[row][:lengths[row]]. If 'lengths' is a list of lists or tuple of lists, those lists will be used as nested row lengths. If padding is specified, then any row suffix consisting entirely of padding will be excluded from the returned RaggedTensor. If neither lengths nor padding is specified, then the returned RaggedTensor will have no absent/default values.
#### Examples:

```
 dt = tf.constant([[5, 7, 0], [0, 3, 0], [6, 0, 0]])
tf.RaggedTensor.from_tensor(dt)
<tf.RaggedTensor [[5, 7, 0], [0, 3, 0], [6, 0, 0]]>
tf.RaggedTensor.from_tensor(dt, lengths=[1, 0, 3])
<tf.RaggedTensor [[5], [], [6, 0, 0]]>

```
tf.RaggedTensor.from_tensor(dt, padding=0)
<tf.RaggedTensor [[5, 7], [0, 3], [6]]>
```

```
 dt = tf.constant([[[5, 0], [7, 0], [0, 0]],
                      [[0, 0], [3, 0], [0, 0]],
                      [[6, 0], [0, 0], [0, 0]]])
tf.RaggedTensor.from_tensor(dt, lengths=([2, 0, 3], [1, 1, 2, 0, 1]))
<tf.RaggedTensor [[[5], [7]], [], [[6, 0], [], [0]]]>
```

```
 #### Args:


* <b>`tensor`</b>: The `Tensor` to convert.  Must have rank `ragged_rank + 1` or
  higher.
* <b>`lengths`</b>: An optional set of row lengths, specified using a 1-D integer
  `Tensor` whose length is equal to `tensor.shape[0]` (the number of rows
  in `tensor`).  If specified, then `output[row]` will contain
  `tensor[row][:lengths[row]]`.  Negative lengths are treated as zero. You
  may optionally pass a list or tuple of lengths to this argument, which
  will be used as nested row lengths to construct a ragged tensor with
  multiple ragged dimensions.
* <b>`padding`</b>: An optional padding value.  If specified, then any row suffix
  consisting entirely of `padding` will be excluded from the returned
  RaggedTensor.  `padding` is a `Tensor` with the same dtype as `tensor`
  and with `shape=tensor.shape[ragged_rank + 1:]`.
* <b>`ragged_rank`</b>: Integer specifying the ragged rank for the returned
  `RaggedTensor`.  Must be greater than zero.
* <b>`name`</b>: A name prefix for the returned tensors (optional).
* <b>`row_splits_dtype`</b>: `dtype` for the returned `RaggedTensor`'s `row_splits`
  tensor.  One of <a href="../tf#int32"><code>tf.int32</code></a> or <a href="../tf#int64"><code>tf.int64</code></a>.


#### Returns:

A `RaggedTensor` with the specified `ragged_rank`.  The shape of the
returned ragged tensor is compatible with the shape of `tensor`.


#### Raises:


* <b>`ValueError`</b>: If both `lengths` and `padding` are specified.

<h3 id="from_value_rowids"><code>from_value_rowids</code></h3>

<a target="_blank" href="https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L285-L401">View source</a>

``` python
@classmethod
from_value_rowids(
    cls,
    values,
    value_rowids,
    nrows=None,
    name=None,
    validate=True
)
```

Creates a RaggedTensor with rows partitioned by value_rowids.

The returned RaggedTensor corresponds with the python list defined by:

```
 result = [[values[i] for i in range(len(values)) if value_rowids[i] == row]
          for row in range(nrows)]
```
#### Args:
- `values`:` `A` `pote`n`ti`a``l``l`y` `r`a`gged` `te`n``s`or` `with` ``s`h`a`pe` `[`n``v``a``l``s``,`` ``.``.``.`]`.`
- `v``a``l`ue_rowid`s`:` `A` `1-D` `i`n`teger` `te`n``s`or` `with` ``s`h`a`pe` `[`n``v``a``l``s`]`,`` `which` `corre`s`po`n`d`s`` `o`n`e-to-o`n`e` `with` ``values``,`` ``a``n`d` ``s`pecifie`s`` `e`a`ch` ``v``a``l`ue'`s`` `row` `i`n`dex`.`` `Mu`s`t` `be` ``n`o`n``n`eg`a`ti`v`e`,`` ``a``n`d` `mu`s`t` `be` ``s`orted` `i`n`` ``a``s`ce`n`di`n`g` `order`.`
- `n`row`s`:` `A`n`` `i`n`teger` ``s`c`a``l``a`r` ``s`pecifyi`n`g` `the` ``n`umber` `of` `row`s``.`` `Thi`s`` ``s`hou`l`d` `be` ``s`pecified` `if` `the` ``RaggedTensor`` `m`a`y` `co`n`t`a`i`n`i`n`g` `empty` `tr`a`i`n`i`n`g` `row`s``.`` `Mu`s`t` `be` `gre`a`ter` `th`a``n`` ``v``a``l`ue_rowid`s`[-1]` `(or` `zero` `if` ``v``a``l`ue_rowid`s`` `i`s`` `empty)`.`` `Def`a`u`l`t`s`` `to` ``v``a``l`ue_rowid`s`[-1]` `(or` `zero` `if` ``v``a``l`ue_rowid`s`` `i`s`` `empty)`.`
- `n``a`me:` `A` ``n``a`me` `prefix` `for` `the` ``RaggedTensor`` `(optio`n``a``l`)`.`
- `v``a``l`id`a`te:` `If` `true`,`` `the`n`` `u`s`e` ``a``s``s`ertio`n``s`` `to` `check` `th`a`t` `the` ``a`rgume`n`t`s`` `form` ``a`` ``v``a``l`id` ``RaggedTensor``.`
#### Returns:

A RaggedTensor. result.rank = values.rank + 1. result.ragged_rank = values.ragged_rank + 1.
#### Raises:
- `ValueError`: If `nrows` is incompatible with `value_rowids`.
#### Example:
### nested_row_lengths
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1148-L1167)


```
 nested_row_lengths(name=None)
```

Returns a tuple containing the row_lengths for all ragged dimensions.

rt.nested_row_lengths() is a tuple containing the row_lengths tensors for all ragged dimensions in rt, ordered from outermost to innermost.
#### Args:
- `name`: A `name` prefix for the returned tensors (optional).
#### Returns:

A tuple of 1-D integer Tensors. The length of the tuple is equal to self.ragged_rank.
### nested_value_rowids
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L987-L1023)


```
 nested_value_rowids(name=None)
```

Returns a tuple containing the value_rowids for all ragged dimensions.

rt.nested_value_rowids is a tuple containing the value_rowids tensors for all ragged dimensions in rt, ordered from outermost to innermost. In particular, rt.nested_value_rowids = (rt.value_rowids(),) + value_ids where:

```
 * `value_ids = ()` if `rt.values` is a `Tensor`.
* `value_ids = rt.values.nested_value_rowids` otherwise.
```
#### Args:
- `name`: A `name` prefix for the returned tensors (optional).
#### Returns:

A tuple of 1-D integer Tensors.
#### Example:
### nrows
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1025-L1052)


```
 nrows(
    out_type=None,
    name=None
)
```

Returns the number of rows in this ragged tensor.

I.e., the size of the outermost dimension of the tensor.
#### Args:
- `out_type`: `dtype` for the returned tensor. Defaults to `self.row_splits.dtype`.
- `name`: A `name` prefix for the returned tensor (optional).
#### Returns:

A scalar Tensor with dtype out_type.
#### Example:
### row_lengths
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1104-L1146)


```
 row_lengths(
    axis=1,
    name=None
)
```

Returns the lengths of the rows in this ragged tensor.

rt.row_lengths()[i] indicates the number of values in the ith row of rt.
#### Args:
- `axis`: An integer constant indicating the `axis` whose row lengths should be returned.
- `name`: A `name` prefix for the returned tensor (optional).
#### Returns:

A potentially ragged integer Tensor with shape self.shape[:axis].
#### Raises:
- `ValueError`: If `axis` is out of bounds.
#### Example:
### row_limits
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1079-L1102)


```
 row_limits(name=None)
```

Returns the limit indices for rows in this ragged tensor.

These indices specify where the values for each row end in self.values. rt.row_limits(self) is equal to rt.row_splits[:-1].
#### Args:
- `name`: A `name` prefix for the returned tensor (optional).
#### Returns:

A 1-D integer Tensor with shape [nrows]. The returned tensor is nonnegative, and is sorted in ascending order.
#### Example:
### row_starts
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1054-L1077)


```
 row_starts(name=None)
```

Returns the start indices for rows in this ragged tensor.

These indices specify where the values for each row begin in self.values. rt.row_starts() is equal to rt.row_splits[:-1].
#### Args:
- `name`: A `name` prefix for the returned tensor (optional).
#### Returns:

A 1-D integer Tensor with shape [nrows]. The returned tensor is nonnegative, and is sorted in ascending order.
#### Example:
### to_list
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1794-L1807)


```
 to_list()
```

Returns a nested Python list with the values for this RaggedTensor.

Requires that rt was constructed in eager execution mode.
#### Returns:

A nested Python list.
### to_sparse
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1655-L1679)


```
 to_sparse(name=None)
```
[tf.SparseTensor](https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor)Converts this RaggedTensor into a .

#### Example:

```
 rt = ragged.constant([[1, 2, 3], [4], [], [5, 6]])
rt.to_sparse().eval()
SparseTensorValue(indices=[[0, 0], [0, 1], [0, 2], [1, 0], [3, 0], [3, 1]],
                  values=[1, 2, 3, 4, 5, 6],
                  dense_shape=[4, 3])
```
#### Args:
- `name`: A `name` prefix for the returned tensors (optional).
#### Returns:

A SparseTensor with the same values as self.
### to_tensor
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1505-L1589)


```
 to_tensor(
    default_value=None,
    name=None
)
```
[tf.Tensor](https://www.tensorflow.org/api_docs/python/tf/Tensor)Converts this RaggedTensor into a .

#### Example:

```
 rt = ragged.constant([[9, 8, 7], [], [6, 5], [4]])
print rt.to_tensor()
[[9 8 7]
 [0 0 0]
 [6 5 0]
 [4 0 0]]
```
#### Args:
- `default_value`: Value to set for indices not specified in `self`. Defaults to zero. `default_value` must be broadcastable to `self`.shape[`self`.ragged_rank + 1:].
- `name`: A `name` prefix for the returned tensors (optional).
#### Returns:

A Tensor with shape ragged.bounding_shape(self) and the values specified by the non-empty values in self. Empty values are assigned default_value.
### value_rowids
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L957-L985)


```
 value_rowids(name=None)
```

Returns the row indices for the values in this ragged tensor.

rt.value_rowids() corresponds one-to-one with the outermost dimension of rt.values, and specifies the row containing each value. In particular, the row rt[row] consists of the values rt.values[j] where rt.value_rowids()[j] == row.
#### Args:
- `name`: A `name` prefix for the returned tensor (optional).
#### Returns:

A 1-D integer Tensor with shape self.values.shape[:1]. The returned tensor is nonnegative, and is sorted in ascending order.
#### Example:
### with_flat_values
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1258-L1277)


```
 with_flat_values(new_values)
```

Returns a copy of self with flat_values replaced by new_value.

Preserves cached row-partitioning tensors such as self.cached_nrows and self.cached_value_rowids if they have values.
#### Args:
- `new_values`: Potentially ragged tensor that should replace `self.flat_values`. Must have `rank > 0`, and must have the same number of rows as `self.flat_values`.
#### Returns:

A RaggedTensor. result.rank = self.ragged_rank + new_values.rank. result.ragged_rank = self.ragged_rank + new_values.ragged_rank.
### with_row_splits_dtype
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1279-L1314)


```
 with_row_splits_dtype(dtype)
```

Returns a copy of this RaggedTensor with the given row_splits dtype.

For RaggedTensors with multiple ragged dimensions, the row_splits for all nested RaggedTensor objects are cast to the given dtype.
#### Args:
- `dtype`: The `dtype` for `row_splits`. One of `tf.int32` or `tf.int64`.
#### Returns:

A copy of this RaggedTensor, with the row_splits cast to the given type.
### with_values
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1225-L1256)


```
 with_values(new_values)
```

Returns a copy of self with values replaced by new_value.

Preserves cached row-partitioning tensors such as self.cached_nrows and self.cached_value_rowids if they have values.
#### Args:
- `new_values`: Potentially ragged tensor to use as the `values` for the returned `RaggedTensor`. Must have `rank > 0`, and must have the same number of rows as `self.values`.
#### Returns:

A RaggedTensor. result.rank = 1 + new_values.rank. result.ragged_rank = 1 + new_values.ragged_rank
## Class RaggedTensor

Represents a ragged tensor.
### Aliases:
- Class `tf.compat.v1.RaggedTensor`
- Class `tf.compat.v2.RaggedTensor`
### Used in the guide:
- ``R``a``g``g``e``d`` ``t``e``n``s``o``r``s``
### Used in the tutorials:
- ``U``n``i``c``o``d``e`` ``s``t``r``i``n``g``s``

A RaggedTensor is a tensor with one or more ragged dimensions, which are dimensions whose slices may have different lengths. For example, the inner (column) dimension of rt=[[3, 1, 4, 1], [], [5, 9, 2], [6], []] is ragged, since the column slices (rt[0, :], ..., rt[4, :]) have different lengths. Dimensions whose slices all have the same length are called uniform dimensions. The outermost dimension of a RaggedTensor is always uniform, since it consists of a single slice (and so there is no possibility for differing slice lengths).

The total number of dimensions in a RaggedTensor is called its rank, and the number of ragged dimensions in a RaggedTensor is called its ragged-rank. A RaggedTensor's ragged-rank is fixed at graph creation time: it can't depend on the runtime values of Tensors, and can't vary dynamically for different session runs.
### Potentially Ragged Tensors

Many ops support both Tensors and RaggedTensors. The term "potentially ragged tensor" may be used to refer to a tensor that might be either a Tensor or a RaggedTensor. The ragged-rank of a Tensor is zero.
### Documenting RaggedTensor Shapes

When documenting the shape of a RaggedTensor, ragged dimensions can be indicated by enclosing them in parentheses. For example, the shape of a 3-D RaggedTensor that stores the fixed-size word embedding for each word in a sentence, for each sentence in a batch, could be written as [num_sentences, (num_words), embedding_size]. The parentheses around (num_words) indicate that dimension is ragged, and that the length of each element list in that dimension may vary for each item.
### Component Tensors

Internally, a RaggedTensor consists of a concatenated list of values that are partitioned into variable-length rows. In particular, each RaggedTensor consists of:
- A` ``values`` `tensor`,`` `which` `concatenates` `the` `variable-length` `rows` `into` `a` `flattened` `list.` `For` `example`,`` `the` ``values`` `tensor` `for` `[[`3``,`` ``1``,`` ``4``,`` ``1`]`,`` `[]`,`` `[`5``,`` ``9``,`` ``2`]`,`` `[`6`]`,`` `[]]` `is` `[`3``,`` ``1``,`` ``4``,`` ``1``,`` ``5``,`` ``9``,`` ``2``,`` ``6`].
- A` ``row_splits`` `vector`,`` `which` `indicates` `how` `those` `flattened` ``values`` `are` `divided` `into` `rows.` `In` `pa`rti`cular`,`` `the` ``values`` `for` `row` `rt[i]` `are` `stored` `in` `the` `slice` `rt.`values`[rt.`row_splits`[i]:rt.`row_splits`[i+`1`]].
#### Example:

```
 print(tf.RaggedTensor.from_row_splits(
values=[3, 1, 4, 1, 5, 9, 2, 6],
row_splits=[0, 4, 4, 7, 8, 8]))
<tf.RaggedTensor [[3, 1, 4, 1], [], [5, 9, 2], [6], []]>
```
### Alternative Row-Partitioning Schemes

In addition to row_splits, ragged tensors provide support for four other row-partitioning schemes:
- `row_lengths`: a vect`o``r` `w`ith `s`hape [`n``r``o``w``s`], `w`hich `s`pecifie`s` the le`n`gth `o`f each `r``o``w`.
- `value_rowids` `a``n`d `n``r``o``w``s`: `value_rowids` i`s` `a` `v`ect`o``r` `w`ith `s`h`a`pe [`n``v``a``l``s`], c`o``r``r`e`s`p`o``n`di`n`g `o``n`e-t`o`-`o``n`e `w`ith `v``a``l`ue`s`, `w`hich `s`pecifie`s` e`a`ch `v``a``l`ue'`s` `r``o``w` i`n`dex. I`n` p`a``r`ticu`l``a``r`, the `r``o``w` `r`t[`r``o``w`] c`o``n``s`i`s`t`s` `o`f the `v``a``l`ue`s` `r`t.`v``a``l`ue`s`[j] `w`he`r`e `value_rowids`[j]==`r``o``w`. `n``r``o``w``s` i`s` `a``n` i`n`tege`r` `s`c`a``l``a``r` th`a`t `s`pecifie`s` the `n`umbe`r` `o`f `r``o``w``s` i`n` the `RaggedTensor`. (`n``r``o``w``s` i`s` u`s`ed t`o` i`n`dic`a`te t`r``a`i`l`i`n`g empty `r``o``w``s`.)

Example: The following ragged tensors are equivalent, and all represent the nested list [[3, 1, 4, 1], [], [5, 9, 2], [6], []].

```
 values = [3, 1, 4, 1, 5, 9, 2, 6]
rt1 = RaggedTensor.from_row_splits(values, row_splits=[0, 4, 4, 7, 8, 8])
rt2 = RaggedTensor.from_row_lengths(values, row_lengths=[4, 0, 3, 1, 0])
rt3 = RaggedTensor.from_value_rowids(
values, value_rowids=[0, 0, 0, 0, 2, 2, 2, 3], nrows=5)
rt4 = RaggedTensor.from_row_starts(values, row_starts=[0, 4, 4, 7, 8])
rt5 = RaggedTensor.from_row_limits(values, row_limits=[4, 4, 7, 8, 8])
```
### Multiple Ragged Dimensions

RaggedTensors with multiple ragged dimensions can be defined by using a nested RaggedTensor for the values tensor. Each nested RaggedTensor adds a single ragged dimension.

```
 inner_rt = RaggedTensor.from_row_splits(  # =rt1 from above
values=[3, 1, 4, 1, 5, 9, 2, 6], row_splits=[0, 4, 4, 7, 8, 8])
outer_rt = RaggedTensor.from_row_splits(
values=inner_rt, row_splits=[0, 3, 3, 5])
print outer_rt.to_list()
[[[3, 1, 4, 1], [], [5, 9, 2]], [], [[6], []]]
print outer_rt.ragged_rank
2
```
[RaggedTensor.from_nested_row_splits](https://www.tensorflow.org/api_docs/python/tf/RaggedTensor#from_nested_row_splits)The factory function  may be used to construct a RaggedTensor with multiple ragged dimensions directly, by providing a list of row_splits tensors:


```
 RaggedTensor.from_nested_row_splits(
flat_values=[3, 1, 4, 1, 5, 9, 2, 6],
nested_row_splits=([0, 3, 3, 5], [0, 4, 4, 7, 8, 8])).to_list()
[[[3, 1, 4, 1], [], [5, 9, 2]], [], [[6], []]]
```
### Uniform Inner Dimensions

RaggedTensors with uniform inner dimensions can be defined by using a multidimensional Tensor for values.

```
 rt = RaggedTensor.from_row_splits(values=tf.ones([5, 3]),
..                                    row_splits=[0, 2, 5])
print rt.to_list()
[[[1, 1, 1], [1, 1, 1]],
 [[1, 1, 1], [1, 1, 1], [1, 1, 1]]]
 >>> print rt.shape
 (2, ?, 3)
```
### RaggedTensor Shape Restrictions

The shape of a RaggedTensor is currently restricted to have the following form:
- ``A`` ``s``i``n``g``l``e`` ``u``n``i``f``o``r``m`` ``d``i``m``e``n``s``i``o``n``
- ``F``o``l``l``o``w``e``d`` ``b``y`` ``o``n``e`` ``o``r`` ``m``o``r``e`` ``r``a``g``g``e``d`` ``d``i``m``e``n``s``i``o``n``s``
- ``F``o``l``l``o``w``e``d`` ``b``y`` ``z``e``r``o`` ``o``r`` ``m``o``r``e`` ``u``n``i``f``o``r``m`` ``d``i``m``e``n``s``i``o``n``s``.``

This restriction follows from the fact that each nested RaggedTensor replaces the uniform outermost dimension of its values with a uniform dimension followed by a ragged dimension.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L206-L279)


```
 __init__(
    values,
    row_splits,
    cached_row_lengths=None,
    cached_value_rowids=None,
    cached_nrows=None,
    internal=False
)
```

Creates a RaggedTensor with a specified partitioning for values.

This constructor is private -- please use one of the following ops to build RaggedTensors:
- `tf.RaggedTensor.from_row_lengths`
- `tf.RaggedTensor.from_value_rowids`
- `tf.RaggedTensor.from_row_splits`
- `tf.RaggedTensor.from_row_starts`
- `tf.RaggedTensor.from_row_limits`
- `tf.RaggedTensor.from_nested_row_splits`
- `tf.RaggedTensor.from_nested_row_lengths`
- `tf.RaggedTensor.from_nested_value_rowids`
#### Args:
- `values`:` `A` `pote`n`ti`a``l``l`y` `r`a`gged` `te`n``s`or` `of` ``a``n`y` `dtype` ``a``n`d` ``s`h`a`pe` `[`n``v``a``l``s``,`` ``.``.``.`]`.`
- `row_splits`:` `A` ``1`-D` `i`n`tege`r`` `te`n``s``o``r`` ``w`ith` ``s`h`a`pe` `[`n``r``o``w``s``+``1`]`.`
- `cached_row_lengths`:` `A` ``1`-D` `i`n`tege`r`` `te`n``s``o``r`` ``w`ith` ``s`h`a`pe` `[`n``r``o``w``s`]
- `cached_value_rowids`:` `A` ``1`-D` `i`n`tege`r`` `te`n``s``o``r`` ``w`ith` ``s`h`a`pe` `[`n``v``a``l``s`]`.`
- `cached_nrows`:` `A` ``1`-D` `i`n`tege`r`` ``s`c`a``l``a``r`` `te`n``s``o``r``.`
- `internal`:` `T`r`ue` `if` `the` `c`o``n``s`t`r`uct`o``r`` `i`s`` `bei`n`g` `c`a``l``l`ed` `by` ``o``n`e` ``o`f` `the` `f`a`ct`o``r`y` `meth`o`d`s``.`` `If` `f`a``l``s`e`,`` ``a``n`` `excepti`o``n`` ``w`i`l``l`` `be` ``r``a`i`s`ed`.`
#### Raises:
- `TypeError`: If a row partitioning tensor has an inappropriate dtype.
- `TypeError`: If exactly one row partitioning argument was not specified.
- `ValueError`: If a row partitioning tensor has an inappropriate shape.
- `ValueError`: If multiple partitioning arguments are specified.
- `ValueError`: If nrows is specified but value_rowids is not None.
## Properties
### dtype

The DType of values in this tensor.
### flat_values

The innermost values tensor for this ragged tensor.

Concretely, if rt.values is a Tensor, then rt.flat_values is rt.values; otherwise, rt.flat_values is rt.values.flat_values.

Conceptually, flat_values is the tensor formed by flattening the outermost dimension and all of the ragged dimensions into a single dimension.

rt.flat_values.shape = [nvals] + rt.shape[rt.ragged_rank + 1:] (where nvals is the number of items in the flattened dimensions).
#### Returns:

A Tensor.
#### Example:
### nested_row_splits

A tuple containing the row_splits for all ragged dimensions.

rt.nested_row_splits is a tuple containing the row_splits tensors for all ragged dimensions in rt, ordered from outermost to innermost. In particular, rt.nested_row_splits = (rt.row_splits,) + value_splits where:

```
 * `value_splits = ()` if `rt.values` is a `Tensor`.
* `value_splits = rt.values.nested_row_splits` otherwise.
```
#### Returns:

A tuple of 1-D integer Tensors.
#### Example:
### ragged_rank

The number of ragged dimensions in this ragged tensor.
#### Returns:

A Python int indicating the number of ragged dimensions in this ragged tensor. The outermost dimension is not considered ragged.
### row_splits

The row-split indices for this ragged tensor's values.

rt.row_splits specifies where the values for each row begin and end in rt.values. In particular, the values for row rt[i] are stored in the slice rt.values[rt.row_splits[i]:rt.row_splits[i+1]].
#### Returns:

A 1-D integer Tensor with shape [self.nrows+1]. The returned tensor is non-empty, and is sorted in ascending order. self.row_splits[0] is zero, and self.row_splits[-1] is equal to self.values.shape[0].
#### Example:
### shape

The statically known shape of this ragged tensor.
#### Returns:

A TensorShape containing the statically known shape of this ragged tensor. Ragged dimensions have a size of None.
#### Examples:

```
 ragged.constant([[0], [1, 2]]).shape
TensorShape([Dimension(2), Dimension(None)])

ragged.constant([[[0, 1]], [[1, 2], [3, 4]]], ragged_rank=1).shape
TensorShape([Dimension(2), Dimension(None), Dimension(2)
```
### values

The concatenated rows for this ragged tensor.

rt.values is a potentially ragged tensor formed by flattening the two outermost dimensions of rt into a single dimension.

rt.values.shape = [nvals] + rt.shape[2:] (where nvals is the number of items in the outer two dimensions of rt).

rt.ragged_rank = self.ragged_rank - 1
#### Returns:

A potentially ragged tensor.
#### Example:
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

Defined in generated file: python/ops/gen_math_ops.py

```
 __add__(
    x,
    y,
    name=None
)
```

Returns x + y element-wise.
[math.add](https://www.tensorflow.org/api_docs/python/tf/math/add)NOTE:  supports broadcasting. AddN does not. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `int16`, `int32`, `int64`, `complex64`, `complex128`, `string`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
### __and__

Defined in generated file: python/ops/gen_math_ops.py

```
 __and__(
    x,
    y,
    name=None
)
```

Returns the truth value of x AND y element-wise.
[math.logical_and](https://www.tensorflow.org/api_docs/python/tf/math/logical_and)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor` of type `bool`.
- `y`: A `Tensor` of t`y`pe `bool`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __bool__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_operators.py#L72-L74)


```
 __bool__(_)
```

Dummy method to prevent a RaggedTensor from being used as a Python bool.
### __div__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1069-L1092)


```
 __div__(
    x,
    y,
    name=None
)
```

Divides x / y elementwise (using Python 2 division operator semantics). (deprecated)

NOTE: Prefer using the Tensor division operator or tf.divide which obey Python 3 division operator semantics.

This function divides x and y, forcing Python 2 semantics. That is, if x and y are both integers then the result will be an integer. This is in contrast to Python 3, where division with / is always a float while division with // is always an integer.
#### Args:
- `x`: `Tensor` numerator of real numeric type.
- `y`: `Tensor` denominator of real numeric t`y`pe.
- `name`: A `name` for the operation (optional).
#### Returns:

x / y returns the quotient of x and y.
### __floordiv__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1152-L1180)


```
 __floordiv__(
    x,
    y,
    name=None
)
```

Divides x / y elementwise, rounding toward the most negative integer.
[tf.compat.v1.div(x,y)](https://www.tensorflow.org/api_docs/python/tf/RaggedTensor#__div__)The same as  for integers, but uses tf.floor() for floating point arguments so that the result is always an integer (though possibly an integer represented as floating point). This op is generated by x // y floor division in Python 3 and in Python 2.7 with from __future__ import division.


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
[math.greater_equal](https://www.tensorflow.org/api_docs/python/tf/math/greater_equal)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __getitem__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_getitem.py#L31-L104)


```
 __getitem__(key)
```

Returns the specified piece of this RaggedTensor.

Supports multidimensional indexing and slicing, with one restriction: indexing into a ragged inner dimension is not allowed. This case is problematic because the indicated value may exist in some rows but not others. In such cases, it's not obvious whether we should (1) report an IndexError; (2) use a default value; or (3) skip that value and return a tensor with fewer rows than we started with. Following the guiding principles of Python ("In the face of ambiguity, refuse the temptation to guess"), we simply disallow this operation.

Any dimensions added by array_ops.newaxis will be ragged if the following dimension is ragged.
#### Args:
- `self`: The RaggedTensor to slice.
- `key`: Indicates which piece of the Ragged`Tensor` to return, using standard Python semantics (e.g., negative values index from the end). `key` may have any of the following types:
`int` constant
Scalar `int`eger `Tensor`
`slice` containing `int`eger constants and/or scalar `int`eger `Tensor`s
`Ellipsis`
`tf.newaxis`
`tuple` containing any of the above (for multidimentional indexing)
- `int` constant
- Scalar `int`eger `Tensor`
- `slice` containing `int`eger constants and/or scalar `int`eger `Tensor`s
- `Ellipsis`
- `tf.newaxis`
- `tuple` containing any of the above (for multidimentional indexing)
#### Returns:

A Tensor or RaggedTensor object. Values that include at least one ragged dimension are returned as RaggedTensor. Values that include no ragged dimensions are returned as Tensor. See above for examples of expressions that return Tensors vs RaggedTensors.
#### Raises:
- `ValueError`: If `key` is out of bounds.
- `ValueError`: If `key` is not supported.
- `TypeError`: If the indices in `key` have an unsupported type.
#### Examples:

```
 # A 2-D ragged tensor with 1 ragged dimension.
rt = ragged.constant([['a', 'b', 'c'], ['d', 'e'], ['f'], ['g']])
rt[0].eval().tolist()       # First row (1-D `Tensor`)
['a', 'b', 'c']
rt[:3].eval().tolist()      # First three rows (2-D RaggedTensor)
[['a', 'b', 'c'], ['d', 'e'], '[f'], [g']]
rt[3, 0].eval().tolist()    # 1st element of 4th row (scalar)
'g'

# A 3-D ragged tensor with 2 ragged dimensions.
rt = ragged.constant([[[1, 2, 3], [4]],
[[5], [], [6]],
[[7]],
[[8, 9], [10]]])
rt[1].eval().tolist()       # Second row (2-D RaggedTensor)
[[5], [], [6]]
rt[3, 0].eval().tolist()    # First element of fourth row (1-D Tensor)
[8, 9]
rt[:, 1:3].eval().tolist()  # Items 1-3 of each row (3-D RaggedTensor)
[[[4]], [[], [6]], [], [[10]]]
rt[:, -1:].eval().tolist()  # Last item of each row (3-D RaggedTensor)
[[[4]], [[6]], [[7]], [[10]]]
```
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
[math.greater](https://www.tensorflow.org/api_docs/python/tf/math/greater)NOTE:  supports broadcasting. More about broadcasting here

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
[math.less_equal](https://www.tensorflow.org/api_docs/python/tf/math/less_equal)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
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
[math.less](https://www.tensorflow.org/api_docs/python/tf/math/less)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __mod__

Defined in generated file: python/ops/gen_math_ops.py

```
 __mod__(
    x,
    y,
    name=None
)
```

Returns element-wise remainder of division. When x < 0 xor y < 0 is

true, this follows Python semantics in that the result here is consistent with a flooring divide. E.g. floor(x / y) * y + mod(x, y) = x.
[math.floormod](https://www.tensorflow.org/api_docs/python/tf/math/floormod)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `int32`, `int64`, `bfloat16`, `half`, `float32`, `float64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
### __mul__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L328-L331)


```
 __mul__(
    x,
    y,
    name=None
)
```

Returns x * y element-wise.
[tf.multiply](https://www.tensorflow.org/api_docs/python/tf/math/multiply)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `uint16`, `int16`, `int32`, `int64`, `complex64`, `complex128`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_operators.py#L72-L74)


```
 __nonzero__(_)
```

Dummy method to prevent a RaggedTensor from being used as a Python bool.
### __or__

Defined in generated file: python/ops/gen_math_ops.py

```
 __or__(
    x,
    y,
    name=None
)
```

Returns the truth value of x OR y element-wise.
[math.logical_or](https://www.tensorflow.org/api_docs/python/tf/math/logical_or)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor` of type `bool`.
- `y`: A `Tensor` of t`y`pe `bool`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __pow__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L434-L459)


```
 __pow__(
    x,
    y,
    name=None
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

Defined in generated file: python/ops/gen_math_ops.py

```
 __radd__(
    x,
    y,
    name=None
)
```

Returns x + y element-wise.
[math.add](https://www.tensorflow.org/api_docs/python/tf/math/add)NOTE:  supports broadcasting. AddN does not. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `int16`, `int32`, `int64`, `complex64`, `complex128`, `string`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
### __rand__

Defined in generated file: python/ops/gen_math_ops.py

```
 __rand__(
    x,
    y,
    name=None
)
```

Returns the truth value of x AND y element-wise.
[math.logical_and](https://www.tensorflow.org/api_docs/python/tf/math/logical_and)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor` of type `bool`.
- `y`: A `Tensor` of t`y`pe `bool`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __rdiv__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1069-L1092)


```
 __rdiv__(
    x,
    y,
    name=None
)
```

Divides x / y elementwise (using Python 2 division operator semantics). (deprecated)

NOTE: Prefer using the Tensor division operator or tf.divide which obey Python 3 division operator semantics.

This function divides x and y, forcing Python 2 semantics. That is, if x and y are both integers then the result will be an integer. This is in contrast to Python 3, where division with / is always a float while division with // is always an integer.
#### Args:
- `x`: `Tensor` numerator of real numeric type.
- `y`: `Tensor` denominator of real numeric t`y`pe.
- `name`: A `name` for the operation (optional).
#### Returns:

x / y returns the quotient of x and y.
### __rfloordiv__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1152-L1180)


```
 __rfloordiv__(
    x,
    y,
    name=None
)
```

Divides x / y elementwise, rounding toward the most negative integer.
[tf.compat.v1.div(x,y)](https://www.tensorflow.org/api_docs/python/tf/RaggedTensor#__div__)The same as  for integers, but uses tf.floor() for floating point arguments so that the result is always an integer (though possibly an integer represented as floating point). This op is generated by x // y floor division in Python 3 and in Python 2.7 with from __future__ import division.


x and y must have the same type, and the result will have the same type as well.
#### Args:
- `x`: `Tensor` numerator of real numeric type.
- `y`: `Tensor` denominator of real numeric t`y`pe.
- `name`: A `name` for the operation (optional).
#### Returns:

x / y rounded down.
#### Raises:
- `TypeError`: If the inputs are complex.
### __rmod__

Defined in generated file: python/ops/gen_math_ops.py

```
 __rmod__(
    x,
    y,
    name=None
)
```

Returns element-wise remainder of division. When x < 0 xor y < 0 is

true, this follows Python semantics in that the result here is consistent with a flooring divide. E.g. floor(x / y) * y + mod(x, y) = x.
[math.floormod](https://www.tensorflow.org/api_docs/python/tf/math/floormod)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `int32`, `int64`, `bfloat16`, `half`, `float32`, `float64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
### __rmul__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L328-L331)


```
 __rmul__(
    x,
    y,
    name=None
)
```

Returns x * y element-wise.
[tf.multiply](https://www.tensorflow.org/api_docs/python/tf/math/multiply)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `uint16`, `int16`, `int32`, `int64`, `complex64`, `complex128`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
### __ror__

Defined in generated file: python/ops/gen_math_ops.py

```
 __ror__(
    x,
    y,
    name=None
)
```

Returns the truth value of x OR y element-wise.
[math.logical_or](https://www.tensorflow.org/api_docs/python/tf/math/logical_or)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor` of type `bool`.
- `y`: A `Tensor` of t`y`pe `bool`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
### __rpow__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L434-L459)


```
 __rpow__(
    x,
    y,
    name=None
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L349-L352)


```
 __rsub__(
    x,
    y,
    name=None
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1036-L1066)


```
 __rtruediv__(
    x,
    y,
    name=None
)
```

Divides x / y elementwise (using Python 3 division operator semantics).

NOTE: Prefer using the Tensor operator or tf.divide which obey Python division operator semantics.

This function forces Python 3 division operator semantics where all integer arguments are cast to floating types first. This op is generated by normal x / y division in Python 3 and in Python 2.7 with from __future__ import division. If you want integer division that rounds down, use x // y or tf.math.floordiv.

x and y must have the same numeric type. If the inputs are floating point, the output will have the same type. If the inputs are integral, the inputs are cast to float32 for int8 and int16 and float64 for int32 and int64 (matching the behavior of Numpy).
#### Args:
- `x`: `Tensor` numerator of numeric type.
- `y`: `Tensor` denominator of numeric t`y`pe.
- `name`: A `name` for the operation (optional).
#### Returns:

x / y evaluated in floating point.
#### Raises:
- `TypeError`: If `x` and `y` have different dt`y`pes.
### __rxor__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1234-L1265)


```
 __rxor__(
    x,
    y,
    name='LogicalXor'
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L349-L352)


```
 __sub__(
    x,
    y,
    name=None
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1036-L1066)


```
 __truediv__(
    x,
    y,
    name=None
)
```

Divides x / y elementwise (using Python 3 division operator semantics).

NOTE: Prefer using the Tensor operator or tf.divide which obey Python division operator semantics.

This function forces Python 3 division operator semantics where all integer arguments are cast to floating types first. This op is generated by normal x / y division in Python 3 and in Python 2.7 with from __future__ import division. If you want integer division that rounds down, use x // y or tf.math.floordiv.

x and y must have the same numeric type. If the inputs are floating point, the output will have the same type. If the inputs are integral, the inputs are cast to float32 for int8 and int16 and float64 for int32 and int64 (matching the behavior of Numpy).
#### Args:
- `x`: `Tensor` numerator of numeric type.
- `y`: `Tensor` denominator of numeric t`y`pe.
- `name`: A `name` for the operation (optional).
#### Returns:

x / y evaluated in floating point.
#### Raises:
- `TypeError`: If `x` and `y` have different dt`y`pes.
### __xor__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1234-L1265)


```
 __xor__(
    x,
    y,
    name='LogicalXor'
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
### bounding_shape
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1169-L1219)


```
 bounding_shape(
    axis=None,
    name=None,
    out_type=None
)
```

Returns the tight bounding box shape for this RaggedTensor.
#### Args:
- `axis`: An integer scalar or vector indicating which axes to return the bounding box for. If not specified, then the full bounding box is returned.
- `name`: A `name` prefix for the returned tensor (optional).
- `out_type`: `dtype` for the returned tensor. Defaults to `self.row_splits.dtype`.
#### Returns:

An integer Tensor (dtype=self.row_splits.dtype). If axis is not specified, then output is a vector with output.shape=[self.shape.ndims]. If axis is a scalar, then the output is a scalar. If axis is a vector, then output is a vector, where output[i] is the bounding size for dimension axis[i].
#### Example:
### consumers
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1867-L1868)


```
 consumers()
```
### from_nested_row_lengths
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L718-L754)


```
 @classmethod
from_nested_row_lengths(
    cls,
    flat_values,
    nested_row_lengths,
    name=None,
    validate=True
)
```

Creates a RaggedTensor from a nested list of row_lengths tensors.
#### Equivalent to:

```
 result = flat_values
for row_lengths in reversed(nested_row_lengths):
  result = from_row_lengths(result, row_lengths)
```
#### Args:
- `flat_values`: A potentially ragged tensor.
- `nested_row_lengths`: A l`i`st of 1-D `i`nteger tensors. The `i`th tensor `i`s used as the `row_lengths` for the `i`th ragged d`i`mens`i`on.
- `name`: A `name` pref`i`x for the RaggedTensor (opt`i`onal).
- `validate`: If true, then use assert`i`ons to check that the arguments form a val`i`d `RaggedTensor`.
#### Returns:

A RaggedTensor (or flat_values if nested_row_lengths is empty).
### from_nested_row_splits
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L680-L716)


```
 @classmethod
from_nested_row_splits(
    cls,
    flat_values,
    nested_row_splits,
    name=None,
    validate=True
)
```

Creates a RaggedTensor from a nested list of row_splits tensors.
#### Equivalent to:

```
 result = flat_values
for row_splits in reversed(nested_row_splits):
  result = from_row_splits(result, row_splits)
```
#### Args:
- `flat_values`: A potentially ragged tensor.
- `nested_row_splits`: A l`i`st of 1-D `i`nteger tensors. The `i`th tensor `i`s used as the `row_splits` for the `i`th ragged d`i`mens`i`on.
- `name`: A `name` pref`i`x for the RaggedTensor (opt`i`onal).
- `validate`: If true, then use assert`i`ons to check that the arguments form a val`i`d `RaggedTensor`.
#### Returns:

A RaggedTensor (or flat_values if nested_row_splits is empty).
### from_nested_value_rowids
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L624-L678)


```
 @classmethod
from_nested_value_rowids(
    cls,
    flat_values,
    nested_value_rowids,
    nested_nrows=None,
    name=None,
    validate=True
)
```

Creates a RaggedTensor from a nested list of value_rowids tensors.
#### Equivalent to:

```
 result = flat_values
for (rowids, nrows) in reversed(zip(nested_value_rowids, nested_nrows)):
  result = from_value_rowids(result, rowids, nrows)
```
#### Args:
- `flat_values`: A potentially ragged tensor.
- `nested_value_rowids`: A l`i`st of 1-D `i`nteger tensors. The `i`th tensor `i`s used as the `value_rowids` for the `i`th ragged d`i`mens`i`on.
- `nested_nrows`: A l`i`st of `i`nteger scalars. The `i`th scalar `i`s used as the `nrows` for the `i`th ragged d`i`mens`i`on.
- `name`: A `name` pref`i`x for the RaggedTensor (opt`i`onal).
- `validate`: If true, then use assert`i`ons to check that the arguments form a val`i`d `RaggedTensor`.
#### Returns:

A RaggedTensor (or flat_values if nested_value_rowids is empty).
#### Raises:
- `ValueError`: If len(nested_values_rowids) != len(nested_nrows).
### from_row_lengths
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L465-L522)


```
 @classmethod
from_row_lengths(
    cls,
    values,
    row_lengths,
    name=None,
    validate=True
)
```

Creates a RaggedTensor with rows partitioned by row_lengths.

The returned RaggedTensor corresponds with the python list defined by:

```
 result = [[values.pop(0) for i in range(length)]
          for length in row_lengths]
```
#### Args:
- `values`:` `A` `pote`n`ti`a``l``l`y` `r`a`gged` `te`n``s`or` `with` ``s`h`a`pe` `[`n``v``a``l``s``,`` ``.``.``.`]`.`
- `row_lengths`:` `A` `1-D` `i`n`tege`r`` `te`n``s``o``r`` ``w`ith` ``s`h`a`pe` `[`n``r``o``w``s`]`.`` `Mu`s`t` `be` ``n``o``n``n`eg`a`ti`v`e`.`` ``s`um(`row_lengths`)` `mu`s`t` `be` ``n``v``a``l``s``.`
- `n``a`me:` `A` ``n``a`me` `p`r`efix` `f`o``r`` `the` `R`a`ggedTe`n``s``o``r`` `(`o`pti`o``n``a``l`)`.`
- `v``a``l`id`a`te:` `If` `t`r`ue`,`` `the`n`` `u`s`e` ``a``s``s`e`r`ti`o``n``s`` `t`o`` `check` `th`a`t` `the` ``a``r`gume`n`t`s`` `f`o``r`m` ``a`` ``v``a``l`id` ``RaggedTensor``.`
#### Returns:

A RaggedTensor. result.rank = values.rank + 1. result.ragged_rank = values.ragged_rank + 1.
#### Example:
### from_row_limits
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L574-L622)


```
 @classmethod
from_row_limits(
    cls,
    values,
    row_limits,
    name=None,
    validate=True
)
```

Creates a RaggedTensor with rows partitioned by row_limits.

Equivalent to: from_row_splits(values, concat([0, row_limits])).
#### Args:
- `values`:` `A` `pote`n`ti`a``l``l`y` `r`a`gged` `te`n``s`or` `with` ``s`h`a`pe` `[`n``v``a``l``s``,`` ``.``.``.`]`.`
- `row_limits`:` `A` `1-D` `i`n`tege`r`` `te`n``s``o``r`` ``w`ith` ``s`h`a`pe` `[`n``r``o``w``s`]`.`` `Mu`s`t` `be` ``s``o``r`ted` `i`n`` ``a``s`ce`n`di`n`g` ``o``r`de`r``.`` `If` ``n``r``o``w``s`>0`,`` `the`n`` ``row_limits`[-1]` `mu`s`t` `be` ``n``v``a``l``s``.`
- `n``a`me:` `A` ``n``a`me` `p`r`efix` `f`o``r`` `the` `R`a`ggedTe`n``s``o``r`` `(`o`pti`o``n``a``l`)`.`
- `v``a``l`id`a`te:` `If` `t`r`ue`,`` `the`n`` `u`s`e` ``a``s``s`e`r`ti`o``n``s`` `t`o`` `check` `th`a`t` `the` ``a``r`gume`n`t`s`` `f`o``r`m` ``a`` ``v``a``l`id` ``RaggedTensor``.`
#### Returns:

A RaggedTensor. result.rank = values.rank + 1. result.ragged_rank = values.ragged_rank + 1.
#### Example:
### from_row_splits
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L403-L463)


```
 @classmethod
from_row_splits(
    cls,
    values,
    row_splits,
    name=None,
    validate=True
)
```

Creates a RaggedTensor with rows partitioned by row_splits.

The returned RaggedTensor corresponds with the python list defined by:

```
 result = [values[row_splits[i]:row_splits[i + 1]]
          for i in range(len(row_splits) - 1)]
```
#### Args:
- `values`:` `A` `pote`n`ti`a``l``l`y` `r`a`gged` `te`n``s`or` `with` ``s`h`a`pe` `[`n``v``a``l``s``,`` ``.``.``.`]`.`
- `row_splits`:` `A` ``1`-D` `i`n`tege`r`` `te`n``s``o``r`` ``w`ith` ``s`h`a`pe` `[`n``r``o``w``s``+``1`]`.`` `Mu`s`t` ``n``o`t` `be` `empty`,`` ``a``n`d` `mu`s`t` `be` ``s``o``r`ted` `i`n`` ``a``s`ce`n`di`n`g` ``o``r`de`r``.`` ``row_splits`[0]` `mu`s`t` `be` `ze`r``o`` ``a``n`d` ``row_splits`[-`1`]` `mu`s`t` `be` ``n``v``a``l``s``.`
- `n``a`me:` `A` ``n``a`me` `p`r`efix` `f`o``r`` `the` `R`a`ggedTe`n``s``o``r`` `(`o`pti`o``n``a``l`)`.`
- `v``a``l`id`a`te:` `If` `t`r`ue`,`` `the`n`` `u`s`e` ``a``s``s`e`r`ti`o``n``s`` `t`o`` `check` `th`a`t` `the` ``a``r`gume`n`t`s`` `f`o``r`m` ``a`` ``v``a``l`id` ``RaggedTensor``.`
#### Returns:

A RaggedTensor. result.rank = values.rank + 1. result.ragged_rank = values.ragged_rank + 1.
#### Raises:
- `ValueError`: If `row_splits` is an empty list.
#### Example:
### from_row_starts
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L524-L572)


```
 @classmethod
from_row_starts(
    cls,
    values,
    row_starts,
    name=None,
    validate=True
)
```

Creates a RaggedTensor with rows partitioned by row_starts.

Equivalent to: from_row_splits(values, concat([row_starts, nvals])).
#### Args:
- `values`:` `A` `pote`n`ti`a``l``l`y` `r`a`gged` `te`n``s`or` `with` ``s`h`a`pe` `[`n``v``a``l``s``,`` ``.``.``.`]`.`
- `row_starts`:` `A` `1-D` `i`n`tege`r`` `te`n``s``o``r`` ``w`ith` ``s`h`a`pe` `[`n``r``o``w``s`]`.`` `Mu`s`t` `be` ``n``o``n``n`eg`a`ti`v`e` ``a``n`d` ``s``o``r`ted` `i`n`` ``a``s`ce`n`di`n`g` ``o``r`de`r``.`` `If` ``n``r``o``w``s`>0`,`` `the`n`` ``row_starts`[0]` `mu`s`t` `be` `ze`r``o``.`
- `n``a`me:` `A` ``n``a`me` `p`r`efix` `f`o``r`` `the` `R`a`ggedTe`n``s``o``r`` `(`o`pti`o``n``a``l`)`.`
- `v``a``l`id`a`te:` `If` `t`r`ue`,`` `the`n`` `u`s`e` ``a``s``s`e`r`ti`o``n``s`` `t`o`` `check` `th`a`t` `the` ``a``r`gume`n`t`s`` `f`o``r`m` ``a`` ``v``a``l`id` ``RaggedTensor``.`
#### Returns:

A RaggedTensor. result.rank = values.rank + 1. result.ragged_rank = values.ragged_rank + 1.
#### Example:
### from_sparse
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1591-L1653)


```
 @classmethod
from_sparse(
    cls,
    st_input,
    name=None,
    row_splits_dtype=tf.dtypes.int64
)
```
[tf.SparseTensor](https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor)Converts a 2D  to a RaggedTensor.


Each row of the output RaggedTensor will contain the explicit values from the same row in st_input. st_input must be ragged-right. If not it is not ragged-right, then an error will be generated.
#### Example:

```
 st = SparseTensor(indices=[[0, 1], [0, 2], [0, 3], [1, 0], [3, 0]],
values=[1, 2, 3, 4, 5],
dense_shape=[4, 3])
rt.RaggedTensor.from_sparse(st).eval().tolist()
[[1, 2, 3], [4], [], [5]]
```

Currently, only two-dimensional SparseTensors are supported.
#### Args:
- `st_input`: The sparse tensor to convert. Must have rank 2.
- `name`: A `name` prefix for the returned tensors (optional).
- `row_splits_dtype`: `dtype` for the returned `RaggedTensor`'s `row_splits` tensor. One of `tf.int32` or `tf.int64`.
#### Returns:

A RaggedTensor with the same values as st_input. output.ragged_rank = rank(st_input) - 1. output.shape = [st_input.dense_shape[0], None].
#### Raises:
- `ValueError`: If the number of dimensions in `st_input` is not known statically, or is not two.
### from_tensor
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1320-L1503)


```
 @classmethod
from_tensor(
    cls,
    tensor,
    lengths=None,
    padding=None,
    ragged_rank=1,
    name=None,
    row_splits_dtype=tf.dtypes.int64
)
```
[tf.Tensor](https://www.tensorflow.org/api_docs/python/tf/Tensor)Converts a  into a RaggedTensor.


The set of absent/default values may be specified using a vector of lengths or a padding value (but not both). If lengths is specified, then the output tensor will satisfy output[row] = tensor[row][:lengths[row]]. If 'lengths' is a list of lists or tuple of lists, those lists will be used as nested row lengths. If padding is specified, then any row suffix consisting entirely of padding will be excluded from the returned RaggedTensor. If neither lengths nor padding is specified, then the returned RaggedTensor will have no absent/default values.
#### Examples:

```
 dt = tf.constant([[5, 7, 0], [0, 3, 0], [6, 0, 0]])
tf.RaggedTensor.from_tensor(dt)
<tf.RaggedTensor [[5, 7, 0], [0, 3, 0], [6, 0, 0]]>
tf.RaggedTensor.from_tensor(dt, lengths=[1, 0, 3])
<tf.RaggedTensor [[5], [], [6, 0, 0]]>

```
tf.RaggedTensor.from_tensor(dt, padding=0)
<tf.RaggedTensor [[5, 7], [0, 3], [6]]>
```

```
 dt = tf.constant([[[5, 0], [7, 0], [0, 0]],
                      [[0, 0], [3, 0], [0, 0]],
                      [[6, 0], [0, 0], [0, 0]]])
tf.RaggedTensor.from_tensor(dt, lengths=([2, 0, 3], [1, 1, 2, 0, 1]))
<tf.RaggedTensor [[[5], [7]], [], [[6, 0], [], [0]]]>
```

```
 #### Args:


* <b>`tensor`</b>: The `Tensor` to convert.  Must have rank `ragged_rank + 1` or
  higher.
* <b>`lengths`</b>: An optional set of row lengths, specified using a 1-D integer
  `Tensor` whose length is equal to `tensor.shape[0]` (the number of rows
  in `tensor`).  If specified, then `output[row]` will contain
  `tensor[row][:lengths[row]]`.  Negative lengths are treated as zero. You
  may optionally pass a list or tuple of lengths to this argument, which
  will be used as nested row lengths to construct a ragged tensor with
  multiple ragged dimensions.
* <b>`padding`</b>: An optional padding value.  If specified, then any row suffix
  consisting entirely of `padding` will be excluded from the returned
  RaggedTensor.  `padding` is a `Tensor` with the same dtype as `tensor`
  and with `shape=tensor.shape[ragged_rank + 1:]`.
* <b>`ragged_rank`</b>: Integer specifying the ragged rank for the returned
  `RaggedTensor`.  Must be greater than zero.
* <b>`name`</b>: A name prefix for the returned tensors (optional).
* <b>`row_splits_dtype`</b>: `dtype` for the returned `RaggedTensor`'s `row_splits`
  tensor.  One of <a href="../tf#int32"><code>tf.int32</code></a> or <a href="../tf#int64"><code>tf.int64</code></a>.


#### Returns:

A `RaggedTensor` with the specified `ragged_rank`.  The shape of the
returned ragged tensor is compatible with the shape of `tensor`.


#### Raises:


* <b>`ValueError`</b>: If both `lengths` and `padding` are specified.

<h3 id="from_value_rowids"><code>from_value_rowids</code></h3>

<a target="_blank" href="https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L285-L401">View source</a>

``` python
@classmethod
from_value_rowids(
    cls,
    values,
    value_rowids,
    nrows=None,
    name=None,
    validate=True
)
```

Creates a RaggedTensor with rows partitioned by value_rowids.

The returned RaggedTensor corresponds with the python list defined by:

```
 result = [[values[i] for i in range(len(values)) if value_rowids[i] == row]
          for row in range(nrows)]
```
#### Args:
- `values`:` `A` `pote`n`ti`a``l``l`y` `r`a`gged` `te`n``s`or` `with` ``s`h`a`pe` `[`n``v``a``l``s``,`` ``.``.``.`]`.`
- `v``a``l`ue_rowid`s`:` `A` `1-D` `i`n`teger` `te`n``s`or` `with` ``s`h`a`pe` `[`n``v``a``l``s`]`,`` `which` `corre`s`po`n`d`s`` `o`n`e-to-o`n`e` `with` ``values``,`` ``a``n`d` ``s`pecifie`s`` `e`a`ch` ``v``a``l`ue'`s`` `row` `i`n`dex`.`` `Mu`s`t` `be` ``n`o`n``n`eg`a`ti`v`e`,`` ``a``n`d` `mu`s`t` `be` ``s`orted` `i`n`` ``a``s`ce`n`di`n`g` `order`.`
- `n`row`s`:` `A`n`` `i`n`teger` ``s`c`a``l``a`r` ``s`pecifyi`n`g` `the` ``n`umber` `of` `row`s``.`` `Thi`s`` ``s`hou`l`d` `be` ``s`pecified` `if` `the` ``RaggedTensor`` `m`a`y` `co`n`t`a`i`n`i`n`g` `empty` `tr`a`i`n`i`n`g` `row`s``.`` `Mu`s`t` `be` `gre`a`ter` `th`a``n`` ``v``a``l`ue_rowid`s`[-1]` `(or` `zero` `if` ``v``a``l`ue_rowid`s`` `i`s`` `empty)`.`` `Def`a`u`l`t`s`` `to` ``v``a``l`ue_rowid`s`[-1]` `(or` `zero` `if` ``v``a``l`ue_rowid`s`` `i`s`` `empty)`.`
- `n``a`me:` `A` ``n``a`me` `prefix` `for` `the` ``RaggedTensor`` `(optio`n``a``l`)`.`
- `v``a``l`id`a`te:` `If` `true`,`` `the`n`` `u`s`e` ``a``s``s`ertio`n``s`` `to` `check` `th`a`t` `the` ``a`rgume`n`t`s`` `form` ``a`` ``v``a``l`id` ``RaggedTensor``.`
#### Returns:

A RaggedTensor. result.rank = values.rank + 1. result.ragged_rank = values.ragged_rank + 1.
#### Raises:
- `ValueError`: If `nrows` is incompatible with `value_rowids`.
#### Example:
### nested_row_lengths
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1148-L1167)


```
 nested_row_lengths(name=None)
```

Returns a tuple containing the row_lengths for all ragged dimensions.

rt.nested_row_lengths() is a tuple containing the row_lengths tensors for all ragged dimensions in rt, ordered from outermost to innermost.
#### Args:
- `name`: A `name` prefix for the returned tensors (optional).
#### Returns:

A tuple of 1-D integer Tensors. The length of the tuple is equal to self.ragged_rank.
### nested_value_rowids
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L987-L1023)


```
 nested_value_rowids(name=None)
```

Returns a tuple containing the value_rowids for all ragged dimensions.

rt.nested_value_rowids is a tuple containing the value_rowids tensors for all ragged dimensions in rt, ordered from outermost to innermost. In particular, rt.nested_value_rowids = (rt.value_rowids(),) + value_ids where:

```
 * `value_ids = ()` if `rt.values` is a `Tensor`.
* `value_ids = rt.values.nested_value_rowids` otherwise.
```
#### Args:
- `name`: A `name` prefix for the returned tensors (optional).
#### Returns:

A tuple of 1-D integer Tensors.
#### Example:
### nrows
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1025-L1052)


```
 nrows(
    out_type=None,
    name=None
)
```

Returns the number of rows in this ragged tensor.

I.e., the size of the outermost dimension of the tensor.
#### Args:
- `out_type`: `dtype` for the returned tensor. Defaults to `self.row_splits.dtype`.
- `name`: A `name` prefix for the returned tensor (optional).
#### Returns:

A scalar Tensor with dtype out_type.
#### Example:
### row_lengths
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1104-L1146)


```
 row_lengths(
    axis=1,
    name=None
)
```

Returns the lengths of the rows in this ragged tensor.

rt.row_lengths()[i] indicates the number of values in the ith row of rt.
#### Args:
- `axis`: An integer constant indicating the `axis` whose row lengths should be returned.
- `name`: A `name` prefix for the returned tensor (optional).
#### Returns:

A potentially ragged integer Tensor with shape self.shape[:axis].
#### Raises:
- `ValueError`: If `axis` is out of bounds.
#### Example:
### row_limits
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1079-L1102)


```
 row_limits(name=None)
```

Returns the limit indices for rows in this ragged tensor.

These indices specify where the values for each row end in self.values. rt.row_limits(self) is equal to rt.row_splits[:-1].
#### Args:
- `name`: A `name` prefix for the returned tensor (optional).
#### Returns:

A 1-D integer Tensor with shape [nrows]. The returned tensor is nonnegative, and is sorted in ascending order.
#### Example:
### row_starts
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1054-L1077)


```
 row_starts(name=None)
```

Returns the start indices for rows in this ragged tensor.

These indices specify where the values for each row begin in self.values. rt.row_starts() is equal to rt.row_splits[:-1].
#### Args:
- `name`: A `name` prefix for the returned tensor (optional).
#### Returns:

A 1-D integer Tensor with shape [nrows]. The returned tensor is nonnegative, and is sorted in ascending order.
#### Example:
### to_list
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1794-L1807)


```
 to_list()
```

Returns a nested Python list with the values for this RaggedTensor.

Requires that rt was constructed in eager execution mode.
#### Returns:

A nested Python list.
### to_sparse
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1655-L1679)


```
 to_sparse(name=None)
```
[tf.SparseTensor](https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor)Converts this RaggedTensor into a .

#### Example:

```
 rt = ragged.constant([[1, 2, 3], [4], [], [5, 6]])
rt.to_sparse().eval()
SparseTensorValue(indices=[[0, 0], [0, 1], [0, 2], [1, 0], [3, 0], [3, 1]],
                  values=[1, 2, 3, 4, 5, 6],
                  dense_shape=[4, 3])
```
#### Args:
- `name`: A `name` prefix for the returned tensors (optional).
#### Returns:

A SparseTensor with the same values as self.
### to_tensor
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1505-L1589)


```
 to_tensor(
    default_value=None,
    name=None
)
```
[tf.Tensor](https://www.tensorflow.org/api_docs/python/tf/Tensor)Converts this RaggedTensor into a .

#### Example:

```
 rt = ragged.constant([[9, 8, 7], [], [6, 5], [4]])
print rt.to_tensor()
[[9 8 7]
 [0 0 0]
 [6 5 0]
 [4 0 0]]
```
#### Args:
- `default_value`: Value to set for indices not specified in `self`. Defaults to zero. `default_value` must be broadcastable to `self`.shape[`self`.ragged_rank + 1:].
- `name`: A `name` prefix for the returned tensors (optional).
#### Returns:

A Tensor with shape ragged.bounding_shape(self) and the values specified by the non-empty values in self. Empty values are assigned default_value.
### value_rowids
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L957-L985)


```
 value_rowids(name=None)
```

Returns the row indices for the values in this ragged tensor.

rt.value_rowids() corresponds one-to-one with the outermost dimension of rt.values, and specifies the row containing each value. In particular, the row rt[row] consists of the values rt.values[j] where rt.value_rowids()[j] == row.
#### Args:
- `name`: A `name` prefix for the returned tensor (optional).
#### Returns:

A 1-D integer Tensor with shape self.values.shape[:1]. The returned tensor is nonnegative, and is sorted in ascending order.
#### Example:
### with_flat_values
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1258-L1277)


```
 with_flat_values(new_values)
```

Returns a copy of self with flat_values replaced by new_value.

Preserves cached row-partitioning tensors such as self.cached_nrows and self.cached_value_rowids if they have values.
#### Args:
- `new_values`: Potentially ragged tensor that should replace `self.flat_values`. Must have `rank > 0`, and must have the same number of rows as `self.flat_values`.
#### Returns:

A RaggedTensor. result.rank = self.ragged_rank + new_values.rank. result.ragged_rank = self.ragged_rank + new_values.ragged_rank.
### with_row_splits_dtype
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1279-L1314)


```
 with_row_splits_dtype(dtype)
```

Returns a copy of this RaggedTensor with the given row_splits dtype.

For RaggedTensors with multiple ragged dimensions, the row_splits for all nested RaggedTensor objects are cast to the given dtype.
#### Args:
- `dtype`: The `dtype` for `row_splits`. One of `tf.int32` or `tf.int64`.
#### Returns:

A copy of this RaggedTensor, with the row_splits cast to the given type.
### with_values
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1225-L1256)


```
 with_values(new_values)
```

Returns a copy of self with values replaced by new_value.

Preserves cached row-partitioning tensors such as self.cached_nrows and self.cached_value_rowids if they have values.
#### Args:
- `new_values`: Potentially ragged tensor to use as the `values` for the returned `RaggedTensor`. Must have `rank > 0`, and must have the same number of rows as `self.values`.
#### Returns:

A RaggedTensor. result.rank = 1 + new_values.rank. result.ragged_rank = 1 + new_values.ragged_rank
