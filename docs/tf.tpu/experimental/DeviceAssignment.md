

## Class  `DeviceAssignment` 
从计算中的逻辑核心到物理tpu拓扑的映射。

**别名** : [ `tf.compat.v1.tpu.experimental.DeviceAssignment` ](/api_docs/python/tf/tpu/experimental/DeviceAssignment), [ `tf.compat.v2.tpu.experimental.DeviceAssignment` ](/api_docs/python/tf/tpu/experimental/DeviceAssignment)

Prefer to use the [ `DeviceAssignment.build()` ](https://tensorflow.google.cn/api_docs/python/tf/tpu/experimental/DeviceAssignment#build) helper to construct a `DeviceAssignment` ; it is easier if less flexible than constructing a `DeviceAssignment`  directly.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L67-L102)

```
 __init__(
    topology,
    core_assignment
)
 
```

Constructs a  `DeviceAssignment`  object.

#### 参数：
- **`topology`** : A  `Topology`  object that describes the physical TPU topology.
- **`core_assignment`** : A logical to physical core mapping, represented as arank 3 numpy array. See the description of the  `core_assignment` property for more details.


#### 加薪：
- **`ValueError`** : If  `topology`  is not  `Topology`  object.
- **`ValueError`** : If  `core_assignment`  is not a rank 3 numpy array.


## 属性


###  `core_assignment` 
逻辑到物理核心的映射。

#### 返回：
An integer numpy array of rank 3, with shape `[num_replicas, num_cores_per_replica, topology_rank]` . Maps(replica, logical core) pairs to physical topology coordinates.

###  `num_cores_per_replica` 
每个副本的核心数。

###  `num_replicas` 
计算的副本数。

###  `topology` 
A  `Topology`  that describes the TPU topology.

## 方法


###  `build` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L169-L175)

```
 @staticmethod
build(
    topology,
    computation_shape=None,
    computation_stride=None,
    num_replicas=1
)
 
```

###  `coordinates` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L130-L132)

```
 coordinates(
    replica,
    logical_core
)
 
```

返回逻辑核心的物理拓扑坐标。

###  `host_device` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L159-L162)

```
 host_device(
    replica=0,
    logical_core=0,
    job=None
)
 
```

返回连接到逻辑核心的CPU设备。

###  `lookup_replicas` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L134-L152)

```
 lookup_replicas(
    task_id,
    logical_core
)
 
```

按任务号和逻辑核心查找副本ID。

#### 参数：
- **`task_id`** : TensorFlow task number.
- **`logical_core`** : An integer, identifying a logical core.


#### 返回：
A sorted list of the replicas that are attached to that task andlogical_core.

#### 加薪：
- **`ValueError`** : If no replica exists in the task which contains the logicalcore.


###  `tpu_device` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L164-L167)

```
 tpu_device(
    replica=0,
    logical_core=0,
    job=None
)
 
```

返回分配给逻辑核心的TPU设备的名称。

###  `tpu_ordinal` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L154-L157)

```
 tpu_ordinal(
    replica=0,
    logical_core=0
)
 
```

返回分配给逻辑核心的TPU设备的序号。

