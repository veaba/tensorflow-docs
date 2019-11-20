[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/set_image_data_format)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend_config.py#L110-L126)  
---|---  
  
Sets the value of the image data format convention.

### Aliases:

  * [`tf.compat.v1.keras.backend.set_image_data_format`](/api_docs/python/tf/keras/backend/set_image_data_format)
  * [`tf.compat.v2.keras.backend.set_image_data_format`](/api_docs/python/tf/keras/backend/set_image_data_format)

    
    
    tf.keras.backend.set_image_data_format(data_format)
    

#### Arguments:

  * **`data_format`** : string. `'channels_first'` or `'channels_last'`. Example: `python from keras import backend as K K.image_data_format() >>> 'channels_first' K.set_image_data_format('channels_last') K.image_data_format() >>> 'channels_last'`

#### Raises:

  * **`ValueError`** : In case of invalid `data_format` value.

