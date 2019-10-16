## Class ZeroPadding2D

Zero-padding layer for 2D input (e.g. picture).
[Layer](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.layers.ZeroPadding2D`
- Class `tf.compat.v2.keras.layers.ZeroPadding2D`
### Used in the tutorials:
- ``P``i``x``2``P``i``x``

This layer can add rows and columns of zeros at the top, bottom, left and right side of an image tensor.
#### Arguments:
- `padding`: Int, or tuple of 2 ints, or tuple of 2 tuples of 2 ints.
If int: the same symmetric `padding` is applied to height and width.
If tuple of 2 ints: interpreted as two different symmetric `padding` values for height and width: (`symmetric_height_pad, symmetric_width_pad`).
If tuple of 2 tuples of 2 ints: interpreted as ((top_pad, bottom_pad), (left_pad, right_pad))
- If int: the same symmetric `padding` is applied to height and width.
- If tuple of 2 ints: interpreted as two different symmetric `padding` values for height and width: (`symmetric_height_pad, symmetric_width_pad`).
- If tuple of 2 tuples of 2 ints: interpreted as ((top_pad, bottom_pad), (left_pad, right_pad))
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape (`batch, height, width, channels`) while `channels_first` corresponds to inputs with shape (`batch, channels, height, width`). It defaults to the `image_data_format` value found in your Keras config file at `~/.keras/keras.json`. If you never set it, then it will be "`channels_last`".
#### Input shape:

4D tensor with shape: - If data_format is "channels_last": (batch, rows, cols, channels) - If data_format is "channels_first": (batch, channels, rows, cols)
#### Output shape:

4D tensor with shape: - If data_format is "channels_last": (batch, padded_rows, padded_cols, channels) - If data_format is "channels_first": (batch, channels, padded_rows, padded_cols)
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L2157-L2178)


```
 __init__(
    padding=(1, 1),
    data_format=None,
    **kwargs
)
```
