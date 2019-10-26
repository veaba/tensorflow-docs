Defined in generated file: python/ops/gen_math_ops.py
Computes the minimum along segments of a tensor.
### Aliases:
- tf.compat.v1.math.unsorted_segment_min
- tf.compat.v1.unsorted_segment_min
- tf.compat.v2.math.unsorted_segment_min

```
 tf.math.unsorted_segment_min(
    data,
    segment_ids,
    num_segments,
    name=None
)
```
[the section on segmentation](https://tensorflow.org/api_docs/python/tf/math#Segmentation)Read  for an explanation of segments.

[(here)](https://tensorflow.google.cn/api_docs/api_docs/python/math_ops#UnsortedSegmentSum)This operator is similar to the unsorted segment sum operator found . Instead of computing the sum over segments, it computes the minimum such that:

where min is over tuples j... such that segment_ids[j...] == i.
If the minimum is empty for a given segment ID i, it outputs the largest possible value for the specific numeric type, output[i] = numeric_limits<T>::max().
#### For example:

```
 c = tf.constant([[1,2,3,4], [5,6,7,8], [4,3,2,1]])
tf.unsorted_segment_min(c, tf.constant([0, 1, 0]), num_segments=2)
# ==> [[ 1,  2, 2, 1],
#       [5,  6, 7, 8]]
```
If the given segment ID i is negative, then the corresponding value is dropped, and will not be included in the result.
#### Args:
- data: A Tensor. Must be one of the following types: float32, float64, int32, uint8, int16, int8, int64, bfloat16, uint16, half, uint32, uint64.
- segment_ids: A Tensor. Must be one of the following types: int32, int64. A tensor whose shape is a prefix of data.shape.
- num_segments: A Tensor. Must be one of the following types: int32, int64.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as data.
