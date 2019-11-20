[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/to_variant) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2447-L2457)  
  
  
Returns a variant representing the given dataset.

### Aliases:

  * [`tf.compat.v1.data.experimental.to_variant`](/api_docs/python/tf/data/experimental/to_variant)
  * [`tf.compat.v2.data.experimental.to_variant`](/api_docs/python/tf/data/experimental/to_variant)

    
    
    tf.data.experimental.to_variant(dataset)
    

#### Args:

  * **`dataset`** : A [`tf.data.Dataset`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset).

#### Returns:

A scalar
[`tf.variant`](https://tensorflow.google.cn/api_docs/python/tf#variant) tensor
representing the given dataset.

