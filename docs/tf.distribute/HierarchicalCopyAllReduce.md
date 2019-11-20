[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/distribute/HierarchicalCopyAllReduce)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L821-L849)  
  
  
## Class `HierarchicalCopyAllReduce`

Reduction using hierarchical copy all-reduce.

### Aliases:

  * Class [`tf.compat.v1.distribute.HierarchicalCopyAllReduce`](/api_docs/python/tf/distribute/HierarchicalCopyAllReduce)
  * Class [`tf.compat.v2.distribute.HierarchicalCopyAllReduce`](/api_docs/python/tf/distribute/HierarchicalCopyAllReduce)

### Used in the guide:

  * [Distributed training with TensorFlow](https://tensorflow.google.cn/guide/distributed_training)

It reduces to one GPU along edges in some hierarchy and broadcasts back to
each GPU along the same path. Before performing all-reduce, tensors will be
repacked or aggregated for more efficient cross-device transportation.

This is a reduction created for Nvidia DGX-1 which assumes GPUs connects like
that on DGX-1 machine. If you have different GPU inter-connections, it is
likely that it would be slower than
[`tf.distribute.ReductionToOneDevice`](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReductionToOneDevice).

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L833-L849)

    
    
    __init__(num_packs=1)
    

Initializes the object.

#### Args:

  * **`num_packs`** : values will be packed in this many splits. `num_packs` should be greater than 0.

#### Raises:

ValueError if `num_packs` is zero or negative.

## Methods

### `batch_reduce`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L284-L324)

    
    
    batch_reduce(
        reduce_op,
        value_destination_pairs
    )
    

Reduce PerReplica objects in a batch.

Reduce each first element in `value_destination_pairs` to each second element
which indicates the destinations.

#### Args:

  * **`reduce_op`** : Indicates how per_replica_value will be reduced. Accepted values are [`tf.distribute.ReduceOp.SUM`](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#SUM), [`tf.distribute.ReduceOp.MEAN`](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#MEAN).
  * **`value_destination_pairs`** : a list or a tuple of tuples of PerReplica objects (or tensors with device set if there is one device) and destinations.

#### Returns:

a list of Mirrored objects.

#### Raises:

  * **`ValueError`** : if `value_destination_pairs` is not a list or a tuple of tuples of PerReplica objects and destinations

### `broadcast`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L326-L337)

    
    
    broadcast(
        tensor,
        destinations
    )
    

Broadcast the `tensor` to destinations.

#### Args:

  * **`tensor`** : the tensor to broadcast.
  * **`destinations`** : the broadcast destinations.

#### Returns:

a Mirrored object.

### `reduce`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L248-L282)

    
    
    reduce(
        reduce_op,
        per_replica_value,
        destinations
    )
    

Reduce `per_replica_value` to `destinations`.

It runs the reduction operation defined by `reduce_op` and put the result on
`destinations`.

#### Args:

  * **`reduce_op`** : Indicates how per_replica_value will be reduced. Accepted values are [`tf.distribute.ReduceOp.SUM`](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#SUM), [`tf.distribute.ReduceOp.MEAN`](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#MEAN).
  * **`per_replica_value`** : a PerReplica object or a tensor with device set.
  * **`destinations`** : the reduction destinations.

#### Returns:

a Mirrored object.

#### Raises:

  * **`ValueError`** : if per_replica_value can't be converted to a PerReplica object.

