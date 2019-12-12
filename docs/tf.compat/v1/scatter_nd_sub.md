对变量中的单个值或切片应用稀疏减法。

```
 tf.compat.v1.scatter_nd_sub(
    ref,
    indices,
    updates,
    use_locking=False,
    name=None
)
 
```

 `ref`  is a  `Tensor`  with rank  `P`  and  `indices`  is a  `Tensor`  of rank  `Q` .

 `indices`  must be integer tensor, containing indices into  `ref` .It must be shape  `[d_0, ..., d_{Q-2}, K]`  where  `0 < K <= P` .

The innermost dimension of  `indices`  (with length  `K` ) corresponds toindices into elements (if  `K = P` ) or slices (if  `K < P` ) along the  `K` thdimension of  `ref` .

 `updates`  is  `Tensor`  of rank  `Q-1+P-K`  with shape:

```
 [d_0, ..., d_{Q-2}, ref.shape[K], ..., ref.shape[P-1]]
 
```

For example, say we want to subtract 4 scattered elements from a rank-1 tensorwith 8 elements. In Python, that update would look like this:

```
 ref = tf.Variable([1, 2, 3, 4, 5, 6, 7, 8])
indices = tf.constant([[4], [3], [1] ,[7]])
updates = tf.constant([9, 10, 11, 12])
op = tf.compat.v1.scatter_nd_sub(ref, indices, updates)
with tf.compat.v1.Session() as sess:
  print sess.run(op)
 
```

ref的结果更新如下：

```
 [1, -9, 3, -6, -6, 6, 7, -4]
 
```

See [ `tf.scatter_nd` ](https://tensorflow.google.cn/api_docs/python/tf/scatter_nd) for more details about how to make updates toslices.

#### 参数：
- **`ref`** : A mutable  `Tensor` . Must be one of the following types:  `float32` , `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `complex64` ,  `int64` , `qint8` ,  `quint8` ,  `qint32` ,  `bfloat16` ,  `uint16` ,  `complex128` ,  `half` , `uint32` ,  `uint64` . A mutable Tensor. Should be from a Variable node.
- **`indices`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .A tensor of indices into ref.
- **`updates`** : A  `Tensor` . Must have the same type as  `ref` .A tensor of updated values to add to ref.
- **`use_locking`** : An optional  `bool` . Defaults to  `False` .An optional bool. Defaults to True. If True, the assignment willbe protected by a lock; otherwise the behavior is undefined,but may exhibit less contention.
- **`name`** : A name for the operation (optional).


#### 返回：
A mutable  `Tensor` . Has the same type as  `ref` .

