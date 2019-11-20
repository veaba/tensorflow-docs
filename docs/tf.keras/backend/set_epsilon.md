[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/set_epsilon) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend_config.py#L47-L57)  
---|---  
  
Sets the value of the fuzz factor used in numeric expressions.

### Aliases:

  * [`tf.compat.v1.keras.backend.set_epsilon`](/api_docs/python/tf/keras/backend/set_epsilon)
  * [`tf.compat.v2.keras.backend.set_epsilon`](/api_docs/python/tf/keras/backend/set_epsilon)

    
    
    tf.keras.backend.set_epsilon(value)
    

#### Arguments:

  * **`value`** : float. New value of epsilon. Example: `python from keras import backend as K K.epsilon() >>> 1e-07 K.set_epsilon(1e-05) K.epsilon() >>> 1e-05`

