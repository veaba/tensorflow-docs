

## Class  `StatsOptions` 
Represents options for collecting dataset stats using  `StatsAggregator` .

**别名** : [ `tf.compat.v1.data.experimental.StatsOptions` ](/api_docs/python/tf/data/experimental/StatsOptions), [ `tf.compat.v2.data.experimental.StatsOptions` ](/api_docs/python/tf/data/experimental/StatsOptions)

You can set the stats options of a dataset through the  `experimental_stats` property of [ `tf.data.Options` ](https://tensorflow.google.cn/api_docs/python/tf/data/Options); the property is an instance of[ `tf.data.experimental.StatsOptions` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/StatsOptions). For example, to collect latency statson all dataset edges, use the following pattern:

```
 aggregator = tf.data.experimental.StatsAggregator()

options = tf.data.Options()
options.experimental_stats.aggregator = aggregator
options.experimental_stats.latency_all_edges = True
dataset = dataset.with_options(options)
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L33-L35)

```
 __init__()
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 属性


###  `aggregator` 
将给定的统计聚合器与数据集管道关联。

###  `counter_prefix` 
记录为计数器的统计信息的前缀。

###  `latency_all_edges` 
是否在所有边上添加延迟度量。默认为false。

###  `prefix` 
Prefix to prepend all statistics recorded for the input  `dataset`  with.

## 方法


###  `__eq__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L37-L43)

```
 __eq__(other)
 
```

Return self==value.

###  `__ne__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L45-L49)

```
 __ne__(other)
 
```

Return self!=value.

