[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/gather) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L1943-L1954)  
---|---  
  
Retrieves the elements of indices `indices` in the tensor `reference`.

### Aliases:

  * [`tf.compat.v1.keras.backend.gather`](/api_docs/python/tf/keras/backend/gather)
  * [`tf.compat.v2.keras.backend.gather`](/api_docs/python/tf/keras/backend/gather)

    
    
    tf.keras.backend.gather(
        reference,
        indices
    )
    

#### Arguments:

  * **`reference`** : A tensor.
  * **`indices`** : An integer tensor of indices.

#### Returns:

A tensor of same type as `reference`.

