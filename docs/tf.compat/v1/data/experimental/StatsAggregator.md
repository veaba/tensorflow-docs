## Class StatsAggregator
A stateful resource that aggregates statistics from one or more iterators.
[tf.data.Dataset](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset)To record statistics, use one of the custom transformation functions defined in this module when defining your . All statistics will be aggregated by the StatsAggregator that is associated with a particular iterator (see below). For example, to record the latency of producing each element by iterating over a dataset:


```
 dataset = ...
dataset = dataset.apply(tf.data.experimental.latency_stats("total_bytes"))
```
[tf.data.Dataset](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset)To associate a StatsAggregator with a  object, use the following pattern:


```
 aggregator = tf.data.experimental.StatsAggregator()
dataset = ...

# Apply `StatsOptions` to associate `dataset` with `aggregator`.
options = tf.data.Options()
options.experimental_stats.aggregator = aggregator
dataset = dataset.with_options(options)
```
To get a protocol buffer summary of the currently aggregated statistics, use the StatsAggregator.get_summary() tensor. The easiest way to do this is to add the returned tensor to the tf.GraphKeys.SUMMARIES collection, so that the summaries will be included with any existing summaries.

```
 aggregator = tf.data.experimental.StatsAggregator()
# ...
stats_summary = aggregator.get_summary()
tf.compat.v1.add_to_collection(tf.GraphKeys.SUMMARIES, stats_summary)
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/stats_aggregator.py#L126-L128)


```
 __init__()
```
Creates a StatsAggregator.
## Methods
### get_summary
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/stats_aggregator.py#L130-L140)


```
 get_summary()
```
[tf.Tensor](https://tensorflow.google.cn/api_docs/python/tf/Tensor)Returns a string  that summarizes the aggregated statistics.

[tf.compat.v1.summary.Summary](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Summary)The returned tensor will contain a serialized  protocol buffer, which can be used with the standard TensorBoard logging facilities.

#### Returns:
[tf.Tensor](https://tensorflow.google.cn/api_docs/python/tf/Tensor)A scalar string  that summarizes the aggregated statistics.

