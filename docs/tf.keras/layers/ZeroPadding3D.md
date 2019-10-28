## Class ZeroPadding3D
Zero-padding layer for 3D data (spatial or spatio-temporal).
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.ZeroPadding3D`
- Class `tf.compat.v2.keras.layers.ZeroPadding3D`
#### Arguments:
- `padding`: Int, or tuple of 3 ints, or tuple of 3 tuples of 2 ints.
If int: the same symmetric `padding` is applied to height and width.
If tuple of 3 ints: interpreted as two different symmetric `padding` values for height and width: `symmetric_dim1_pad, symmetric_dim2_pad, symmetric_dim3_pad)`.
If tuple of 3 tuples of 2 ints: interpreted as ((left_dim1_pad, right_dim1_pad), (left_dim2_pad, right_dim2_pad), (left_dim3_pad, right_dim3_pad))
- ``I``f`` ``i``n``t``:`` ``t``h``e`` ``s``a``m``e`` ``s``y``m``m``e``t``r``i``c`` ``p``a``d``d``i``n``g`` ``i``s`` ``a``p``p``l``i``e``d`` ``t``o`` ``h``e``i``g``h``t`` ``a``n``d`` ``w``i``d``t``h``.``
- If tuple of 3 ints: interpreted as two different symmetric padding values for height and width: `symmetric_dim1_pad, symmetric_dim2_pad, symmetric_dim3_pad)`.
- If tuple of 3 tuples of 2 ints: interpreted as ((left_dim1_pad, right_dim1_pad), (left_dim2_pad, right_dim2_pad), (left_dim3_pad, right_dim3_pad))
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `batch, spatial_dim1, spatial_dim2, spatial_dim3, channels)` while `channels_first` corresponds to inputs with shape `batch, channels, spatial_dim1, spatial_dim2, spatial_dim3)`. It defaults to the `image_data_format` value found in your Keras config file at `~/.keras/keras.json`. If you never set it, then it will be "`channels_last`".
#### Input shape:
5D tensor with shape: - If `data_format` is `"channels_last"`: `batch, first_axis_to_pad, second_axis_to_pad, third_axis_to_pad, depth)` - If `data_format` is `"channels_first"`: `batch, depth, first_axis_to_pad, second_axis_to_pad, third_axis_to_pad)`
#### Output shape:
5D tensor with shape: - If `data_format` is `"channels_last"`: `batch, first_padded_axis, second_padded_axis, third_axis_to_pad, depth)` - If `data_format` is `"channels_first"`: `batch, depth, first_padded_axis, second_padded_axis, third_axis_to_pad)`
## __init__
View source

```
 __init__(
    padding=(1, 1, 1),
    data_format=None,
    **kwargs
)
```
