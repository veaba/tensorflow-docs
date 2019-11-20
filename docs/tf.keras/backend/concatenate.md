[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/concatenate) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L2676-L2708)  
  
  
Concatenates a list of tensors alongside the specified axis.

### Aliases:

  * [`tf.compat.v1.keras.backend.concatenate`](/api_docs/python/tf/keras/backend/concatenate)
  * [`tf.compat.v2.keras.backend.concatenate`](/api_docs/python/tf/keras/backend/concatenate)

    
    
    tf.keras.backend.concatenate(
        tensors,
        axis=-1
    )
    

#### Arguments:

  * **`tensors`** : list of tensors to concatenate.
  * **`axis`** : concatenation axis.

#### Returns:

A tensor.

#### Example:

    
    
    >>> a = tf.constant([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    >>> b = tf.constant([[10, 20, 30], [40, 50, 60], [70, 80, 90]])
    >>> tf.keras.backend.concatenate((a, b), axis=-1)
    <tf.Tensor: id=14, shape=(3, 6), dtype=int32, numpy=
    array([[ 1,  2,  3, 10, 20, 30],
           [ 4,  5,  6, 40, 50, 60],
           [ 7,  8,  9, 70, 80, 90]], dtype=int32)>
    

