## Class SparseTensor

Represents a sparse tensor.
### Aliases:
- Class `tf.SparseTensor`
- Class `tf.compat.v1.SparseTensor`
- Class `tf.compat.v1.sparse.SparseTensor`
- Class `tf.compat.v2.SparseTensor`
- Class `tf.compat.v2.sparse.SparseTensor`
### Used in the guide:
- ``R``a``g``g``e``d`` ``t``e``n``s``o``r``s``
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``

TensorFlow represents a sparse tensor as three separate dense tensors: indices, values, and dense_shape. In Python, the three tensors are collected into a SparseTensor class for ease of use. If you have separate indices, values, and dense_shape tensors, wrap them in a SparseTensor object before passing to the ops below.

Concretely, the sparse tensor SparseTensor(indices, values, dense_shape) comprises the following components, where N and ndims are the number of values and number of dimensions in the SparseTensor, respectively:
- `indices`:` `A` `2-D` ``i``n`t64` `te`n``s`or` `of` ``d`e`n``s`e_`s`hape` `[`N``,`` ``n``d``i``m``s`]`,`` `wh`i`ch` ``s`pec`i`f`i`e`s`` `the` ``indices`` `of` `the` `ele`m`e`n`t`s`` ``i``n`` `the` ``s`par`s`e` `te`n``s`or` `that` `co`n`ta`i``n`` ``n`o`n`zero` `value`s`` `(ele`m`e`n`t`s`` `are` `zero-`i``n``d`exe`d`).` `For` `exa`m`ple`,`` ``indices`=[[1`,`3]`,`` `[2`,`4]]` ``s`pec`i`f`i`e`s`` `that` `the` `ele`m`e`n`t`s`` `w`i`th` ``i``n``d`exe`s`` `of` `[1`,`3]` `a`n``d`` `[2`,`4]` `have` ``n`o`n`zero` `value`s`.
- `values`:` `A` `1-D` `te`n``s`or` `of` `a`n`y` `type` `a`n``d`` ``d`e`n``s`e_`s`hape` `[`N`]`,`` `wh`i`ch` ``s`uppl`i`e`s`` `the` ``values`` `for` `each` `ele`m`e`n`t` ``i``n`` ``indices`.` `For` `exa`m`ple`,`` `g`i`ve`n`` ``indices`=[[1`,`3]`,`` `[2`,`4]]`,`` `the` `para`m`eter` ``values`=[18`,`` `3.6]` ``s`pec`i`f`i`e`s`` `that` `ele`m`e`n`t` `[1`,`3]` `of` `the` ``s`par`s`e` `te`n``s`or` `ha`s`` `a` `value` `of` `18`,`` `a`n``d`` `ele`m`e`n`t` `[2`,`4]` `of` `the` `te`n``s`or` `ha`s`` `a` `value` `of` `3.6.
- `d`e`n``s`e_`s`hape:` `A` `1-D` ``i``n`t64` `te`n``s`or` `of` ``d`e`n``s`e_`s`hape` `[`n``d``i``m``s`]`,`` `wh`i`ch` ``s`pec`i`f`i`e`s`` `the` ``d`e`n``s`e_`s`hape` `of` `the` ``s`par`s`e` `te`n``s`or.` `Take`s`` `a` `l`i``s`t` ``i``n``d``i`cat`i``n`g` `the` ``n`u`m`ber` `of` `ele`m`e`n`t`s`` ``i``n`` `each` ``d``i``m`e`n``s``i`o`n`.` `For` `exa`m`ple`,`` ``d`e`n``s`e_`s`hape=[3`,`6]` ``s`pec`i`f`i`e`s`` `a` `two-`d``i``m`e`n``s``i`o`n`al` `3x6` `te`n``s`or`,`` ``d`e`n``s`e_`s`hape=[2`,`3`,`4]` ``s`pec`i`f`i`e`s`` `a` `three-`d``i``m`e`n``s``i`o`n`al` `2x3x4` `te`n``s`or`,`` `a`n``d`` ``d`e`n``s`e_`s`hape=[9]` ``s`pec`i`f`i`e`s`` `a` `o`n`e-`d``i``m`e`n``s``i`o`n`al` `te`n``s`or` `w`i`th` `9` `ele`m`e`n`t`s`.

The corresponding dense tensor satisfies:

```
 dense.shape = dense_shape
dense[tuple(indices[i])] = values[i]
```
[tf.sparse.reorder(st)](https://www.tensorflow.org/api_docs/python/tf/sparse/reorder)By convention, indices should be sorted in row-major order (or equivalently lexicographic order on the tuples indices[i]). This is not enforced when SparseTensor objects are constructed, but most ops assume correct ordering. If the ordering of sparse tensor st is wrong, a fixed version can be obtained by calling .


Example: The sparse tensor

```
 SparseTensor(indices=[[0, 0], [1, 2]], values=[1, 2], dense_shape=[3, 4])
```

represents the dense tensor

```
 [[1, 0, 0, 0]
 [0, 0, 2, 0]
 [0, 0, 0, 0]]
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/sparse_tensor.py#L115-L143)


```
 __init__(
    indices,
    values,
    dense_shape
)
```

Creates a SparseTensor.
#### Args:
- `indices`:` `A` `2-D` ``i``n`t64` `te`n``s`or` `of` ``s`hape` `[`N``,`` ``n``d``i``m``s`].
- `values`:` `A` `1-D` `te`n``s`or` `of` `a`n`y` `type` `a`n``d`` ``s`hape` `[`N`].
- `d`e`n``s`e_`s`hape:` `A` `1-D` ``i``n`t64` `te`n``s`or` `of` ``s`hape` `[`n``d``i``m``s`].
## Properties
### dense_shape

A 1-D Tensor of int64 representing the shape of the dense tensor.
### dtype

The DType of elements in this tensor.
### graph

The Graph that contains the index, value, and dense_shape tensors.
### indices

The indices of non-zero values in the represented dense tensor.
#### Returns:

A 2-D Tensor of int64 with dense_shape [N, ndims], where N is the number of non-zero values in the tensor, and ndims is the rank.
### op

The Operation that produces values as an output.
### shape

Get the TensorShape representing the shape of the dense tensor.
#### Returns:

A TensorShape object.
### values

The non-zero values in the represented dense tensor.
#### Returns:

A 1-D Tensor of any data type.
## Methods
### __div__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L914-L920)


```
 __div__(
    sp_x,
    y
)
```

Component-wise divides a SparseTensor by a dense Tensor.

Limitation: this Op only broadcasts the dense side to the sparse side, but not the other direction.
#### Args:
- `sp_indices`: A `Tensor` of type `int64`. 2-D. `N x R` matrix with the indices of non-empty values in a Sparse`Tensor`, possibly not in canonical ordering.
- `sp_values`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `complex64`, `int64`, `qint8`, `quint8`, `qint32`, `bfloat16`, `uint16`, `complex128`, `half`, `uint32`, `uint64`. 1-D. `N` non-empty values corresponding to `sp_indices`.
- `sp_shape`: A `Tensor` of type `int64`. 1-D. Shape of the input Sparse`Tensor`.
- `dense`: A `Tensor`. Must have the same type as `sp_values`. `R`-D. The `dense` `Tensor` operand.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as sp_values.
### __mul__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L914-L920)


```
 __mul__(
    sp_x,
    y
)
```

Component-wise multiplies a SparseTensor by a dense Tensor.

The output locations corresponding to the implicitly zero elements in the sparse tensor will be zero (i.e., will not take up storage space), regardless of the contents of the dense tensor (even if it's +/-INF and that INF*0 == NaN).

Limitation: this Op only broadcasts the dense side to the sparse side, but not the other direction.
#### Args:
- `sp_indices`: A `Tensor` of type `int64`. 2-D. `N x R` matrix with the indices of non-empty values in a Sparse`Tensor`, possibly not in canonical ordering.
- `sp_values`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `complex64`, `int64`, `qint8`, `quint8`, `qint32`, `bfloat16`, `uint16`, `complex128`, `half`, `uint32`, `uint64`. 1-D. `N` non-empty values corresponding to `sp_indices`.
- `sp_shape`: A `Tensor` of type `int64`. 1-D. Shape of the input Sparse`Tensor`.
- `dense`: A `Tensor`. Must have the same type as `sp_values`. `R`-D. The `dense` `Tensor` operand.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as sp_values.
### __truediv__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L914-L920)


```
 __truediv__(
    sp_x,
    y
)
```

Internal helper function for 'sp_t / dense_t'.
### consumers
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/sparse_tensor.py#L250-L251)


```
 consumers()
```
### eval
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/sparse_tensor.py#L205-L228)


```
 eval(
    feed_dict=None,
    session=None
)
```

Evaluates this sparse tensor in a Session.

Calling this method will execute all preceding operations that produce the inputs needed for the operation that produces this tensor.
[SparseTensor.eval()](https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor#eval)N.B. Before invoking , its graph must have been launched in a session, and either a default session must be available, or session must be specified explicitly.

#### Args:
- `feed_dict`: A dictionary that maps `Tensor` objects to feed values. See `tf.Session.run` for a description of the valid feed values.
- `session`: (Optional.) The `Session` to be used to evaluate this sparse tensor. If none, the default `session` will be used.
#### Returns:

A SparseTensorValue object.
### from_value
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/sparse_tensor.py#L105-L113)


```
 @classmethod
from_value(
    cls,
    sparse_tensor_value
)
```
### get_shape
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/sparse_tensor.py#L145-L151)


```
 get_shape()
```

Get the TensorShape representing the shape of the dense tensor.
#### Returns:

A TensorShape object.
