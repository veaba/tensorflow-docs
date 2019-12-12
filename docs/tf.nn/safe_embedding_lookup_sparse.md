Lookup embedding results, accounting for invalid IDs and empty features.

```
 tf.nn.safe_embedding_lookup_sparse(
    embedding_weights,
    sparse_ids,
    sparse_weights=None,
    combiner='mean',
    default_id=None,
    max_norm=None,
    name=None
)
 
```

The partitioned embedding in  `embedding_weights`  must all be the same shapeexcept for the first dimension. The first dimension is allowed to vary as thevocabulary size is not necessarily a multiple of  `P` .   `embedding_weights` may be a  `PartitionedVariable`  as returned by using[ `tf.compat.v1.get_variable()` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/get_variable) with apartitioner.

Invalid IDs (< 0) are pruned from input IDs and weights, as well as any IDswith non-positive weight. For an entry with no features, the embedding vectorfor  `default_id`  is returned, or the 0-vector if  `default_id`  is not supplied.

The ids and weights may be multi-dimensional. Embeddings are always aggregatedalong the last dimension.


**Note:**  when doing embedding lookup on  `embedding_weights` , "div" partitionstrategy will be used. Support for other partition strategy will be addedlater.


#### 参数：
- **`embedding_weights`** :  A list of  `P`  float  `Tensor` s or values representingpartitioned embedding  `Tensor` s.  Alternatively, a  `PartitionedVariable` created by partitioning along dimension 0.  The total unpartitioned shapeshould be  `[e_0, e_1, ..., e_m]` , where  `e_0`  represents the vocab sizeand  `e_1, ..., e_m`  are the embedding dimensions.
- **`sparse_ids`** :  `SparseTensor`  of shape  `[d_0, d_1, ..., d_n]`  containing theids.  `d_0`  is typically batch size.
- **`sparse_weights`** :  `SparseTensor`  of same shape as  `sparse_ids` , containingfloat weights corresponding to  `sparse_ids` , or  `None`  if all weights arebe assumed to be 1.0.
- **`combiner`** : A string specifying how to combine embedding results for eachentry. Currently "mean", "sqrtn" and "sum" are supported, with "mean" thedefault.
- **`default_id`** : The id to use for an entry with no features.
- **`max_norm`** : If not  `None` , all embeddings are l2-normalized to max_norm beforecombining.
- **`name`** : A name for this operation (optional).


#### 返回：
Dense  `Tensor`  of shape  `[d_0, d_1, ..., d_{n-1}, e_1, ..., e_m]` .

#### 加薪：
- **`ValueError`** : if  `embedding_weights`  is empty.
