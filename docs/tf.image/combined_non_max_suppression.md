
Greedily selects a subset of bounding boxes in descending order of score.
### Aliases:
- `tf.compat.v1.image.combined_non_max_suppression`
- `tf.compat.v2.image.combined_non_max_suppression`

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

This operation performs non_max_suppression on the inputs per batch, across all classes. Prunes away boxes that have high intersection-over-union (IOU) overlap with previously selected boxes. Bounding boxes are supplied as [y1, x1, y2, x2], where (y1, x1) and (y2, x2) are the coordinates of any diagonal pair of box corners and the coordinates can be provided as normalized (i.e., lying in the interval [0, 1]) or absolute. Note that this algorithm is agnostic to where the origin is in the coordinate system. Also note that this algorithm is invariant to orthogonal transformations and translations of the coordinate system; thus translating or reflections of the coordinate system result in the same boxes being selected by the algorithm. The output of this operation is the final boxes, scores and classes tensor returned after performing non_max_suppression.
#### Args:
- `boxes`:` `A` ``4`-D` `fl`o``a``t`` ``Tensor`` ``o`f` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``n``u``m``_``boxes``,`` ``q``,`` ``4`].` `If` ``q`` ``i``s`` `1` ``t``h``e``n`` ``s``a``m``e`` ``boxes`` ``a`r`e`` ``u``s``e`d` `f`o`r` ``a`ll` ``c`l`a``s``s``e``s`` ``o``t``h``e`rw`i``s``e``,`` ``i`f` ``q`` ``i``s`` ``e``q``u``a`l` ``t``o`` ``n``u``m``b``e`r` ``o`f` ``c`l`a``s``s``e``s``,`` ``c`l`a``s``s`-`s`p`e``c``i`f`i``c`` ``boxes`` ``a`r`e`` ``u``s``e`d.
- `s``c``o`r`e``s`:` `A` `3-D` `f`l``o``a``t`` ``Tensor`` ``o`f` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``n``u``m``_``boxes``,`` ``n``u``m``_``c``l``a``s``s``e``s`]` `r`e`pr`e``s``e``n``t``i``n`g` ``a`` ``s``i``n`g`l``e`` ``s``c``o`r`e`` ``c``o`rr`e``s`p`o``n`d`i``n`g` ``t``o`` ``e``a``c``h`` ``b``o``x`` `(`e``a``c``h`` `r`o`w` ``o`f` ``boxes`).
- `m``a``x``_``o``u``t`p`u``t``_``s``i``z``e``_`p`e`r`_``c``l``a``s``s`:` `A` ``s``c``a``l``a`r` ``i``n``t``e`g`e`r` ``Tensor`` `r`e`pr`e``s``e``n``t``i``n`g` ``t``h``e`` ``m``a``x``i``m``u``m`` ``n``u``m``b``e`r` ``o`f` ``boxes`` ``t``o`` ``b``e`` ``s``e``l``e``c``t``e`d` ``b`y` ``n``o``n`` ``m``a``x`` ``s``u`ppr`e``s``s``i``o``n`` `p`e`r` ``c``l``a``s``s`
- `m``a``x``_``t``o``t``a``l``_``s``i``z``e`:` `A` ``s``c``a``l``a`r` `r`e`pr`e``s``e``n``t``i``n`g` ``m``a``x``i``m``u``m`` ``n``u``m``b``e`r` ``o`f` ``boxes`` `r`e``t``a``i``n``e`d` ``o`v`e`r` ``a``l``l`` ``c``l``a``s``s``e``s`.
- `i``o``u``_``t``h`r`e``s``h``o``l`d:` `A` `f`l``o``a``t`` `r`e`pr`e``s``e``n``t``i``n`g` ``t``h``e`` ``t``h`r`e``s``h``o``l`d` `f`o`r` `d`e``c``i`d`i``n`g` `w`h``e``t``h``e`r` ``boxes`` ``o`v`e`r`l``a`p` ``t``o``o`` ``m``u``c``h`` `w`i``t``h`` `r`e``s`p`e``c``t`` ``t``o`` `IOU.
- `s``c``o`r`e``_``t``h`r`e``s``h``o``l`d:` `A` `f`l``o``a``t`` `r`e`pr`e``s``e``n``t``i``n`g` ``t``h``e`` ``t``h`r`e``s``h``o``l`d` `f`o`r` `d`e``c``i`d`i``n`g` `w`h``e``n`` ``t``o`` `r`e``m``o`v`e`` ``boxes`` ``b``a``s``e`d` ``o``n`` ``s``c``o`r`e`.
- `pad_per_class`:` `If` `f`a``l``s``e``,`` ``t``h``e`` ``o``u``t`p`u``t`` ``n``m``s``e`d` ``boxes``,`` ``s``c``o`r`e``s`` ``a``n`d` ``c``l``a``s``s``e``s`` ``a`r`e`` `p`a`dd`e`d/`c``l``i`pp`e`d` ``t``o`` ``m``a``x``_``t``o``t``a``l``_``s``i``z``e`.` `If` ``t`r`u``e``,`` ``t``h``e`` ``o``u``t`p`u``t`` ``n``m``s``e`d` ``boxes``,`` ``s``c``o`r`e``s`` ``a``n`d` ``c``l``a``s``s``e``s`` ``a`r`e`` `p`a`dd`e`d` ``t``o`` ``b``e`` ``o`f` ``l``e``n`g`t``h`` ``m``a``x``_``s``i``z``e``_`p`e`r`_``c``l``a``s``s`*`n``u``m``_``c``l``a``s``s``e``s``,`` ``u``n``l``e``s``s`` ``i``t`` ``e``x``c``e``e`d`s`` ``m``a``x``_``t``o``t``a``l``_``s``i``z``e`` ``i``n`` `w`h``i``c``h`` ``c``a``s``e`` ``i``t`` ``i``s`` ``c``l``i`pp`e`d` ``t``o`` ``m``a``x``_``t``o``t``a``l``_``s``i``z``e`.` `D`e`f`a``u``l``t``s`` ``t``o`` `f`a``l``s``e`.
- `c``l``i`p`_``boxes`:` `If` ``t`r`u``e``,`` ``t``h``e`` ``c``o``o`rd`i``n``a``t``e``s`` ``o`f` ``o``u``t`p`u``t`` ``n``m``s``e`d` ``boxes`` `w`i``l``l`` ``b``e`` ``c``l``i`pp`e`d` ``t``o`` `[0`,`` `1].` `If` `f`a``l``s``e``,`` ``o``u``t`p`u``t`` ``t``h``e`` ``b``o``x`` ``c``o``o`rd`i``n``a``t``e``s`` ``a``s`` ``i``t`` ``i``s`.` `D`e`f`a``u``l``t``s`` ``t``o`` ``t`r`u``e`.
- `n``a``m``e`:` `A` ``n``a``m``e`` `f`o`r` ``t``h``e`` ``o`p`e`r`a``t``i``o``n`` `(`o`p`t``i``o``n``a``l`).
#### Returns:

'nmsed_boxes': A [batch_size, max_detections, 4] float32 tensor containing the non-max suppressed boxes. 'nmsed_scores': A [batch_size, max_detections] float32 tensor containing the scores for the boxes. 'nmsed_classes': A [batch_size, max_detections] float32 tensor containing the class for boxes. 'valid_detections': A [batch_size] int32 tensor indicating the number of valid detections per batch item. Only the top valid_detections[i] entries in nms_boxes[i], nms_scores[i] and nms_class[i] are valid. The rest of the entries are zero paddings.
