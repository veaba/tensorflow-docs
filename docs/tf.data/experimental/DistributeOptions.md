

## Class  `DistributeOptions` 
表示分布式数据处理的选项。

**别名** : [ `tf.compat.v1.data.experimental.DistributeOptions` ](/api_docs/python/tf/data/experimental/DistributeOptions), [ `tf.compat.v2.data.experimental.DistributeOptions` ](/api_docs/python/tf/data/experimental/DistributeOptions)

You can set the distribution options of a dataset through the `experimental_distribute`  property of [ `tf.data.Options` ](https://tensorflow.google.cn/api_docs/python/tf/data/Options); the property isan instance of [ `tf.data.experimental.DistributeOptions` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/DistributeOptions).

```
 options = tf.data.Options()
options.experimental_distribute.auto_shard = False
dataset = dataset.with_options(options)
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L33-L35)

```
 __init__()
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 属性


###  `auto_shard` 
Whether the dataset should be automatically sharded when processedin a distributed fashion. This is applicable when using Keras with multi-worker/TPU distribution strategy, and by using strategy.experimental_distribute_dataset(). In other cases, this option does nothing. If None, defaults to True.

###  `num_devices` 
连接到此输入管道的设备数。这将由multideviceiterator自动设置。

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

