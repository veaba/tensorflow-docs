[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/losses/categorical_crossentropy)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L943-L971)  
---|---  
  
Computes the categorical crossentropy loss.

### Aliases:

  * [`tf.compat.v1.keras.losses.categorical_crossentropy`](/api_docs/python/tf/keras/losses/categorical_crossentropy)
  * [`tf.compat.v1.keras.metrics.categorical_crossentropy`](/api_docs/python/tf/keras/losses/categorical_crossentropy)
  * [`tf.compat.v2.keras.losses.categorical_crossentropy`](/api_docs/python/tf/keras/losses/categorical_crossentropy)
  * [`tf.compat.v2.keras.metrics.categorical_crossentropy`](/api_docs/python/tf/keras/losses/categorical_crossentropy)
  * [`tf.compat.v2.losses.categorical_crossentropy`](/api_docs/python/tf/keras/losses/categorical_crossentropy)
  * [`tf.compat.v2.metrics.categorical_crossentropy`](/api_docs/python/tf/keras/losses/categorical_crossentropy)
  * [`tf.keras.metrics.categorical_crossentropy`](/api_docs/python/tf/keras/losses/categorical_crossentropy)
  * [`tf.losses.categorical_crossentropy`](/api_docs/python/tf/keras/losses/categorical_crossentropy)
  * [`tf.metrics.categorical_crossentropy`](/api_docs/python/tf/keras/losses/categorical_crossentropy)

    
    
    tf.keras.losses.categorical_crossentropy(
        y_true,
        y_pred,
        from_logits=False,
        label_smoothing=0
    )
    

#### Args:

  * **`y_true`** : tensor of true targets.
  * **`y_pred`** : tensor of predicted targets.
  * **`from_logits`** : Whether `y_pred` is expected to be a logits tensor. By default, we assume that `y_pred` encodes a probability distribution.
  * **`label_smoothing`** : Float in [0, 1]. If > `0` then smooth the labels.

#### Returns:

Categorical crossentropy loss value.

