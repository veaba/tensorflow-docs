[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/one_hot) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L3215-L3231)  
  
  
Computes the one-hot representation of an integer tensor.

### Aliases:

  * [`tf.compat.v1.keras.backend.one_hot`](/api_docs/python/tf/keras/backend/one_hot)
  * [`tf.compat.v2.keras.backend.one_hot`](/api_docs/python/tf/keras/backend/one_hot)

    
    
    tf.keras.backend.one_hot(
        indices,
        num_classes
    )
    

#### Arguments:

  * **`indices`** : nD integer tensor of shape `(batch_size, dim1, dim2, ... dim(n-1))`
  * **`num_classes`** : Integer, number of classes to consider.

#### Returns:

(n + 1)D one hot representation of the input with shape `(batch_size, dim1,
dim2, ... dim(n-1), num_classes)`

#### Returns:

The one-hot tensor.

