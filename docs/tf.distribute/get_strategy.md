Returns the current [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) object.

**别名** : [ `tf.compat.v1.distribute.get_strategy` ](/api_docs/python/tf/distribute/get_strategy), [ `tf.compat.v2.distribute.get_strategy` ](/api_docs/python/tf/distribute/get_strategy)

```
 tf.distribute.get_strategy()
 
```

Typically only used in a cross-replica context:

```
 if tf.distribute.in_cross_replica_context():
  strategy = tf.distribute.get_strategy()
  ...
 
```

#### 返回：
A [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) object. Inside a  `with strategy.scope()`  block,it returns  `strategy` , otherwise it returns the default (single-replica)[ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) object.

