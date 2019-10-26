## Class AveragePooling3D
Average pooling operation for 3D data (spatial or spatio-temporal).
### Aliases:
- Class tf.compat.v1.keras.layers.AveragePooling3D
- Class tf.compat.v1.keras.layers.AvgPool3D
- Class tf.compat.v2.keras.layers.AveragePooling3D
- Class tf.compat.v2.keras.layers.AvgPool3D
- Class tf.keras.layers.AvgPool3D
#### Arguments:
- pool_size: tuple of 3 integers, factors by which to downscale (dim1, dim2, dim3). (2, 2, 2) will halve the size of the 3D input in each dimension.
- strides: tuple of 3 integers, or None. Strides values.
- padding: One of "valid" or "same" (case-insensitive).
- data_format: A string, one of channels_last (default) or channels_first. The ordering of the dimensions in the inputs. channels_last corresponds to inputs with shape (batch, spatial_dim1, spatial_dim2, spatial_dim3, channels) while channels_first corresponds to inputs with shape (batch, channels, spatial_dim1, spatial_dim2, spatial_dim3). It defaults to the image_data_format value found in your Keras config file at ~/.keras/keras.json. If you never set it, then it will be "channels_last".
#### Input shape:
- If data_format='channels_last': 5D tensor with shape: (batch_size, spatial_dim1, spatial_dim2, spatial_dim3, channels)
- If data_format='channels_first': 5D tensor with shape: (batch_size, channels, spatial_dim1, spatial_dim2, spatial_dim3)
#### Output shape:
- If data_format='channels_last': 5D tensor with shape: (batch_size, pooled_dim1, pooled_dim2, pooled_dim3, channels)
- If data_format='channels_first': 5D tensor with shape: (batch_size, channels, pooled_dim1, pooled_dim2, pooled_dim3)
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L565-L574)


```
 __init__(
    pool_size=(2, 2, 2),
    strides=None,
    padding='valid',
    data_format=None,
    **kwargs
)
```
