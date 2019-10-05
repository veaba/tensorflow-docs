
Concatenates tensors along one dimension.
### Aliases:
- `tf.compat.v1.concat`
- `tf.compat.v2.concat`

```
 tf.concat(
    values,
    axis,
    name='concat'
)
```
### Used in the guide:
- ``R``a``g``g``e``d`` ``t``e``n``s``o``r``s``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``N``e``u``r``a``l`` ``m``a``c``h``i``n``e`` ``t``r``a``n``s``l``a``t``i``o``n`` ``w``i``t``h`` ``a``t``t``e``n``t``i``o``n``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
- ``U``n``i``c``o``d``e`` ``s``t``r``i``n``g``s``

Concatenates the list of tensors values along dimension axis. If values[i].shape = [D0, D1, ... Daxis(i), ...Dn], the concatenated result has shape

```
 [D0, D1, ... Raxis, ...Dn]
```

where

```
 Raxis = sum(Daxis(i))
```

That is, the data from the input tensors is joined along the axis dimension.

The number of dimensions of the input tensors must match, and all dimensions except axis must be equal.
#### For example:

```
 t1 = [[1, 2, 3], [4, 5, 6]]
t2 = [[7, 8, 9], [10, 11, 12]]
tf.concat([t1, t2], 0)  # [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
tf.concat([t1, t2], 1)  # [[1, 2, 3, 7, 8, 9], [4, 5, 6, 10, 11, 12]]

# tensor t3 with shape [2, 3]
# tensor t4 with shape [2, 3]
tf.shape(tf.concat([t3, t4], 0))  # [4, 3]
tf.shape(tf.concat([t3, t4], 1))  # [2, 6]
```

As in Python, the axis could also be negative numbers. Negative axis are interpreted as counting from the end of the rank, i.e., axis + rank(values)-th dimension.
#### For example:

```
 t1 = [[[1, 2], [2, 3]], [[4, 4], [5, 3]]]
t2 = [[[7, 4], [8, 4]], [[2, 10], [15, 11]]]
tf.concat([t1, t2], -1)
```

would produce:

```
 [[[ 1,  2,  7,  4],
  [ 2,  3,  8,  4]],

 [[ 4,  4,  2, 10],
  [ 5,  3, 15, 11]]]
```

```
 tf.concat([tf.expand_dims(t, axis) for t in tensors], axis)
```

can be rewritten as

```
 tf.stack(tensors, axis=axis)
```
#### Args:
- `values`: A list of `Tensor` objects or a single `Tensor`.
#### Returns:

A Tensor resulting from concatenation of the input tensors.

Concatenates tensors along one dimension.
### Aliases:
- `tf.compat.v1.concat`
- `tf.compat.v2.concat`

```
 tf.concat(
    values,
    axis,
    name='concat'
)
```
### Used in the guide:
- ``R``a``g``g``e``d`` ``t``e``n``s``o``r``s``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``N``e``u``r``a``l`` ``m``a``c``h``i``n``e`` ``t``r``a``n``s``l``a``t``i``o``n`` ``w``i``t``h`` ``a``t``t``e``n``t``i``o``n``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
- ``U``n``i``c``o``d``e`` ``s``t``r``i``n``g``s``

Concatenates the list of tensors values along dimension axis. If values[i].shape = [D0, D1, ... Daxis(i), ...Dn], the concatenated result has shape

```
 [D0, D1, ... Raxis, ...Dn]
```

where

```
 Raxis = sum(Daxis(i))
```

That is, the data from the input tensors is joined along the axis dimension.

The number of dimensions of the input tensors must match, and all dimensions except axis must be equal.
#### For example:

```
 t1 = [[1, 2, 3], [4, 5, 6]]
t2 = [[7, 8, 9], [10, 11, 12]]
tf.concat([t1, t2], 0)  # [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
tf.concat([t1, t2], 1)  # [[1, 2, 3, 7, 8, 9], [4, 5, 6, 10, 11, 12]]

# tensor t3 with shape [2, 3]
# tensor t4 with shape [2, 3]
tf.shape(tf.concat([t3, t4], 0))  # [4, 3]
tf.shape(tf.concat([t3, t4], 1))  # [2, 6]
```

As in Python, the axis could also be negative numbers. Negative axis are interpreted as counting from the end of the rank, i.e., axis + rank(values)-th dimension.
#### For example:

```
 t1 = [[[1, 2], [2, 3]], [[4, 4], [5, 3]]]
t2 = [[[7, 4], [8, 4]], [[2, 10], [15, 11]]]
tf.concat([t1, t2], -1)
```

would produce:

```
 [[[ 1,  2,  7,  4],
  [ 2,  3,  8,  4]],

 [[ 4,  4,  2, 10],
  [ 5,  3, 15, 11]]]
```

```
 tf.concat([tf.expand_dims(t, axis) for t in tensors], axis)
```

can be rewritten as

```
 tf.stack(tensors, axis=axis)
```
#### Args:
- `values`: A list of `Tensor` objects or a single `Tensor`.
#### Returns:

A Tensor resulting from concatenation of the input tensors.
