Sum the input tensor across replicas according to group_assignment.

```
 tf.compat.v1.tpu.cross_replica_sum(
    x,
    group_assignment=None,
    name=None
)
 
```

#### 参数：
- **`x`** : The local tensor to the sum.
- **`group_assignment`** : Optional 2d int32 lists with shape [num_groups,num_replicas_per_group].  `group_assignment[i]`  represents the replicaids in the ith subgroup.
- **`name`** : Optional op name.


#### 返回：
A  `Tensor`  which is summed across replicas.

