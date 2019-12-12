

## Class  `GlobalAveragePooling2D` 
Global average pooling operation for spatial data.

**Aliases** : [ `tf.compat.v1.keras.layers.GlobalAveragePooling2D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling2D), [ `tf.compat.v1.keras.layers.GlobalAvgPool2D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling2D), [ `tf.compat.v2.keras.layers.GlobalAveragePooling2D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling2D), [ `tf.compat.v2.keras.layers.GlobalAvgPool2D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling2D), [ `tf.keras.layers.GlobalAvgPool2D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling2D)

### Used in the guide:
- [Eager execution](https://tensorflow.google.cn/guide/eager)
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)


### Used in the tutorials:
- [Transfer learning with a pretrained ConvNet](https://tensorflow.google.cn/tutorials/images/transfer_learning)


#### Arguments:
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, height, width, channels)`  while  `channels_first` corresponds to inputs with shape `(batch, channels, height, width)` .It defaults to the  `image_data_format`  value found in yourKeras config file at  `~/.keras/keras.json` .If you never set it, then it will be "channels_last".


#### Input shape:
- If  `data_format='channels_last'` :4D tensor with shape  `(batch_size, rows, cols, channels)` .
- If  `data_format='channels_first'` :4D tensor with shape  `(batch_size, channels, rows, cols)` .


#### Output shape:
2D tensor with shape  `(batch_size, channels)` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L688-L691)

```
 __init__(
    data_format=None,
    **kwargs
)
 
```

