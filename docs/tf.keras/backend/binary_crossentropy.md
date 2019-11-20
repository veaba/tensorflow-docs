[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/binary_crossentropy)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L4558-L4588)  
---|---  
  
Binary crossentropy between an output tensor and a target tensor.

### Aliases:

  * [`tf.compat.v1.keras.backend.binary_crossentropy`](/api_docs/python/tf/keras/backend/binary_crossentropy)
  * [`tf.compat.v2.keras.backend.binary_crossentropy`](/api_docs/python/tf/keras/backend/binary_crossentropy)

    
    
    tf.keras.backend.binary_crossentropy(
        target,
        output,
        from_logits=False
    )
    

#### Arguments:

  * **`target`** : A tensor with the same shape as `output`.
  * **`output`** : A tensor.
  * **`from_logits`** : Whether `output` is expected to be a logits tensor. By default, we consider that `output` encodes a probability distribution.

#### Returns:

A tensor.

