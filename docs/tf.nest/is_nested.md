[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/nest/is_nested) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/nest.py#L217-L228)  
  
  
Returns true if its input is a collections.abc.Sequence (except strings).

### Aliases:

  * [`tf.compat.v1.nest.is_nested`](/api_docs/python/tf/nest/is_nested)
  * [`tf.compat.v2.nest.is_nested`](/api_docs/python/tf/nest/is_nested)

    
    
    tf.nest.is_nested(seq)
    

#### Args:

  * **`seq`** : an input sequence.

#### Returns:

True if the sequence is a not a string and is a collections.abc.Sequence or a
dict.

