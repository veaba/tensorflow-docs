Greedily selects a subset of bounding boxes in descending order of score.
### Aliases:
- tf.compat.v1.image.non_max_suppression_with_scores
- tf.compat.v2.image.non_max_suppression_with_scores

```
 tf.image.non_max_suppression_with_scores(
    boxes,
    scores,
    max_output_size,
    iou_threshold=0.5,
    score_threshold=float('-inf'),
    soft_nms_sigma=0.0,
    name=None
)
```
[tf.gather](https://tensorflow.google.cn/api_docs/python/tf/gather)Prunes away boxes that have high intersection-over-union (IOU) overlap with previously selected boxes. Bounding boxes are supplied as [y1, x1, y2, x2], where (y1, x1) and (y2, x2) are the coordinates of any diagonal pair of box corners and the coordinates can be provided as normalized (i.e., lying in the interval [0, 1]) or absolute. Note that this algorithm is agnostic to where the origin is in the coordinate system. Note that this algorithm is invariant to orthogonal transformations and translations of the coordinate system; thus translating or reflections of the coordinate system result in the same boxes being selected by the algorithm. The output of this operation is a set of integers indexing into the input collection of bounding boxes representing the selected boxes. The bounding box coordinates corresponding to the selected indices can then be obtained using the  operation. For example:

[tf.image.non_max_suppression](https://tensorflow.google.cn/api_docs/python/tf/image/non_max_suppression)This function generalizes the  op by also supporting a Soft-NMS (with Gaussian weighting) mode (c.f. Bodla et al, https://arxiv.org/abs/1704.04503) where boxes reduce the score of other overlapping boxes instead of directly causing them to be pruned. Consequently, in contrast to , _v2 returns the new scores of each input box in the second output, selected_scores.

[tf.image.non_max_suppression](https://tensorflow.google.cn/api_docs/python/tf/image/non_max_suppression)To enable this Soft-NMS mode, set the soft_nms_sigma parameter to be larger than 0. When soft_nms_sigma equals 0, the behavior of _v2 is identical to that of  (except for the extra output) both in function and in running time.

#### Args:
- boxes: A 2-D float Tensor of shape [num_boxes, 4].
- scores: A 1-D float Tensor of shape [num_boxes] representing a single score corresponding to each box (each row of boxes).
- max_output_size: A scalar integer Tensor representing the maximum number of boxes to be selected by non max suppression.
- iou_threshold: A float representing the threshold for deciding whether boxes overlap too much with respect to IOU.
- score_threshold: A float representing the threshold for deciding when to remove boxes based on score.
- soft_nms_sigma: A scalar float representing the Soft NMS sigma parameter; See Bodla et al, https://arxiv.org/abs/1704.04503). When soft_nms_sigma=0.0 (which is default), we fall back to standard (hard) NMS.
- name: A name for the operation (optional).
#### Returns:
- selected_indices: A 1-D integer Tensor of shape [M] representing the selected indices from the boxes tensor, where M <= max_output_size.
- selected_scores: A 1-D float tensor of shape [M] representing the corresponding scores for each selected box, where M <= max_output_size. Scores only differ from corresponding input scores when using Soft NMS (i.e. when soft_nms_sigma>0)
