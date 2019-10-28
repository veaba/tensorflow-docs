Returns the current `tf.distribute.ReplicaContext` or `None`.
### Aliases:
- `tf.compat.v1.distribute.get_replica_context`
- `tf.compat.v2.distribute.get_replica_context`

```
 tf.distribute.get_replica_context()
```
Returns `None` if in a cross-replica context.
#### Note that execution:
Most `tf.distribute.Strategy` methods may only be executed in a cross-replica context, in a replica context you should use the API of the `tf.distribute.ReplicaContext` object returned by this method instead.

```
 assert tf.distribute.get_replica_context() is not None  # default
with strategy.scope():
  assert tf.distribute.get_replica_context() is None

  def f():
    replica_context = tf.distribute.get_replica_context()  # for strategy
    assert replica_context is not None
    tf.print("Replica id: ", replica_context.replica_id_in_sync_group,
             " of ", replica_context.num_replicas_in_sync)

  strategy.experimental_run_v2(f)
```
#### Returns:
The current `tf.distribute.ReplicaContext` object when in a replica context scope, else `None`.
Within a particular block, exactly one of these two things will be true:
