Lookup embedding results, accounting for invalid IDs and empty features.

```
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
```
