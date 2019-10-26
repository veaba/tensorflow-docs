## Class GlobalMaxPool1D
Global max pooling operation for temporal data.
### Aliases:
- Class tf.compat.v1.keras.layers.GlobalMaxPool1D
- Class tf.compat.v1.keras.layers.GlobalMaxPooling1D
- Class tf.compat.v2.keras.layers.GlobalMaxPool1D
- Class tf.compat.v2.keras.layers.GlobalMaxPooling1D
- Class tf.keras.layers.GlobalMaxPooling1D
### Used in the guide:
- Train and evaluate with Keras
#### Arguments:
- data_format: A string, one of channels_last (default) or channels_first. The ordering of the dimensions in the inputs. channels_last corresponds to inputs with shape (batch, steps, features) while channels_first corresponds to inputs with shape (batch, features, steps).
#### Input shape:
- If data_format='channels_last': 3D tensor with shape: (batch_size, steps, features)
- If data_format='channels_first': 3D tensor with shape: (batch_size, features, steps)
#### Output shape:
2D tensor with shape (batch_size, features).
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L580-L583)


```
 __init__(
    data_format='channels_last',
    **kwargs
)
```
