[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/pool3d) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L5274-L5324)  
---|---  
  
3D Pooling.

### Aliases:

  * [`tf.compat.v1.keras.backend.pool3d`](/api_docs/python/tf/keras/backend/pool3d)
  * [`tf.compat.v2.keras.backend.pool3d`](/api_docs/python/tf/keras/backend/pool3d)

    
    
    tf.keras.backend.pool3d(
        x,
        pool_size,
        strides=(1, 1, 1),
        padding='valid',
        data_format=None,
        pool_mode='max'
    )
    

#### Arguments:

  * **`x`** : Tensor or variable.
  * **`pool_size`** : tuple of 3 integers.
  * **`strides`** : tuple of 3 integers.
  * **`padding`** : string, `"same"` or `"valid"`.
  * **`data_format`** : string, `"channels_last"` or `"channels_first"`.
  * **`pool_mode`** : string, `"max"` or `"avg"`.

#### Returns:

A tensor, result of 3D pooling.

#### Raises:

  * **`ValueError`** : if `data_format` is neither `"channels_last"` or `"channels_first"`.
  * **`ValueError`** : if `pool_mode` is neither `"max"` or `"avg"`.

