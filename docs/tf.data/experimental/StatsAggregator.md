## Class StatsAggregator
A stateful resource that aggregates statistics from one or more iterators.
### Aliases:
- Class `tf.compat.v2.data.experimental.StatsAggregator`
To record statistics, use one of the custom transformation functions defined in this module when defining your `tf.data.Dataset`. All statistics will be aggregated by the `StatsAggregator` that is associated with a particular iterator (see below). For example, to record the latency of producing each element by iterating over a dataset:

```
 dataset = ...
dataset = dataset.apply(tf.data.experimental.latency_stats("total_bytes"))
```
To associate a `StatsAggregator` with a `tf.data.Dataset` object, use the following pattern:

```
 aggregator = tf.data.experimental.StatsAggregator()
dataset = ...

# Apply `StatsOptions` to associate `dataset` with `aggregator`.
options = tf.data.Options()
options.experimental_stats.aggregator = aggregator
dataset = dataset.with_options(options)
```
## __init__
View source

```
 __init__()
```
Initialize self. See help(type(self)) for accurate signature.
