## Class ReductionToOneDevice

Always do reduction to one device first and then do broadcasting.
[CrossDeviceOps](https://www.tensorflow.org/api_docs/python/tf/distribute/CrossDeviceOps)Inherits From: 

### Aliases:
- Class `tf.compat.v1.distribute.ReductionToOneDevice`
- Class `tf.compat.v2.distribute.ReductionToOneDevice`

Batch reduction is done by reduction on each element one by one.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L406-L417)


```
 __init__(
    reduce_to_device=None,
    accumulation_fn=None
)
```

Constructor.
#### Args:
- `reduce_to_device`: the intermediate device to reduce to. If None, reduce to the first device in `destinations` of the reduce() method.
- `accumulation_fn`: a function that does accumulation. If None, then `tf.math.add_n` is used.
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
