贪婪地按分数降序选择边界框的子集。

**别名** : [ `tf.compat.v1.image.non_max_suppression_padded` ](/api_docs/python/tf/image/non_max_suppression_padded), [ `tf.compat.v2.image.non_max_suppression_padded` ](/api_docs/python/tf/image/non_max_suppression_padded)

```
 tf.image.non_max_suppression_padded(
    boxes,
    scores,
    max_output_size,
    iou_threshold=0.5,
    score_threshold=float('-inf'),
    pad_to_max_output_size=False,
    name=None
)
 
```

Performs algorithmically equivalent operation to tf.image.non_max_suppression,with the addition of an optional parameter which zero-pads the output tobe of size  `max_output_size` .The output of this operation is a tuple containing the set of integersindexing into the input collection of bounding boxes representing the selectedboxes and the number of valid indices in the index set.  The bounding boxcoordinates corresponding to the selected indices can then be obtained usingthe [ `tf.slice` ](https://tensorflow.google.cn/api_docs/python/tf/slice) and [ `tf.gather` ](https://tensorflow.google.cn/api_docs/python/tf/gather) operations.  For example:

```
 selected_indices_padded, num_valid = tf.image.non_max_suppression_padded(
    boxes, scores, max_output_size, iou_threshold,
    score_threshold, pad_to_max_output_size=True)
selected_indices = tf.slice(
    selected_indices_padded, tf.constant([0]), num_valid)
selected_boxes = tf.gather(boxes, selected_indices)
 
```

#### 参数：
- **`boxes`** : A 2-D float  `Tensor`  of shape  `[num_boxes, 4]` .
- **`scores`** : A 1-D float  `Tensor`  of shape  `[num_boxes]`  representing a singlescore corresponding to each box (each row of boxes).
- **`max_output_size`** : A scalar integer  `Tensor`  representing the maximum numberof boxes to be selected by non max suppression.
- **`iou_threshold`** : A float representing the threshold for deciding whether boxesoverlap too much with respect to IOU.
- **`score_threshold`** : A float representing the threshold for deciding when toremove boxes based on score.
- **`pad_to_max_output_size`** : bool.  If True, size of  `selected_indices`  output ispadded to  `max_output_size` .
- **`name`** : A name for the operation (optional).


#### 返回：
- **`selected_indices`** : A 1-D integer  `Tensor`  of shape  `[M]`  representing theselected indices from the boxes tensor, where  `M <= max_output_size` .
- **`valid_outputs`** : A scalar integer  `Tensor`  denoting how many elements in `selected_indices`  are valid.  Valid elements occur first, then padding.
