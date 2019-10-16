## Class StatsAggregator

A stateful resource that aggregates statistics from one or more iterators.
### Aliases:
- Class `tf.compat.v2.data.experimental.StatsAggregator`
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)To record statistics, use one of the custom transformation functions defined in this module when defining your . All statistics will be aggregated by the StatsAggregator that is associated with a particular iterator (see below). For example, to record the latency of producing each element by iterating over a dataset:


```
 dataset = ...
dataset = dataset.apply(tf.data.experimental.latency_stats("total_bytes"))
```
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)To associate a StatsAggregator with a  object, use the following pattern:


```
 aggregator = tf.data.experimental.StatsAggregator()
dataset = ...

# Apply `StatsOptions` to associate `dataset` with `aggregator`.
options = tf.data.Options()
options.experimental_stats.aggregator = aggregator
dataset = dataset.with_options(options)
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/stats_aggregator.py#L63-L78)


```
 __init__()
```

Initialize self. See help(type(self)) for accurate signature.
