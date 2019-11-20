[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/optimizers/get) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizers.py#L820-L850)  
  
  
Retrieves a Keras Optimizer instance.

### Aliases:

  * [`tf.compat.v1.keras.optimizers.get`](/api_docs/python/tf/keras/optimizers/get)
  * [`tf.compat.v2.keras.optimizers.get`](/api_docs/python/tf/keras/optimizers/get)
  * [`tf.compat.v2.optimizers.get`](/api_docs/python/tf/keras/optimizers/get)
  * [`tf.optimizers.get`](/api_docs/python/tf/keras/optimizers/get)

    
    
    tf.keras.optimizers.get(identifier)
    

#### Arguments:

  * **`identifier`** : Optimizer identifier, one of 
    * String: name of an optimizer
    * Dictionary: configuration dictionary. - Keras Optimizer instance (it will be returned unchanged). - TensorFlow Optimizer instance (it will be wrapped as a Keras Optimizer).

#### Returns:

A Keras Optimizer instance.

#### Raises:

  * **`ValueError`** : If `identifier` cannot be interpreted.

