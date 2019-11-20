[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/resize_images) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L2771-L2831)  
---|---  
  
Resizes the images contained in a 4D tensor.

### Aliases:

  * [`tf.compat.v1.keras.backend.resize_images`](/api_docs/python/tf/keras/backend/resize_images)
  * [`tf.compat.v2.keras.backend.resize_images`](/api_docs/python/tf/keras/backend/resize_images)

    
    
    tf.keras.backend.resize_images(
        x,
        height_factor,
        width_factor,
        data_format,
        interpolation='nearest'
    )
    

#### Arguments:

  * **`x`** : Tensor or variable to resize.
  * **`height_factor`** : Positive integer.
  * **`width_factor`** : Positive integer.
  * **`data_format`** : One of `"channels_first"`, `"channels_last"`.
  * **`interpolation`** : A string, one of `nearest` or `bilinear`.

#### Returns:

A tensor.

#### Raises:

  * **`ValueError`** : in case of incorrect value for `data_format` or `interpolation`.

