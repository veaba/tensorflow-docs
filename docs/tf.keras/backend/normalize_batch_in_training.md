[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/normalize_batch_in_training)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L2584-L2611)  
  
  
Computes mean and std for batch then apply batch_normalization on batch.

### Aliases:

  * [`tf.compat.v1.keras.backend.normalize_batch_in_training`](/api_docs/python/tf/keras/backend/normalize_batch_in_training)
  * [`tf.compat.v2.keras.backend.normalize_batch_in_training`](/api_docs/python/tf/keras/backend/normalize_batch_in_training)

    
    
    tf.keras.backend.normalize_batch_in_training(
        x,
        gamma,
        beta,
        reduction_axes,
        epsilon=0.001
    )
    

#### Arguments:

  * **`x`** : Input tensor or variable.
  * **`gamma`** : Tensor by which to scale the input.
  * **`beta`** : Tensor with which to center the input.
  * **`reduction_axes`** : iterable of integers, axes over which to normalize.
  * **`epsilon`** : Fuzz factor.

#### Returns:

A tuple length of 3, `(normalized_tensor, mean, variance)`.

