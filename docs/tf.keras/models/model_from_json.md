[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/models/model_from_json) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/saving/model_config.py#L81-L96)  
  
  
Parses a JSON model configuration file and returns a model instance.

### Aliases:

  * [`tf.compat.v1.keras.models.model_from_json`](/api_docs/python/tf/keras/models/model_from_json)
  * [`tf.compat.v2.keras.models.model_from_json`](/api_docs/python/tf/keras/models/model_from_json)

    
    
    tf.keras.models.model_from_json(
        json_string,
        custom_objects=None
    )
    

### Used in the guide:

  * [Save and serialize models with Keras](https://tensorflow.google.cn/guide/keras/save_and_serialize)
  * [Keras overview](https://tensorflow.google.cn/guide/keras/overview)

#### Arguments:

  * **`json_string`** : JSON string encoding a model configuration.
  * **`custom_objects`** : Optional dictionary mapping names (strings) to custom classes or functions to be considered during deserialization.

#### Returns:

A Keras model instance (uncompiled).

