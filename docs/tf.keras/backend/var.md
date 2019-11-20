[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/var) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L2060-L2077)  
---|---  
  
Variance of a tensor, alongside the specified axis.

### Aliases:

  * [`tf.compat.v1.keras.backend.var`](/api_docs/python/tf/keras/backend/var)
  * [`tf.compat.v2.keras.backend.var`](/api_docs/python/tf/keras/backend/var)

    
    
    tf.keras.backend.var(
        x,
        axis=None,
        keepdims=False
    )
    

#### Arguments:

  * **`x`** : A tensor or variable.
  * **`axis`** : An integer, the axis to compute the variance.
  * **`keepdims`** : A boolean, whether to keep the dimensions or not. If `keepdims` is `False`, the rank of the tensor is reduced by 1. If `keepdims` is `True`, the reduced dimension is retained with length 1.

#### Returns:

A tensor with the variance of elements of `x`.

