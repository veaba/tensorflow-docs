## Class ZeroPadding1D
Zero-padding layer for 1D input (e.g. temporal sequence).
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.ZeroPadding1D`
- Class `tf.compat.v2.keras.layers.ZeroPadding1D`
#### Arguments:
- `padding`: Int, or tuple of int (length 2), or dictionary.
If int: How many zeros to add at the beginning and end of the `padding` dimension (axis 1).
If tuple of int (length 2): How many zeros to add at the beginning and at the end of the `padding` dimension (`left_pad, right_pad)`).
- ``I``f`` ``i``n``t``:`` ``H``o``w`` ``m``a``n``y`` ``z``e``r``o``s`` ``t``o`` ``a``d``d`` ``a``t`` ``t``h``e`` ``b``e``g``i``n``n``i``n``g`` ``a``n``d`` ``e``n``d`` ``o``f`` ``t``h``e`` ``p``a``d``d``i``n``g`` ``d``i``m``e``n``s``i``o``n`` ``(``a``x``i``s`` ``1``)``.``
- If tuple of int (length 2): How many zeros to add at the beginning and at the end of the padding dimension (`left_pad, right_pad)`).
#### Input shape:
3D tensor with shape `batch, axis_to_pad, features)`
#### Output shape:
3D tensor with shape `batch, padded_axis, features)`
## __init__
View source

```
 __init__(
    padding=1,
    **kwargs
)
```
