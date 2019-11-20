[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/optimizers/deserialize) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizers.py#L785-L817)  
---|---  
  
Inverse of the `serialize` function.

### Aliases:

  * [`tf.compat.v1.keras.optimizers.deserialize`](/api_docs/python/tf/keras/optimizers/deserialize)
  * [`tf.compat.v2.keras.optimizers.deserialize`](/api_docs/python/tf/keras/optimizers/deserialize)
  * [`tf.compat.v2.optimizers.deserialize`](/api_docs/python/tf/keras/optimizers/deserialize)
  * [`tf.optimizers.deserialize`](/api_docs/python/tf/keras/optimizers/deserialize)

    
    
    tf.keras.optimizers.deserialize(
        config,
        custom_objects=None
    )
    

#### Arguments:

  * **`config`** : Optimizer configuration dictionary.
  * **`custom_objects`** : Optional dictionary mapping names (strings) to custom objects (classes and functions) to be considered during deserialization.

#### Returns:

A Keras Optimizer instance.

