[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/embedding_ops.py#L685-L817)  
---  
  
Lookup embedding results, accounting for invalid IDs and empty features.

    
    
    tf.compat.v1.nn.safe_embedding_lookup_sparse(
        embedding_weights,
        sparse_ids,
        sparse_weights=None,
        combiner='mean',
        default_id=None,
        name=None,
        partition_strategy='div',
        max_norm=None
    )
    

The partitioned embedding in `embedding_weights` must all be the same shape
except for the first dimension. The first dimension is allowed to vary as the
vocabulary size is not necessarily a multiple of `P`. `embedding_weights` may
be a `PartitionedVariable` as returned by using
[`tf.compat.v1.get_variable()`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/get_variable)
with a partitioner.

Invalid IDs (< 0) are pruned from input IDs and weights, as well as any IDs
with non-positive weight. For an entry with no features, the embedding vector
for `default_id` is returned, or the 0-vector if `default_id` is not supplied.

The ids and weights may be multi-dimensional. Embeddings are always aggregated
along the last dimension.

#### Args:

  * **`embedding_weights`** : A list of `P` float `Tensor`s or values representing partitioned embedding `Tensor`s. Alternatively, a `PartitionedVariable` created by partitioning along dimension 0. The total unpartitioned shape should be `[e_0, e_1, ..., e_m]`, where `e_0` represents the vocab size and `e_1, ..., e_m` are the embedding dimensions.
  * **`sparse_ids`** : `SparseTensor` of shape `[d_0, d_1, ..., d_n]` containing the ids. `d_0` is typically batch size.
  * **`sparse_weights`** : `SparseTensor` of same shape as `sparse_ids`, containing float weights corresponding to `sparse_ids`, or `None` if all weights are be assumed to be 1.0.
  * **`combiner`** : A string specifying how to combine embedding results for each entry. Currently "mean", "sqrtn" and "sum" are supported, with "mean" the default.
  * **`default_id`** : The id to use for an entry with no features.
  * **`name`** : A name for this operation (optional).
  * **`partition_strategy`** : A string specifying the partitioning strategy. Currently `"div"` and `"mod"` are supported. Default is `"div"`.
  * **`max_norm`** : If not `None`, all embeddings are l2-normalized to max_norm before combining.

#### Returns:

Dense `Tensor` of shape `[d_0, d_1, ..., d_{n-1}, e_1, ..., e_m]`.

#### Raises:

  * **`ValueError`** : if `embedding_weights` is empty.

