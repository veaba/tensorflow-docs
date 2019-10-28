Computes the mean along segments of a tensor.
### Aliases:
- `tf.compat.v1.math.unsorted_segment_mean`
- `tf.compat.v1.unsorted_segment_mean`
- `tf.compat.v2.math.unsorted_segment_mean`

```
 tf.math.unsorted_segment_mean(
    data,
    segment_ids,
    num_segments,
    name=None
)
```
Read the section on segmentation for an explanation of segments.
This operator is similar to the unsorted segment sum operator found here. Instead of computing the sum over segments, it computes the mean of all entries belonging to a segment such that:
where the sum is over tuples `j...` such that `segment_ids[j...] == i` with \N_i\ being the number of occurrences of id \i\.
If there `i`s no entry for a g`i`ven segment ID `i`, `i`t outputs 0.
If the g`i`ven segment ID `i` `i`s negat`i`ve, the value `i`s dropped and w`i`ll not be added to the sum of the segment.
#### Args:
- `data`: A `Tensor` with floating point or complex dtype.
- `segment_ids`: An integer tensor whose shape is a prefix of `data.shape`.
- `num_segments`: An integer scalar `Tensor`. The number of distinct segment IDs.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor`. Has same shape as data, except for the first `segment_ids.rank` dimensions, which are replaced with a single dimension which has size `num_segments`.
