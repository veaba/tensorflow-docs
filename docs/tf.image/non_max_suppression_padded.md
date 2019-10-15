
Greedily selects a subset of bounding boxes in descending order of score.
### Aliases:
- `tf.compat.v1.image.non_max_suppression_padded`
- `tf.compat.v2.image.non_max_suppression_padded`

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
[tf.slice](https://www.tensorflow.org/api_docs/python/tf/slice)Performs algorithmically equivalent operation to tf.image.non_max_suppression, with the addition of an optional parameter which zero-pads the output to be of size max_output_size. The output of this operation is a tuple containing the set of integers indexing into the input collection of bounding boxes representing the selected boxes and the number of valid indices in the index set. The bounding box coordinates corresponding to the selected indices can then be obtained using the  and tf.gather operations. For example:

#### Args:
- `boxes`:` `A` `2-D` `fl`o`at` ``Tensor`` ``o`f` ``s`hap`e`` `[`n``u``m``_``boxes``,`` ``4`].
- `s`c`o`r`e``s`:` `A` `1-D` `fl`o`at` ``Tensor`` ``o`f` ``s`hap`e`` `[`n``u``m``_``boxes`]` `r`e`pr`e``s``e``n`ti`n`g` `a` ``s`i`n`gl`e`` ``s`c`o`r`e`` `c`o`rr`e``s`p`o``n`di`n`g` `t`o`` ``e`ach` ``b``o``x`` `(`e`ach` `r`o`w` ``o`f` ``boxes`).
- `m`a`x``_``o``u`tp`u`t`_``s`iz`e`:` `A` ``s`calar` `i`n`t`e`g`e`r` ``Tensor`` `r`e`pr`e``s``e``n`ti`n`g` `th`e`` ``m`a`x`i`m``u``m`` ``n``u``m``b``e`r` ``o`f` ``boxes`` `t`o`` ``b``e`` ``s``e`l`e`ct`e`d` ``b`y` ``n``o``n`` ``m`a`x`` ``s``u`ppr`e``s``s`i`o``n`.
- `iou_threshold`:` `A` `fl`o`at` `r`e`pr`e``s``e``n`ti`n`g` `th`e`` `thr`e``s`h`o`ld` `f`o`r` `d`e`cidi`n`g` `wh`e`th`e`r` ``boxes`` ``o`v`e`rlap` `t`o``o`` ``m``u`ch` `with` `r`e``s`p`e`ct` `t`o`` `IOU.
- `s`c`o`r`e``_`thr`e``s`h`o`ld:` `A` `fl`o`at` `r`e`pr`e``s``e``n`ti`n`g` `th`e`` `thr`e``s`h`o`ld` `f`o`r` `d`e`cidi`n`g` `wh`e``n`` `t`o`` `r`e``m``o`v`e`` ``boxes`` ``b`a`s``e`d` ``o``n`` ``s`c`o`r`e`.
- `pad_to_max_output_size`:` ``b``o``o`l.` `If` `Tr`u``e``,`` ``s`iz`e`` ``o`f` ``s``e`l`e`ct`e`d`_`i`n`dic`e``s`` ``o``u`tp`u`t` `i`s`` `padd`e`d` `t`o`` ``m`a`x``_``o``u`tp`u`t`_``s`iz`e`.
- `n`a`m``e`:` `A` ``n`a`m``e`` `f`o`r` `th`e`` ``o`p`e`rati`o``n`` `(`o`pti`o``n`al).
#### Returns:
- `selected_indices`: A 1-D integer `Tensor` of shape [`M`] representing the selected indices from the boxes tensor, where `M` <= max_output_size.
- `valid_outputs`: A scalar integer `Tensor` denoting how many elements in `selected_indices` are valid. Valid elements occur first, then padding.
