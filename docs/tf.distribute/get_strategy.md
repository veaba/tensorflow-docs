[tf.distribute.Strategy](https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy)Returns the current  object.

### Aliases:
- `tf.compat.v1.distribute.get_strategy`
- `tf.compat.v2.distribute.get_strategy`

```
 tf.distribute.get_strategy()
```

Typically only used in a cross-replica context:

```
 if tf.distribute.in_cross_replica_context():
  strategy = tf.distribute.get_strategy()
  ...
```
#### Returns:
[tf.distribute.Strategy](https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy)A  object. Inside a with strategy.scope() block, it returns strategy, otherwise it returns the default (single-replica)  object.

