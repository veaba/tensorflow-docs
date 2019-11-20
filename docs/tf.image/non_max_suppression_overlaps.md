[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/non_max_suppression_overlaps)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L2806-L2848)  
  
  
Greedily selects a subset of bounding boxes in descending order of score.

### Aliases:

  * [`tf.compat.v1.image.non_max_suppression_overlaps`](/api_docs/python/tf/image/non_max_suppression_overlaps)
  * [`tf.compat.v2.image.non_max_suppression_overlaps`](/api_docs/python/tf/image/non_max_suppression_overlaps)

    
    
    tf.image.non_max_suppression_overlaps(
        overlaps,
        scores,
        max_output_size,
        overlap_threshold=0.5,
        score_threshold=float('-inf'),
        name=None
    )
    

Prunes away boxes that have high overlap with previously selected boxes.
N-by-n overlap values are supplied as square matrix. The output of this
operation is a set of integers indexing into the input collection of bounding
boxes representing the selected boxes. The bounding box coordinates
corresponding to the selected indices can then be obtained using the
[`tf.gather`](https://tensorflow.google.cn/api_docs/python/tf/gather)
operation. For example:

>
>     selected_indices = tf.image.non_max_suppression_overlaps(
>         overlaps, scores, max_output_size, iou_threshold)
>     selected_boxes = tf.gather(boxes, selected_indices)
>  

#### Args:

  * **`overlaps`** : A 2-D float `Tensor` of shape `[num_boxes, num_boxes]`.
  * **`scores`** : A 1-D float `Tensor` of shape `[num_boxes]` representing a single score corresponding to each box (each row of boxes).
  * **`max_output_size`** : A scalar integer `Tensor` representing the maximum number of boxes to be selected by non max suppression.
  * **`overlap_threshold`** : A float representing the threshold for deciding whether boxes overlap too much with respect to the provided overlap values.
  * **`score_threshold`** : A float representing the threshold for deciding when to remove boxes based on score.
  * **`name`** : A name for the operation (optional).

#### Returns:

  * **`selected_indices`** : A 1-D integer `Tensor` of shape `[M]` representing the selected indices from the overlaps tensor, where `M <= max_output_size`.

