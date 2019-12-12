记录输入数据集的每个元素生成的字节数。

**别名** : [ `tf.compat.v1.data.experimental.bytes_produced_stats` ](/api_docs/python/tf/data/experimental/bytes_produced_stats), [ `tf.compat.v2.data.experimental.bytes_produced_stats` ](/api_docs/python/tf/data/experimental/bytes_produced_stats)

```
 tf.data.experimental.bytes_produced_stats(tag)
 
```

To consume the statistics, associate a  `StatsAggregator`  with the outputdataset.

#### 参数：
- **`tag`** : String. All statistics recorded by the returned transformation willbe associated with the given  `tag` .


#### 返回：
A  `Dataset`  transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

