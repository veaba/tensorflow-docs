## Class RaggedTensor
Represents a ragged tensor.
### Aliases:
- Class `tf.compat.v1.RaggedTensor`
- Class `tf.compat.v2.RaggedTensor`
### Used in the guide:
- ``R``a``g``g``e``d`` ``t``e``n``s``o``r``s``
### Used in the tutorials:
- ``U``n``i``c``o``d``e`` ``s``t``r``i``n``g``s``
A `RaggedTensor` is a tensor with one or more ragged dimensions, which are dimensions whose slices may have different lengths. For example, the inner (column) dimension of `rt=[[3, 1, 4, 1], [], [5, 9, 2], [6], []]` is ragged, since the column slices (`rt[0, :]`, ..., `rt[4, :]`) have different lengths. Dimensions whose slices all have the same length are called uniform dimensions. The outermost dimension of a `RaggedTensor` is always uniform, since it consists of a single slice (and so there is no possibility for differing slice lengths).
The total number of dimensions in a `RaggedTensor` is called its rank, and the number of ragged dimensions in a `RaggedTensor` is called its ragged-rank. A `RaggedTensor`'s ragged-rank is fixed at graph creation time: it can't depend on the runtime values of `Tensor`s, and can't vary dynamically for different session runs.
### Potentially Ragged Tensors
Many ops support both `Tensor`s and `RaggedTensor`s. The term "potentially ragged tensor" may be used to refer to a tensor that might be either a `Tensor` or a `RaggedTensor`. The ragged-rank of a `Tensor` is zero.
### Documenting RaggedTensor Shapes
When documenting the shape of a `RaggedTensor`, ragged dimensions can be indicated by enclosing them in parentheses. For example, the shape of a 3-D `RaggedTensor` that stores the fixed-size word embedding for each word in a sentence, for each sentence in a batch, could be written as [num_sentences, ``, embedding_size]. The parentheses around `` indicate that dimension is ragged, and that the length of each element list in that dimension may vary for each item.
### Component Tensors
Internally, a `RaggedTensor` consists of a concatenated list of values that are partitioned into variable-length rows. In particular, each `RaggedTensor` consists of:
- A `values` tensor, which concatenates the variable-length rows into a flattened list. For example, the `values` tensor for `[[3, 1, 4, 1], [], [5, 9, 2], [6], []]` is `[3, 1, 4, 1, 5, 9, 2, 6]`.
- A `row_splits` vector, which indicates how those flattened values are divided into rows. In particular, the values for row `rt[i]` are stored in the slice `rt.values[rt.row_splits[i]:rt.row_splits[i+1]]`.
#### Example:

```
 print(tf.RaggedTensor.from_row_splits(
values=[3, 1, 4, 1, 5, 9, 2, 6],
row_splits=[0, 4, 4, 7, 8, 8]))
<tf.RaggedTensor [[3, 1, 4, 1], [], [5, 9, 2], [6], []]>
```
### Alternative Row-Partitioning Schemes
In addition to `row_splits`, ragged tensors provide support for four other row-partitioning schemes:
- `row_lengths`: a vector with shape `[nrows]`, which specifies the length of each row.
- `value_rowids` and `nrows`: `value_rowids` is a vector with shape `[nvals]`, corresponding one-to-one with `values`, which specifies each value's row index. In particular, the row `rt[row]` consists of the `values` `rt.values[j]` where `value_rowids`[j]==row. `nrows` is an integer scalar that specifies the number of rows in the `RaggedTensor`. (`nrows` is used to indicate trailing empty rows.)
- `row_starts`: a vector with shape `[nrows]`, which specifies the start offset of each row. Equivalent to `row_splits[:-1]`.
- `row_limits`: a vector with shape `[nrows]`, which specifies the stop offset of each row. Equivalent to `row_splits[1:]`.
Example: The following ragged tensors are equivalent, and all represent the nested list `[[3, 1, 4, 1], [], [5, 9, 2], [6], []]`.

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
`RaggedTensor`s with multiple ragged dimensions can be defined by using a nested `RaggedTensor` for the `values` tensor. Each nested `RaggedTensor` adds a single ragged dimension.

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
The factory function `RaggedTensor.from_nested_row_splits` may be used to construct a `RaggedTensor` with multiple ragged dimensions directly, by providing a list of `row_splits` tensors:

```
 RaggedTensor.from_nested_row_splits(
flat_values=[3, 1, 4, 1, 5, 9, 2, 6],
nested_row_splits=([0, 3, 3, 5], [0, 4, 4, 7, 8, 8])).to_list()
[[[3, 1, 4, 1], [], [5, 9, 2]], [], [[6], []]]
```
### Uniform Inner Dimensions
`RaggedTensor`s with uniform inner dimensions can be defined by using a multidimensional `Tensor` for `values`.

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
This restriction follows from the fact that each nested `RaggedTensor` replaces the uniform outermost dimension of its `values` with a uniform dimension followed by a ragged dimension.
## __init__
View source

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
Creates a `RaggedTensor` with a specified partitioning for `values`.
This constructor is private -- please use one of the following ops to build `RaggedTensor`s:
- `tf.RaggedTensor.from_row_lengths`
- `tf.RaggedTensor.from_value_rowids`
- `tf.RaggedTensor.from_row_splits`
- `tf.RaggedTensor.from_row_starts`
- `tf.RaggedTensor.from_row_limits`
- `tf.RaggedTensor.from_nested_row_splits`
- `tf.RaggedTensor.from_nested_row_lengths`
- `tf.RaggedTensor.from_nested_value_rowids`
#### Args:
- `values`: A potentially ragged tensor of any dtype and shape `[nvals, ...]`.
- `row_splits`: A 1-D integer tensor with shape `[nrows+1]`.
- `cached_row_lengths`: A 1-D integer tensor with shape `[nrows]`
- `cached_value_rowids`: A 1-D integer tensor with shape `[nvals]`.
- `cached_nrows`: A 1-D integer scalar tensor.
- `internal`: True if the constructor is being called by one of the factory methods. If false, an exception will be raised.
#### Raises:
- `TypeError`: If a row partitioning tensor has an inappropriate dtype.
- `TypeError`: If exactly one row partitioning argument was not specified.
- `ValueError`: If a row partitioning tensor has an inappropriate shape.
- `ValueError`: If multiple partitioning arguments are specified.
- `ValueError`: If nrows is specified but value_rowids is not None.
## Properties
### dtype
The `DType` of values in this tensor.
### flat_values
The innermost `values` tensor for this ragged tensor.
Concretely, if `rt.values` is a `Tensor`, then `rt.flat_values` is `rt.values`; otherwise, `rt.flat_values` is `rt.values`.flat_values.
Conceptually, `flat_values` is the tensor formed by flattening the outermost dimension and all of the ragged dimensions into a single dimension.
`rt.flat_values.shape = [nvals] + rt.shape[rt.ragged_rank + 1:]` (where `nvals` is the number of items in the flattened dimensions).
#### Returns:
A `Tensor`.
#### Example:
### nested_row_splits
A tuple containing the row_splits for all ragged dimensions.
`rt.nested_row_splits` is a tuple containing the `row_splits` tensors for all ragged dimensions in `rt`, ordered from outermost to innermost. In pa`rt`icular, `rt.nested_row_splits` = (`rt`.`row_splits`,) + value_splits where:

```
 * `value_splits = ()` if `rt.values` is a `Tensor`.
* `value_splits = rt.values.nested_row_splits` otherwise.
```
#### Returns:
A `tuple` of 1-D integer `Tensor`s.
#### Example:
### ragged_rank
The number of ragged dimensions in this ragged tensor.
#### Returns:
A Python `int` indicating the number of ragged dimensions in this ragged tensor. The outermost dimension is not considered ragged.
### row_splits
The row-split indices for this ragged tensor's `values`.
`rt.row_splits` specifies where the values for each row begin and end in `rt.values`. In particular, the values for row `rt[i]` are stored in the slice `rt.values`[`rt.row_splits`[i]:`rt.row_splits`[i+1]].
#### Returns:
A 1-D integer `Tensor` with shape `[self.nrows+1]`. The returned tensor is non-empty, and is sorted in ascending order. `self.row_splits[0]` is zero, and `self.row_splits[-1]` is equal to `self.values.shape[0]`.
#### Example:
### shape
The statically known shape of this ragged tensor.
#### Returns:
A `TensorShape` containing the statically known shape of this ragged tensor. Ragged dimensions have a size of `None`.
#### Examples:

```
 ragged.constant([[0], [1, 2]]).shape
TensorShape([Dimension(2), Dimension(None)])

ragged.constant([[[0, 1]], [[1, 2], [3, 4]]], ragged_rank=1).shape
TensorShape([Dimension(2), Dimension(None), Dimension(2)
```
### values
The concatenated rows for this ragged tensor.
`rt.values` is a potentially ragged tensor formed by flattening the two outermost dimensions of `rt` into a single dimension.
`rt.values.shape = [nvals] + rt.shape[2:]` (where `nvals` is the number of items in the outer two dimensions of `rt`).
`rt.ragged_rank = self.ragged_rank - 1`
#### Returns:
A potentially ragged tensor.
#### Example:
## Methods
### __abs__
View source

```
 __abs__(
    x,
    name=None
)
```
Computes the absolute value of a tensor.
Given a tensor of integer or floating-point values, this operation returns a tensor of the same type, where each element contains the absolute value of the corresponding element in the input.
Given a tensor `x` of comple`x` numbers, this operation returns a tensor of type `float32` or `float64` that is the absolute value of each element in `x`. All elements in `x` must be comple`x` numbers of the form
. The absolute value is computed as
. For e`x`ample:

```
 x = tf.constant([[-2.25 + 4.75j], [-3.25 + 5.75j]])
tf.abs(x)  # [5.25594902, 6.60492229]
```
#### Args:
- `x`: A `Tensor` or `SparseTensor` of type `float16`, `float32`, `float64`, `int32`, `int64`, `complex64` or `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor` or `SparseTensor` the same size, type, and sparsity as `x` with absolute values. Note, for `complex64` or `complex128` input, the returned `Tensor` will be of type `float32` or `float64`, respectively.
