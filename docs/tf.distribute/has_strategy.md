Return if there is a current non-default [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy).

**别名** : [ `tf.compat.v1.distribute.has_strategy` ](/api_docs/python/tf/distribute/has_strategy), [ `tf.compat.v2.distribute.has_strategy` ](/api_docs/python/tf/distribute/has_strategy)

```
 tf.distribute.has_strategy()
 
```

```
 assert not tf.distribute.has_strategy()
with strategy.scope():
  assert tf.distribute.has_strategy()
 
```

#### 返回：
True if inside a  `with strategy.scope():` .

