Applies sparse updates to a variable reference.

```
 tf.compat.v1.scatter_update(
    ref,
    indices,
    updates,
    use_locking=True,
    name=None
)
 
```

This operation computes

```
     # Scalar indices
    ref[indices, ...] = updates[...]

    # Vector indices (for each i)
    ref[indices[i], ...] = updates[i, ...]

    # High rank indices (for each i, ..., j)
    ref[indices[i, ..., j], ...] = updates[i, ..., j, ...]
 
```

This operation outputs  `ref`  after the update is done.This makes it easier to chain operations that need to use the reset value.

If values in  `ref`  is to be updated more than once, because there areduplicate entries in  `indices` , the order at which the updates happenfor each value is undefined.

Requires  `updates.shape = indices.shape + ref.shape[1:]` .

![](https://tensorflow.google.cn/images/ScatterUpdate.png)

#### Args:
- **`ref`** : A  `Variable` .
- **`indices`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .A tensor of indices into the first dimension of  `ref` .
- **`updates`** : A  `Tensor` . Must have the same type as  `ref` .A tensor of updated values to store in  `ref` .
- **`use_locking`** : An optional  `bool` . Defaults to  `True` .If True, the assignment will be protected by a lock;otherwise the behavior is undefined, but may exhibit less contention.
- **`name`** : A name for the operation (optional).


#### Returns:
Same as  `ref` .  Returned as a convenience for operations that wantto use the updated values after the update is done.

