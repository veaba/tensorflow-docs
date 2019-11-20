[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/ones) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L1314-L1346)  
  
  
Instantiates an all-ones variable and returns it.

### Aliases:

  * [`tf.compat.v1.keras.backend.ones`](/api_docs/python/tf/keras/backend/ones)
  * [`tf.compat.v2.keras.backend.ones`](/api_docs/python/tf/keras/backend/ones)

    
    
    tf.keras.backend.ones(  
        shape,  
        dtype=None,  
        name=None  
    )  
    

#### Arguments:

  * **`shape`** : Tuple of integers, shape of returned Keras variable.
  * **`dtype`** : String, data type of returned Keras variable.
  * **`name`** : String, name of returned Keras variable.

#### Returns:

A Keras variable, filled with `1.0`. Note that if `shape` was symbolic, we
cannot return a variable, and will return a dynamically-shaped tensor instead.

#### Example:

    
    
        >>> from keras import backend as K  
        >>> kvar = K.ones((3,4))  
        >>> K.eval(kvar)  
        array([[ 1.,  1.,  1.,  1.],  
               [ 1.,  1.,  1.,  1.],  
               [ 1.,  1.,  1.,  1.]], dtype=float32)  
    

