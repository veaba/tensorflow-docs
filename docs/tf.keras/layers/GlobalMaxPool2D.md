## Class GlobalMaxPool2D

Global max pooling operation for spatial data.
### Aliases:
- Class `tf.compat.v1.keras.layers.GlobalMaxPool2D`
- Class `tf.compat.v1.keras.layers.GlobalMaxPooling2D`
- Class `tf.compat.v2.keras.layers.GlobalMaxPool2D`
- Class `tf.compat.v2.keras.layers.GlobalMaxPooling2D`
- Class `tf.keras.layers.GlobalMaxPooling2D`
### Used in the guide:
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
#### Arguments:
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape (`batch, height, width, channels`) while `channels_first` corresponds to inputs with shape (`batch, channels, height, width`). It defaults to the `image_data_format` value found in your Keras config file at `~/.keras/keras.json`. If you never set it, then it will be "`channels_last`".
#### Input shape:
- If `data_format='channels_last'`: 4D tensor with shape (`batch_size, rows, cols, channels`).
- If `data_format='channels_first'`: 4D tensor with shape (`batch_size, channels, rows, cols`).
#### Output shape:

2D tensor with shape (batch_size, channels).
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L688-L691)


```
 __init__(
    data_format=None,
    **kwargs
)
```