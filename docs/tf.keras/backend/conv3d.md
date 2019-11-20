[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/conv3d) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L5113-L5153)  
  
  
3D convolution.

### Aliases:

  * [`tf.compat.v1.keras.backend.conv3d`](/api_docs/python/tf/keras/backend/conv3d)
  * [`tf.compat.v2.keras.backend.conv3d`](/api_docs/python/tf/keras/backend/conv3d)

    
    
    tf.keras.backend.conv3d(
        x,
        kernel,
        strides=(1, 1, 1),
        padding='valid',
        data_format=None,
        dilation_rate=(1, 1, 1)
    )
    

#### Arguments:

  * **`x`** : Tensor or variable.
  * **`kernel`** : kernel tensor.
  * **`strides`** : strides tuple.
  * **`padding`** : string, `"same"` or `"valid"`.
  * **`data_format`** : string, `"channels_last"` or `"channels_first"`.
  * **`dilation_rate`** : tuple of 3 integers.

#### Returns:

A tensor, result of 3D convolution.

#### Raises:

  * **`ValueError`** : if `data_format` is neither `channels_last` or `channels_first`.

