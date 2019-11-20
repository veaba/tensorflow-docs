[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/in_train_phase) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L4248-L4286)  
  
  
Selects `x` in train phase, and `alt` otherwise.

### Aliases:

  * [`tf.compat.v1.keras.backend.in_train_phase`](/api_docs/python/tf/keras/backend/in_train_phase)
  * [`tf.compat.v2.keras.backend.in_train_phase`](/api_docs/python/tf/keras/backend/in_train_phase)

    
    
    tf.keras.backend.in_train_phase(
        x,
        alt,
        training=None
    )
    

Note that `alt` should have the _same shape_ as `x`.

#### Arguments:

  * **`x`** : What to return in train phase (tensor or callable that returns a tensor).
  * **`alt`** : What to return otherwise (tensor or callable that returns a tensor).
  * **`training`** : Optional scalar tensor (or Python boolean, or Python integer) specifying the learning phase.

#### Returns:

Either `x` or `alt` based on the `training` flag. the `training` flag defaults
to `K.learning_phase()`.

