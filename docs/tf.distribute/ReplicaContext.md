[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/distribute/ReplicaContext) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1852-L1997)  
  
  
## Class `ReplicaContext`

[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)
API when in a replica context.

### Aliases:

  * Class [`tf.compat.v1.distribute.ReplicaContext`](/api_docs/python/tf/distribute/ReplicaContext)
  * Class [`tf.compat.v2.distribute.ReplicaContext`](/api_docs/python/tf/distribute/ReplicaContext)

You can use
[`tf.distribute.get_replica_context`](https://tensorflow.google.cn/api_docs/python/tf/distribute/get_replica_context)
to get an instance of `ReplicaContext`. This should be inside your replicated
step function, such as in a
[`tf.distribute.Strategy.experimental_run_v2`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy#experimental_run_v2)
call.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1860-L1865)

    
    
    __init__(
        strategy,
        replica_id_in_sync_group
    )
    

Initialize self. See help(type(self)) for accurate signature.

## Properties

### `devices`

The devices this replica is to be executed on, as a tuple of strings.

### `num_replicas_in_sync`

Returns number of replicas over which gradients are aggregated.

### `replica_id_in_sync_group`

Returns the id of the replica being defined.

This identifies the replica that is part of a sync group. Currently we assume
that all sync groups contain the same number of replicas. The value of the
replica id can range from 0 to `num_replica_in_sync` \- 1.

### `strategy`

The current
[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)
object.

## Methods

### `__enter__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1867-L1877)

    
    
    __enter__()
    

### `__exit__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1879-L1883)

    
    
    __exit__(
        exception_type,
        exception_value,
        traceback
    )
    

### `all_reduce`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1955-L1997)

    
    
    all_reduce(
        reduce_op,
        value
    )
    

All-reduces the given `value Tensor` nest across replicas.

If `all_reduce` is called in any replica, it must be called in all replicas.
The nested structure and `Tensor` shapes must be identical in all replicas.

IMPORTANT: The ordering of communications must be identical in all replicas.

Example with two replicas: Replica 0 `value`: {'a': 1, 'b': [40, 1]} Replica 1
`value`: {'a': 3, 'b': [ 2, 98]}

If `reduce_op` == `SUM`: Result (on all replicas): {'a': 4, 'b': [42, 99]}

If `reduce_op` == `MEAN`: Result (on all replicas): {'a': 2, 'b': [21, 49.5]}

#### Args:

  * **`reduce_op`** : Reduction type, an instance of [`tf.distribute.ReduceOp`](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp) enum.
  * **`value`** : The nested structure of `Tensor`s to all-reduce. The structure must be compatible with [`tf.nest`](https://tensorflow.google.cn/api_docs/python/tf/nest).

#### Returns:

A `Tensor` nest with the reduced `value`s from each replica.

### `merge_call`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1885-L1917)

    
    
    merge_call(
        merge_fn,
        args=(),
        kwargs=None
    )
    

Merge args across replicas and run `merge_fn` in a cross-replica context.

This allows communication and coordination when there are multiple calls to
the step_fn triggered by a call to `strategy.experimental_run_v2(step_fn,
...)`.

See
[`tf.distribute.Strategy.experimental_run_v2`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy#experimental_run_v2)
for an explanation.

If not inside a distributed scope, this is equivalent to:

    
    
    strategy = tf.distribute.get_strategy()
    with cross-replica-context(strategy):
      return merge_fn(strategy, *args, **kwargs)
    

#### Args:

  * **`merge_fn`** : Function that joins arguments from threads that are given as PerReplica. It accepts [`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) object as the first argument.
  * **`args`** : List or tuple with positional per-thread arguments for `merge_fn`.
  * **`kwargs`** : Dict with keyword per-thread arguments for `merge_fn`.

#### Returns:

The return value of `merge_fn`, except for `PerReplica` values which are
unpacked.

