[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/temporal_padding) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L3097-L3111)  
---|---  
  
Pads the middle dimension of a 3D tensor.

### Aliases:

  * [`tf.compat.v1.keras.backend.temporal_padding`](/api_docs/python/tf/keras/backend/temporal_padding)
  * [`tf.compat.v2.keras.backend.temporal_padding`](/api_docs/python/tf/keras/backend/temporal_padding)

    
    
    tf.keras.backend.temporal_padding(
        x,
        padding=(1, 1)
    )
    

#### Arguments:

  * **`x`** : Tensor or variable.
  * **`padding`** : Tuple of 2 integers, how many zeros to add at the start and end of dim 1.

#### Returns:

A padded 3D tensor.

