[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/count_params) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L1519-L1539)  
---|---  
  
Returns the static number of elements in a variable or tensor.

### Aliases:

  * [`tf.compat.v1.keras.backend.count_params`](/api_docs/python/tf/keras/backend/count_params)
  * [`tf.compat.v2.keras.backend.count_params`](/api_docs/python/tf/keras/backend/count_params)

    
    
    tf.keras.backend.count_params(x)
    

#### Arguments:

  * **`x`** : Variable or tensor.

#### Returns:

Integer, the number of scalars in `x`.

#### Example:

    
    
        >>> kvar = K.zeros((2,3))
        >>> K.count_params(kvar)
        6
        >>> K.eval(kvar)
        array([[ 0.,  0.,  0.],
               [ 0.,  0.,  0.]], dtype=float32)
    

