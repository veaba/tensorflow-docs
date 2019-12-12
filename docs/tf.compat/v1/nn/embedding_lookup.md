Looks up  `ids`  in a list of embedding tensors.

```
 tf.compat.v1.nn.embedding_lookup(
    params,
    ids,
    partition_strategy='mod',
    name=None,
    validate_indices=True,
    max_norm=None
)
 
```

This function is used to perform parallel lookups on the list oftensors in  `params` .  It is a generalization of[ `tf.gather` ](https://tensorflow.google.cn/api_docs/python/tf/gather), where  `params`  isinterpreted as a partitioning of a large embedding tensor.   `params`  may bea  `PartitionedVariable`  as returned by using [ `tf.compat.v1.get_variable()` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/get_variable)with apartitioner.

If  `len(params) > 1` , each element  `id`  of  `ids`  is partitioned betweenthe elements of  `params`  according to the  `partition_strategy` .In all strategies, if the id space does not evenly divide the number ofpartitions, each of the first  `(max_id + 1) % len(params)`  partitions willbe assigned one more id.

If  `partition_strategy`  is  `"mod"` , we assign each id to partition `p = id % len(params)` . For instance,13 ids are split across 5 partitions as: `[[0, 5, 10], [1, 6, 11], [2, 7, 12], [3, 8], [4, 9]]` 

If  `partition_strategy`  is  `"div"` , we assign ids to partitions in acontiguous manner. In this case, 13 ids are split across 5 partitions as: `[[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10], [11, 12]]` 

The results of the lookup are concatenated into a densetensor. The returned tensor has shape  `shape(ids) + shape(params)[1:]` .

#### 参数：
- **`params`** : A single tensor representing the complete embedding tensor, or alist of P tensors all of same shape except for the first dimension,representing sharded embedding tensors.  Alternatively, a `PartitionedVariable` , created by partitioning along dimension 0. Eachelement must be appropriately sized for the given  `partition_strategy` .
- **`ids`** : A  `Tensor`  with type  `int32`  or  `int64`  containing the ids to be lookedup in  `params` .
- **`partition_strategy`** : A string specifying the partitioning strategy, relevantif  `len(params) > 1` . Currently  `"div"`  and  `"mod"`  are supported. Defaultis  `"mod"` .
- **`name`** : A name for the operation (optional).
- **`validate_indices`** : DEPRECATED. If this operation is assigned to CPU, valuesin  `indices`  are always validated to be within range.  If assigned to GPU,out-of-bound indices result in safe but unspecified behavior, which mayinclude raising an error.
- **`max_norm`** : If not  `None` , each embedding is clipped if its l2-norm is largerthan this value.


#### 返回：
A  `Tensor`  with the same type as the tensors in  `params` .

#### 加薪：
- **`ValueError`** : If  `params`  is empty.
