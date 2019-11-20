[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/tpu/experimental/DeviceAssignment)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L59-L175)  
---|---  
  
## Class `DeviceAssignment`

Mapping from logical cores in a computation to the physical TPU topology.

### Aliases:

  * Class [`tf.compat.v1.tpu.experimental.DeviceAssignment`](/api_docs/python/tf/tpu/experimental/DeviceAssignment)
  * Class [`tf.compat.v2.tpu.experimental.DeviceAssignment`](/api_docs/python/tf/tpu/experimental/DeviceAssignment)

Prefer to use the
[`DeviceAssignment.build()`](https://tensorflow.google.cn/api_docs/python/tf/tpu/experimental/DeviceAssignment#build)
helper to construct a `DeviceAssignment`; it is easier if less flexible than
constructing a `DeviceAssignment` directly.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L67-L102)

    
    
    __init__(
        topology,
        core_assignment
    )
    

Constructs a `DeviceAssignment` object.

#### Args:

  * **`topology`** : A `Topology` object that describes the physical TPU topology.
  * **`core_assignment`** : A logical to physical core mapping, represented as a rank 3 numpy array. See the description of the `core_assignment` property for more details.

#### Raises:

  * **`ValueError`** : If `topology` is not `Topology` object.
  * **`ValueError`** : If `core_assignment` is not a rank 3 numpy array.

## Properties

### `core_assignment`

The logical to physical core mapping.

#### Returns:

An integer numpy array of rank 3, with shape `[num_replicas,
num_cores_per_replica, topology_rank]`. Maps (replica, logical core) pairs to
physical topology coordinates.

### `num_cores_per_replica`

The number of cores per replica.

### `num_replicas`

The number of replicas of the computation.

### `topology`

A `Topology` that describes the TPU topology.

## Methods

### `build`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L169-L175)

    
    
    @staticmethod
    build(
        topology,
        computation_shape=None,
        computation_stride=None,
        num_replicas=1
    )
    

### `coordinates`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L130-L132)

    
    
    coordinates(
        replica,
        logical_core
    )
    

Returns the physical topology coordinates of a logical core.

### `host_device`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L159-L162)

    
    
    host_device(
        replica=0,
        logical_core=0,
        job=None
    )
    

Returns the CPU device attached to a logical core.

### `lookup_replicas`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L134-L152)

    
    
    lookup_replicas(
        task_id,
        logical_core
    )
    

Lookup replica ids by task number and logical core.

#### Args:

  * **`task_id`** : TensorFlow task number.
  * **`logical_core`** : An integer, identifying a logical core.

#### Returns:

A sorted list of the replicas that are attached to that task and logical_core.

#### Raises:

  * **`ValueError`** : If no replica exists in the task which contains the logical core.

### `tpu_device`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L164-L167)

    
    
    tpu_device(
        replica=0,
        logical_core=0,
        job=None
    )
    

Returns the name of the TPU device assigned to a logical core.

### `tpu_ordinal`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/device_assignment.py#L154-L157)

    
    
    tpu_ordinal(
        replica=0,
        logical_core=0
    )
    

Returns the ordinal of the TPU device assigned to a logical core.

