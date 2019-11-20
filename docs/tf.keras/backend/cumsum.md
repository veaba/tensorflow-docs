[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/cumsum) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L2032-L2043)  
  
  
Cumulative sum of the values in a tensor, alongside the specified axis.

### Aliases:

  * [`tf.compat.v1.keras.backend.cumsum`](/api_docs/python/tf/keras/backend/cumsum)
  * [`tf.compat.v2.keras.backend.cumsum`](/api_docs/python/tf/keras/backend/cumsum)

    
    
    tf.keras.backend.cumsum(
        x,
        axis=0
    )
    

#### Arguments:

  * **`x`** : A tensor or variable.
  * **`axis`** : An integer, the axis to compute the sum.

#### Returns:

A tensor of the cumulative sum of values of `x` along `axis`.

