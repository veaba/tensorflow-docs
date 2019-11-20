[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/random_uniform) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L5577-L5598)  
---|---  
  
Returns a tensor with uniform distribution of values.

### Aliases:

  * [`tf.compat.v1.keras.backend.random_uniform`](/api_docs/python/tf/keras/backend/random_uniform)
  * [`tf.compat.v2.keras.backend.random_uniform`](/api_docs/python/tf/keras/backend/random_uniform)

    
    
    tf.keras.backend.random_uniform(
        shape,
        minval=0.0,
        maxval=1.0,
        dtype=None,
        seed=None
    )
    

#### Arguments:

  * **`shape`** : A tuple of integers, the shape of tensor to create.
  * **`minval`** : A float, lower boundary of the uniform distribution to draw samples.
  * **`maxval`** : A float, upper boundary of the uniform distribution to draw samples.
  * **`dtype`** : String, dtype of returned tensor.
  * **`seed`** : Integer, random seed.

#### Returns:

A tensor.

