Looks up  `ids`  in a list of embedding tensors.

```
 tf.nn.embedding_lookup(    params,    ids,    max_norm=None,    name=None) 
```

### Used in the guide:
- [Masking and padding with Keras](https://tensorflow.google.cn/guide/keras/masking_and_padding)
This function is used to perform parallel lookups on the list oftensors in  `params` .  It is a generalization of[ `tf.gather` ](https://tensorflow.google.cn/api_docs/python/tf/gather), where  `params`  isinterpreted as a partitioning of a large embedding tensor.   `params`  may bea  `PartitionedVariable`  as returned by using [ `tf.compat.v1.get_variable()` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/get_variable)with apartitioner.

If  `len(params) > 1` , each element  `id`  of  `ids`  is partitioned betweenthe elements of  `params`  according to the  `partition_strategy` .In all strategies, if the id space does not evenly divide the number ofpartitions, each of the first  `(max_id + 1) % len(params)`  partitions willbe assigned one more id.

The  `partition_strategy`  is always  `"div"`  currently. This means that weassign ids to partitions in a contiguous manner. For instance, 13 ids aresplit across 5 partitions as: `[[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10], [11, 12]]` 

The results of the lookup are concatenated into a densetensor. The returned tensor has shape  `shape(ids) + shape(params)[1:]` .

#### Args:
- **`params`** : A single tensor representing the complete embedding tensor, or alist of P tensors all of same shape except for the first dimension,representing sharded embedding tensors.  Alternatively, a `PartitionedVariable` , created by partitioning along dimension 0. Eachelement must be appropriately sized for the 'div'  `partition_strategy` .
- **`ids`** : A  `Tensor`  with type  `int32`  or  `int64`  containing the ids to be lookedup in  `params` .
- **`max_norm`** : If not  `None` , each embedding is clipped if its l2-norm is largerthan this value.
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor`  with the same type as the tensors in  `params` .

#### Raises:
- **`ValueError`** : If  `params`  is empty.
