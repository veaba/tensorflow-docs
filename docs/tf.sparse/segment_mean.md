Computes the mean along sparse segments of a tensor.
### Aliases:
- tf.compat.v2.sparse.segment_mean

```
 tf.sparse.segment_mean(
    data,
    indices,
    segment_ids,
    num_segments=None,
    name=None
)
```
[the section on segmentation](https://tensorflow.org/api_docs/python/tf/math#Segmentation)Read  for an explanation of segments.

[tf.math.segment_mean](https://tensorflow.google.cn/api_docs/python/tf/math/segment_mean)Like , but segment_ids can have rank less than data's first dimension, selecting a subset of dimension 0, specified by indices. segment_ids is allowed to have missing ids, in which case the output will be zeros at those indices. In those cases num_segments is used to determine the size of the output.

#### Args:
- data: A Tensor with data that will be assembled in the output.
- indices: A 1-D Tensor with indices into data. Has same rank as segment_ids.
- segment_ids: A 1-D Tensor with indices into the output Tensor. Values should be sorted and can be repeated.
- num_segments: An optional int32 scalar. Indicates the size of the output Tensor.
- name: A name for the operation (optional).
#### Returns:
A tensor of the shape as data, except for dimension 0 which has size k, the number of segments specified via num_segments or inferred for the last element in segments_ids.
