[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/latency_stats) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/stats_ops.py#L74-L94)  
  
  
Records the latency of producing each element of the input dataset.

### Aliases:

  * [`tf.compat.v1.data.experimental.latency_stats`](/api_docs/python/tf/data/experimental/latency_stats)
  * [`tf.compat.v2.data.experimental.latency_stats`](/api_docs/python/tf/data/experimental/latency_stats)

    
    
    tf.data.experimental.latency_stats(tag)
    

To consume the statistics, associate a `StatsAggregator` with the output
dataset.

#### Args:

  * **`tag`** : String. All statistics recorded by the returned transformation will be associated with the given `tag`.

#### Returns:

A `Dataset` transformation function, which can be passed to
[`tf.data.Dataset.apply`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

