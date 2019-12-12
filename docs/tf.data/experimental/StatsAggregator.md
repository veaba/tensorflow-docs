

## Class  `StatsAggregator` 
A stateful resource that aggregates statistics from one or more iterators.

To record statistics, use one of the custom transformation functions definedin this module when defining your [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset). All statistics will beaggregated by the  `StatsAggregator`  that is associated with a particulariterator (see below). For example, to record the latency of producing eachelement by iterating over a dataset:

```
 dataset = ...
dataset = dataset.apply(tf.data.experimental.latency_stats("total_bytes"))
 
```

To associate a  `StatsAggregator`  with a [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) object, usethe following pattern:

```
 aggregator = tf.data.experimental.StatsAggregator()
dataset = ...

# Apply `StatsOptions` to associate `dataset` with `aggregator`.
options = tf.data.Options()
options.experimental_stats.aggregator = aggregator
dataset = dataset.with_options(options)
 
```


**Note:**  This interface is experimental and expected to change. In particular,we expect to add other implementations of  `StatsAggregator`  that providedifferent ways of exporting statistics, and add more types of statistics.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/stats_aggregator.py#L63-L78)

```
 __init__()
 
```

Initialize self.  See help(type(self)) for accurate signature.

