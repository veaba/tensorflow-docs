## Class Flatten
Flattens the input. Does not affect the batch size.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.Flatten`
- Class `tf.compat.v2.keras.layers.Flatten`
### Used in the guide:
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
- ``E``s``t``i``m``a``t``o``r``s``
### Used in the tutorials:
- ``I``m``a``g``e`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n``
- ``B``a``s``i``c`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n``:`` ``C``l``a``s``s``i``f``y`` ``i``m``a``g``e``s`` ``o``f`` ``c``l``o``t``h``i``n``g``
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
- ``M``u``l``t``i``-``w``o``r``k``e``r`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``E``s``t``i``m``a``t``o``r``
- ``M``u``l``t``i``-``w``o``r``k``e``r`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
If inputs are shaped `batch,)` without a channel dimension, then flattening adds an extra channel dimension and output shapes are `batch, 1)`.
#### Arguments:
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `batch, ..., channels)` while `channels_first` corresponds to inputs with shape `batch, channels, ...)`. It defaults to the `image_data_format` value found in your Keras config file at `~/.keras/keras.json`. If you never set it, then it will be "`channels_last`".
#### Example:

```
 model = Sequential()
model.add(Convolution2D(64, 3, 3,
                        border_mode='same',
                        input_shape=(3, 32, 32)))
# now: model.output_shape == (None, 64, 32, 32)

model.add(Flatten())
# now: model.output_shape == (None, 65536)
```
## __init__
View source

```
 __init__(
    data_format=None,
    **kwargs
)
```
