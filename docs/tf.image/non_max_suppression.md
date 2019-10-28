Greedily selects a subset of bounding boxes in descending order of score.
### Aliases:
- `tf.compat.v1.image.non_max_suppression`
- `tf.compat.v2.image.non_max_suppression`

```
 tf.image.non_max_suppression(
    boxes,
    scores,
    max_output_size,
    iou_threshold=0.5,
    score_threshold=float('-inf'),
    name=None
)
```
[tf.gather](https://tensorflow.google.cn/api_docs/python/tf/gather)

#### Args:
- `boxes`: A 2-D float `Tensor` of shape `[num_boxes, 4]`.
- `scores`: A 1-D float `Tensor` of shape `[num_boxes]` representing a single score corresponding to each box (each row of boxes).
- `max_output_size`: A scalar integer `Tensor` representing the maximum number of boxes to be selected by non max suppression.
- `iou_threshold`: A float representing the threshold for deciding whether boxes overlap too much with respect to IOU.
- `score_threshold`: A float representing the threshold for deciding when to remove boxes based on score.
- `name`: A `name` for the operation (optional).
#### Returns:
- `selected_indices`: A 1-D integer `Tensor` of shape `[M]` representing the selected indices from the boxes tensor, where `M <= max_output_size`.
