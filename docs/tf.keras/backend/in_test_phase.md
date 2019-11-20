[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/in_test_phase) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L4289-L4307)  
---|---  
  
Selects `x` in test phase, and `alt` otherwise.

### Aliases:

  * [`tf.compat.v1.keras.backend.in_test_phase`](/api_docs/python/tf/keras/backend/in_test_phase)
  * [`tf.compat.v2.keras.backend.in_test_phase`](/api_docs/python/tf/keras/backend/in_test_phase)

    
    
    tf.keras.backend.in_test_phase(
        x,
        alt,
        training=None
    )
    

Note that `alt` should have the _same shape_ as `x`.

#### Arguments:

  * **`x`** : What to return in test phase (tensor or callable that returns a tensor).
  * **`alt`** : What to return otherwise (tensor or callable that returns a tensor).
  * **`training`** : Optional scalar tensor (or Python boolean, or Python integer) specifying the learning phase.

#### Returns:

Either `x` or `alt` based on `K.learning_phase`.

