Greedily selects a subset of bounding boxes in descending order of score.

**Aliases** : [ `tf.compat.v1.image.non_max_suppression` ](/api_docs/python/tf/image/non_max_suppression), [ `tf.compat.v2.image.non_max_suppression` ](/api_docs/python/tf/image/non_max_suppression)

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

Prunes away boxes that have high intersection-over-union (IOU) overlapwith previously selected boxes.  Bounding boxes are supplied as `[y1, x1, y2, x2]` , where  `(y1, x1)`  and  `(y2, x2)`  are the coordinates of anydiagonal pair of box corners and the coordinates can be provided as normalized(i.e., lying in the interval  `[0, 1]` ) or absolute.  Note that this algorithmis agnostic to where the origin is in the coordinate system.  Note that thisalgorithm is invariant to orthogonal transformations and translationsof the coordinate system; thus translating or reflections of the coordinatesystem result in the same boxes being selected by the algorithm.The output of this operation is a set of integers indexing into the inputcollection of bounding boxes representing the selected boxes.  The boundingbox coordinates corresponding to the selected indices can then be obtainedusing the [ `tf.gather` ](https://tensorflow.google.cn/api_docs/python/tf/gather) operation.  For example:

```
 selected_indices = tf.image.non_max_suppression(
    boxes, scores, max_output_size, iou_threshold)
selected_boxes = tf.gather(boxes, selected_indices)
 
```

#### Args:
- **`boxes`** : A 2-D float  `Tensor`  of shape  `[num_boxes, 4]` .
- **`scores`** : A 1-D float  `Tensor`  of shape  `[num_boxes]`  representing a singlescore corresponding to each box (each row of boxes).
- **`max_output_size`** : A scalar integer  `Tensor`  representing the maximum numberof boxes to be selected by non max suppression.
- **`iou_threshold`** : A float representing the threshold for deciding whether boxesoverlap too much with respect to IOU.
- **`score_threshold`** : A float representing the threshold for deciding when toremove boxes based on score.
- **`name`** : A name for the operation (optional).


#### Returns:
- **`selected_indices`** : A 1-D integer  `Tensor`  of shape  `[M]`  representing theselected indices from the boxes tensor, where  `M <= max_output_size` .
