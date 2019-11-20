[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/categorical_crossentropy)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L4425-L4477)  
  
  
Categorical crossentropy between an output tensor and a target tensor.

### Aliases:

  * [`tf.compat.v1.keras.backend.categorical_crossentropy`](/api_docs/python/tf/keras/backend/categorical_crossentropy)
  * [`tf.compat.v2.keras.backend.categorical_crossentropy`](/api_docs/python/tf/keras/backend/categorical_crossentropy)

    
    
    tf.keras.backend.categorical_crossentropy(
        target,
        output,
        from_logits=False,
        axis=-1
    )
    

#### Arguments:

  * **`target`** : A tensor of the same shape as `output`.
  * **`output`** : A tensor resulting from a softmax (unless `from_logits` is True, in which case `output` is expected to be the logits).
  * **`from_logits`** : Boolean, whether `output` is the result of a softmax, or is a tensor of logits.
  * **`axis`** : Int specifying the channels axis. `axis=-1` corresponds to data format `channels_last', and`axis=1`corresponds to data format`channels_first`.

#### Returns:

Output tensor.

#### Raises:

  * **`ValueError`** : if `axis` is neither -1 nor one of the axes of `output`.

#### Example:

    
    
        import tensorflow as tf
        from tensorflow.keras import backend as K
        a = tf.constant([1., 0., 0., 0., 1., 0., 0., 0., 1.], shape=[3,3])
        print("a: ", a)
        b = tf.constant([.9, .05, .05, .5, .89, .6, .05, .01, .94], shape=[3,3])
        print("b: ", b)
        loss = K.categorical_crossentropy(a, b)
        print('Loss: ', loss) #Loss: tf.Tensor([0.10536055 0.8046684  0.06187541], shape=(3,), dtype=float32)
        loss = K.categorical_crossentropy(a, a)
        print('Loss: ', loss) #Loss:  tf.Tensor([1.1920929e-07 1.1920929e-07 1.1920929e-07], shape=(3,), dtype=float32)
    

