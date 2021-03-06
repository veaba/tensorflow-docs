贪婪地按分数降序选择边界框的子集。

**别名** : [ `tf.compat.v1.image.combined_non_max_suppression` ](/api_docs/python/tf/image/combined_non_max_suppression), [ `tf.compat.v2.image.combined_non_max_suppression` ](/api_docs/python/tf/image/combined_non_max_suppression)

```
 tf.image.combined_non_max_suppression(
    boxes,
    scores,
    max_output_size_per_class,
    max_total_size,
    iou_threshold=0.5,
    score_threshold=float('-inf'),
    pad_per_class=False,
    clip_boxes=True,
    name=None
)
 
```

This operation performs non_max_suppression on the inputs per batch, acrossall classes.Prunes away boxes that have high intersection-over-union (IOU) overlapwith previously selected boxes.  Bounding boxes are supplied as[y1, x1, y2, x2], where (y1, x1) and (y2, x2) are the coordinates of anydiagonal pair of box corners and the coordinates can be provided as normalized(i.e., lying in the interval [0, 1]) or absolute.  Note that this algorithmis agnostic to where the origin is in the coordinate system. Also note thatthis algorithm is invariant to orthogonal transformations and translationsof the coordinate system; thus translating or reflections of the coordinatesystem result in the same boxes being selected by the algorithm.The output of this operation is the final boxes, scores and classes tensorreturned after performing non_max_suppression.

#### 参数：
- **`boxes`** : A 4-D float  `Tensor`  of shape  `[batch_size, num_boxes, q, 4]` . If  `q` is 1 then same boxes are used for all classes otherwise, if  `q`  is equalto number of classes, class-specific boxes are used.
- **`scores`** : A 3-D float  `Tensor`  of shape  `[batch_size, num_boxes, num_classes]` representing a single score corresponding to each box (each row of boxes).
- **`max_output_size_per_class`** : A scalar integer  `Tensor`  representing themaximum number of boxes to be selected by non max suppression per class
- **`max_total_size`** : A scalar representing maximum number of boxes retained overall classes.
- **`iou_threshold`** : A float representing the threshold for deciding whether boxesoverlap too much with respect to IOU.
- **`score_threshold`** : A float representing the threshold for deciding when toremove boxes based on score.
- **`pad_per_class`** : If false, the output nmsed boxes, scores and classes arepadded/clipped to  `max_total_size` . If true, the output nmsed boxes,scores and classes are padded to be of length `max_size_per_class` * `num_classes` , unless it exceeds  `max_total_size`  inwhich case it is clipped to  `max_total_size` . Defaults to false.
- **`clip_boxes`** : If true, the coordinates of output nmsed boxes will be clippedto [0, 1]. If false, output the box coordinates as it is. Defaults totrue.
- **`name`** : A name for the operation (optional).


#### 返回：
'nmsed_boxes': A [batch_size, max_detections, 4] float32 tensor  containing the non-max suppressed boxes.'nmsed_scores': A [batch_size, max_detections] float32 tensor containing  the scores for the boxes.'nmsed_classes': A [batch_size, max_detections] float32 tensor  containing the class for boxes.'valid_detections': A [batch_size] int32 tensor indicating the number of  valid detections per batch item. Only the top valid_detections[i] entries  in nms_boxes[i], nms_scores[i] and nms_class[i] are valid. The rest of the  entries are zero paddings.

