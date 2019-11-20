[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/deserialize) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/serialization.py#L66-L102)  
  
  
Instantiates a layer from a config dictionary.

### Aliases:

  * [`tf.compat.v1.keras.layers.deserialize`](/api_docs/python/tf/keras/layers/deserialize)
  * [`tf.compat.v2.keras.layers.deserialize`](/api_docs/python/tf/keras/layers/deserialize)

    
    
    tf.keras.layers.deserialize(
        config,
        custom_objects=None
    )
    

#### Arguments:

  * **`config`** : dict of the form {'class_name': str, 'config': dict}
  * **`custom_objects`** : dict mapping class names (or function names) of custom (non-Keras) objects to class/functions

#### Returns:

Layer instance (may be Model, Sequential, Network, Layer...)

