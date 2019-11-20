[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/cast_to_floatx) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L150-L180)  
  
  
Cast a Numpy array to the default Keras float type.

### Aliases:

  * [`tf.compat.v1.keras.backend.cast_to_floatx`](/api_docs/python/tf/keras/backend/cast_to_floatx)
  * [`tf.compat.v2.keras.backend.cast_to_floatx`](/api_docs/python/tf/keras/backend/cast_to_floatx)

    
    
    tf.keras.backend.cast_to_floatx(x)
    

#### Arguments:

  * **`x`** : Numpy array or TensorFlow tensor.

#### Returns:

The same array (Numpy array if `x` was a Numpy array, or TensorFlow tensor if
`x` was a tensor), cast to its new type.

#### Example:

    
    
        >>> from tensorflow.keras import backend as K
        >>> K.floatx()
        'float32'
        >>> arr = numpy.array([1.0, 2.0], dtype='float64')
        >>> arr.dtype
        dtype('float64')
        >>> new_arr = K.cast_to_floatx(arr)
        >>> new_arr
        array([ 1.,  2.], dtype=float32)
        >>> new_arr.dtype
        dtype('float32')
    

