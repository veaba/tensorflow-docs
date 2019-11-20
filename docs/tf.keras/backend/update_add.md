[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/update_add) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L1582-L1593)  
---|---  
  
Update the value of `x` by adding `increment`.

### Aliases:

  * [`tf.compat.v1.keras.backend.update_add`](/api_docs/python/tf/keras/backend/update_add)
  * [`tf.compat.v2.keras.backend.update_add`](/api_docs/python/tf/keras/backend/update_add)

    
    
    tf.keras.backend.update_add(
        x,
        increment
    )
    

#### Arguments:

  * **`x`** : A Variable.
  * **`increment`** : A tensor of same shape as `x`.

#### Returns:

The variable `x` updated.

