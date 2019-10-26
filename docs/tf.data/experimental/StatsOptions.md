## Class StatsOptions
Represents options for collecting dataset stats using StatsAggregator.
### Aliases:
- Class tf.compat.v1.data.experimental.StatsOptions
- Class tf.compat.v2.data.experimental.StatsOptions
[tf.data.Options](https://tensorflow.google.cn/api_docs/python/tf/data/Options)You can set the stats options of a dataset through the experimental_stats property of ; the property is an instance of tf.data.experimental.StatsOptions. For example, to collect latency stats on all dataset edges, use the following pattern:


```
 aggregator = tf.data.experimental.StatsAggregator()

options = tf.data.Options()
options.experimental_stats.aggregator = aggregator
options.experimental_stats.latency_all_edges = True
dataset = dataset.with_options(options)
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L33-L35)


```
 __init__()
```
Initialize self. See help(type(self)) for accurate signature.
## Properties
### aggregator
Associates the given statistics aggregator with the dataset pipeline.
### counter_prefix
Prefix for the statistics recorded as counter.
### latency_all_edges
Whether to add latency measurements on all edges. Defaults to False.
### prefix
Prefix to prepend all statistics recorded for the input dataset with.
## Methods
### __eq__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L37-L43)


```
 __eq__(other)
```
Return self==value.
### __ne__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L45-L49)


```
 __ne__(other)
```
Return self!=value.
