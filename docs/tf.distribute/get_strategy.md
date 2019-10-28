Returns the current `tf.distribute.Strategy` object.
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
