
Extracts crops from the input image tensor and resizes them.

```
 tf.compat.v1.image.crop_and_resize(
    image,
    boxes,
    box_ind=None,
    crop_size=None,
    method='bilinear',
    extrapolation_value=0,
    name=None,
    box_indices=None
)
```

Extracts crops from the input image tensor and resizes them using bilinear sampling or nearest neighbor sampling (possibly with aspect ratio change) to a common output size specified by crop_size. This is more general than the crop_to_bounding_box op which extracts a fixed size slice from the input image and does not allow resizing or aspect ratio change.

Returns a tensor with crops from the input image at positions defined at the bounding box locations in boxes. The cropped boxes are all resized (with bilinear or nearest neighbor interpolation) to a fixed size = [crop_height, crop_width]. The result is a 4-D tensor [num_boxes, crop_height, crop_width, depth]. The resizing is corner aligned. In particular, if boxes = [[0, 0, 1, 1]], the method will give identical results to using tf.image.resize_bilinear() or tf.image.resize_nearest_neighbor()(depends on the method argument) with align_corners=True.
#### Args:
- `image`:` `A` ``Tensor`.` `Mus`t`` ``b``e`` `on`e`` `of` ``t``h``e`` `follo`w``i`n`g`` ``t`y`p``e`s:` ``uint8``,`` ``uint16``,`` ``int8``,`` ``int16``,`` ``int32``,`` ``int64``,`` ``half``,`` ``float32``,`` ``float64`.` `A` `4-D` ``t``e`nsor` `of` `s`h``a``p``e`` `[`b``a``t``c``h``,`` ``image``_``h``e``i``g``h``t``,`` ``image``_``w``i``d``t``h``,`` ``d``e``p``t``h`].` `Bo`t``h`` ``image``_``h``e``i``g``h``t`` ``a`n`d`` ``image``_``w``i``d``t``h`` `n`e``e``d`` ``t`o` ``b``e`` ``p`os`i``t``i`v`e`.
- `b``o``x``e``s`:` `A` ``Tensor`` ``o`f` ``t``y``p``e`` ``float32`.` `A` ``2`-D` ``t``e``n``s``o`r` ``o`f` ``s``h``a``p``e`` `[`n``u``m``_``b``o``x``e``s``,`` ``4`].` `T`h``e`` ``i`-`t``h`` `r`o``w`` ``o`f` ``t``h``e`` ``t``e``n``s``o`r` ``s``p``e``c``i`f`i``e``s`` ``t``h``e`` ``c``o``o`r`d``i``n``a``t``e``s`` ``o`f` ``a`` ``b``o``x`` ``i``n`` ``t``h``e`` ``b``o``x``_``i``n``d`[`i`]` ``image`` ``a``n``d`` ``i``s`` ``s``p``e``c``i`f`i``e``d`` ``i``n`` ``n``o`r`m``a`l`i`z`e``d`` ``c``o``o`r`d``i``n``a``t``e``s`` `[`y``1``,`` ``x``1``,`` ``y``2``,`` ``x``2`].` `A` ``n``o`r`m``a`l`i`z`e``d`` ``c``o``o`r`d``i``n``a``t``e`` `v`a`l`u``e`` ``o`f` ``y`` ``i``s`` ``m``a``p``p``e``d`` ``t``o`` ``t``h``e`` ``image`` ``c``o``o`r`d``i``n``a``t``e`` ``a``t`` ``y`` `*` `(`image``_``h``e``i``g``h``t`` `-` ``1`)`,`` ``s``o`` ``a``s`` ``t``h``e`` `[`0``,`` ``1`]` ``i``n``t``e`rv`a`l` ``o`f` ``n``o`r`m``a`l`i`z`e``d`` ``image`` ``h``e``i``g``h``t`` ``i``s`` ``m``a``p``p``e``d`` ``t``o`` `[`0``,`` ``image``_``h``e``i``g``h``t`` `-` ``1`]` ``i``n`` ``image`` ``h``e``i``g``h``t`` ``c``o``o`r`d``i``n``a``t``e``s`.` `W`e`` ``d``o`` ``a`ll`o``w`` ``y``1`` `>` ``y``2``,`` ``i``n`` ``w``h``i``c``h`` ``c``a``s``e`` ``t``h``e`` ``s``a``m``p`l`e``d`` ``c`r`o``p`` ``i``s`` ``a``n`` ``u``p`-`d``o``w``n`` `fl`i``p``p``e``d`` `v`e`r`s``i``o``n`` ``o`f` ``t``h``e`` ``o`r`i``g``i``n``a`l` ``image`.` `T`h``e`` ``w``i``d``t``h`` ``d``i``m``e``n``s``i``o``n`` ``i``s`` ``t`r`e``a``t``e``d`` ``s``i``m``i`l`a`rl`y`.` `N`o`r`m``a`l`i`z`e``d`` ``c``o``o`r`d``i``n``a``t``e``s`` ``o``u``t``s``i``d``e`` ``t``h``e`` `[`0``,`` ``1`]` `r`a``n``g``e`` ``a`r`e`` ``a`ll`o``w``e``d``,`` ``i``n`` ``w``h``i``c``h`` ``c``a``s``e`` ``w``e`` ``u``s``e`` ``e``x``t`r`a``p``o`l`a``t``i``o``n``_`v`a`l`u``e`` ``t``o`` ``e``x``t`r`a``p``o`l`a``t``e`` ``t``h``e`` ``i``n``p``u``t`` ``image`` `v`a`l`u``e``s`.
- `b``o``x``_``i``n``d`:` `A` ``Tensor`` ``o`f` ``t``y``p``e`` ``int32`.` `A` ``1`-D` ``t``e``n``s``o`r` ``o`f` ``s``h``a``p``e`` ``[``n``u``m``_``b``o``x``e``s`]` ``w``i``t``h`` ``int32`` `v`a`l`u``e``s`` ``i``n`` ``[``0``,`` ``b``a``t``c``h``)`.` `T`h``e`` `v`a`l`u``e`` ``o`f` ``b``o``x``_``i``n``d``[``i`]` ``s``p``e``c``i`f`i``e``s`` ``t``h``e`` ``image`` ``t``h``a``t`` ``t``h``e`` ``i`-`t``h`` ``b``o``x`` `r`e`f`e`r`s`` ``t``o`.
- `c`r`o``p``_``s``i`z`e`:` `A` ``Tensor`` ``o`f` ``t``y``p``e`` ``int32`.` `A` ``1`-D` ``t``e``n``s``o`r` ``o`f` ``2`` ``e`l`e``m``e``n``t``s``,`` ``s``i`z`e`` `=` ``[``c`r`o``p``_``h``e``i``g``h``t``,`` ``c`r`o``p``_``w``i``d``t``h`].` `All` ``c`r`o``p``p``e``d`` ``image`` ``p``a``t``c``h``e``s`` ``a`r`e`` `r`e``s``i`z`e``d`` ``t``o`` ``t``h``i``s`` ``s``i`z`e`.` `T`h``e`` ``a``s``p``e``c``t`` `r`a``t``i``o`` ``o`f` ``t``h``e`` ``image`` ``c``o``n``t``e``n``t`` ``i``s`` ``n``o``t`` ``p`r`e``s``e`rv`e``d`.` `B`o``t``h`` ``c`r`o``p``_``h``e``i``g``h``t`` ``a``n``d`` ``c`r`o``p``_``w``i``d``t``h`` ``n``e``e``d`` ``t``o`` ``b``e`` ``p``o``s``i``t``i`v`e`.
- `m``e``t``h``o``d`:` `A`n`` ``o``p``t``i``o``n``a`l` ``s``t`r`i``n``g`` `fr`o``m`:` ``"bilinear", "nearest"`.` `D`e`f`a``u`l`t``s`` ``t``o`` ``"bilinear"`.` `A` ``s``t`r`i``n``g`` ``s``p``e``c``i`f`y``i``n``g`` ``t``h``e`` ``s``a``m``p`l`i``n``g`` ``m``e``t``h``o``d`` `f`o`r` `r`e``s``i`z`i``n``g`.` `I`t`` ``c``a``n`` ``b``e`` ``e``i``t``h``e`r` ``"bilinear"`` ``o`r` ``"nearest"`` ``a``n``d`` ``d``e`f`a``u`l`t`` ``t``o`` ``"bilinear"`.` `C`u`rr`e``n``t`l`y`` ``t``w``o`` ``s``a``m``p`l`i``n``g`` ``m``e``t``h``o``d``s`` ``a`r`e`` ``s``u``p``p``o`r`t``e``d`:` `B`i`l`i``n``e``a`r` ``a``n``d`` `N`e``a`r`e``s``t`` `N`e``i``g``h``b``o`r.
- `e``x``t`r`a``p``o`l`a``t``i``o``n``_`v`a`l`u``e`:` `A`n`` ``o``p``t``i``o``n``a`l` ``float`.` `D`e`f`a``u`l`t``s`` ``t``o`` ``0`.` `V`a`l`u``e`` ``u``s``e``d`` `f`o`r` ``e``x``t`r`a``p``o`l`a``t``i``o``n``,`` ``w``h``e``n`` ``a``p``p`l`i``c``a``b`l`e`.
- `n``a``m``e`:` `A` ``n``a``m``e`` `f`o`r` ``t``h``e`` ``o``p``e`r`a``t``i``o``n`` `(`o``p``t``i``o``n``a`l`)`.
#### Returns:

A Tensor of type float32.
