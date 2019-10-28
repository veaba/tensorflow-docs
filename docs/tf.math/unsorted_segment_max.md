Defined in generated file: `python/ops/gen_math_ops.py`
Computes the maximum along segments of a tensor.
### Aliases:
- `tf.compat.v1.math.unsorted_segment_max`
- `tf.compat.v1.unsorted_segment_max`
- `tf.compat.v2.math.unsorted_segment_max`

```
 tf.math.unsorted_segment_max(
    data,
    segment_ids,
    num_segments,
    name=None
)
```
Read the section on segmentation for an explanation of segments.
This operator is similar to the unsorted segment sum operator found (here). Instead of computing the sum over segments, it computes the maximum such that:
where max is over tuples `j...` such that `segment_ids[j...] == i`.
