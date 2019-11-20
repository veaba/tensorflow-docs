[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/in_top_k) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L4673-L4687)  
---|---  
  
Returns whether the `targets` are in the top `k` `predictions`.

### Aliases:

  * [`tf.compat.v1.keras.backend.in_top_k`](/api_docs/python/tf/keras/backend/in_top_k)
  * [`tf.compat.v2.keras.backend.in_top_k`](/api_docs/python/tf/keras/backend/in_top_k)

    
    
    tf.keras.backend.in_top_k(
        predictions,
        targets,
        k
    )
    

#### Arguments:

  * **`predictions`** : A tensor of shape `(batch_size, classes)` and type `float32`.
  * **`targets`** : A 1D tensor of length `batch_size` and type `int32` or `int64`.
  * **`k`** : An `int`, number of top elements to consider.

#### Returns:

A 1D tensor of length `batch_size` and type `bool`. `output[i]` is `True` if
`predictions[i, targets[i]]` is within top-`k` values of `predictions[i]`.

