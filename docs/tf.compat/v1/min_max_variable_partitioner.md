要为每个切片分配最小大小的分区程序。

```
 tf.compat.v1.min_max_variable_partitioner(
    max_partitions=1,
    axis=0,
    min_slice_size=(256 << 10),
    bytes_per_string_element=16
)
 
```

Returns a partitioner that partitions the variable of given shape and dtypesuch that each partition has a minimum of  `min_slice_size`  slice of thevariable. The maximum number of such partitions (upper bound) is given by `max_partitions` .

#### 参数：
- **`max_partitions`** : Upper bound on the number of partitions. Defaults to 1.
- **`axis`** : Axis along which to partition the variable. Defaults to 0.
- **`min_slice_size`** : Minimum size of the variable slice per partition. Defaultsto 256K.
- **`bytes_per_string_element`** : If the  `Variable`  is of type string, this providesan estimate of how large each scalar in the  `Variable`  is.


#### 返回：
A partition function usable as the  `partitioner`  argument to `variable_scope`  and  `get_variable` .

