Returns the current [ `tf.distribute.ReplicaContext` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReplicaContext) or  `None` .

**Aliases** : [ `tf.compat.v1.distribute.get_replica_context` ](/api_docs/python/tf/distribute/get_replica_context), [ `tf.compat.v2.distribute.get_replica_context` ](/api_docs/python/tf/distribute/get_replica_context)

```
 tf.distribute.get_replica_context()
 
```

Returns  `None`  if in a cross-replica context.

#### Note that execution:
1. starts in the default (single-replica) replica context (this functionwill return the default  `ReplicaContext`  object);
2. switches to cross-replica context (in which case this will return `None` ) when entering a  `with tf.distribute.Strategy.scope():`  block;
3. switches to a (non-default) replica context inside `strategy.experimental_run_v2(fn, ...)` ;
4. if  `fn`  calls  `get_replica_context().merge_call(merge_fn, ...)` , theninside  `merge_fn`  you are back in the cross-replica context (and againthis function will return  `None` ).
Most [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) methods may only be executed ina cross-replica context, in a replica context you should use theAPI of the [ `tf.distribute.ReplicaContext` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReplicaContext) object returned by thismethod instead.

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
The current [ `tf.distribute.ReplicaContext` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReplicaContext) object when in a replica contextscope, else  `None` .

Within a particular block, exactly one of these two things will be true:

-  `get_replica_context()`  returns non- `None` , or
-  `tf.distribute.is_cross_replica_context()`  returns True.
