[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/eye) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L1349-L1375)  
  
  
Instantiate an identity matrix and returns it.

### Aliases:

  * [`tf.compat.v1.keras.backend.eye`](/api_docs/python/tf/keras/backend/eye)
  * [`tf.compat.v2.keras.backend.eye`](/api_docs/python/tf/keras/backend/eye)

    
    
    tf.keras.backend.eye(
        size,
        dtype=None,
        name=None
    )
    

#### Arguments:

  * **`size`** : Integer, number of rows/columns.
  * **`dtype`** : String, data type of returned Keras variable.
  * **`name`** : String, name of returned Keras variable.

#### Returns:

A Keras variable, an identity matrix.

#### Example:

    
    
        >>> from keras import backend as K
        >>> kvar = K.eye(3)
        >>> K.eval(kvar)
        array([[ 1.,  0.,  0.],
               [ 0.,  1.,  0.],
               [ 0.,  0.,  1.]], dtype=float32)
    

