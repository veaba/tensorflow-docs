[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/Flatten) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L538-L610)  
  
  
## Class `Flatten`

Flattens the input. Does not affect the batch size.

Inherits From:
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

### Aliases:

  * Class [`tf.compat.v1.keras.layers.Flatten`](/api_docs/python/tf/keras/layers/Flatten)
  * Class [`tf.compat.v2.keras.layers.Flatten`](/api_docs/python/tf/keras/layers/Flatten)

### Used in the guide:

  * [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
  * [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)
  * [Estimators](https://tensorflow.google.cn/guide/estimator)

### Used in the tutorials:

  * [Image classification](https://tensorflow.google.cn/tutorials/images/classification)
  * [Basic classification: Classify images of clothing](https://tensorflow.google.cn/tutorials/keras/classification)
  * [Custom training: basics](https://tensorflow.google.cn/tutorials/customization/custom_training)
  * [Custom training with tf.distribute.Strategy](https://tensorflow.google.cn/tutorials/distribute/custom_training)
  * [Distributed training with Keras](https://tensorflow.google.cn/tutorials/distribute/keras)

If inputs are shaped `(batch,)` without a channel dimension, then flattening
adds an extra channel dimension and output shapes are `(batch, 1)`.

#### Arguments:

  * **`data_format`** : A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `(batch, ..., channels)` while `channels_first` corresponds to inputs with shape `(batch, channels, ...)`. It defaults to the `image_data_format` value found in your Keras config file at `~/.keras/keras.json`. If you never set it, then it will be "channels_last".

#### Example:

    
    
    model = Sequential()
    model.add(Convolution2D(64, 3, 3,
                            border_mode='same',
                            input_shape=(3, 32, 32)))
    # now: model.output_shape == (None, 64, 32, 32)
    
    model.add(Flatten())
    # now: model.output_shape == (None, 65536)
    

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L569-L572)

    
    
    __init__(
        data_format=None,
        **kwargs
    )
    

