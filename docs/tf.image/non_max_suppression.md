[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/non_max_suppression) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L2604-L2653)  
  
  
Greedily selects a subset of bounding boxes in descending order of score.

### Aliases:

  * [`tf.compat.v1.image.non_max_suppression`](/api_docs/python/tf/image/non_max_suppression)
  * [`tf.compat.v2.image.non_max_suppression`](/api_docs/python/tf/image/non_max_suppression)

    
    
    tf.image.non_max_suppression(
        boxes,
        scores,
        max_output_size,
        iou_threshold=0.5,
        score_threshold=float('-inf'),
        name=None
    )
    

Prunes away boxes that have high intersection-over-union (IOU) overlap with
previously selected boxes. Bounding boxes are supplied as `[y1, x1, y2, x2]`,
where `(y1, x1)` and `(y2, x2)` are the coordinates of any diagonal pair of
box corners and the coordinates can be provided as normalized (i.e., lying in
the interval `[0, 1]`) or absolute. Note that this algorithm is agnostic to
where the origin is in the coordinate system. Note that this algorithm is
invariant to orthogonal transformations and translations of the coordinate
system; thus translating or reflections of the coordinate system result in the
same boxes being selected by the algorithm. The output of this operation is a
set of integers indexing into the input collection of bounding boxes
representing the selected boxes. The bounding box coordinates corresponding to
the selected indices can then be obtained using the
[`tf.gather`](https://tensorflow.google.cn/api_docs/python/tf/gather)
operation. For example:

>
>     selected_indices = tf.image.non_max_suppression(
>         boxes, scores, max_output_size, iou_threshold)
>     selected_boxes = tf.gather(boxes, selected_indices)
>  

#### Args:

  * **`boxes`** : A 2-D float `Tensor` of shape `[num_boxes, 4]`.
  * **`scores`** : A 1-D float `Tensor` of shape `[num_boxes]` representing a single score corresponding to each box (each row of boxes).
  * **`max_output_size`** : A scalar integer `Tensor` representing the maximum number of boxes to be selected by non max suppression.
  * **`iou_threshold`** : A float representing the threshold for deciding whether boxes overlap too much with respect to IOU.
  * **`score_threshold`** : A float representing the threshold for deciding when to remove boxes based on score.
  * **`name`** : A name for the operation (optional).

#### Returns:

  * **`selected_indices`** : A 1-D integer `Tensor` of shape `[M]` representing the selected indices from the boxes tensor, where `M <= max_output_size`.

