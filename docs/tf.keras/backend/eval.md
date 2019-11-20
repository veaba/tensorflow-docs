[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/eval) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L1252-L1271)  
---|---  
  
Evaluates the value of a variable.

### Aliases:

  * [`tf.compat.v1.keras.backend.eval`](/api_docs/python/tf/keras/backend/eval)
  * [`tf.compat.v2.keras.backend.eval`](/api_docs/python/tf/keras/backend/eval)

    
    
    tf.keras.backend.eval(x)
    

#### Arguments:

  * **`x`** : A variable.

#### Returns:

A Numpy array.

#### Examples:

    
    
        >>> from keras import backend as K
        >>> kvar = K.variable(np.array([[1, 2], [3, 4]]), dtype='float32')
        >>> K.eval(kvar)
        array([[ 1.,  2.],
               [ 3.,  4.]], dtype=float32)
    

