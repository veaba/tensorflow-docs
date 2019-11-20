[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/random_normal) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L5554-L5574)  
---|---  
  
Returns a tensor with normal distribution of values.

### Aliases:

  * [`tf.compat.v1.keras.backend.random_normal`](/api_docs/python/tf/keras/backend/random_normal)
  * [`tf.compat.v2.keras.backend.random_normal`](/api_docs/python/tf/keras/backend/random_normal)

    
    
    tf.keras.backend.random_normal(
        shape,
        mean=0.0,
        stddev=1.0,
        dtype=None,
        seed=None
    )
    

### Used in the guide:

  * [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)

#### Arguments:

  * **`shape`** : A tuple of integers, the shape of tensor to create.
  * **`mean`** : A float, mean of the normal distribution to draw samples.
  * **`stddev`** : A float, standard deviation of the normal distribution to draw samples.
  * **`dtype`** : String, dtype of returned tensor.
  * **`seed`** : Integer, random seed.

#### Returns:

A tensor.

