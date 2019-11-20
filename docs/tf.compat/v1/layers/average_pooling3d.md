[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/pooling.py#L349-L388)  
---  
  
Average pooling layer for 3D inputs (e.g. volumes). (deprecated)

    
    
    tf.compat.v1.layers.average_pooling3d(
        inputs,
        pool_size,
        strides,
        padding='valid',
        data_format='channels_last',
        name=None
    )
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Use keras.layers.AveragePooling3D instead.

#### Arguments:

  * **`inputs`** : The tensor over which to pool. Must have rank 5.
  * **`pool_size`** : An integer or tuple/list of 3 integers: (pool_depth, pool_height, pool_width) specifying the size of the pooling window. Can be a single integer to specify the same value for all spatial dimensions.
  * **`strides`** : An integer or tuple/list of 3 integers, specifying the strides of the pooling operation. Can be a single integer to specify the same value for all spatial dimensions.
  * **`padding`** : A string. The padding method, either 'valid' or 'same'. Case-insensitive.
  * **`data_format`** : A string. The ordering of the dimensions in the inputs. `channels_last` (default) and `channels_first` are supported. `channels_last` corresponds to inputs with shape `(batch, depth, height, width, channels)` while `channels_first` corresponds to inputs with shape `(batch, channels, depth, height, width)`.
  * **`name`** : A string, the name of the layer.

#### Returns:

Output tensor.

#### Raises:

  * **`ValueError`** : if eager execution is enabled.

