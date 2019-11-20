[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/batch_flatten) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L3042-L3066)  
---|---  
  
Turn a nD tensor into a 2D tensor with same 0th dimension.

### Aliases:

  * [`tf.compat.v1.keras.backend.batch_flatten`](/api_docs/python/tf/keras/backend/batch_flatten)
  * [`tf.compat.v2.keras.backend.batch_flatten`](/api_docs/python/tf/keras/backend/batch_flatten)

    
    
    tf.keras.backend.batch_flatten(x)
    

In other words, it flattens each data samples of a batch.

#### Arguments:

  * **`x`** : A tensor or variable.

#### Returns:

A tensor.

#### Examples:

Flattening a 3D tensor to 2D by collapsing the last dimension.

    
    
        >>> from tensorflow.keras import backend as K
        >>> x_batch = K.ones(shape=(2, 3, 4, 5))
        >>> x_batch_flatten = K.batch_flatten(x_batch)
        >>> K.int_shape(x_batch_flatten)
        (2, 60)
    

