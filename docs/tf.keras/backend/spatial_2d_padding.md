[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/spatial_2d_padding)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L3114-L3142)  
---|---  
  
Pads the 2nd and 3rd dimensions of a 4D tensor.

### Aliases:

  * [`tf.compat.v1.keras.backend.spatial_2d_padding`](/api_docs/python/tf/keras/backend/spatial_2d_padding)
  * [`tf.compat.v2.keras.backend.spatial_2d_padding`](/api_docs/python/tf/keras/backend/spatial_2d_padding)

    
    
    tf.keras.backend.spatial_2d_padding(
        x,
        padding=((1, 1), (1, 1)),
        data_format=None
    )
    

#### Arguments:

  * **`x`** : Tensor or variable.
  * **`padding`** : Tuple of 2 tuples, padding pattern.
  * **`data_format`** : One of `channels_last` or `channels_first`.

#### Returns:

A padded 4D tensor.

#### Raises:

  * **`ValueError`** : if `data_format` is neither `channels_last` or `channels_first`.

