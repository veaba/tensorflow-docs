[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/batch_get_value) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L3282-L3302)  
---|---  
  
Returns the value of more than one tensor variable.

### Aliases:

  * [`tf.compat.v1.keras.backend.batch_get_value`](/api_docs/python/tf/keras/backend/batch_get_value)
  * [`tf.compat.v2.keras.backend.batch_get_value`](/api_docs/python/tf/keras/backend/batch_get_value)

    
    
    tf.keras.backend.batch_get_value(tensors)
    

#### Arguments:

  * **`tensors`** : list of ops to run.

#### Returns:

A list of Numpy arrays.

#### Raises:

  * **`RuntimeError`** : If this method is called inside defun.

