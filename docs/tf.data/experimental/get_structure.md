[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/get_structure) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2109-L2128)  
---|---  
  
Returns the type specification of an element of a `Dataset` or `Iterator`.

### Aliases:

  * [`tf.compat.v1.data.experimental.get_structure`](/api_docs/python/tf/data/experimental/get_structure)
  * [`tf.compat.v2.data.experimental.get_structure`](/api_docs/python/tf/data/experimental/get_structure)

    
    
    tf.data.experimental.get_structure(dataset_or_iterator)
    

#### Args:

  * **`dataset_or_iterator`** : A [`tf.data.Dataset`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) or `tf.data.Iterator`.

#### Returns:

A nested structure of
[`tf.TypeSpec`](https://tensorflow.google.cn/api_docs/python/tf/TypeSpec)
objects matching the structure of an element of `dataset_or_iterator` and
spacifying the type of individal components.

#### Raises:

  * **`TypeError`** : If `dataset_or_iterator` is not a `Dataset` or `Iterator` object.

