Shards  `computation`  for parallel execution.

```
 tf.compat.v1.tpu.shard(    computation,    inputs=None,    num_shards=1,    input_shard_axes=None,    outputs_from_all_shards=True,    output_shard_axes=None,    infeed_queue=None,    device_assignment=None,    name=None) 
```

 `inputs`  must be a list of Tensors or None (equivalent to an empty list), eachof which has a corresponding split axis (from  `input_shard_axes` ). Each inputis split into  `num_shards`  pieces along the corresponding axis, andcomputation is applied to each shard in parallel.

Tensors are broadcast to all shards if they are lexically captured by `computation` . e.g.,

x = tf.constant(7)def computation():  return x + 3... = shard(computation, ...)

TODO(phawkins): consider adding support for broadcasting Tensors passedas inputs.

If  `outputs_from_all_shards`  is true, the outputs from all shards of `computation`  are concatenated back together along their  `output_shards_axes` .Otherwise, each output is taken from an arbitrary shard.

Inputs and outputs of the computation must be at least rank-1 Tensors.

#### 参数：
- **`computation`** : A Python function that builds a computation to apply to eachshard of the input.
- **`inputs`** : A list of input tensors or None (equivalent to an empty list). Eachinput tensor has a corresponding shard axes, given by  `input_shard_axes` ,which must have size divisible by  `num_shards` .
- **`num_shards`** : The number of shards.
- **`input_shard_axes`** : A list of dimensions along which to shard  `inputs` , or `None` .  `None`  means "shard all inputs along dimension 0". If not  `None` ,there must be one dimension per input.
- **`outputs_from_all_shards`** : Boolean or list of boolean. For each output, if `True` , outputs from all shards are concatenated along the corresponding `output_shard_axes`  entry. Otherwise, each output is takenfrom an arbitrary shard. If the argument is a boolean, the argument'svalue is used for each output.
- **`output_shard_axes`** : A list of dimensions along which to concatenate theoutputs of  `computation` , or  `None` .  `None`  means "concatenate all outputsalong dimension 0". If not  `None` , there must be one dimension per output.Ignored if  `outputs_from_all_shards`  is False.
- **`infeed_queue`** : If not  `None` , the  `InfeedQueue`  to use to augment the inputsof  `computation` .
- **`device_assignment`** : If not  `None` , a  `DeviceAssignment`  describing themapping between logical cores in the computation with physical cores inthe TPU topology. Uses a default device assignment if  `None` . The `DeviceAssignment`  may be omitted if each shard of the computation usesonly one core, and there is either only one shard, or the number of shardsis equal to the number of cores in the TPU system.
- **`name`** : (Deprecated) Does nothing.


#### 返回：
输出张量的列表。

#### 加薪：
- **`ValueError`** : If num_shards <= 0
- **`ValueError`** : If len(input_shard_axes) != len(inputs)
- **`ValueError`** : If len(output_shard_axes) != len(outputs from  `computation` )
