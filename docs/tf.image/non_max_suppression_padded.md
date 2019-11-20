[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/non_max_suppression_padded)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L2742-L2803)  
  
  
Greedily selects a subset of bounding boxes in descending order of score.

### Aliases:

  * [`tf.compat.v1.image.non_max_suppression_padded`](/api_docs/python/tf/image/non_max_suppression_padded)
  * [`tf.compat.v2.image.non_max_suppression_padded`](/api_docs/python/tf/image/non_max_suppression_padded)

    
    
    tf.image.non_max_suppression_padded(
        boxes,
        scores,
        max_output_size,
        iou_threshold=0.5,
        score_threshold=float('-inf'),
        pad_to_max_output_size=False,
        name=None
    )
    

Performs algorithmically equivalent operation to tf.image.non_max_suppression,
with the addition of an optional parameter which zero-pads the output to be of
size `max_output_size`. The output of this operation is a tuple containing the
set of integers indexing into the input collection of bounding boxes
representing the selected boxes and the number of valid indices in the index
set. The bounding box coordinates corresponding to the selected indices can
then be obtained using the
[`tf.slice`](https://tensorflow.google.cn/api_docs/python/tf/slice) and
[`tf.gather`](https://tensorflow.google.cn/api_docs/python/tf/gather)
operations. For example:

>
>     selected_indices_padded, num_valid =
> tf.image.non_max_suppression_padded(
>         boxes, scores, max_output_size, iou_threshold,
>         score_threshold, pad_to_max_output_size=True)
>     selected_indices = tf.slice(
>         selected_indices_padded, tf.constant([0]), num_valid)
>     selected_boxes = tf.gather(boxes, selected_indices)
>  

#### Args:

  * **`boxes`** : A 2-D float `Tensor` of shape `[num_boxes, 4]`.
  * **`scores`** : A 1-D float `Tensor` of shape `[num_boxes]` representing a single score corresponding to each box (each row of boxes).
  * **`max_output_size`** : A scalar integer `Tensor` representing the maximum number of boxes to be selected by non max suppression.
  * **`iou_threshold`** : A float representing the threshold for deciding whether boxes overlap too much with respect to IOU.
  * **`score_threshold`** : A float representing the threshold for deciding when to remove boxes based on score.
  * **`pad_to_max_output_size`** : bool. If True, size of `selected_indices` output is padded to `max_output_size`.
  * **`name`** : A name for the operation (optional).

#### Returns:

  * **`selected_indices`** : A 1-D integer `Tensor` of shape `[M]` representing the selected indices from the boxes tensor, where `M <= max_output_size`.
  * **`valid_outputs`** : A scalar integer `Tensor` denoting how many elements in `selected_indices` are valid. Valid elements occur first, then padding.

