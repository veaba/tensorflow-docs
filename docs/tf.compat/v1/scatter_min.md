Reduces sparse updates into a variable reference using the min operation.

```
 tf.compat.v1.scatter_min(
    ref,
    indices,
    updates,
    use_locking=False,
    name=None
)
```
This operation computes

```
 # Scalar indices
ref[indices, ...] = min(ref[indices, ...], updates[...])

# Vector indices (for each i)
ref[indices[i], ...] = min(ref[indices[i], ...], updates[i, ...])

# High rank indices (for each i, ..., j)
ref[indices[i, ..., j], ...] = min(ref[indices[i, ..., j], ...],
updates[i, ..., j, ...])
```
This operation outputs ref after the update is done. This makes it easier to chain operations that need to use the reset value.
Duplicate entries are handled correctly: if multiple indices reference the same location, their contributions combine.
Requires updates.shape = indices.shape + ref.shape[1:] or updates.shape = [].
#### Args:
- ref: A mutable Tensor. Must be one of the following types: half, bfloat16, float32, float64, int32, int64. Should be from a Variable node.
- indices: A Tensor. Must be one of the following types: int32, int64. A tensor of indices into the first dimension of ref.
- updates: A Tensor. Must have the same type as ref. A tensor of updated values to reduce into ref.
- use_locking: An optional bool. Defaults to False. If True, the update will be protected by a lock; otherwise the behavior is undefined, but may exhibit less contention.
- name: A name for the operation (optional).
#### Returns:
A mutable Tensor. Has the same type as ref.
