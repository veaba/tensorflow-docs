
Draw bounding boxes on a batch of images.

```
 tf.compat.v1.image.draw_bounding_boxes(
    images,
    boxes,
    name=None,
    colors=None
)
```

Outputs a copy of images but draws on top of the pixels zero or more bounding boxes specified by the locations in boxes. The coordinates of the each bounding box in boxes are encoded as [y_min, x_min, y_max, x_max]. The bounding box coordinates are floats in [0.0, 1.0] relative to the width and height of the underlying image.

For example, if an image is 100 x 200 pixels (height x width) and the bounding box is [0.1, 0.2, 0.5, 0.9], the upper-left and bottom-right coordinates of the bounding box will be (40, 10) to (180, 50) (in (x,y) coordinates).

Parts of the bounding box may fall outside the image.
#### Args:
- `images`:` `A` ``Tensor`.` `Mus`t`` ``b``e`` `on`e`` `of` ``t``h``e`` `follo`w``i`n`g`` ``t`y`p``e`s:` ``float32``,`` ``half`.` `4-D` ``w``i``t``h`` `s`h``a``p``e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``d``e``p``t``h`].` `A` ``b``a``t``c``h`` `of` ``images`.
- `b``o``x``e``s`:` `A` ``Tensor`` ``o`f` ``t`y`p``e`` ``float32`.` `3-D` ``w``i``t``h`` ``s``h``a``p``e`` `[`b``a``t``c``h``,`` ``n``u``m``_``b``o``u``n``d``i``n``g``_``b``o``x``e``s``,`` ``4`]` ``c``o``n``t``a``i``n``i``n``g`` ``b``o``u``n``d``i``n``g`` ``b``o``x``e``s`.
- `n``a``m``e`:` `A` ``n``a``m``e`` `f`o`r` ``t``h``e`` ``o``p``e`r`a``t``i``o``n`` `(`o``p``t``i``o``n``a`l).
#### Returns:

A Tensor. Has the same type as images.
