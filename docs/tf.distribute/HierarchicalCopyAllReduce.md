

## Class  `HierarchicalCopyAllReduce` 
Reduction using hierarchical copy all-reduce.

**别名** : [ `tf.compat.v1.distribute.HierarchicalCopyAllReduce` ](/api_docs/python/tf/distribute/HierarchicalCopyAllReduce), [ `tf.compat.v2.distribute.HierarchicalCopyAllReduce` ](/api_docs/python/tf/distribute/HierarchicalCopyAllReduce)

### 在指南中使用：
- [Distributed training with TensorFlow](https://tensorflow.google.cn/guide/distributed_training)
It reduces to one GPU along edges in some hierarchy and broadcasts back toeach GPU along the same path. Before performing all-reduce, tensors will berepacked or aggregated for more efficient cross-device transportation.

This is a reduction created for Nvidia DGX-1 which assumes GPUs connects likethat on DGX-1 machine. If you have different GPU inter-connections, it islikely that it would be slower than [ `tf.distribute.ReductionToOneDevice` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReductionToOneDevice).

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L833-L849)

```
 __init__(num_packs=1)
 
```

初始化对象。

#### 参数：
- **`num_packs`** : values will be packed in this many splits.   `num_packs`  shouldbe greater than 0.


#### 加薪：
ValueError if  `num_packs`  is zero or negative.

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
