贪婪地按分数降序选择边界框的子集。

**别名** : [ `tf.compat.v1.image.non_max_suppression_overlaps` ](/api_docs/python/tf/image/non_max_suppression_overlaps), [ `tf.compat.v2.image.non_max_suppression_overlaps` ](/api_docs/python/tf/image/non_max_suppression_overlaps)

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

Prunes away boxes that have high overlap with previously selected boxes.N-by-n overlap values are supplied as square matrix.The output of this operation is a set of integers indexing into the inputcollection of bounding boxes representing the selected boxes.  The boundingbox coordinates corresponding to the selected indices can then be obtainedusing the [ `tf.gather` ](https://tensorflow.google.cn/api_docs/python/tf/gather) operation.  For example:

```
 selected_indices = tf.image.non_max_suppression_overlaps(
    overlaps, scores, max_output_size, iou_threshold)
selected_boxes = tf.gather(boxes, selected_indices)
 
```

#### 参数：
- **`overlaps`** : A 2-D float  `Tensor`  of shape  `[num_boxes, num_boxes]` .
- **`scores`** : A 1-D float  `Tensor`  of shape  `[num_boxes]`  representing a singlescore corresponding to each box (each row of boxes).
- **`max_output_size`** : A scalar integer  `Tensor`  representing the maximum numberof boxes to be selected by non max suppression.
- **`overlap_threshold`** : A float representing the threshold for deciding whetherboxes overlap too much with respect to the provided overlap values.
- **`score_threshold`** : A float representing the threshold for deciding when toremove boxes based on score.
- **`name`** : A name for the operation (optional).


#### 返回：
- **`selected_indices`** : A 1-D integer  `Tensor`  of shape  `[M]`  representing theselected indices from the overlaps tensor, where  `M <= max_output_size` .
