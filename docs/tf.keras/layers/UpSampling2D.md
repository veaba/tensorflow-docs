[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/UpSampling2D) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L1917-L1996)  
  
  
## Class `UpSampling2D`

Upsampling layer for 2D inputs.

Inherits From:
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

### Aliases:

  * Class [`tf.compat.v1.keras.layers.UpSampling2D`](/api_docs/python/tf/keras/layers/UpSampling2D)
  * Class [`tf.compat.v2.keras.layers.UpSampling2D`](/api_docs/python/tf/keras/layers/UpSampling2D)

### Used in the guide:

  * [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)

Repeats the rows and columns of the data by `size[0]` and `size[1]`
respectively.

#### Arguments:

  * **`size`** : Int, or tuple of 2 integers. The upsampling factors for rows and columns.
  * **`data_format`** : A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `(batch, height, width, channels)` while `channels_first` corresponds to inputs with shape `(batch, channels, height, width)`. It defaults to the `image_data_format` value found in your Keras config file at `~/.keras/keras.json`. If you never set it, then it will be "channels_last".
  * **`interpolation`** : A string, one of `nearest` or `bilinear`.

#### Input shape:

4D tensor with shape: \- If `data_format` is `"channels_last"`: `(batch, rows,
cols, channels)` \- If `data_format` is `"channels_first"`: `(batch, channels,
rows, cols)`

#### Output shape:

4D tensor with shape: \- If `data_format` is `"channels_last"`: `(batch,
upsampled_rows, upsampled_cols, channels)` \- If `data_format` is
`"channels_first"`: `(batch, channels, upsampled_rows, upsampled_cols)`

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L1953-L1965)

    
    
    __init__(
        size=(2, 2),
        data_format=None,
        interpolation='nearest',
        **kwargs
    )
    

