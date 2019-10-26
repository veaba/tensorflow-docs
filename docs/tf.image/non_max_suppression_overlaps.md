Greedily selects a subset of bounding boxes in descending order of score.
### Aliases:
- tf.compat.v1.image.non_max_suppression_overlaps
- tf.compat.v2.image.non_max_suppression_overlaps

```
 tf.image.non_max_suppression_overlaps(
    overlaps,
    scores,
    max_output_size,
    overlap_threshold=0.5,
    score_threshold=float('-inf'),
    name=None
)
```
[tf.gather](https://tensorflow.google.cn/api_docs/python/tf/gather)Prunes away boxes that have high overlap with previously selected boxes. N-by-n overlap values are supplied as square matrix. The output of this operation is a set of integers indexing into the input collection of bounding boxes representing the selected boxes. The bounding box coordinates corresponding to the selected indices can then be obtained using the  operation. For example:

#### Args:
- overlaps: A 2-D float Tensor of shape [num_boxes, num_boxes].
- scores: A 1-D float Tensor of shape [num_boxes] representing a single score corresponding to each box (each row of boxes).
- max_output_size: A scalar integer Tensor representing the maximum number of boxes to be selected by non max suppression.
- overlap_threshold: A float representing the threshold for deciding whether boxes overlap too much with respect to the provided overlap values.
- score_threshold: A float representing the threshold for deciding when to remove boxes based on score.
- name: A name for the operation (optional).
#### Returns:
- selected_indices: A 1-D integer Tensor of shape [M] representing the selected indices from the overlaps tensor, where M <= max_output_size.
