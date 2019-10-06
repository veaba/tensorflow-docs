## Class GlobalAveragePooling1D

Global average pooling operation for temporal data.
### Aliases:
- Class `tf.compat.v1.keras.layers.GlobalAveragePooling1D`
- Class `tf.compat.v1.keras.layers.GlobalAvgPool1D`
- Class `tf.compat.v2.keras.layers.GlobalAveragePooling1D`
- Class `tf.compat.v2.keras.layers.GlobalAvgPool1D`
- Class `tf.keras.layers.GlobalAvgPool1D`
### Used in the guide:
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
### Used in the tutorials:
- ``T``e``x``t`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n`` ``w``i``t``h`` ``p``r``e``p``r``o``c``e``s``s``e``d`` ``t``e``x``t``:`` ``M``o``v``i``e`` ``r``e``v``i``e``w``s``
- ``W``o``r``d`` ``e``m``b``e``d``d``i``n``g``s``
#### Arguments:
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape (`batch, steps, features`) while `channels_first` corresponds to inputs with shape (`batch, features, steps`).
#### Call arguments:
- `inputs`: A 3D tensor.
- `mask`: Binary tensor of shape (`batch_size, steps`) indicating whether a given step should be `mask`ed (excluded from the average).
#### Input shape:
- If `data_format='channels_last'`: 3D tensor with shape: (`batch_size, steps, features`)
- If `data_format='channels_first'`: 3D tensor with shape: (`batch_size, features, steps`)
#### Output shape:

2D tensor with shape (batch_size, features).
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L632-L635)


```
 __init__(
    data_format='channels_last',
    **kwargs
)
```
