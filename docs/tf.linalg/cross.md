计算成对交叉积。

**别名** : [ `tf.compat.v1.cross` ](/api_docs/python/tf/linalg/cross), [ `tf.compat.v1.linalg.cross` ](/api_docs/python/tf/linalg/cross), [ `tf.compat.v2.linalg.cross` ](/api_docs/python/tf/linalg/cross)

```
 tf.linalg.cross(
    a,
    b,
    name=None
)
 
```

 `a`  and  `b`  must be the same shape; they can either be simple 3-element vectors,or any shape where the innermost dimension is 3. In the latter case, each pairof corresponding 3-element vectors is cross-multiplied independently.

#### 参数：
- **`a`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `int64` ,  `bfloat16` ,  `uint16` ,  `half` ,  `uint32` ,  `uint64` .A tensor containing 3-element vectors.
- **`b`** : A  `Tensor` . Must have the same type as  `a` .Another tensor, of same type and shape as  `a` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `a` .

