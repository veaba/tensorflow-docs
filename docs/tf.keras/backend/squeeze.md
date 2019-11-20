[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/squeeze) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L3083-L3094)  
---|---  
  
Removes a 1-dimension from the tensor at index "axis".

### Aliases:

  * [`tf.compat.v1.keras.backend.squeeze`](/api_docs/python/tf/keras/backend/squeeze)
  * [`tf.compat.v2.keras.backend.squeeze`](/api_docs/python/tf/keras/backend/squeeze)

    
    
    tf.keras.backend.squeeze(
        x,
        axis
    )
    

#### Arguments:

  * **`x`** : A tensor or variable.
  * **`axis`** : Axis to drop.

#### Returns:

A tensor with the same data as `x` but reduced dimensions.

