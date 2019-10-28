Returns `True` if in a cross-replica context.
### Aliases:
- `tf.compat.v1.distribute.in_cross_replica_context`
- `tf.compat.v2.distribute.in_cross_replica_context`

```
 tf.distribute.in_cross_replica_context()
```
See `tf.distribute.get_replica_context` for details.

```
 assert not tf.distribute.in_cross_replica_context()
with strategy.scope():
  assert tf.distribute.in_cross_replica_context()

  def f():
    assert not tf.distribute.in_cross_replica_context()

  strategy.experimental_run_v2(f)
```
#### Returns:
