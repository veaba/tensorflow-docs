指定给定轴上固定数量的碎片。

```
 tf.compat.v1.fixed_size_partitioner(    num_shards,    axis=0) 
```

#### 参数：
- **`num_shards`** :  `int` , number of shards to partition variable.
- **`axis`** :  `int` , axis to partition on.


#### 返回：
A partition function usable as the  `partitioner`  argument to `variable_scope`  and  `get_variable` .

