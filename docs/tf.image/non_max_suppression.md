
Greedily selects a subset of bounding boxes in descending order of score.
### Aliases:
- `tf.compat.v1.image.non_max_suppression`
- `tf.compat.v2.image.non_max_suppression`

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
[tf.gather](https://www.tensorflow.org/api_docs/python/tf/gather)Prunes away boxes that have high intersection-over-union (IOU) overlap with previously selected boxes. Bounding boxes are supplied as [y1, x1, y2, x2], where (y1, x1) and (y2, x2) are the coordinates of any diagonal pair of box corners and the coordinates can be provided as normalized (i.e., lying in the interval [0, 1]) or absolute. Note that this algorithm is agnostic to where the origin is in the coordinate system. Note that this algorithm is invariant to orthogonal transformations and translations of the coordinate system; thus translating or reflections of the coordinate system result in the same boxes being selected by the algorithm. The output of this operation is a set of integers indexing into the input collection of bounding boxes representing the selected boxes. The bounding box coordinates corresponding to the selected indices can then be obtained using the  operation. For example:

#### Args:
- `boxes`:` `A` `2-D` `fl`o`at` ``Tensor`` ``o`f` ``s`hap`e`` `[`n``u``m``_``boxes``,`` ``4`].
- `s`c`o`r`e``s`:` `A` `1-D` `fl`o`at` ``Tensor`` ``o`f` ``s`hap`e`` `[`n``u``m``_``boxes`]` `r`e`pr`e``s``e``n`ti`n`g` `a` ``s`i`n`gl`e`` ``s`c`o`r`e`` `c`o`rr`e``s`p`o``n`di`n`g` `t`o`` ``e`ach` ``b``o``x`` `(`e`ach` `r`o`w` ``o`f` ``boxes`).
- `m`a`x``_``o``u`tp`u`t`_``s`iz`e`:` `A` ``s`calar` `i`n`t`e`g`e`r` ``Tensor`` `r`e`pr`e``s``e``n`ti`n`g` `th`e`` ``m`a`x`i`m``u``m`` ``n``u``m``b``e`r` ``o`f` ``boxes`` `t`o`` ``b``e`` ``s``e`l`e`ct`e`d` ``b`y` ``n``o``n`` ``m`a`x`` ``s``u`ppr`e``s``s`i`o``n`.
- `iou_threshold`:` `A` `fl`o`at` `r`e`pr`e``s``e``n`ti`n`g` `th`e`` `thr`e``s`h`o`ld` `f`o`r` `d`e`cidi`n`g` `wh`e`th`e`r` ``boxes`` ``o`v`e`rlap` `t`o``o`` ``m``u`ch` `with` `r`e``s`p`e`ct` `t`o`` `IOU.
- `s`c`o`r`e``_`thr`e``s`h`o`ld:` `A` `fl`o`at` `r`e`pr`e``s``e``n`ti`n`g` `th`e`` `thr`e``s`h`o`ld` `f`o`r` `d`e`cidi`n`g` `wh`e``n`` `t`o`` `r`e``m``o`v`e`` ``boxes`` ``b`a`s``e`d` ``o``n`` ``s`c`o`r`e`.
- `n`a`m``e`:` `A` ``n`a`m``e`` `f`o`r` `th`e`` ``o`p`e`rati`o``n`` `(`o`pti`o``n`al).
#### Returns:
- `selected_indices`: A 1-D integer `Tensor` of shape [`M`] representing the selected indices from the boxes tensor, where `M` <= max_output_size.
