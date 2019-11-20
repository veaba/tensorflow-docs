[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/all) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L2136-L2149)  
---|---  
  
Bitwise reduction (logical AND).

### Aliases:

  * [`tf.compat.v1.keras.backend.all`](/api_docs/python/tf/keras/backend/all)
  * [`tf.compat.v2.keras.backend.all`](/api_docs/python/tf/keras/backend/all)

    
    
    tf.keras.backend.all(  
        x,  
        axis=None,  
        keepdims=False  
    )  
    

#### Arguments:

  * **`x`** : Tensor or variable.
  * **`axis`** : axis along which to perform the reduction.
  * **`keepdims`** : whether the drop or broadcast the reduction axes.

#### Returns:

A uint8 tensor (0s and 1s).

