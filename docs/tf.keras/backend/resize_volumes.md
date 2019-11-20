[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/resize_volumes) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L2834-L2863)  
---|---  
  
Resizes the volume contained in a 5D tensor.

### Aliases:

  * [`tf.compat.v1.keras.backend.resize_volumes`](/api_docs/python/tf/keras/backend/resize_volumes)
  * [`tf.compat.v2.keras.backend.resize_volumes`](/api_docs/python/tf/keras/backend/resize_volumes)

    
    
    tf.keras.backend.resize_volumes(
        x,
        depth_factor,
        height_factor,
        width_factor,
        data_format
    )
    

#### Arguments:

  * **`x`** : Tensor or variable to resize.
  * **`depth_factor`** : Positive integer.
  * **`height_factor`** : Positive integer.
  * **`width_factor`** : Positive integer.
  * **`data_format`** : One of `"channels_first"`, `"channels_last"`.

#### Returns:

A tensor.

#### Raises:

  * **`ValueError`** : if `data_format` is neither `channels_last` or `channels_first`.

