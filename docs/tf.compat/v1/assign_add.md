Update  `ref`  by adding  `value`  to it.

```
 tf.compat.v1.assign_add(
    ref,
    value,
    use_locking=None,
    name=None
)
 
```

This operation outputs "ref" after the update is done.This makes it easier to chain operations that need to use the reset value.Unlike [ `tf.math.add` ](https://tensorflow.google.cn/api_docs/python/tf/math/add), this op does not broadcast.  `ref`  and  `value`  must havethe same shape.

#### 参数：
- **`ref`** : A mutable  `Tensor` . Must be one of the following types:  `float32` , `float64` ,  `int64` ,  `int32` ,  `uint8` ,  `uint16` ,  `int16` ,  `int8` , `complex64` ,  `complex128` ,  `qint8` ,  `quint8` ,  `qint32` ,  `half` . Should befrom a  `Variable`  node.
- **`value`** : A  `Tensor` . Must have the same shape and dtype as  `ref` . The value tobe added to the variable.
- **`use_locking`** : An optional  `bool` . Defaults to  `False` . If True, the additionwill be protected by a lock; otherwise the behavior is undefined, but mayexhibit less contention.
- **`name`** : A name for the operation (optional).


#### 返回：
Same as "ref".  Returned as a convenience for operations that wantto use the new value after the variable has been updated.

