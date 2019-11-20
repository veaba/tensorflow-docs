[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/gradients) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L3785-L3797)  
  
  
Returns the gradients of `loss` w.r.t. `variables`.

### Aliases:

  * [`tf.compat.v1.keras.backend.gradients`](/api_docs/python/tf/keras/backend/gradients)
  * [`tf.compat.v2.keras.backend.gradients`](/api_docs/python/tf/keras/backend/gradients)

    
    
    tf.keras.backend.gradients(
        loss,
        variables
    )
    

#### Arguments:

  * **`loss`** : Scalar tensor to minimize.
  * **`variables`** : List of variables.

#### Returns:

A gradients tensor.

