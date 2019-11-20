[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/dtype) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L1221-L1249)  
---|---  
  
Returns the dtype of a Keras tensor or variable, as a string.

### Aliases:

  * [`tf.compat.v1.keras.backend.dtype`](/api_docs/python/tf/keras/backend/dtype)
  * [`tf.compat.v2.keras.backend.dtype`](/api_docs/python/tf/keras/backend/dtype)

    
    
    tf.keras.backend.dtype(x)
    

#### Arguments:

  * **`x`** : Tensor or variable.

#### Returns:

String, dtype of `x`.

#### Examples:

    
    
        >>> from keras import backend as K
        >>> K.dtype(K.placeholder(shape=(2,4,5)))
        'float32'
        >>> K.dtype(K.placeholder(shape=(2,4,5), dtype='float32'))
        'float32'
        >>> K.dtype(K.placeholder(shape=(2,4,5), dtype='float64'))
        'float64'
        # Keras variable
        >>> kvar = K.variable(np.array([[1, 2], [3, 4]]))
        >>> K.dtype(kvar)
        'float32'
        >>> kvar = K.variable(np.array([[1, 2], [3, 4]]), dtype='float32')
        >>> K.dtype(kvar)
        'float32'
    

