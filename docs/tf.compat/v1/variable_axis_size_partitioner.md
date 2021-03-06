Get a partitioner for VariableScope to keep shards below  `max_shard_bytes` .

```
 tf.compat.v1.variable_axis_size_partitioner(
    max_shard_bytes,
    axis=0,
    bytes_per_string_element=16,
    max_shards=None
)
 
```

This partitioner will shard a Variable along one axis, attempting to keepthe maximum shard size below  `max_shard_bytes` .  In practice, this is notalways possible when sharding along only one axis.  When this happens,this axis is sharded as much as possible (i.e., every dimension becomesa separate shard).

If the partitioner hits the  `max_shards`  limit, then each shard may end uplarger than  `max_shard_bytes` . By default  `max_shards`  equals  `None`  and nolimit on the number of shards is enforced.

One reasonable value for  `max_shard_bytes`  is  `(64 << 20) - 1` , or almost `64MB` , to keep below the protobuf byte limit.

#### 参数：
- **`max_shard_bytes`** : The maximum size any given shard is allowed to be.
- **`axis`** : The axis to partition along.  Default: outermost axis.
- **`bytes_per_string_element`** : If the  `Variable`  is of type string, this providesan estimate of how large each scalar in the  `Variable`  is.
- **`max_shards`** : The maximum number of shards in int created taking precedenceover  `max_shard_bytes` .


#### 返回：
A partition function usable as the  `partitioner`  argument to `variable_scope`  and  `get_variable` .

#### 加薪：
- **`ValueError`** : If any of the byte counts are non-positive.
