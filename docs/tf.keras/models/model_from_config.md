[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/models/model_from_config) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/saving/model_config.py#L34-L55)  
  
  
Instantiates a Keras model from its config.

### Aliases:

  * [`tf.compat.v1.keras.models.model_from_config`](/api_docs/python/tf/keras/models/model_from_config)
  * [`tf.compat.v2.keras.models.model_from_config`](/api_docs/python/tf/keras/models/model_from_config)

    
    
    tf.keras.models.model_from_config(
        config,
        custom_objects=None
    )
    

#### Arguments:

  * **`config`** : Configuration dictionary.
  * **`custom_objects`** : Optional dictionary mapping names (strings) to custom classes or functions to be considered during deserialization.

#### Returns:

A Keras model instance (uncompiled).

#### Raises:

  * **`TypeError`** : if `config` is not a dictionary.

