[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/moving_average_update)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L1610-L1629)  
---|---  
  
Compute the moving average of a variable.

### Aliases:

  * [`tf.compat.v1.keras.backend.moving_average_update`](/api_docs/python/tf/keras/backend/moving_average_update)
  * [`tf.compat.v2.keras.backend.moving_average_update`](/api_docs/python/tf/keras/backend/moving_average_update)

    
    
    tf.keras.backend.moving_average_update(
        x,
        value,
        momentum
    )
    

#### Arguments:

  * **`x`** : A Variable.
  * **`value`** : A tensor with the same shape as `variable`.
  * **`momentum`** : The moving average momentum.

#### Returns:

An Operation to update the variable.

