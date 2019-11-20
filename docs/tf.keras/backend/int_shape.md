[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/int_shape) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L1162-L1190)  
---|---  
  
Returns the shape of tensor or variable as a tuple of int or None entries.

### Aliases:

  * [`tf.compat.v1.keras.backend.int_shape`](/api_docs/python/tf/keras/backend/int_shape)
  * [`tf.compat.v2.keras.backend.int_shape`](/api_docs/python/tf/keras/backend/int_shape)

    
    
    tf.keras.backend.int_shape(x)
    

#### Arguments:

  * **`x`** : Tensor or variable.

#### Returns:

A tuple of integers (or None entries).

#### Examples:

    
    
        >>> from keras import backend as K
        >>> input = K.placeholder(shape=(2, 4, 5))
        >>> K.int_shape(input)
        (2, 4, 5)
        >>> val = np.array([[1, 2], [3, 4]])
        >>> kvar = K.variable(value=val)
        >>> K.int_shape(kvar)
        (2, 2)
    

