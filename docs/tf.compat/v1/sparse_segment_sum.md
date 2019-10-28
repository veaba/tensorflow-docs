Computes the sum along sparse segments of a tensor.
### Aliases:
- `tf.compat.v1.sparse.segment_sum`

```
 tf.compat.v1.sparse_segment_sum(
    data,
    indices,
    segment_ids,
    name=None,
    num_segments=None
)
```
Read the section on segmentation for an explanation of segments.
Like `tf.math.segment_sum`, but `segment_ids` can have rank less than `data`'s first dimension, selecting a subset of dimension 0, specified by `indices`. `segment_ids` is allowed to have missing ids, in which case the output will be zeros at those `indices`. In those cases `num_segments` is used to determine the size of the output.
#### For example:

```
 c = tf.constant([[1,2,3,4], [-1,-2,-3,-4], [5,6,7,8]])

# Select two rows, one segment.
tf.sparse.segment_sum(c, tf.constant([0, 1]), tf.constant([0, 0]))
# => [[0 0 0 0]]

# Select two rows, two segment.
tf.sparse.segment_sum(c, tf.constant([0, 1]), tf.constant([0, 1]))
# => [[ 1  2  3  4]
#     [-1 -2 -3 -4]]

# With missing segment ids.
tf.sparse.segment_sum(c, tf.constant([0, 1]), tf.constant([0, 2]),
                      num_segments=4)
# => [[ 1  2  3  4]
#     [ 0  0  0  0]
#     [-1 -2 -3 -4]
#     [ 0  0  0  0]]

# Select all rows, two segments.
tf.sparse.segment_sum(c, tf.constant([0, 1, 2]), tf.constant([0, 0, 1]))
# => [[0 0 0 0]
#     [5 6 7 8]]

# Which is equivalent to:
tf.math.segment_sum(c, tf.constant([0, 0, 1]))
```
#### Args:
- `data`: A `Tensor` with `data` that will be assembled in the output.
- `indices`: A 1-D `Tensor` with `indices` into `data`. Has same rank as `segment_ids`.
- `segment_ids`: A 1-D `Tensor` with indices into the output `Tensor`. Values should be sorted and can be repeated.
- `name`: A `name` for the operation (optional).
- `num_segments`: An optional int32 scalar. Indicates the size of the output `Tensor`.
#### Returns:
A `tensor` of the shape as data, except for dimension 0 which has size `k`, the number of segments specified via `num_segments` or inferred for the last element in `segments_ids`.
