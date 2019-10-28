## Class ReplicaContext
`tf.distribute.Strategy` API when in a replica context.
### Aliases:
- Class `tf.compat.v1.distribute.ReplicaContext`
- Class `tf.compat.v2.distribute.ReplicaContext`
You can use `tf.distribute.get_replica_context` to get an instance of `ReplicaContext`. This should be inside your replicated step function, such as in a `tf.distribute.Strategy.experimental_run_v2` call.
## __init__
View source

```
 __init__(
    strategy,
    replica_id_in_sync_group
)
```
Initialize self. See help(type(self)) for accurate signature.
## Properties
### devices
The devices this replica is to be executed on, as a tuple of strings.
### num_replicas_in_sync
Returns number of replicas over which gradients are aggregated.
### replica_id_in_sync_group
Returns the id of the replica being defined.
This identifies the replica that is part of a sync group. Currently we assume that all sync groups contain the same number of replicas. The value of the replica id can range from 0 to `num_replica_in_sync` - 1.
### strategy
The current `tf.distribute.Strategy` object.
## Methods
### __enter__
View source

```
 __enter__()
```
### __exit__
View source

```
 __exit__(
    exception_type,
    exception_value,
    traceback
)
```
### all_reduce
View source

```
 all_reduce(
    reduce_op,
    value
)
```
All-reduces the given `value Tensor` nest across replicas.
If `all_reduce` is called in any replica, it must be called in all replicas. The nested structure and `Tensor` shapes must be identical in all replicas.
IMPORTANT: The ordering of communications must be identical in all replicas.
Example with two replicas: Replica 0 `value`: {'a': 1, 'b': [40, 1]} Replica 1 `value`: {'a': 3, 'b': [ 2, 98]}
If `reduce_op` == `SUM`: Result (on all replicas): {'a': 4, 'b': [42, 99]}
If `reduce_op` == `MEAN`: Result (on all replicas): {'a': 2, 'b': [21, 49.5]}
#### Args:
- `reduce_op`: Reduction type, an instance of `tf.distribute.ReduceOp` enum.
- `value`: The nested structure of `Tensor`s to all-reduce. The structure must be compatible with `tf.nest`.
#### Returns:
A `Tensor` nest with the reduced `value`s from each replica.
### merge_call
View source

```
 merge_call(
    merge_fn,
    args=(),
    kwargs=None
)
```
Merge args across replicas and run `merge_fn` in a cross-replica context.
