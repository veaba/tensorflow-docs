[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/get_next_as_optional)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/iterator_ops.py#L800-L820)  
---|---  
  
Returns an `Optional` that contains the next value from the iterator.

### Aliases:

  * [`tf.compat.v1.data.experimental.get_next_as_optional`](/api_docs/python/tf/data/experimental/get_next_as_optional)
  * [`tf.compat.v2.data.experimental.get_next_as_optional`](/api_docs/python/tf/data/experimental/get_next_as_optional)

    
    
    tf.data.experimental.get_next_as_optional(iterator)
    

If `iterator` has reached the end of the sequence, the returned `Optional`
will have no value.

#### Args:

  * **`iterator`** : A [`tf.compat.v1.data.Iterator`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/Iterator) object.

#### Returns:

An `Optional` object representing the next value from the iterator (if it has
one) or no value.

