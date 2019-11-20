[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/sparse_categorical_crossentropy)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L4480-L4555)  
---|---  
  
Categorical crossentropy with integer targets.

### Aliases:

  * [`tf.compat.v1.keras.backend.sparse_categorical_crossentropy`](/api_docs/python/tf/keras/backend/sparse_categorical_crossentropy)
  * [`tf.compat.v2.keras.backend.sparse_categorical_crossentropy`](/api_docs/python/tf/keras/backend/sparse_categorical_crossentropy)

    
    
    tf.keras.backend.sparse_categorical_crossentropy(
        target,
        output,
        from_logits=False,
        axis=-1
    )
    

#### Arguments:

  * **`target`** : An integer tensor.
  * **`output`** : A tensor resulting from a softmax (unless `from_logits` is True, in which case `output` is expected to be the logits).
  * **`from_logits`** : Boolean, whether `output` is the result of a softmax, or is a tensor of logits.
  * **`axis`** : Int specifying the channels axis. `axis=-1` corresponds to data format `channels_last', and`axis=1`corresponds to data format`channels_first`.

#### Returns:

Output tensor.

#### Raises:

  * **`ValueError`** : if `axis` is neither -1 nor one of the axes of `output`.

