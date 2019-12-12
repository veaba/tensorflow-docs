

## Class  `CrossDeviceOps` 
Base class for cross-device reduction and broadcasting algorithms.

**别名** : [ `tf.compat.v1.distribute.CrossDeviceOps` ](/api_docs/python/tf/distribute/CrossDeviceOps), [ `tf.compat.v2.distribute.CrossDeviceOps` ](/api_docs/python/tf/distribute/CrossDeviceOps)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L240-L241)

```
 __init__()
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `batch_reduce` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L284-L324)

```
 batch_reduce(
    reduce_op,
    value_destination_pairs
)
 
```

成批减少perreplica对象。

Reduce each first element in  `value_destination_pairs`  to each secondelement which indicates the destinations.

#### 参数：
- **`reduce_op`** : Indicates how per_replica_value will be reduced. Acceptedvalues are [ `tf.distribute.ReduceOp.SUM` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#SUM), [ `tf.distribute.ReduceOp.MEAN` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#MEAN).
- **`value_destination_pairs`** : a list or a tuple of tuples of PerReplica objects(or tensors with device set if there is one device) and destinations.


#### 返回：
镜像对象的列表。

#### 加薪：
- **`ValueError`** : if  `value_destination_pairs`  is not a list or a tuple oftuples of PerReplica objects and destinations


###  `batch_reduce_implementation` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L362-L383)

```
 batch_reduce_implementation(
    reduce_op,
    value_destination_pairs
)
 
```

成批实现reduce-perreplica对象。

Reduce each first element in  `value_destination_pairs`  to each secondelement which indicates the destinations.

#### 参数：
- **`reduce_op`** : Indicates how per_replica_value will be reduced. Acceptedvalues are [ `tf.distribute.ReduceOp.SUM` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#SUM), [ `tf.distribute.ReduceOp.MEAN` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#MEAN).
- **`value_destination_pairs`** : a list or a tuple of tuples of PerReplica objects(or tensors with device set if there is one device) and destinations.


#### 返回：
镜像对象的列表。

#### 加薪：
- **`ValueError`** : if  `value_destination_pairs`  is not a list or a tuple oftuples of PerReplica objects and destinations


###  `broadcast` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L326-L337)

```
 broadcast(
    tensor,
    destinations
)
 
```

Broadcast the  `tensor`  to destinations.

#### 参数：
- **`tensor`** : the tensor to broadcast.
- **`destinations`** : the broadcast destinations.


#### 返回：
镜像对象。

###  `broadcast_implementation` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L385-L396)

```
 broadcast_implementation(
    tensor,
    destinations
)
 
```

Implementation of broadcast the  `tensor`  to destinations.

#### 参数：
- **`tensor`** : the tensor to broadcast.
- **`destinations`** : the broadcast destinations.


#### 返回：
镜像对象。

###  `reduce` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L248-L282)

```
 reduce(
    reduce_op,
    per_replica_value,
    destinations
)
 
```

Reduce  `per_replica_value`  to  `destinations` .

It runs the reduction operation defined by  `reduce_op`  and put theresult on  `destinations` .

#### 参数：
- **`reduce_op`** : Indicates how per_replica_value will be reduced. Acceptedvalues are [ `tf.distribute.ReduceOp.SUM` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#SUM), [ `tf.distribute.ReduceOp.MEAN` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#MEAN).
- **`per_replica_value`** : a PerReplica object or a tensor with device set.
- **`destinations`** : the reduction destinations.


#### 返回：
镜像对象。

#### 加薪：
- **`ValueError`** : if per_replica_value can't be converted to a PerReplicaobject.


###  `reduce_implementation` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L339-L360)

```
 reduce_implementation(
    reduce_op,
    per_replica_value,
    destinations
)
 
```

The implementation of reduce of  `per_replica_value`  to  `destinations` .

It runs the reduction operation defined by  `reduce_op`  and put theresult on  `destinations` .

#### 参数：
- **`reduce_op`** : Indicates how per_replica_value will be reduced. Acceptedvalues are [ `tf.distribute.ReduceOp.SUM` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#SUM), [ `tf.distribute.ReduceOp.MEAN` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#MEAN).
- **`per_replica_value`** : a PerReplica object or a tensor with device set.
- **`destinations`** : the reduction destinations.


#### 返回：
镜像对象。

#### 加薪：
- **`ValueError`** : if per_replica_value can't be converted to a PerReplicaobject.
