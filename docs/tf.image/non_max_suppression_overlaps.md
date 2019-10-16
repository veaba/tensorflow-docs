
Greedily selects a subset of bounding boxes in descending order of score.
### Aliases:
- `tf.compat.v1.image.non_max_suppression_overlaps`
- `tf.compat.v2.image.non_max_suppression_overlaps`

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
[tf.gather](https://www.tensorflow.org/api_docs/python/tf/gather)Prunes away boxes that have high overlap with previously selected boxes. N-by-n overlap values are supplied as square matrix. The output of this operation is a set of integers indexing into the input collection of bounding boxes representing the selected boxes. The bounding box coordinates corresponding to the selected indices can then be obtained using the  operation. For example:

#### Args:
- `overlaps`:` `A` `2-D` `fl`o`at` ``Tensor`` ``o`f` ``s`hap`e`` `[`n``u``m``_``b``o``x``e``s``,`` ``n``u``m``_``b``o``x``e``s`].
- `s`c`o`r`e``s`:` `A` `1-D` `fl`o`at` ``Tensor`` ``o`f` ``s`hap`e`` `[`n``u``m``_``b``o``x``e``s`]` `r`e`pr`e``s``e``n`ti`n`g` `a` ``s`i`n`gl`e`` ``s`c`o`r`e`` `c`o`rr`e``s`p`o``n`di`n`g` `t`o`` ``e`ach` ``b``o``x`` `(`e`ach` `r`o`w` ``o`f` ``b``o``x``e``s`).
- `m`a`x``_``o``u`tp`u`t`_``s`iz`e`:` `A` ``s`calar` `i`n`t`e`g`e`r` ``Tensor`` `r`e`pr`e``s``e``n`ti`n`g` `th`e`` ``m`a`x`i`m``u``m`` ``n``u``m``b``e`r` ``o`f` ``b``o``x``e``s`` `t`o`` ``b``e`` ``s``e`l`e`ct`e`d` ``b`y` ``n``o``n`` ``m`a`x`` ``s``u`ppr`e``s``s`i`o``n`.
- `o`v`e`rlap`_`thr`e``s`h`o`ld:` `A` `fl`o`at` `r`e`pr`e``s``e``n`ti`n`g` `th`e`` `thr`e``s`h`o`ld` `f`o`r` `d`e`cidi`n`g` `wh`e`th`e`r` ``b``o``x``e``s`` ``o`v`e`rlap` `t`o``o`` ``m``u`ch` `with` `r`e``s`p`e`ct` `t`o`` `th`e`` `pr`o`vid`e`d` ``o`v`e`rlap` `val`u``e``s`.
- `s`c`o`r`e``_`thr`e``s`h`o`ld:` `A` `fl`o`at` `r`e`pr`e``s``e``n`ti`n`g` `th`e`` `thr`e``s`h`o`ld` `f`o`r` `d`e`cidi`n`g` `wh`e``n`` `t`o`` `r`e``m``o`v`e`` ``b``o``x``e``s`` ``b`a`s``e`d` ``o``n`` ``s`c`o`r`e`.
- `n`a`m``e`:` `A` ``n`a`m``e`` `f`o`r` `th`e`` ``o`p`e`rati`o``n`` `(`o`pti`o``n`al).
#### Returns:
- `selected_indices`: A 1-D integer `Tensor` of shape [`M`] representing the selected indices from the overlaps tensor, where `M` <= max_output_size.
