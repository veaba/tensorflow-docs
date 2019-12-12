Returns  `True`  if in a cross-replica context.

**Aliases** : [ `tf.compat.v1.distribute.in_cross_replica_context` ](/api_docs/python/tf/distribute/in_cross_replica_context), [ `tf.compat.v2.distribute.in_cross_replica_context` ](/api_docs/python/tf/distribute/in_cross_replica_context)

```
 tf.distribute.in_cross_replica_context()
 
```

See [ `tf.distribute.get_replica_context` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/get_replica_context) for details.

```
 assert not tf.distribute.in_cross_replica_context()
with strategy.scope():
  assert tf.distribute.in_cross_replica_context()

  def f():
    assert not tf.distribute.in_cross_replica_context()

  strategy.experimental_run_v2(f)
 
```

#### Returns:
 `True`  if in a cross-replica context ( `get_replica_context()`  returns `None` ), or  `False`  if in a replica context ( `get_replica_context()`  returnsnon- `None` ).

