Applies sparse  `updates`  to individual values or slices in a Variable.

```
 tf.compat.v1.scatter_nd_update(    ref,    indices,    updates,    use_locking=True,    name=None) 
```

 `ref`  is a  `Tensor`  with rank  `P`  and  `indices`  is a  `Tensor`  of rank  `Q` .

 `indices`  must be integer tensor, containing indices into  `ref` .It must be shape  `[d_0, ..., d_{Q-2}, K]`  where  `0 < K <= P` .

The innermost dimension of  `indices`  (with length  `K` ) corresponds toindices into elements (if  `K = P` ) or slices (if  `K < P` ) along the  `K` thdimension of  `ref` .

 `updates`  is  `Tensor`  of rank  `Q-1+P-K`  with shape:

```
 [d_0, ..., d_{Q-2}, ref.shape[K], ..., ref.shape[P-1]].
 
```

For example, say we want to update 4 scattered elements to a rank-1 tensor to8 elements. In Python, that update would look like this:

```
     ref = tf.Variable([1, 2, 3, 4, 5, 6, 7, 8])
    indices = tf.constant([[4], [3], [1] ,[7]])
    updates = tf.constant([9, 10, 11, 12])
    update = tf.compat.v1.scatter_nd_update(ref, indices, updates)
    with tf.compat.v1.Session() as sess:
      print sess.run(update)
 
```

The resulting update to ref would look like this:

```
 [1, 11, 3, 10, 9, 6, 7, 12]
 
```

See [ `tf.scatter_nd` ](https://tensorflow.google.cn/api_docs/python/tf/scatter_nd) for more details about how to make updates toslices.

#### Args:
- **`ref`** : A Variable.
- **`indices`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .A tensor of indices into ref.
- **`updates`** : A  `Tensor` . Must have the same type as  `ref` .A Tensor. Must have the same type as ref. A tensor of updatedvalues to add to ref.
- **`use_locking`** : An optional  `bool` . Defaults to  `True` .An optional bool. Defaults to True. If True, the assignment willbe protected by a lock; otherwise the behavior is undefined,but may exhibit less contention.
- **`name`** : A name for the operation (optional).


#### Returns:
The value of the variable after the update.

