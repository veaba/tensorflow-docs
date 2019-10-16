
Generate a single randomly distorted bounding box for an image.
### Aliases:
- `tf.compat.v2.image.sample_distorted_bounding_box`

```
 tf.image.sample_distorted_bounding_box(
    image_size,
    bounding_boxes,
    seed=0,
    min_object_covered=0.1,
    aspect_ratio_range=None,
    area_range=None,
    max_attempts=None,
    use_image_if_no_bounding_boxes=None,
    name=None
)
```

Bounding box annotations are often supplied in addition to ground-truth labels in image recognition or object localization tasks. A common technique for training such a system is to randomly distort an image while preserving its content, i.e. data augmentation. This Op outputs a randomly distorted localization of an object, i.e. bounding box, given an image_size, bounding_boxes and a series of constraints.
[tf.slice](https://www.tensorflow.org/api_docs/python/tf/slice)The output of this Op is a single bounding box that may be used to crop the original image. The output is returned as 3 tensors: begin, size and bboxes. The first 2 tensors can be fed directly into  to crop the image. The latter may be supplied to tf.image.draw_bounding_boxes to visualize what the bounding box looks like.


Bounding boxes are supplied and returned as [y_min, x_min, y_max, x_max]. The bounding box coordinates are floats in [0.0, 1.0] relative to the width and height of the underlying image.

For example,

```
     # Generate a single distorted bounding box.
    begin, size, bbox_for_draw = tf.image.sample_distorted_bounding_box(
        tf.shape(image),
        bounding_boxes=bounding_boxes,
        min_object_covered=0.1)

    # Draw the bounding box in an image summary.
    image_with_box = tf.image.draw_bounding_boxes(tf.expand_dims(image, 0),
                                                  bbox_for_draw)
    tf.compat.v1.summary.image('images_with_box', image_with_box)

    # Employ the bounding box to distort the image.
    distorted_image = tf.slice(image, begin, size)
```

Note that if no bounding box information is available, setting use_image_if_no_bounding_boxes = true will assume there is a single implicit bounding box covering the whole image. If use_image_if_no_bounding_boxes is false and no bounding boxes are supplied, an error is raised.
#### Args:
- `image_size`:` `A` ``Tensor`.` `Mu`s``t`` `b`e`` `o`n``e`` `of` ``t``h``e`` `fo`l``l`o`w``i``n``g`` ``t`yp`e``s`:` ``uint8``,`` ``int8``,`` ``int16``,`` ``int32``,`` ``int64`.` `1-D`,`` ``c`o`n``t``a``i``n``i``n``g`` `[`h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `bounding_boxes`:` `A` ``Tensor`` `of` ``t`yp`e`` ``float32`.` `3-D` ``w``i``t``h`` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``N``,`` ``4`]` ``d``e``s``c`r`i``b``i``n``g`` ``t``h``e`` ``N`` ``b`ou`n``d``i``n``g`` ``b`ox`e``s`` ``a``s``s`o`c``i``a``t``e``d`` ``w``i``t``h`` ``t``h``e`` ``i`m`a``g``e`.
- `s``e``e``d`:` `A`n`` `op`t``i`o`n``a``l`` ``i``n``t`.` `D`e`f`a`u`l``t``s`` ``t`o` ``0`.` `If` ``s``e``e``d`` ``i``s`` ``s``e``t`` ``t`o` ``n`o`n`-z`e`ro`,`` ``t``h``e`` `r`a``n``d`om` ``n`um`b``e`r` ``g``e``n``e`r`a``t`or` ``i``s`` ``s``e``e``d``e``d`` ``b`y` ``t``h``e`` ``g``i`v`e``n`` ``s``e``e``d`.` `O`t``h``e`r`w``i``s``e``,`` ``i``t`` ``i``s`` ``s``e``e``d``e``d`` ``b`y` ``a`` `r`a``n``d`om` ``s``e``e``d`.
- `min_object_covered`:` `A` ``Tensor`` `of` ``t`yp`e`` ``float32`.` `D`e`f`a`u`l``t``s`` ``t`o` ``0`.1.` `T`h``e`` ``c`ropp`e``d`` ``a`r`e``a`` `of` ``t``h``e`` ``i`m`a``g``e`` `mu`s``t`` ``c`o`n``t``a``i``n`` ``a``t`` ``l``e``a``s``t`` ``t``h``i``s`` `fr`a``c``t``i`o`n`` `of` ``a``n`y` ``b`ou`n``d``i``n``g`` ``b`ox` ``s`upp`l``i``e``d`.` `T`h``e`` `v`a``l`u`e`` `of` ``t``h``i``s`` `p`a`r`a`m`e``t``e`r` ``s``h`ou`l``d`` ``b``e`` ``n`o`n`-`n``e``g``a``t``i`v`e`.` `I`n`` ``t``h``e`` ``c``a``s``e`` `of` ``0``,`` ``t``h``e`` ``c`ropp`e``d`` ``a`r`e``a`` ``d`o`e``s`` ``n`o`t`` ``n``e``e``d`` ``t`o` `ov`e`r`l``a`p` ``a``n`y` `of` ``t``h``e`` ``b`ou`n``d``i``n``g`` ``b`ox`e``s`` ``s`upp`l``i``e``d`.
- `a``s`p`e``c``t`_r`a``t``i`o_r`a``n``g``e`:` `A`n`` `op`t``i`o`n``a``l`` ``l``i``s``t`` `of` ``floats``.`` `D`e`f`a`u`l``t``s`` ``t`o` `[`0``.``7``5``,`` ``1``.``3``3`]`.`` `T`h``e`` ``c`ropp`e``d`` ``a`r`e``a`` `of` ``t``h``e`` ``i`m`a``g``e`` `mu`s``t`` ``h``a`v`e`` ``a``n`` ``a``s`p`e``c``t`` ``ratio = width / height`` ``w``i``t``h``i``n`` ``t``h``i``s`` `r`a``n``g``e``.`
- `a`r`e``a`_r`a``n``g``e`:` `A`n`` `op`t``i`o`n``a``l`` ``l``i``s``t`` `of` ``floats``.`` `D`e`f`a`u`l``t``s`` ``t`o` `[`0``.``0``5``,`` ``1`]`.`` `T`h``e`` ``c`ropp`e``d`` ``a`r`e``a`` `of` ``t``h``e`` ``i`m`a``g``e`` `mu`s``t`` ``c`o`n``t``a``i``n`` ``a`` `fr`a``c``t``i`o`n`` `of` ``t``h``e`` ``s`upp`l``i``e``d`` ``i`m`a``g``e`` ``w``i``t``h``i``n`` ``t``h``i``s`` `r`a``n``g``e``.`
- `max_attempts`:` `A`n`` `op`t``i`o`n``a``l`` ``i``n``t``.`` `D`e`f`a`u`l``t``s`` ``t`o` ``1``0``0``.`` ``N`um`b``e`r` `of` ``a``t``t``e`mp`t``s`` ``a``t`` ``g``e``n``e`r`a``t``i``n``g`` ``a`` ``c`ropp`e``d`` `r`e``g``i`o`n`` `of` ``t``h``e`` ``i`m`a``g``e`` `of` ``t``h``e`` ``s`p`e``c``i`f`i``e``d`` ``c`o`n``s``t`r`a``i``n``t``s``.`` `Af`t``e`r` ``max_attempts`` `f`a``i``l`ur`e``s``,`` `r`e``t`ur`n`` ``t``h``e`` ``e``n``t``i`r`e`` ``i`m`a``g``e``.`
- `use_image_if_no_bounding_boxes`:` `A`n`` `op`t``i`o`n``a``l`` ``b`oo`l``.`` `D`e`f`a`u`l``t``s`` ``t`o` ``False``.`` `Co`n``t`ro`l``s`` ``b``e``h``a`v`i`or` ``i`f` ``n`o` ``b`ou`n``d``i``n``g`` ``b`ox`e``s`` ``s`upp`l``i``e``d``.`` `If` ``t`ru`e``,`` ``a``s``s`um`e`` ``a``n`` ``i`mp`l``i``c``i``t`` ``b`ou`n``d``i``n``g`` ``b`ox` ``c`ov`e`r`i``n``g`` ``t``h``e`` ``w``h`o`l``e`` ``i``n`pu`t``.`` `If` `f`a``l``s``e``,`` `r`a``i``s``e`` ``a``n`` ``e`rror`.`
- `n``a`m`e`:` `A` ``n``a`m`e`` `for` ``t``h``e`` `op`e`r`a``t``i`o`n`` `(op`t``i`o`n``a``l`)`.`
#### Returns:

A tuple of Tensor objects (begin, size, bboxes).
- `begin`:` `A` ``Tensor`.` `Ha`s`` ``t``h``e`` ``s`am`e`` ``t`yp`e`` `a`s`` ``image_size`.` `1-D`,`` `c`o`n`t`a`i`n`i`n`g`` `[`o``f``f``s``e``t``_``h``e``i``g``h``t``,`` ``o``f``f``s``e``t``_``w``i``d``t``h``,`` ``0`].` `Pr`o`v`i``d``e`` `a`s`` ``i`npu`t`` ``t``o`` ``t``f`.`s`l`i`c`e`.
- `s``i`z`e`:` `A` ``Tensor``.`` `H`a``s`` ``t``h``e`` ``s``a`m`e`` ``t`yp`e`` ``a``s`` ``image_size``.`` ``1``-`D`,`` `c`o`n`t``a``i`n`i`n`g`` `[`t``a``r``g``e``t``_``h``e``i``g``h``t``,`` ``t``a``r``g``e``t``_``w``i``d``t``h``,`` ``-``1`]`.`` `P`r``o`v`i``d``e`` ``a``s`` ``i`npu`t`` ``t``o`` ``t``f``.``s`l`i`c`e``.`
- `bboxes`:` `A` ``Tensor`` ``o``f`` ``t`yp`e`` ``f`l`o``a``t`32`.`` `3`-`D` ``w``i``t``h`` ``s``h``a`p`e`` `[`1``,`` ``1``,`` ``4`]` `c`o`n`t``a``i`n`i`n`g`` ``t``h``e`` ``d``i``s``t``o``r``t``e``d`` `b`o`un`d``i`n`g`` `b`o`x`.`` `P`r``o`v`i``d``e`` ``a``s`` ``i`npu`t`` ``t``o`` ``t``f``.``i`m`a``g``e``.``d``r``a``w``_`b`o`un`d``i`n`g``_`b`o`x`e``s``.`
