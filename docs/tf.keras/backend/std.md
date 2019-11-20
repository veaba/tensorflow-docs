[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/std) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L2080-L2097)  
  
  
Standard deviation of a tensor, alongside the specified axis.

### Aliases:

  * [`tf.compat.v1.keras.backend.std`](/api_docs/python/tf/keras/backend/std)
  * [`tf.compat.v2.keras.backend.std`](/api_docs/python/tf/keras/backend/std)

    
    
    tf.keras.backend.std(
        x,
        axis=None,
        keepdims=False
    )
    

### Used in the guide:

  * [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)

#### Arguments:

  * **`x`** : A tensor or variable.
  * **`axis`** : An integer, the axis to compute the standard deviation.
  * **`keepdims`** : A boolean, whether to keep the dimensions or not. If `keepdims` is `False`, the rank of the tensor is reduced by 1. If `keepdims` is `True`, the reduced dimension is retained with length 1.

#### Returns:

A tensor with the standard deviation of elements of `x`.

