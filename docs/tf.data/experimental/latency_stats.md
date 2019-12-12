Records the latency of producing each element of the input dataset.

**Aliases** : [ `tf.compat.v1.data.experimental.latency_stats` ](/api_docs/python/tf/data/experimental/latency_stats), [ `tf.compat.v2.data.experimental.latency_stats` ](/api_docs/python/tf/data/experimental/latency_stats)

```
 tf.data.experimental.latency_stats(tag)
 
```

To consume the statistics, associate a  `StatsAggregator`  with the outputdataset.

#### Args:
- **`tag`** : String. All statistics recorded by the returned transformation willbe associated with the given  `tag` .


#### Returns:
A  `Dataset`  transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

