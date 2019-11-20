[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/prod) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L2014-L2029)  
---|---  
  
Multiplies the values in a tensor, alongside the specified axis.

### Aliases:

  * [`tf.compat.v1.keras.backend.prod`](/api_docs/python/tf/keras/backend/prod)
  * [`tf.compat.v2.keras.backend.prod`](/api_docs/python/tf/keras/backend/prod)

    
    
    tf.keras.backend.prod(
        x,
        axis=None,
        keepdims=False
    )
    

#### Arguments:

  * **`x`** : A tensor or variable.
  * **`axis`** : An integer, the axis to compute the product.
  * **`keepdims`** : A boolean, whether to keep the dimensions or not. If `keepdims` is `False`, the rank of the tensor is reduced by 1. If `keepdims` is `True`, the reduced dimension is retained with length 1.

#### Returns:

A tensor with the product of elements of `x`.

