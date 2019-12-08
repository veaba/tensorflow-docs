Sum the input tensor across replicas according to group_assignment.



```
 tf.compat.v1.tpu.cross_replica_sum(
    x,
    group_assignment=None,
    name=None
)
 
```



#### Args:

- **`x`** : The local tensor to the sum.

- **`group_assignment`** : Optional 2d int32 lists with shape [num_groups,
num_replicas_per_group].  `group_assignment[i]`  represents the replica
ids in the ith subgroup.

- **`name`** : Optional op name.



#### Returns:
A  `Tensor`  which is summed across replicas.

