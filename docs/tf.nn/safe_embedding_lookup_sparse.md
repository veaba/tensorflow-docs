Lookup embedding results, accounting for invalid IDs and empty features.
### Aliases:
- `tf.compat.v2.nn.safe_embedding_lookup_sparse`

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
