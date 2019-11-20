[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/losses/KLD) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L997-L1032)  
  
  
Computes Kullback-Leibler divergence loss between `y_true` and `y_pred`.

### Aliases:

  * [`tf.compat.v1.keras.losses.KLD`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v1.keras.losses.kld`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v1.keras.losses.kullback_leibler_divergence`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v1.keras.metrics.KLD`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v1.keras.metrics.kld`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v1.keras.metrics.kullback_leibler_divergence`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v2.keras.losses.KLD`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v2.keras.losses.kld`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v2.keras.losses.kullback_leibler_divergence`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v2.keras.metrics.KLD`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v2.keras.metrics.kld`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v2.keras.metrics.kullback_leibler_divergence`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v2.losses.KLD`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v2.losses.kld`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v2.losses.kullback_leibler_divergence`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v2.metrics.KLD`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v2.metrics.kld`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.compat.v2.metrics.kullback_leibler_divergence`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.keras.losses.kld`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.keras.losses.kullback_leibler_divergence`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.keras.metrics.KLD`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.keras.metrics.kld`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.keras.metrics.kullback_leibler_divergence`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.losses.KLD`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.losses.kld`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.losses.kullback_leibler_divergence`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.metrics.KLD`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.metrics.kld`](/api_docs/python/tf/keras/losses/KLD)
  * [`tf.metrics.kullback_leibler_divergence`](/api_docs/python/tf/keras/losses/KLD)

    
    
    tf.keras.losses.KLD(
        y_true,
        y_pred
    )
    

`loss = y_true * log(y_true / y_pred)`

See: https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence

#### Usage:

    
    
    loss = tf.keras.losses.KLD([.4, .9, .2], [.5, .8, .12])
    print('Loss: ', loss.numpy())  # Loss: 0.11891246
    

#### Args:

  * **`y_true`** : Tensor of true targets.
  * **`y_pred`** : Tensor of predicted targets.

#### Returns:

A `Tensor` with loss.

#### Raises:

  * **`TypeError`** : If `y_true` cannot be cast to the `y_pred.dtype`.

