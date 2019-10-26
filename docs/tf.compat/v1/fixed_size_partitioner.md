Partitioner to specify a fixed number of shards along given axis.

```
 tf.compat.v1.fixed_size_partitioner(
    num_shards,
    axis=0
)
```
#### Args:
- num_shards: int, number of shards to partition variable.
- axis: int, axis to partition on.
#### Returns:
A partition function usable as the partitioner argument to variable_scope and get_variable.
