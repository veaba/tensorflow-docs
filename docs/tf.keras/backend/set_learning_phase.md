[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/set_learning_phase)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L339-L357)  
  
  
Sets the learning phase to a fixed value.

### Aliases:

  * [`tf.compat.v1.keras.backend.set_learning_phase`](/api_docs/python/tf/keras/backend/set_learning_phase)
  * [`tf.compat.v2.keras.backend.set_learning_phase`](/api_docs/python/tf/keras/backend/set_learning_phase)

    
    
    tf.keras.backend.set_learning_phase(value)
    

#### Arguments:

  * **`value`** : Learning phase value, either 0 or 1 (integers).

#### Raises:

  * **`ValueError`** : if `value` is neither `0` nor `1`.

