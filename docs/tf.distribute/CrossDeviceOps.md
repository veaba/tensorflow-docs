[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/distribute/CrossDeviceOps) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L237-L396)  
  
  
## Class `CrossDeviceOps`

Base class for cross-device reduction and broadcasting algorithms.

### Aliases:

  * Class [`tf.compat.v1.distribute.CrossDeviceOps`](/api_docs/python/tf/distribute/CrossDeviceOps)
  * Class [`tf.compat.v2.distribute.CrossDeviceOps`](/api_docs/python/tf/distribute/CrossDeviceOps)

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L240-L241)

    
    
    __init__()
    

Initialize self. See help(type(self)) for accurate signature.

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

### `batch_reduce_implementation`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L362-L383)

    
    
    batch_reduce_implementation(
        reduce_op,
        value_destination_pairs
    )
    

Implementation of reduce PerReplica objects in a batch.

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

### `broadcast_implementation`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L385-L396)

    
    
    broadcast_implementation(
        tensor,
        destinations
    )
    

Implementation of broadcast the `tensor` to destinations.

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

### `reduce_implementation`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L339-L360)

    
    
    reduce_implementation(
        reduce_op,
        per_replica_value,
        destinations
    )
    

The implementation of reduce of `per_replica_value` to `destinations`.

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

