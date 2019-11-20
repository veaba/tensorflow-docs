[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/truncated_normal) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L5627-L5651)  
---|---  
  
Returns a tensor with truncated random normal distribution of values.

### Aliases:

  * [`tf.compat.v1.keras.backend.truncated_normal`](/api_docs/python/tf/keras/backend/truncated_normal)
  * [`tf.compat.v2.keras.backend.truncated_normal`](/api_docs/python/tf/keras/backend/truncated_normal)

    
    
    tf.keras.backend.truncated_normal(
        shape,
        mean=0.0,
        stddev=1.0,
        dtype=None,
        seed=None
    )
    

The generated values follow a normal distribution with specified mean and
standard deviation, except that values whose magnitude is more than two
standard deviations from the mean are dropped and re-picked.

#### Arguments:

  * **`shape`** : A tuple of integers, the shape of tensor to create.
  * **`mean`** : Mean of the values.
  * **`stddev`** : Standard deviation of the values.
  * **`dtype`** : String, dtype of returned tensor.
  * **`seed`** : Integer, random seed.

#### Returns:

A tensor.

