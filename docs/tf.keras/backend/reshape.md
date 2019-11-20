[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/reshape) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L2711-L2737)  
---|---  
  
Reshapes a tensor to the specified shape.

### Aliases:

  * [`tf.compat.v1.keras.backend.reshape`](/api_docs/python/tf/keras/backend/reshape)
  * [`tf.compat.v2.keras.backend.reshape`](/api_docs/python/tf/keras/backend/reshape)

    
    
    tf.keras.backend.reshape(
        x,
        shape
    )
    

#### Arguments:

  * **`x`** : Tensor or variable.
  * **`shape`** : Target shape tuple.

#### Returns:

A tensor.

#### Example:

    
    
      >>> a = tf.constant([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])
      >>> a
      <tf.Tensor: id=32, shape=(4, 3), dtype=int32, numpy=
      array([[ 1,  2,  3],
             [ 4,  5,  6],
             [ 7,  8,  9],
             [10, 11, 12]], dtype=int32)>
      >>> tf.keras.backend.reshape(a, shape=(2, 6))
      <tf.Tensor: id=35, shape=(2, 6), dtype=int32, numpy=
      array([[ 1,  2,  3,  4,  5,  6],
             [ 7,  8,  9, 10, 11, 12]], dtype=int32)>
    

