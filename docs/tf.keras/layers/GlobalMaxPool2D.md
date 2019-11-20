[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/GlobalMaxPool2D) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L744-L773)  
  
  
## Class `GlobalMaxPool2D`

Global max pooling operation for spatial data.

### Aliases:

  * Class [`tf.compat.v1.keras.layers.GlobalMaxPool2D`](/api_docs/python/tf/keras/layers/GlobalMaxPool2D)
  * Class [`tf.compat.v1.keras.layers.GlobalMaxPooling2D`](/api_docs/python/tf/keras/layers/GlobalMaxPool2D)
  * Class [`tf.compat.v2.keras.layers.GlobalMaxPool2D`](/api_docs/python/tf/keras/layers/GlobalMaxPool2D)
  * Class [`tf.compat.v2.keras.layers.GlobalMaxPooling2D`](/api_docs/python/tf/keras/layers/GlobalMaxPool2D)
  * Class [`tf.keras.layers.GlobalMaxPooling2D`](/api_docs/python/tf/keras/layers/GlobalMaxPool2D)

### Used in the guide:

  * [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
  * [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)

#### Arguments:

  * **`data_format`** : A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `(batch, height, width, channels)` while `channels_first` corresponds to inputs with shape `(batch, channels, height, width)`. It defaults to the `image_data_format` value found in your Keras config file at `~/.keras/keras.json`. If you never set it, then it will be "channels_last".

#### Input shape:

  * If `data_format='channels_last'`: 4D tensor with shape `(batch_size, rows, cols, channels)`.
  * If `data_format='channels_first'`: 4D tensor with shape `(batch_size, channels, rows, cols)`.

#### Output shape:

2D tensor with shape `(batch_size, channels)`.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L688-L691)

    
    
    __init__(
        data_format=None,
        **kwargs
    )
    

