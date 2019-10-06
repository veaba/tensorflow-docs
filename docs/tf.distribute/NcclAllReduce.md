## Class NcclAllReduce

Reduction using NCCL all-reduce.
### Aliases:
- Class `tf.compat.v1.distribute.NcclAllReduce`
- Class `tf.compat.v2.distribute.NcclAllReduce`
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L798-L817)


```
 __init__(num_packs=1)
```

NCCL all-reduce implementation of CrossDeviceOps.

It uses Nvidia NCCL for all-reduce. Before performing all-reduce, tensors will be repacked or aggregated for more efficient cross-device transportation.
#### Args:
- `num_packs`: values will be packed in this many splits. `num_packs` should be greater than 0.
#### Raises:

ValueError if num_packs is zero or negative.
## Methods
### batch_reduce
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L284-L324)


```
 batch_reduce(
    reduce_op,
    value_destination_pairs
)
```

Reduce PerReplica objects in a batch.

Reduce each first element in value_destination_pairs to each second element which indicates the destinations.
#### Args:
- `reduce_op`: Indicates how per_replica_value will be reduced. Accepted values are `tf.distribute.ReduceOp.SUM`, `tf.distribute.ReduceOp.MEAN`.
- `value_destination_pairs`: a list or a tuple of tuples of PerReplica objects (or tensors with device set if there is one device) and destinations.
#### Returns:

a list of Mirrored objects.
#### Raises:
- `ValueError`: if `value_destination_pairs` is not a list or a tuple of tuples of PerReplica objects and destinations
### broadcast
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L326-L337)


```
 broadcast(
    tensor,
    destinations
)
```

Broadcast the tensor to destinations.
#### Args:
- `tensor`: the `tensor` to broadcast.
- `destinations`: the broadcast `destinations`.
#### Returns:

a Mirrored object.
### reduce
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L248-L282)


```
 reduce(
    reduce_op,
    per_replica_value,
    destinations
)
```

Reduce per_replica_value to destinations.

It runs the reduction operation defined by reduce_op and put the result on destinations.
#### Args:
- `reduce_op`: Indicates how per_replica_value will be reduced. Accepted values are `tf.distribute.ReduceOp.SUM`, `tf.distribute.ReduceOp.MEAN`.
- `per_replica_value`: a PerReplica object or a tensor with device set.
- `destinations`: the reduction `destinations`.
#### Returns:

a Mirrored object.
#### Raises:
- `ValueError`: if per_replica_value can't be converted to a PerReplica object.
