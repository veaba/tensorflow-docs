[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/take_while) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/take_while_ops.py#L55-L72)  
---|---  
  
A transformation that stops dataset iteration based on a `predicate`.

### Aliases:

  * [`tf.compat.v1.data.experimental.take_while`](/api_docs/python/tf/data/experimental/take_while)
  * [`tf.compat.v2.data.experimental.take_while`](/api_docs/python/tf/data/experimental/take_while)

    
    
    tf.data.experimental.take_while(predicate)
    

#### Args:

  * **`predicate`** : A function that maps a nested structure of tensors (having shapes and types defined by `self.output_shapes` and `self.output_types`) to a scalar [`tf.bool`](https://tensorflow.google.cn/api_docs/python/tf#bool) tensor.

#### Returns:

A `Dataset` transformation function, which can be passed to
[`tf.data.Dataset.apply`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

