[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/cast) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L1542-L1571)  
---|---  
  
Casts a tensor to a different dtype and returns it.

### Aliases:

  * [`tf.compat.v1.keras.backend.cast`](/api_docs/python/tf/keras/backend/cast)
  * [`tf.compat.v2.keras.backend.cast`](/api_docs/python/tf/keras/backend/cast)

    
    
    tf.keras.backend.cast(
        x,
        dtype
    )
    

You can cast a Keras variable but it still returns a Keras tensor.

#### Arguments:

  * **`x`** : Keras tensor (or variable).
  * **`dtype`** : String, either (`'float16'`, `'float32'`, or `'float64'`).

#### Returns:

Keras tensor with dtype `dtype`.

#### Examples:

Cast a float32 variable to a float64 tensor

    
    
        >>> import tensorflow as tf
        >>> from tensorflow.keras import backend as K
        >>> input = K.ones(shape=(1,3))
        >>> print(input)
        >>> cast_input = K.cast(input, dtype='float64')
        >>> print(cast_input)
    
        <tf.Variable 'Variable:0' shape=(1, 3) dtype=float32,
             numpy=array([[1., 1., 1.]], dtype=float32)>
        tf.Tensor([[1. 1. 1.]], shape=(1, 3), dtype=float64)
    

