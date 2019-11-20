[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/mean) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L2100-L2117)  
---|---  
  
Mean of a tensor, alongside the specified axis.

### Aliases:

  * [`tf.compat.v1.keras.backend.mean`](/api_docs/python/tf/keras/backend/mean)
  * [`tf.compat.v2.keras.backend.mean`](/api_docs/python/tf/keras/backend/mean)

    
    
    tf.keras.backend.mean(
        x,
        axis=None,
        keepdims=False
    )
    

#### Arguments:

  * **`x`** : A tensor or variable.
  * **`axis`** : A list of integer. Axes to compute the mean.
  * **`keepdims`** : A boolean, whether to keep the dimensions or not. If `keepdims` is `False`, the rank of the tensor is reduced by 1 for each entry in `axis`. If `keepdims` is `True`, the reduced dimensions are retained with length 1.

#### Returns:

A tensor with the mean of elements of `x`.

