Shards  `computation`  along the batch dimension for parallel execution.

```
 tf.compat.v1.tpu.batch_parallel(    computation,    inputs=None,    num_shards=1,    infeed_queue=None,    device_assignment=None,    name=None) 
```

Convenience wrapper around shard().

 `inputs`  must be a list of Tensors or None (equivalent to an empty list).Each input is split into  `num_shards`  pieces along the 0-th dimension, andcomputation is applied to each shard in parallel.

Tensors are broadcast to all shards if they are lexically captured by `computation` . e.g.,

x = tf.constant(7)def computation():  return x + 3... = shard(computation, ...)

The outputs from all shards are concatenated back together along their 0-thdimension.

Inputs and outputs of the computation must be at least rank-1 Tensors.

#### Args:
- **`computation`** : A Python function that builds a computation to apply to eachshard of the input.
- **`inputs`** : A list of input tensors or None (equivalent to an empty list). The0-th dimension of each Tensor must have size divisible by  `num_shards` .
- **`num_shards`** : The number of shards.
- **`infeed_queue`** : If not  `None` , the  `InfeedQueue`  from which to append a tupleof arguments as inputs to  `computation` .
- **`device_assignment`** : If not  `None` , a  `DeviceAssignment`  describing themapping between logical cores in the computation with physical cores inthe TPU topology. Uses a default device assignment if  `None` . The `DeviceAssignment`  may be omitted if each shard of the computation usesonly one core, and there is either only one shard, or the number of shardsis equal to the number of cores in the TPU system.
- **`name`** : (Deprecated) Does nothing.


#### Returns:
A list of output tensors.

#### Raises:
- **`ValueError`** : If  `num_shards <= 0` 
