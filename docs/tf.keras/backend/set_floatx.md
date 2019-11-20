[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/set_floatx) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend_config.py#L77-L92)  
---|---  
  
Sets the default float type.

### Aliases:

  * [`tf.compat.v1.keras.backend.set_floatx`](/api_docs/python/tf/keras/backend/set_floatx)
  * [`tf.compat.v2.keras.backend.set_floatx`](/api_docs/python/tf/keras/backend/set_floatx)

    
    
    tf.keras.backend.set_floatx(value)
    

#### Arguments:

  * **`value`** : String; 'float16', 'float32', or 'float64'. Example: `python from keras import backend as K K.floatx() >>> 'float32' K.set_floatx('float16') K.floatx() >>> 'float16'`

#### Raises:

  * **`ValueError`** : In case of invalid value.

