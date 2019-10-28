## Class MaxPool2D
Max pooling operation for spatial data.
### Aliases:
- Class `tf.compat.v1.keras.layers.MaxPool2D`
- Class `tf.compat.v1.keras.layers.MaxPooling2D`
- Class `tf.compat.v2.keras.layers.MaxPool2D`
- Class `tf.compat.v2.keras.layers.MaxPooling2D`
- Class `tf.keras.layers.MaxPooling2D`
### Used in the guide:
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
### Used in the tutorials:
- ``I``m``a``g``e`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n``
- ``B``a``s``i``c`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n``:`` ``C``l``a``s``s``i``f``y`` ``i``m``a``g``e``s`` ``o``f`` ``c``l``o``t``h``i``n``g``
- ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k`` ``(``C``N``N``)``
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
- ``M``u``l``t``i``-``w``o``r``k``e``r`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``E``s``t``i``m``a``t``o``r``
#### Arguments:
- `pool_size`: integer or tuple of 2 integers, factors by which to downscale (vertical, horizontal). `2, 2)` will halve the input in both spatial dimension. If only one integer is specified, the same window length will be used for both dimensions.
- `strides`: Integer, tuple of 2 integers, or None. Strides values. If None, it will default to `pool_size`.
- `padding`: One of `"valid"` or `"same"` (case-insensitive).
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `batch, height, width, channels)` while `channels_first` corresponds to inputs with shape `batch, channels, height, width)`. It defaults to the `image_data_format` value found in your Keras config file at `~/.keras/keras.json`. If you never set it, then it will be "`channels_last`".
#### Input shape:
- If `data_format='channels_last'`: 4D tensor with shape `batch_size, rows, cols, channels)`.
- If `data_format='channels_first'`: 4D tensor with shape `batch_size, channels, rows, cols)`.
#### Output shape:
- If `data_format='channels_last'`: 4D tensor with shape `batch_size, pooled_rows, pooled_cols, channels)`.
- If `data_format='channels_first'`: 4D tensor with shape `batch_size, channels, pooled_rows, pooled_cols)`.
## __init__
View source

```
 __init__(
    pool_size=(2, 2),
    strides=None,
    padding='valid',
    data_format=None,
    **kwargs
)
```
