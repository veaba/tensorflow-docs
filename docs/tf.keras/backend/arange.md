[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/arange) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L2962-L2997)  
---|---  
  
Creates a 1D tensor containing a sequence of integers.

### Aliases:

  * [`tf.compat.v1.keras.backend.arange`](/api_docs/python/tf/keras/backend/arange)
  * [`tf.compat.v2.keras.backend.arange`](/api_docs/python/tf/keras/backend/arange)

    
    
    tf.keras.backend.arange(
        start,
        stop=None,
        step=1,
        dtype='int32'
    )
    

The function arguments use the same convention as Theano's arange: if only one
argument is provided, it is in fact the "stop" argument and "start" is 0.

The default type of the returned tensor is `'int32'` to match TensorFlow's
default.

#### Arguments:

  * **`start`** : Start value.
  * **`stop`** : Stop value.
  * **`step`** : Difference between two successive values.
  * **`dtype`** : Integer dtype to use.

#### Returns:

An integer tensor.

#### Example:

    
    
      >>> tf.keras.backend.arange(start=0, stop=10, step=1.5)
      <tf.Tensor: id=96, shape=(7,), dtype=float32,
          numpy=array([0. , 1.5, 3. , 4.5, 6. , 7.5, 9. ], dtype=float32)>
    
    

