

## Class  `StatsAggregator` 
从一个或多个迭代器聚合统计信息的有状态资源。

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

To get a protocol buffer summary of the currently aggregated statistics,use the  `StatsAggregator.get_summary()`  tensor. The easiest way to do thisis to add the returned tensor to the  `tf.GraphKeys.SUMMARIES`  collection,so that the summaries will be included with any existing summaries.

```
 aggregator = tf.data.experimental.StatsAggregator()
# ...
stats_summary = aggregator.get_summary()
tf.compat.v1.add_to_collection(tf.GraphKeys.SUMMARIES, stats_summary)
 
```


**Note:**  This interface is experimental and expected to change. In particular,we expect to add other implementations of  `StatsAggregator`  that providedifferent ways of exporting statistics, and add more types of statistics.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/stats_aggregator.py#L126-L128)

```
 __init__()
 
```

Creates a  `StatsAggregator` .

## 方法


###  `get_summary` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/stats_aggregator.py#L130-L140)

```
 get_summary()
 
```

Returns a string [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) that summarizes the aggregated statistics.

The returned tensor will contain a serialized [ `tf.compat.v1.summary.Summary` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Summary)protocolbuffer, which can be used with the standard TensorBoard logging facilities.

#### 返回：
A scalar string [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) that summarizes the aggregated statistics.

