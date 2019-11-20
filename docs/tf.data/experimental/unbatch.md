[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/unbatch) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/batching.py#L202-L229)  
---|---  
  
Splits elements of a dataset into multiple elements on the batch dimension.
(deprecated)

### Aliases:

  * [`tf.compat.v1.data.experimental.unbatch`](/api_docs/python/tf/data/experimental/unbatch)
  * [`tf.compat.v2.data.experimental.unbatch`](/api_docs/python/tf/data/experimental/unbatch)

    
    
    tf.data.experimental.unbatch()
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Use
[`tf.data.Dataset.unbatch()`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#unbatch).

For example, if elements of the dataset are shaped `[B, a0, a1, ...]`, where
`B` may vary for each input element, then for each element in the dataset, the
unbatched dataset will contain `B` consecutive elements of shape `[a0, a1,
...]`.

    
    
    # NOTE: The following example uses `{ ... }` to represent the contents
    # of a dataset.
    a = { ['a', 'b', 'c'], ['a', 'b'], ['a', 'b', 'c', 'd'] }
    
    a.apply(tf.data.experimental.unbatch()) == {
        'a', 'b', 'c', 'a', 'b', 'a', 'b', 'c', 'd'}
    

#### Returns:

A `Dataset` transformation function, which can be passed to
[`tf.data.Dataset.apply`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

