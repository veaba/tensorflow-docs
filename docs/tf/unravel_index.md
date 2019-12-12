将平面索引或平面索引数组转换为

**别名** : [ `tf.compat.v1.unravel_index` ](/api_docs/python/tf/unravel_index), [ `tf.compat.v2.unravel_index` ](/api_docs/python/tf/unravel_index)

```
 tf.unravel_index(
    indices,
    dims,
    name=None
)
 
```

坐标数组。

#### 参数：
- **`indices`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .An 0-D or 1-D  `int`  Tensor whose elements are indices into theflattened version of an array of dimensions dims.
- **`dims`** : A  `Tensor` . Must have the same type as  `indices` .An 1-D  `int`  Tensor. The shape of the array to use for unravelingindices.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `indices` .

#### numpy兼容性
Equivalent to np.unravel_index

