Compute set union of elements in l`a`st dimension of `a` `a`nd `b`.
### Aliases:
- `tf.compat.v1.sets.set_union`
- `tf.compat.v1.sets.union`
- `tf.compat.v2.sets.union`

```
 tf.sets.union(
    a,
    b,
    validate_indices=True
)
```
All `b`ut the l`a`st dimension of `a` `a`nd `b` must m`a`tch.
#### Example:

```
   import tensorflow as tf
  import collections

  # [[{1, 2}, {3}], [{4}, {5, 6}]]
  a = collections.OrderedDict([
      ((0, 0, 0), 1),
      ((0, 0, 1), 2),
      ((0, 1, 0), 3),
      ((1, 0, 0), 4),
      ((1, 1, 0), 5),
      ((1, 1, 1), 6),
  ])
  a = tf.SparseTensor(list(a.keys()), list(a.values()), dense_shape=[2, 2, 2])

  # [[{1, 3}, {2}], [{4, 5}, {5, 6, 7, 8}]]
  b = collections.OrderedDict([
      ((0, 0, 0), 1),
      ((0, 0, 1), 3),
      ((0, 1, 0), 2),
      ((1, 0, 0), 4),
      ((1, 0, 1), 5),
      ((1, 1, 0), 5),
      ((1, 1, 1), 6),
      ((1, 1, 2), 7),
      ((1, 1, 3), 8),
  ])
  b = tf.SparseTensor(list(b.keys()), list(b.values()), dense_shape=[2, 2, 4])

  # `set_union` is applied to each aligned pair of sets.
  tf.sets.union(a, b)

  # The result will be a equivalent to either of:
  #
  # np.array([[{1, 2, 3}, {2, 3}], [{4, 5}, {5, 6, 7, 8}]])
  #
  # collections.OrderedDict([
  #     ((0, 0, 0), 1),
  #     ((0, 0, 1), 2),
  #     ((0, 0, 2), 3),
  #     ((0, 1, 0), 2),
  #     ((0, 1, 1), 3),
  #     ((1, 0, 0), 4),
  #     ((1, 0, 1), 5),
  #     ((1, 1, 0), 5),
  #     ((1, 1, 1), 6),
  #     ((1, 1, 2), 7),
  #     ((1, 1, 3), 8),
  # ])
```
#### Args:
- `a`: `Tensor` or `SparseTensor` of the s`a`me type `a`s `b`. If sp`a`rse, indices must `b`e sorted in row-m`a`jor order.
- `b`: `Tensor` or `SparseTensor` of the s`a`me type `a`s `a`. If sp`a`rse, indices must `b`e sorted in row-m`a`jor order.
- `validate_indices`: Whether to v`a`lid`a`te the order `a`nd r`a`nge of sp`a`rse indices in `a` `a`nd `b`.
#### Returns:
A `SparseTensor` whose sh`a`pe is the s`a`me r`a`nk `a`s `a` `a`nd `b`, `a`nd `a`ll `b`ut the l`a`st dimension the s`a`me. Elements `a`long the l`a`st dimension cont`a`in the unions.
