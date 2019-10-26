Concatenates tensors along one dimension.
### Aliases:
- tf.compat.v1.concat
- tf.compat.v2.concat

```
 tf.concat(
    values,
    axis,
    name='concat'
)
```
### Used in the guide:
- Ragged tensors
### Used in the tutorials:
- Better performance with tf.function
- Unicode strings
- Image captioning with visual attention
- Neural machine translation with attention
- Transformer model for language understanding
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
- values: A list of Tensor objects or a single Tensor.
- axis: 0-D int32 Tensor. Dimension along which to concatenate. Must be in the range [-rank`(values)`, rank`(values)`). As in Python, indexing for axis is 0-based. Positive axis in the rage of [0, rank`(values)`) refers to axis-th dimension. And negative axis refers to axis + rank`(values)`-th dimension.
- name: A name for the operation (optional).
#### Returns:
A Tensor resulting from concatenation of the input tensors.
