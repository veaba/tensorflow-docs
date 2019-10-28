## Class GlobalAveragePooling2D
Global average pooling operation for spatial data.
### Aliases:
- Class `tf.compat.v1.keras.layers.GlobalAveragePooling2D`
- Class `tf.compat.v1.keras.layers.GlobalAvgPool2D`
- Class `tf.compat.v2.keras.layers.GlobalAveragePooling2D`
- Class `tf.compat.v2.keras.layers.GlobalAvgPool2D`
- Class `tf.keras.layers.GlobalAvgPool2D`
### Used in the guide:
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
### Used in the tutorials:
- ``T``r``a``n``s``f``e``r`` ``l``e``a``r``n``i``n``g`` ``w``i``t``h`` ``a`` ``p``r``e``t``r``a``i``n``e``d`` ``C``o``n``v``N``e``t``
#### Arguments:
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `batch, height, width, channels)` while `channels_first` corresponds to inputs with shape `batch, channels, height, width)`. It defaults to the `image_data_format` value found in your Keras config file at `~/.keras/keras.json`. If you never set it, then it will be "`channels_last`".
#### Input shape:
- If `data_format='channels_last'`: 4D tensor with shape `batch_size, rows, cols, channels)`.
- If `data_format='channels_first'`: 4D tensor with shape `batch_size, channels, rows, cols)`.
#### Output shape:
2D tensor with shape `batch_size, channels)`.
## __init__
View source

```
 __init__(
    data_format=None,
    **kwargs
)
```
