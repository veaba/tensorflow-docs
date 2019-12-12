Greedily selects a subset of bounding boxes in descending order of score.

**Aliases** : [ `tf.compat.v1.image.non_max_suppression_with_scores` ](/api_docs/python/tf/image/non_max_suppression_with_scores), [ `tf.compat.v2.image.non_max_suppression_with_scores` ](/api_docs/python/tf/image/non_max_suppression_with_scores)

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

Prunes away boxes that have high intersection-over-union (IOU) overlapwith previously selected boxes.  Bounding boxes are supplied as `[y1, x1, y2, x2]` , where  `(y1, x1)`  and  `(y2, x2)`  are the coordinates of anydiagonal pair of box corners and the coordinates can be provided as normalized(i.e., lying in the interval  `[0, 1]` ) or absolute.  Note that this algorithmis agnostic to where the origin is in the coordinate system.  Note that thisalgorithm is invariant to orthogonal transformations and translationsof the coordinate system; thus translating or reflections of the coordinatesystem result in the same boxes being selected by the algorithm.The output of this operation is a set of integers indexing into the inputcollection of bounding boxes representing the selected boxes.  The boundingbox coordinates corresponding to the selected indices can then be obtainedusing the [ `tf.gather` ](https://tensorflow.google.cn/api_docs/python/tf/gather) operation.  For example:

```
 selected_indices, selected_scores = tf.image.non_max_suppression_v2(
    boxes, scores, max_output_size, iou_threshold=1.0, score_threshold=0.1,
    soft_nms_sigma=0.5)
selected_boxes = tf.gather(boxes, selected_indices)
 
```

This function generalizes the [ `tf.image.non_max_suppression` ](https://tensorflow.google.cn/api_docs/python/tf/image/non_max_suppression) op by alsosupporting a Soft-NMS (with Gaussian weighting) mode (c.f.Bodla et al, https://arxiv.org/abs/1704.04503) where boxes reduce the scoreof other overlapping boxes instead of directly causing them to be pruned.Consequently, in contrast to [ `tf.image.non_max_suppression` ](https://tensorflow.google.cn/api_docs/python/tf/image/non_max_suppression), `tf.image.non_max_suppression_v2`  returns the new scores of each input box inthe second output,  `selected_scores` .

To enable this Soft-NMS mode, set the  `soft_nms_sigma`  parameter to belarger than 0.  When  `soft_nms_sigma`  equals 0, the behavior of `tf.image.non_max_suppression_v2`  is identical to that of[ `tf.image.non_max_suppression` ](https://tensorflow.google.cn/api_docs/python/tf/image/non_max_suppression) (except for the extra output) both in functionand in running time.

#### Args:
- **`boxes`** : A 2-D float  `Tensor`  of shape  `[num_boxes, 4]` .
- **`scores`** : A 1-D float  `Tensor`  of shape  `[num_boxes]`  representing a singlescore corresponding to each box (each row of boxes).
- **`max_output_size`** : A scalar integer  `Tensor`  representing the maximum numberof boxes to be selected by non max suppression.
- **`iou_threshold`** : A float representing the threshold for deciding whether boxesoverlap too much with respect to IOU.
- **`score_threshold`** : A float representing the threshold for deciding when toremove boxes based on score.
- **`soft_nms_sigma`** : A scalar float representing the Soft NMS sigma parameter;See Bodla et al, https://arxiv.org/abs/1704.04503).  When `soft_nms_sigma=0.0`  (which is default), we fall back to standard (hard)NMS.
- **`name`** : A name for the operation (optional).


#### Returns:
- **`selected_indices`** : A 1-D integer  `Tensor`  of shape  `[M]`  representing theselected indices from the boxes tensor, where  `M <= max_output_size` .
- **`selected_scores`** : A 1-D float tensor of shape  `[M]`  representing thecorresponding scores for each selected box, where  `M <= max_output_size` .Scores only differ from corresponding input scores when using Soft NMS(i.e. when  `soft_nms_sigma>0` )
