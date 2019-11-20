[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/round) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L2269-L2281)  
  
  
Element-wise rounding to the closest integer.

### Aliases:

  * [`tf.compat.v1.keras.backend.round`](/api_docs/python/tf/keras/backend/round)
  * [`tf.compat.v2.keras.backend.round`](/api_docs/python/tf/keras/backend/round)

    
    
    tf.keras.backend.round(x)
    

In case of tie, the rounding mode used is "half to even".

#### Arguments:

  * **`x`** : Tensor or variable.

#### Returns:

A tensor.

