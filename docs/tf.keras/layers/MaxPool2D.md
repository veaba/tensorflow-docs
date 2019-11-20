[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/MaxPool2D) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L282-L328)  
  
  
## Class `MaxPool2D`

Max pooling operation for spatial data.

### Aliases:

  * Class [`tf.compat.v1.keras.layers.MaxPool2D`](/api_docs/python/tf/keras/layers/MaxPool2D)
  * Class [`tf.compat.v1.keras.layers.MaxPooling2D`](/api_docs/python/tf/keras/layers/MaxPool2D)
  * Class [`tf.compat.v2.keras.layers.MaxPool2D`](/api_docs/python/tf/keras/layers/MaxPool2D)
  * Class [`tf.compat.v2.keras.layers.MaxPooling2D`](/api_docs/python/tf/keras/layers/MaxPool2D)
  * Class [`tf.keras.layers.MaxPooling2D`](/api_docs/python/tf/keras/layers/MaxPool2D)

### Used in the guide:

  * [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
  * [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)

### Used in the tutorials:

  * [Image classification](https://tensorflow.google.cn/tutorials/images/classification)
  * [Basic classification: Classify images of clothing](https://tensorflow.google.cn/tutorials/keras/classification)
  * [Custom training: basics](https://tensorflow.google.cn/tutorials/customization/custom_training)
  * [Custom training with tf.distribute.Strategy](https://tensorflow.google.cn/tutorials/distribute/custom_training)
  * [Convolutional Neural Network (CNN)](https://tensorflow.google.cn/tutorials/images/cnn)

#### Arguments:

  * **`pool_size`** : integer or tuple of 2 integers, factors by which to downscale (vertical, horizontal). `(2, 2)` will halve the input in both spatial dimension. If only one integer is specified, the same window length will be used for both dimensions.
  * **`strides`** : Integer, tuple of 2 integers, or None. Strides values. If None, it will default to `pool_size`.
  * **`padding`** : One of `"valid"` or `"same"` (case-insensitive).
  * **`data_format`** : A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `(batch, height, width, channels)` while `channels_first` corresponds to inputs with shape `(batch, channels, height, width)`. It defaults to the `image_data_format` value found in your Keras config file at `~/.keras/keras.json`. If you never set it, then it will be "channels_last".

#### Input shape:

  * If `data_format='channels_last'`: 4D tensor with shape `(batch_size, rows, cols, channels)`.
  * If `data_format='channels_first'`: 4D tensor with shape `(batch_size, channels, rows, cols)`.

#### Output shape:

  * If `data_format='channels_last'`: 4D tensor with shape `(batch_size, pooled_rows, pooled_cols, channels)`.
  * If `data_format='channels_first'`: 4D tensor with shape `(batch_size, channels, pooled_rows, pooled_cols)`.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L319-L328)

    
    
    __init__(
        pool_size=(2, 2),
        strides=None,
        padding='valid',
        data_format=None,
        **kwargs
    )
    

